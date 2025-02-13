import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Background3D from './components/Background3D';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Skills = lazy(() => import('./pages/Skills'));
const Projects = lazy(() => import('./pages/Projects'));
// const Contact = lazy(() => import('./pages/Contact'));
const Education = lazy(() => import('./pages/Education'));
const Experience = lazy(() => import('./pages/Experience'));
const Certificates = lazy(() => import('./pages/Certificates'));

// Loading fallback
const LoadingFallback = () => (
	<div className="min-h-screen flex items-center justify-center">
		<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
	</div>
);

function App() {
	return (
		<div className="min-h-screen flex flex-col">
			<Background3D />
			<Navbar />
			<main className="flex-grow">
				<Suspense fallback={<LoadingFallback />}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/skills" element={<Skills />} />
						<Route path="/education" element={<Education />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/experience" element={<Experience />} />
						<Route path="/certificates" element={<Certificates />} />
						{/* <Route path="/blog" element={<Blog />} /> */}
						{/* <Route path="/contact" element={<Contact />} /> */}

					</Routes>
				</Suspense>
			</main>
			<Footer />
			<Analytics />
		</div>
	);
}

export default App;