'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Copy, Check, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Home = () => {
	const [copied, setCopied] = useState(false);
	const email = 'code.niladri@gmail.com';

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
		<div className="min-h-screen flex items-center justify-center px-4">
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
					Software Developer specializing in full-stack development with expertise in React.js, Node.js, and modern web technologies.
				</motion.p>
				<motion.p
					className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					I value simple content structure, clean design patterns, and thoughtful efficient code.
				</motion.p>

				<motion.div
					className="flex flex-col items-center gap-6"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
				>
					<div className="flex justify-center space-x-4">
						<a
							href="https://drive.google.com/file/d/1zKa2yqWijwSHUmjb-g8xvNQSGa3O692s/view?usp=drive_link"
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
						className="group relative flex items-center gap-2 py-2 pl-8 pr-4 hover:bg-transparent transition-all cursor-pointer"
					>
						<div className="absolute left-0 flex items-center">
							<ChevronRight className="w-4 h-4 text-gray-400" />
							<span className="text-xs font-mono text-gray-400 ml-1">~</span>
						</div>
						<span className="text-gray-400 group-hover:text-white transition-colors">{email}</span>
						<div className="opacity-0 group-hover:opacity-100 transition-opacity">
							{copied ? (
								<Check className="w-4 h-4 text-green-500" />
							) : (
								<Copy className="w-4 h-4 text-gray-400" />
							)}
						</div>
					</button>
				</motion.div>

				<motion.div
					className="flex justify-center space-x-6 mt-12"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.6 }}
				>
					<a
						href="https://github.com/niladri-1"
						target="_blank"
						rel="noopener noreferrer"
						className="group p-2 hover:bg-white/10 rounded-full transition-colors"
					>
						<Github className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
					</a>
					<a
						href="https://linkedin.com/in/niladri1"
						target="_blank"
						rel="noopener noreferrer"
						className="group p-2 hover:bg-white/10 rounded-full transition-colors"
					>
						<Linkedin className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
					</a>
					<a
						href="mailto:code.niladri@gmail.com"
						className="group p-2 hover:bg-white/10 rounded-full transition-colors"
					>
						<Mail className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
					</a>
				</motion.div>
			</div>
		</div>
	);
};

export default Home;