import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 100;
const ipRequestMap = new Map<string, { count: number; timestamp: number }>();

export function middleware(request: NextRequest) {
	const response = NextResponse.next();

	// Security Headers
	response.headers.set('X-DNS-Prefetch-Control', 'on');
	response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
	response.headers.set('X-XSS-Protection', '1; mode=block');
	response.headers.set('X-Frame-Options', 'SAMEORIGIN');
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
	response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()');
	response.headers.set('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data: https:; connect-src 'self' https:; media-src 'self' https:; object-src 'none'; frame-ancestors 'none'; form-action 'self'; base-uri 'self';");

	// Enhanced Rate Limiting
	const ip = request.ip || 'unknown';
	const now = Date.now();
	const requestData = ipRequestMap.get(ip) || { count: 0, timestamp: now };

	// Reset count if window has passed
	if (now - requestData.timestamp > RATE_LIMIT_WINDOW) {
		requestData.count = 0;
		requestData.timestamp = now;
	}

	requestData.count++;
	ipRequestMap.set(ip, requestData);

	if (requestData.count > MAX_REQUESTS) {
		return new NextResponse('Too Many Requests', { status: 429 });
	}

	// Prevent common attack patterns
	const url = request.nextUrl.pathname.toLowerCase();
	const blockedPatterns = ['/wp-admin', '/wp-login', '/admin', '.php', '.env'];
	if (blockedPatterns.some(pattern => url.includes(pattern))) {
		return new NextResponse('Not Found', { status: 404 });
	}

	return response;
}

export const config = {
	matcher: '/:path*',
};