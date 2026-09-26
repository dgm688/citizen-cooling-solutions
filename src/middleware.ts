import { NextResponse, type NextRequest } from "next/server";
import { redirects, gone } from "@/lib/redirects.generated";

/**
 * Carries the WordPress URL space onto this site.
 *
 * - Malware URLs published during the 2026 compromise answer 410 Gone, so
 *   search engines drop them. Redirecting them would pass their reputation on.
 * - Every other old URL gets a single permanent redirect to its closest page.
 *   Matching happens on the path without its trailing slash, so /about-us/ and
 *   /about-us both land in one hop rather than chaining through a slash fix.
 */
export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const path = pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";

  if (gone.has(path)) {
    return new NextResponse(
      "410 Gone — this page was removed and will not return.",
      { status: 410, headers: { "content-type": "text/plain; charset=utf-8" } }
    );
  }

  const destination = redirects.get(path);
  if (destination) {
    const url = new URL(destination + search, request.url);
    return NextResponse.redirect(url, 301);
  }

  // `skipTrailingSlashRedirect` hands us this job: anything not covered above
  // still loses its trailing slash, exactly as Next would have done.
  if (path !== pathname) {
    return NextResponse.redirect(new URL(path + search, request.url), 308);
  }

  return NextResponse.next();
}

export const config = {
  // Skip Next internals, the API, and anything with a file extension.
  matcher: ["/((?!_next/|api/|.*\\..*).*)"],
};
