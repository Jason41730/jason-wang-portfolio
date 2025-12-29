import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // Check Resend API key
    console.log("RESEND_API_KEY exists?", !!process.env.RESEND_API_KEY);
    
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return Response.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Get email configuration from environment variables
    // Support both CONTACT_EMAIL and RESEND_TO_EMAIL variable names
    // Convert to lowercase to match Resend's requirements
    const toEmail = (process.env.CONTACT_EMAIL || process.env.RESEND_TO_EMAIL)?.toLowerCase();

    if (!toEmail) {
      console.error("Contact email not configured");
      return Response.json(
        { error: "Contact email not configured" },
        { status: 500 }
      );
    }

    console.log("Sending email to:", toEmail);

    // Send email using Resend
    // from must use verified domain format: "Name <email@domain.com>"
    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [toEmail],
      subject: subject || "New message from contact form",
      replyTo: email, // User's email goes here
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      // Convert error object to string message
      // Resend errors often have a message property
      let errorMessage = "Failed to send email";
      if (typeof error === 'object' && error !== null) {
        if ('message' in error) {
          errorMessage = String(error.message);
        } else {
          errorMessage = JSON.stringify(error);
        }
      } else if (typeof error === 'string') {
        errorMessage = error;
      }
      
      return Response.json({ error: errorMessage }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (err) {
    console.error("API /contact error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

