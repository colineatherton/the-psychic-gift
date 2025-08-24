import { ReaderFeedResponse } from "@/lib/types/readers";
import { READER_FEED_URL } from "@/lib/constants/endpoints";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(READER_FEED_URL, { cache: "no-store" });
    if (!res.ok) {
      console.error(`Reader feed failed with status ${res.status}`);
      return NextResponse.json(
        { error: "Failed to fetch readers" },
        { status: res.status }
      );
    }

    const json: ReaderFeedResponse = await res.json();
    console.log("json:", json);
    const readers = json?.content ?? [];

    return NextResponse.json(readers);
  } catch (error) {
    console.error("Reader poll failed:", error);
    return NextResponse.json({ error: "Reader poll failed" }, { status: 500 });
  }
}
