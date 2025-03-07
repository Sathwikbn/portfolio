import Home from '@/pages/Home';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Niladri Chatterjee - Software Developer | Home',
	description: 'Niladri Chatterjee is a Software Developer specializing in full-stack development with expertise in React.js, Node.js, and modern web technologies.',
};

export default function HomePage() {
	return <Home />;
}