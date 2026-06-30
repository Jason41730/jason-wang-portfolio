import "server-only";
import { Resend } from "resend";
import { requireEnv } from "./env";

let resend: Resend | undefined;

export function getResend() {
  resend ??= new Resend(requireEnv("RESEND_API_KEY"));
  return resend;
}
