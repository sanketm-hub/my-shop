import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { client } from "@/app/lib/sanity";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { token, newPassword } = body;

    if (!token || !newPassword) {
      console.log("Missing token or newPassword:", body);
      return NextResponse.json({ error: "Token and new password are required" }, { status: 400 });
    }

    console.log("Received token:", token);

    // Find user with matching reset token
    const users = await client.fetch(
      `*[_type=="user" && resetToken == $token]`,
      { token }
    );

    console.log("Users found:", users.length);
    if (!users.length) {
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }

    const user = users[0];

    // Check token expiry
    if (!user.resetTokenExpiry) {
      console.log("Token expiry missing for user:", user._id);
      return NextResponse.json({ error: "Token expiry missing" }, { status: 400 });
    }

    const now = Date.now();
    console.log("Current time:", now, "Token expiry:", user.resetTokenExpiry);

    if (user.resetTokenExpiry < now) {
      return NextResponse.json({ error: "Token expired" }, { status: 400 });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    console.log("Updating user password for:", user._id);

    // Update user password and clear token fields
    await client.patch(user._id)
      .set({
        password: hashedPassword,
        resetToken: null,
        resetTokenExpiry: null
      })
      .commit();

    console.log("Password reset successful for user:", user._id);
    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error("Reset password error:", error);
    return NextResponse.json({ error: "Failed to reset password" }, { status: 500 });
  }
}
