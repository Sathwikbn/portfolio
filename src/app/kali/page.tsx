import type { Metadata } from 'next';
import Kali from '@/pages/Kali';

export const metadata: Metadata = {
	title: 'Download Kali Linux OVA - Niladri Chatterjee',
	description: 'Download pre-configured Kali Linux OVA file for VirtualBox with 2GB RAM and 90GB storage.',
};

export default function KaliPage() {
	return <Kali />;
}