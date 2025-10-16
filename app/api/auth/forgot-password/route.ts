import { NextResponse } from "next/server";
import formData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
 key: process.env.MAILGUN_API_KEY!, // Private key
});


export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Generate a simple reset token (in production, store it in DB with expiry)
    const resetToken = Math.random().toString(36).slice(2);
    const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${resetToken}`;

    // Send email via Mailgun
    await mg.messages.create(process.env.MAILGUN_DOMAIN!, {
     from: `Your App <postmaster@sandbox144d59834a8d437cb0d5b04aa9696230.mailgun.org>`,  // ✅ Must be postmaster@sandbox
      to: email, // ✅ Must be authorized in sandbox
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
