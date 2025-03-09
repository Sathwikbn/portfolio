import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Background3D from '@/components/Background3D';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Niladri Chatterjee - Software Developer',
	description: 'Niladri Chatterjee - Software Developer specializing in full-stack development with expertise in React.js, Node.js, and modern web technologies.',
	keywords: 'Niladri Chatterjee, Software Developer, React, Node.js, Full Stack Developer',
	authors: [{ name: 'Niladri Chatterjee' }],
	creator: 'Niladri Chatterjee',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://niladri1.vercel.app/',
		title: 'Niladri Chatterjee - Software Developer',
		description: 'Full-stack developer specializing in React.js, Node.js, and modern web technologies.',
		siteName: 'Niladri Chatterjee Portfolio',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Niladri Chatterjee - Software Developer',
		description: 'Full-stack developer specializing in React.js, Node.js, and modern web technologies.',
		creator: '@niladri_dev',
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: true,
		},
	},
	metadataBase: new URL('https://niladri1.vercel.app'),
	alternates: {
		canonical: '/',
	},
	verification: {
		google: 'your-google-verification-code',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link rel="shortcut icon" href="./nextjs.png" type="image/x-icon" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
				<meta httpEquiv="Content-Security-Policy" content="default-src 'self' https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https: http:; font-src 'self' data: https:;" />
			</head>
			<body className={inter.className}>
				<div className="min-h-screen flex flex-col">
					<Navbar />
					<Background3D />
					<main className="flex-grow">{children}</main>
					<SpeedInsights />
					<Footer />
				</div>
				<Analytics />
			</body>
		</html>
	);
}