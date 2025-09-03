'use client';

import { VercelLogo } from '@/components/TechLogos';
import { motion } from 'framer-motion';
import { Github, Linkedin, MessageCircle, Copy, Check, FileDown, User } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function HomePage() {
	const [copied, setCopied] = useState(false);
	const [isClient, setIsClient] = useState(false);
	const email = 'sathwiksathwikbn138@gmail.com';
	const whatsappNumber = '+919482697768';

	const { data: githubData } = useSWR('https://api.github.com/users/Sathwikbn', fetcher);
	
	useEffect(() => {
		setIsClient(true);
	}, []);

	function formatRepoCount(count: number): string {
		if (count < 5) return count.toString();
		return `${Math.floor(count / 5) * 5}+`;
	}
	const githubRepos = githubData?.public_repos || 0;
	const displayRepos = formatRepoCount(githubRepos);

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(email);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	};

	const handleEmailClick = (e: React.MouseEvent) => {
		if (window.innerWidth <= 640) { // sm breakpoint
			window.location.href = `mailto:${email}`;
			e.preventDefault();
		} else {
			copyToClipboard();
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center px-4 mt-7 sm:mt-0 md:mt-3 lg:mt-5">
			<div className="text-center relative z-10 max-w-4xl mx-auto">
				<motion.h1
					className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 relative tracking-tighter cursor-default group"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					whileHover={{ 
						scale: 1.02,
						textShadow: "0 0 30px rgba(255, 255, 255, 0.3)"
					}}
				>
					<span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-500">
						Sathwik B N
					</span>
				</motion.h1>
				<motion.h1
					className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 relative tracking-tighter cursor-default group"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					whileHover={{ 
						scale: 1.05,
						rotateX: 5,
						rotateY: 5
					}}
				>
					<span className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-white group-hover:to-blue-300 transition-all duration-700">
						I design & code for web
					</span>
				</motion.h1>

				<motion.p
					className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-4 sm:mb-5 max-w-2xl mx-auto px-2 sm:px-4 cursor-default group"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					whileHover={{ 
						scale: 1.02,
						y: -5
					}}
				>
					<span className="group-hover:text-white transition-colors duration-500">
						Student and aspiring Software Developer with passion for Full Stack Development, exploring modern web technologies and building innovative solutions.
					</span>
				</motion.p>

				<motion.div
					className="flex flex-col items-center gap-4 sm:gap-6"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
				>
					<div className="flex justify-center space-x-3 sm:space-x-4">
						<motion.a
							href="/files/cv_pdf/Sathwik_BN_CV.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-black rounded-full text-sm sm:text-base font-medium hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 group relative overflow-hidden"
							whileHover={{ 
								scale: 1.05,
								boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)"
							}}
							whileTap={{ scale: 0.95 }}
						>
							<div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
							<FileDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
							<span className="relative z-10">Download CV</span>
						</motion.a>
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Link
								href="/about"
								className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 text-white rounded-full text-sm sm:text-base font-medium hover:bg-white/20 transition-all duration-300 flex items-center gap-2 group relative overflow-hidden backdrop-blur-sm border border-white/20 hover:border-white/40"
							>
								<div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								<User className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
								<span className="relative z-10">About Me</span>
							</Link>
						</motion.div>
					</div>

					<motion.button
						onClick={handleEmailClick}
						className="group relative flex items-center gap-2 py-2 pl-8 pr-4 hover:bg-transparent transition-all cursor-copy sm:cursor-pointer rounded-lg hover:bg-white/5"
						whileHover={{ 
							scale: 1.02,
							y: -2
						}}
						whileTap={{ scale: 0.98 }}
					>
						<div className="absolute left-0 flex items-center">
							<div className="w-3 text-gray-500 group-hover:text-white transition-colors group-hover:scale-110">
								<VercelLogo />
							</div>
							<span className="text-lg font-mono text-gray-400 ml-3 group-hover:text-white transition-colors group-hover:animate-pulse">~</span>
						</div>
						<span className="text-gray-400 group-hover:text-white transition-colors ml-4 sm:text-base group-hover:font-medium">{email}</span>
						<div className="opacity-0 group-hover:opacity-100 transition-all duration-300 ml-1 hidden sm:block">
							{copied ? (
								<motion.div
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									transition={{ type: "spring", stiffness: 500 }}
								>
									<Check className="w-4 h-4 text-green-500" />
								</motion.div>
							) : (
								<Copy className="w-4 h-4 text-gray-400 hover:text-white transition-colors group-hover:rotate-12" />
							)}
						</div>
					</motion.button>
				</motion.div>

				<motion.div
					className="grid grid-cols-3 justify-items-center gap-6 mt-8 sm:mt-12 max-w-xs sm:max-w-none mx-auto"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.6 }}
				>
					<motion.a
						href="https://github.com/Sathwikbn"
						target="_blank"
						rel="noopener noreferrer"
						className="flex flex-col items-center group w-full"
						whileHover={{ 
							y: -8,
							scale: 1.05
						}}
						whileTap={{ scale: 0.95 }}
					>
						<div className="p-3 rounded-xl transition-all duration-300 mb-2 w-full max-w-[200px] group-hover:bg-white/10 group-hover:backdrop-blur-sm group-hover:border group-hover:border-white/20 group-hover:shadow-lg group-hover:shadow-white/10">
							<Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-all duration-300 mx-auto group-hover:scale-110 group-hover:rotate-12" />
						</div>
						<motion.div
							className="flex flex-col items-center"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.8 }}
						>
							<span className="text-base sm:text-lg font-semibold group-hover:text-white transition-colors duration-300">
								{isClient ? displayRepos : '0'}
							</span>
							<span className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">GitHub Projects</span>
						</motion.div>
					</motion.a>

					<motion.a
						href="https://linkedin.com/in/sathwikbn138"
						target="_blank"
						rel="noopener noreferrer"
						className="flex flex-col items-center group w-full"
						whileHover={{ 
							y: -8,
							scale: 1.05
						}}
						whileTap={{ scale: 0.95 }}
					>
						<div className="p-3 rounded-xl transition-all duration-300 mb-2 w-full max-w-[200px] group-hover:bg-blue-500/20 group-hover:backdrop-blur-sm group-hover:border group-hover:border-blue-400/30 group-hover:shadow-lg group-hover:shadow-blue-500/20">
							<Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-blue-400 transition-all duration-300 mx-auto group-hover:scale-110 group-hover:rotate-12" />
						</div>
						<motion.div
							className="flex flex-col items-center"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.8 }}
						>
							<span className="text-base sm:text-lg font-semibold group-hover:text-blue-400 transition-colors duration-300">Connect</span>
							<span className="text-xs sm:text-sm text-gray-400 group-hover:text-blue-300 transition-colors duration-300">LinkedIn Profile</span>
						</motion.div>
					</motion.a>

					<motion.a
						href={`https://wa.me/${whatsappNumber}`}
						target="_blank"
						rel="noopener noreferrer"
						className="flex flex-col items-center group w-full"
						whileHover={{ 
							y: -8,
							scale: 1.05
						}}
						whileTap={{ scale: 0.95 }}
					>
						<div className="p-3 rounded-xl transition-all duration-300 mb-2 w-full max-w-[200px] group-hover:bg-green-500/20 group-hover:backdrop-blur-sm group-hover:border group-hover:border-green-400/30 group-hover:shadow-lg group-hover:shadow-green-500/20">
							<MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-green-400 transition-all duration-300 mx-auto group-hover:scale-110 group-hover:rotate-12" />
						</div>
						<motion.div
							className="flex flex-col items-center"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.8 }}
						>
							<span className="text-base sm:text-lg font-semibold group-hover:text-green-400 transition-colors duration-300">24x7</span>
							<span className="text-xs sm:text-sm text-gray-400 group-hover:text-green-300 transition-colors duration-300">WhatsApp Me</span>
						</motion.div>
					</motion.a>
				</motion.div>
			</div>
		</div>
	);
}