import { ALL_PAGES } from "@/lib/constants/urls";

export async function GET() {
  const pages = ALL_PAGES.map((page) => {
    // Assuming page is a string representing the path
    return page.path.replace(/^\//, ""); // Remove leading slash if present
  });

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `<url>
        <loc>https://yourdomain.com/${page}</loc>
      </url>`
    )
    .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
