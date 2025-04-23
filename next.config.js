const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true,
	fallbacks: {
		document: '/offline', // path to your offline fallback page
	},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = withPWA(nextConfig);