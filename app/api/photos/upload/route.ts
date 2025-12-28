import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
// Support both CLOUDINARY_CLOUD_NAME and NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
const cloudName = process.env.CLOUDINARY_CLOUD_NAME || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

if (!cloudName || !apiKey || !apiSecret) {
  console.error("Cloudinary configuration missing:", {
    cloudName: !!cloudName,
    apiKey: !!apiKey,
    apiSecret: !!apiSecret,
  });
}

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
});

// Verify admin authentication
function verifyAuth(request: NextRequest): boolean {
  const token = request.cookies.get("admin_token");
  return !!token?.value;
}

export async function POST(request: NextRequest) {
  try {
    // Verify authentication
    if (!verifyAuth(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Validate file type
    const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (!validTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Invalid file type. Only JPEG, PNG, and WebP are allowed." },
        { status: 400 }
      );
    }

    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: "File size exceeds 10MB limit." },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "portfolio-photos",
            resource_type: "image",
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        )
        .end(buffer);
    });

    return NextResponse.json({
      success: true,
      url: (uploadResult as any).secure_url,
      publicId: (uploadResult as any).public_id,
      width: (uploadResult as any).width,
      height: (uploadResult as any).height,
    });
  } catch (error: any) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: error.message || "Upload failed" },
      { status: 500 }
    );
  }
}

