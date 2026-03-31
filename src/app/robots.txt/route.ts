export function GET() {
  const body = `User-agent: *
Allow: /
Disallow: /staging-gate/
Sitemap: https://www.thepsychicgift.com/sitemap.xml`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
