import "server-only";
import { v2 as cloudinary } from "cloudinary";
import { getEnv, requireEnv } from "./env";

let isConfigured = false;

export function getCloudinary() {
  if (!isConfigured) {
    const cloudName =
      getEnv("CLOUDINARY_CLOUD_NAME") ??
      getEnv("NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME");

    if (!cloudName) {
      throw new Error("CLOUDINARY_CLOUD_NAME is not configured");
    }

    cloudinary.config({
      cloud_name: cloudName,
      api_key: requireEnv("CLOUDINARY_API_KEY"),
      api_secret: requireEnv("CLOUDINARY_API_SECRET"),
    });

    isConfigured = true;
  }

  return cloudinary;
}
