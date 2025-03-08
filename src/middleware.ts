import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
	const response = NextResponse.next();

	// 🌐 Security Headers
	response.headers.set('X-DNS-Prefetch-Control', 'on');
	response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
	response.headers.set('X-XSS-Protection', '1; mode=block');
	response.headers.set('X-Frame-Options', 'SAMEORIGIN');
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
	response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()');

	// 🛡️ CSRF Protection (For POST, PUT, DELETE requests)
	if (['POST', 'PUT', 'DELETE'].includes(request.method)) {
		const csrfToken = request.headers.get('x-csrf-token');
		if (!csrfToken || csrfToken !== process.env.CSRF_SECRET) {
			return new NextResponse('Forbidden: CSRF Protection', { status: 403 });
		}
	}

	// 🛑 Rate Limiting (Simple Check)
	const ip = request.ip || 'unknown';
	const rateLimit = request.headers.get('x-rate-limit');

	if (rateLimit && parseInt(rateLimit) > 100) {
		return new NextResponse('Too Many Requests', { status: 429 });
	}

	return response;
}

export const config = {
	matcher: '/:path*',
};
