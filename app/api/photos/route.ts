import { NextResponse } from "next/server";
import { getCloudinary } from "../_lib/cloudinary";

export const runtime = "nodejs";

interface CloudinaryResource {
  public_id: string;
  secure_url?: string;
  url?: string;
  width: number;
  height: number;
  format?: string;
  created_at: string;
}

interface CloudinaryResourceResult {
  resources?: CloudinaryResource[];
}

interface Photo {
  id: string;
  url: string;
  width: number;
  height: number;
  format: string;
  createdAt: string;
}

async function getPortfolioResources(): Promise<CloudinaryResourceResult> {
  const cloudinary = getCloudinary();

  try {
    return await cloudinary.search
      .expression("folder:portfolio-photos")
      .max_results(500)
      .execute();
  } catch {
    return cloudinary.api.resources({
      type: "upload",
      prefix: "portfolio-photos/",
      max_results: 500,
    });
  }
}

export async function GET() {
  try {
    const cloudinary = getCloudinary();
    const result = await getPortfolioResources();

    const photos = (result.resources || [])
      .map<Photo>((resource) => {
        const directUrl = resource.secure_url || resource.url;
        const url =
          directUrl && directUrl.startsWith("http")
            ? directUrl
            : cloudinary.url(resource.public_id, {
                secure: true,
                format: resource.format || "auto",
              });

        return {
          id: resource.public_id,
          url,
          width: resource.width,
          height: resource.height,
          format: resource.format || "auto",
          createdAt: resource.created_at,
        };
      })
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

    return NextResponse.json({ photos });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch photos" },
      { status: 500 }
    );
  }
}
