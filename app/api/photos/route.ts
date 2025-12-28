import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
// Support both CLOUDINARY_CLOUD_NAME and NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(request: NextRequest) {
  try {
    // Try to get all resources from Cloudinary
    // First, try using search API with folder filter
    let result;
    try {
      result = await cloudinary.search
        .expression("folder:portfolio-photos")
        .sort_by([{ created_at: "desc" }])
        .max_results(500)
        .execute();
    } catch (searchError: any) {
      // If search fails, try using resources API
      console.log("Search API failed, trying resources API:", searchError.message);
      result = await cloudinary.api.resources({
        type: "upload",
        prefix: "portfolio-photos/",
        max_results: 500,
      });
    }

    const photos = (result.resources || []).map((resource: any) => ({
      id: resource.public_id,
      url: resource.secure_url,
      width: resource.width,
      height: resource.height,
      format: resource.format,
      createdAt: resource.created_at,
    }));

    console.log(`Fetched ${photos.length} photos from Cloudinary`);
    return NextResponse.json({ photos });
  } catch (error: any) {
    console.error("Error fetching photos:", error);
    return NextResponse.json(
      { 
        error: error.message || "Failed to fetch photos",
        details: error.stack 
      },
      { status: 500 }
    );
  }
}

