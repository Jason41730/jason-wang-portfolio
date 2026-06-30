import "server-only";
import { createHmac, randomBytes, timingSafeEqual } from "crypto";
import { getEnv, requireEnv } from "./env";

export const ADMIN_SESSION_MAX_AGE_SECONDS = 60 * 60 * 24;

function getSessionSecret() {
  return getEnv("ADMIN_SESSION_SECRET") ?? requireEnv("ADMIN_PASSWORD");
}

function sign(payload: string): string {
  return createHmac("sha256", getSessionSecret())
    .update(payload)
    .digest("base64url");
}

function secureCompare(a: string, b: string): boolean {
  const aBuffer = Buffer.from(a);
  const bBuffer = Buffer.from(b);

  return aBuffer.length === bBuffer.length && timingSafeEqual(aBuffer, bBuffer);
}

export function createAdminSessionToken(): string {
  const issuedAt = Date.now().toString();
  const nonce = randomBytes(16).toString("base64url");
  const payload = `${issuedAt}.${nonce}`;

  return `${payload}.${sign(payload)}`;
}

export function verifyAdminPassword(password: unknown): boolean {
  if (typeof password !== "string") {
    return false;
  }

  return secureCompare(password.trim(), requireEnv("ADMIN_PASSWORD"));
}

export function verifyAdminSessionToken(token: string | undefined): boolean {
  if (!token) {
    return false;
  }

  const [issuedAt, nonce, signature, ...extraParts] = token.split(".");

  if (!issuedAt || !nonce || !signature || extraParts.length > 0) {
    return false;
  }

  const issuedAtMs = Number(issuedAt);
  const ageMs = Date.now() - issuedAtMs;

  if (
    !Number.isSafeInteger(issuedAtMs) ||
    ageMs < 0 ||
    ageMs > ADMIN_SESSION_MAX_AGE_SECONDS * 1000
  ) {
    return false;
  }

  return secureCompare(signature, sign(`${issuedAt}.${nonce}`));
}
