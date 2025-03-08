import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import Loading from '@/components/Loading';

const Home = dynamic(() => import('@/pages/Home'), {
  loading: () => <Loading />,
  ssr: false
});

export const metadata: Metadata = {
  title: 'Niladri Chatterjee - Software Developer | Home',
  description: 'Niladri Chatterjee is a Software Developer specializing in full-stack development with expertise in React.js, Node.js, and modern web technologies.',
};

export default function HomePage() {
  return (
    <Suspense fallback={<Loading />}>
      <Home />
    </Suspense>
  );
}