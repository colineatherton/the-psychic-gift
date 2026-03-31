import { READER_CONFIG_MAP } from "@/lib/constants/readers";
import { ALL_PAGES } from "@/lib/constants/urls";

const BASE_URL = "https://www.thepsychicgift.com";

export async function GET() {
  const staticPaths = ALL_PAGES.map((page) =>
    page.path.replace(/^\//, "")
  );

  const readerPaths = Object.values(READER_CONFIG_MAP).map(
    (reader) => `psychic-readers/${reader.slug}`
  );

  const allPaths = [...staticPaths, ...readerPaths];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPaths
    .map(
      (path) => `<url>
    <loc>${BASE_URL}/${path}</loc>
  </url>`
    )
    .join("\n  ")}
</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
}
