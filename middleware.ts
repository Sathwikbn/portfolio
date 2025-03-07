import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
	const blockedPaths = ["/robots.txt", "/sitemap.xml"];

	if (blockedPaths.includes(req.nextUrl.pathname)) {
		return new NextResponse("Forbidden", { status: 403 });
	}

	return NextResponse.next();
}

// Apply middleware to all routes
export const config = {
	matcher: ["/robots.txt", "/sitemap.xml"],
};
