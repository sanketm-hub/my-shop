import { NextResponse } from "next/server";
import { serverClient } from "@/sanity/lib/serverClient";

export async function POST(req: Request) {
  try {
    const { productId, rating, currentAverage, reviewsCount } = await req.json();

    // Calculate new average
    const newAverage = (currentAverage * reviewsCount + rating) / (reviewsCount + 1);

    // Patch the product in Sanity
    await serverClient
      .patch(productId)
      .set({
        "ratings.average": newAverage,
        "ratings.reviewsCount": reviewsCount + 1,
      })
      .commit();

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error(err);
    const errorMessage = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ success: false, error: errorMessage });
  }
}
