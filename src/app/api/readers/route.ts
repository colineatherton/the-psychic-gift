/**
 * READER AVAILABILITY API - Edge-Cached Polling Endpoint
 *
 * CACHING STRATEGY:
 * -----------------
 * This endpoint is designed for high-frequency polling (every 5s per client)
 * while minimizing Vercel function invocations and upstream API calls.
 *
 * 1. UPSTREAM CACHING (Next.js fetch):
 *    - `next: { revalidate: 10 }` caches the upstream response for 10 seconds
 *    - Multiple requests within 10s share the same upstream fetch
 *    - After 10s, Next.js revalidates in the background
 *
 * 2. EDGE CACHING (Vercel CDN):
 *    - `s-maxage=10`: CDN caches response for 10 seconds
 *    - `stale-while-revalidate=50`: Serve stale for 50s while revalidating
 *    - Result: Most client polls hit CDN cache, not the function
 *
 * TUNING:
 * - For fresher data: decrease s-maxage to 5 (more function calls)
 * - For lower costs: increase s-maxage to 15-30 (slightly staler data)
 * - stale-while-revalidate should be 3-5x s-maxage for smooth revalidation
 *
 * REQUIREMENTS FOR EDGE CACHING:
 * - Response must not vary by cookies/auth (this endpoint is public)
 * - No `cache: "no-store"` on fetch (we use revalidate instead)
 */

import { ReaderFeedResponse } from "@/lib/types/readers";
import { READER_FEED_URL } from "@/lib/constants/endpoints";
import { NextResponse } from "next/server";

// Force dynamic to ensure fresh upstream fetches, but allow CDN caching
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    // Upstream fetch with 10-second cache (shared across all requests)
    const res = await fetch(READER_FEED_URL, {
      next: { revalidate: 10 },
    });

    if (!res.ok) {
      console.error(`Reader feed failed with status ${res.status}`);
      return NextResponse.json(
        { error: "Failed to fetch readers" },
        { status: res.status },
      );
    }

    const json: ReaderFeedResponse = await res.json();
    const readers = json?.content ?? [];

    // Return with edge caching headers
    return NextResponse.json(readers, {
      headers: {
        // CDN caches for 10s, serves stale for 50s while revalidating
        "Cache-Control": "public, s-maxage=10, stale-while-revalidate=50",
      },
    });
  } catch (error) {
    console.error("Reader poll failed:", error);
    // Don't cache errors
    return NextResponse.json(
      { error: "Reader poll failed" },
      {
        status: 500,
        headers: { "Cache-Control": "no-store" },
      },
    );
  }
}
