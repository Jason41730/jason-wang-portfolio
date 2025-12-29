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

    const photos = (result.resources || [])
      .map((resource: any) => {
        // Use Cloudinary URL helper to generate correct URL
        let url = resource.secure_url || resource.url;
        
        // If URL doesn't exist or is invalid, generate it using Cloudinary helper
        if (!url || !url.startsWith('http')) {
          url = cloudinary.url(resource.public_id, {
            secure: true,
            format: resource.format || 'auto',
          });
        }
        
        return {
          id: resource.public_id,
          url: url,
          width: resource.width,
          height: resource.height,
          format: resource.format,
          createdAt: resource.created_at,
        };
      })
      .sort((a: any, b: any) => {
        // Sort by created_at descending (newest first)
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return dateB - dateA;
      });

    console.log(`Fetched ${photos.length} photos from Cloudinary`);
    if (photos.length > 0) {
      console.log("Sample photo URL:", photos[0].url);
    }
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

