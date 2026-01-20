/**
 * STAGING GATE - DELETE THIS FILE FOR PRODUCTION
 *
 * This middleware protects the staging site with a password gate.
 * To remove staging protection:
 * 1. Delete this file (src/middleware.ts)
 * 2. Delete src/app/staging-gate/page.tsx
 * 3. Remove STAGING_ACCESS_KEY from Vercel environment variables
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Only apply staging gate when STAGING_ACCESS_KEY is set
  if (!process.env.STAGING_ACCESS_KEY) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // Allow static assets and the staging gate page itself
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/staging-gate")
  ) {
    return NextResponse.next();
  }

  // Check for staging access cookie
  const hasAccess = request.cookies.get("staging_access")?.value === "true";

  if (hasAccess) {
    return NextResponse.next();
  }

  // Redirect to staging gate
  const url = request.nextUrl.clone();
  url.pathname = "/staging-gate";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes (they handle their own auth if needed)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
