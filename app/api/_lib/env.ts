import "server-only";

export function getEnv(name: string): string | undefined {
  const value = process.env[name]?.trim();

  if (!value) {
    return undefined;
  }

  const quote = value[0];
  const hasWrappedQuotes =
    (quote === '"' || quote === "'") && value.endsWith(quote);

  return hasWrappedQuotes ? value.slice(1, -1) : value;
}

export function requireEnv(name: string): string {
  const value = getEnv(name);

  if (!value) {
    throw new Error(`${name} is not configured`);
  }

  return value;
}
