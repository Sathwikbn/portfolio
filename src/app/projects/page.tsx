'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';
import ImageStack from '@/components/ImageStack';

const projects = [
	{
		title: 'LocalThread - E-commerce Platform',
		description: 'Developed a comprehensive e-commerce platform enabling local clothing shops to sell products online. Implemented user authentication, product management, and order tracking using MongoDB, Express.js, React, and Node.js. Designed a responsive UI for mobile and desktop, improving accessibility for small business owners.',
		images: [
			'/projects_img/lt1.png',
			'/projects_img/lt2.png',
			'/projects_img/lt3.png'
		],
		github: 'https://github.com/Sathwikbn/LocalThread',
		live: '#',
		tags: ["MERN Stack", "MongoDB", "Express.js", "React", "Node.js", "E-commerce", "Responsive Design"],
		category: "Full Stack"
	},
	{
		title: 'Image Filter Application',
		description: 'Created a web application to apply artistic filters to images, enhancing user interactivity and usability. Implemented dark and light modes for accessibility and visual appeal. Built with Python, Streamlit, and OpenCV for image processing capabilities.',
		images: [
			'/projects_img/ig1.png',
			'/projects_img/ig2.png',
			'/projects_img/ig3.png'
		],
		github: 'https://github.com/Sathwikbn/Image-Filter-App',
		live: '#',
		tags: ["Python", "Streamlit", "OpenCV", "Image Processing", "Web App", "UI/UX"],
		category: "Machine Learning"
	},
	{
		title: 'SecureValute - Authentication System',
		description: 'Built a secure authentication and authorization system using MongoDB, Express.js, React, and Node.js (MERN). Implemented JWT-based login/signup, password hashing, and protected routes for enhanced security. Developed role-based access control mechanism and intuitive frontend with React.',
		images: [
			'/projects_img/sv1.png',
			'/projects_img/sv2.png',
			'/projects_img/sv3.png'
		],
		github: 'https://github.com/Sathwikbn/SecureValute',
		live: '#',
		tags: ["MERN Stack", "JWT", "Authentication", "Security", "Role-based Access", "React"],
		category: "Backend"
	},
	{
		title: 'Portfolio Website',
		description: 'Designed and developed a modern, responsive portfolio website using Next.js, React, and Tailwind CSS. Features smooth animations, dark theme, SEO optimization, and performance optimization. Showcases projects, skills, and professional experience with an engaging user interface.',
		images: [
			'/projects_img/pt4.png',
			'/projects_img/pt5.png',
			'/projects_img/pt6.png'
		],
		github: 'https://github.com/Sathwikbn/Software_Developer_Portfolio',
		live: 'https://sathwikbn.vercel.app',
		tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript", "SEO"],
		category: "Frontend"
	}
];

export default function ProjectsPage() {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-7xl mx-auto pb-20">
			<motion.div 
				className="text-center mb-16"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				<h2 className="text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
				<p className="text-gray-400 max-w-3xl mx-auto">
					Here are some of the projects I've worked on during my learning journey. 
					Each project represents different aspects of web development and programming skills I've acquired.
				</p>
			</motion.div>

			<div className="grid md:grid-cols-2 gap-8">
				{projects.map((project, index) => (
					<motion.div
						key={project.title}
						className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300 group"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: index * 0.1 }}
						whileHover={{ y: -5 }}
					>
						<div className="relative">
							<ImageStack 
								images={project.images}
								title={project.title}
								className="rounded-t-xl"
							/>
							<div className="absolute top-4 right-4 z-40">
								<span className="px-3 py-1 bg-blue-500/80 text-white text-sm rounded-full backdrop-blur-sm">
									{project.category}
								</span>
							</div>
						</div>
						
						<div className="p-6 space-y-4">
							<h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
								{project.title}
							</h3>
							
							<p className="text-gray-400 leading-relaxed text-sm">
								{project.description}
							</p>
							
							<div className="flex flex-wrap gap-2">
								{project.tags.map(tag => (
									<span 
										key={tag} 
										className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
									>
										{tag}
									</span>
								))}
							</div>
							
							<div className="flex items-center justify-between pt-4 border-t border-gray-700">
								<div className="flex space-x-4">
									<motion.a 
										href={project.github} 
										target="_blank" 
										rel="noopener noreferrer"
										className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group/link"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										<Github className="w-4 h-4 group-hover/link:rotate-12 transition-transform" />
										<span className="text-sm">Code</span>
									</motion.a>
									
									{project.live !== '#' && (
										<motion.a 
											href={project.live} 
											target="_blank" 
											rel="noopener noreferrer"
											className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors group/link"
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
										>
											<ExternalLink className="w-4 h-4 group-hover/link:rotate-12 transition-transform" />
											<span className="text-sm">Live Demo</span>
										</motion.a>
									)}
								</div>
								
								<div className="text-right">
									<p className="text-xs text-gray-500">Click to explore</p>
								</div>
							</div>
						</div>
					</motion.div>
				))}
			</div>

			<motion.div 
				className="mt-16 text-center"
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.5 }}
			>
				<div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-8 backdrop-blur-sm border border-blue-500/20">
					<h3 className="text-2xl font-semibold mb-4 text-white">More Projects Coming Soon!</h3>
					<p className="text-gray-300 mb-6">
						I'm constantly working on new projects and learning new technologies. 
						Check out my GitHub for the latest updates and contributions.
					</p>
					<motion.a
						href="https://github.com/Sathwikbn"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<Github className="w-5 h-5" />
						<span>View All Projects</span>
					</motion.a>
				</div>
			</motion.div>
		</div>
	);
}