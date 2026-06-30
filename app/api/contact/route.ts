import { getEnv } from "../_lib/env";
import { getResend } from "../_lib/resend";

export const runtime = "nodejs";

function toTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function formatSender(email: string): string {
  return email.includes("<") ? email : `Portfolio <${email}>`;
}

function getErrorMessage(error: unknown): string {
  if (typeof error === "object" && error && "message" in error) {
    return String(error.message);
  }

  if (typeof error === "string") {
    return error;
  }

  return "Failed to send email";
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = toTrimmedString(body.name);
    const email = toTrimmedString(body.email);
    const subject = toTrimmedString(body.subject);
    const message = toTrimmedString(body.message);

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    const toEmail = (getEnv("CONTACT_EMAIL") ?? getEnv("RESEND_TO_EMAIL"))
      ?.toLowerCase();

    if (!toEmail) {
      return Response.json(
        { error: "Contact email not configured" },
        { status: 500 }
      );
    }

    const fromEmail = getEnv("RESEND_FROM_EMAIL") ?? "onboarding@resend.dev";

    const { error } = await getResend().emails.send({
      from: formatSender(fromEmail),
      to: [toEmail],
      subject,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    if (error) {
      return Response.json({ error: getErrorMessage(error) }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
