import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check Resend API key
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service not configured. Please check RESEND_API_KEY in .env" },
        { status: 500 }
      );
    }

    // Get email configuration from environment variables
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    // Support both CONTACT_EMAIL and RESEND_TO_EMAIL variable names
    const toEmail = process.env.CONTACT_EMAIL || process.env.RESEND_TO_EMAIL;

    if (!toEmail) {
      console.error("Contact email not configured");
      return NextResponse.json(
        { error: "Contact email not configured. Please set CONTACT_EMAIL or RESEND_TO_EMAIL in .env" },
        { status: 500 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      // Return more detailed error message
      return NextResponse.json(
        { 
          error: "Failed to send email",
          details: error.message || JSON.stringify(error)
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, messageId: data?.id });
  } catch (error: any) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { 
        error: error.message || "Internal server error",
        details: error.stack || "Unknown error"
      },
      { status: 500 }
    );
  }
}

