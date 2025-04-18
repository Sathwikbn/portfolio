'use client';

import { VercelLogo } from '@/components/TechLogos';
import { motion } from 'framer-motion';
import { Github, Linkedin, MessageCircle, Copy, Check } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const Home = () => {
	const [copied, setCopied] = useState(false);
	const email = 'code.niladri@gmail.com';
	const whatsappNumber = '+916296554939';

	const { data: githubData } = useSWR('https://api.github.com/users/niladri-1', fetcher);
	const githubFollowers = githubData?.followers || 0;

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(email);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center px-4 mt-7 sm:mt-0 md:mt-3 lg:mt-5">
			<div className="text-center relative z-10 max-w-4xl mx-auto">
				<motion.h1
					className="text-6xl md:text-8xl font-bold mb-6 relative tracking-tighter"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					Niladri Chatterjee
				</motion.h1>
				<motion.h1
					className="text-4xl md:text-6xl font-bold mb-6 relative tracking-tighter"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					I design & code for web
				</motion.h1>

				<motion.p
					className="text-xl md:text-2xl text-gray-400 mb-5 max-w-2xl mx-auto"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					Software Developer specializing in Full Stack Development with expertise in Next.js, Node.js and modern Web Technologies.
				</motion.p>
				<motion.div
					className="flex flex-col items-center gap-6"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
				>
					<div className="flex justify-center space-x-4">
						<a
							href="https://drive.google.com/file/d/1BNtnWhw7RoWeUKu44n-iKRC1ysdY2s8L/view?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
							className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
						>
							Download CV
						</a>
						<Link
							href="/about"
							className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
						>
							About Me
						</Link>
					</div>

					<button
						onClick={copyToClipboard}
						className="group relative flex items-center gap-2 py-2 pl-8 pr-4 hover:bg-transparent transition-all cursor-pointer">
						<div className="absolute left-0 flex items-center">
							<div className="w-3 text-gray-500 group-hover:text-white transition-colors">
								<VercelLogo />
							</div>
							<span className="text-lg font-mono text-gray-400 ml-3 group-hover:text-white transition-colors">~</span>
						</div>
						<span className="text-gray-400 group-hover:text-white transition-colors ml-4">{email}</span>
						<div className="opacity-0 group-hover:opacity-100 transition-opacity ml-1">
							{copied ? (
								<Check className="w-4 h-4 text-green-500" />
							) : (
								<Copy className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
							)}
						</div>
					</button>
				</motion.div>

				<motion.div
					className="flex justify-center items-center space-x-8 mt-12"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.6 }}
				>
					<motion.a
						href="https://github.com/niladri-1"
						target="_blank"
						rel="noopener noreferrer"
						className="flex flex-col items-center group"
						whileHover={{ y: -2 }}
					>
						<div className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors mb-2">
							<Github className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
						</div>
						<motion.div
							className="flex flex-col items-center"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.8 }}
						>
							<span className="text-lg font-semibold">{githubFollowers}</span>
							<span className="text-sm text-gray-400">GitHub Followers</span>
						</motion.div>
					</motion.a>

					<motion.a
						href="https://linkedin.com/in/niladri1"
						target="_blank"
						rel="noopener noreferrer"
						className="flex flex-col items-center group"
						whileHover={{ y: -2 }}
					>
						<div className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors mb-2">
							<Linkedin className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
						</div>
						<motion.div
							className="flex flex-col items-center"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.8 }}
						>
							<span className="text-lg font-semibold">1000+</span>
							<span className="text-sm text-gray-400">LinkedIn Followers</span>
						</motion.div>
					</motion.a>

					<motion.a
						href={`https://wa.me/${whatsappNumber}`}
						target="_blank"
						rel="noopener noreferrer"
						className="flex flex-col items-center group"
						whileHover={{ y: -2 }}
					>
						<div className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors mb-2">
							<MessageCircle className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
						</div>
						<motion.div
							className="flex flex-col items-center"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.8 }}
						>
							<span className="text-lg font-semibold">24x7</span>
							<span className="text-sm text-gray-400">WhatsApp Me</span>
						</motion.div>
					</motion.a>
				</motion.div>
			</div>
		</div>
	);
};

export default Home;