import { NextResponse } from "next/server";
import formData from "form-data";
import Mailgun from "mailgun.js";
import { client } from "@/app/lib/sanity";

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Find user in Sanity
    const users = await client.fetch(`*[_type=="user" && email==$email]`, { email });
    if (!users.length) return NextResponse.json({ error: "User not found" }, { status: 404 });

    const userId = users[0]._id;

    // Generate token + expiry
    const resetToken = Math.random().toString(36).slice(2);
    const resetTokenExpiry = Date.now() + 3600000; // 1 hour
    await client.patch(userId).set({ resetToken, resetTokenExpiry }).commit();

    const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${resetToken}`;

    // Send email
    await mg.messages.create(process.env.MAILGUN_DOMAIN!, {
      from: `Your App <postmaster@${process.env.MAILGUN_DOMAIN!}>`,
      to: email,
      subject: "Reset your password",
      text: `Click here to reset your password: ${resetLink}`,
      html: `<p>Click here to reset your password:</p><p><a href="${resetLink}">${resetLink}</a></p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Mailgun error:", error);
    return NextResponse.json({ error: "Failed to send reset email" }, { status: 500 });
  }
}
