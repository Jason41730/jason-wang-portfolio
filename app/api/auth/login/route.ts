import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    // Get password and remove quotes if present (handles both quoted and unquoted values)
    let adminPassword = process.env.ADMIN_PASSWORD?.trim();
    if (adminPassword && (adminPassword.startsWith('"') || adminPassword.startsWith("'"))) {
      adminPassword = adminPassword.slice(1, -1);
    }

    if (!adminPassword) {
      console.error("ADMIN_PASSWORD is not set in environment variables");
      return NextResponse.json(
        { error: "Admin password not configured" },
        { status: 500 }
      );
    }

    // Trim the input password and compare
    const trimmedPassword = password?.trim();
    
    // Debug: log password lengths (not actual passwords)
    console.log("Password check:", {
      inputLength: trimmedPassword?.length || 0,
      envLength: adminPassword.length,
      match: trimmedPassword === adminPassword
    });
    
    if (trimmedPassword === adminPassword) {
      // Create a simple session token (in production, use proper session management)
      const token = Buffer.from(`${Date.now()}-${Math.random()}`).toString(
        "base64"
      );

      const response = NextResponse.json({ success: true, token });
      // Set cookie for session (expires in 24 hours)
      response.cookies.set("admin_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24, // 24 hours
      });

      return response;
    } else {
      return NextResponse.json(
        { error: "Invalid password" },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

