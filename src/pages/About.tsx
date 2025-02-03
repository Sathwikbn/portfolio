import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<motion.h2
					className="text-4xl font-bold mb-8 gradient-text"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					About Me
				</motion.h2>
				<div className="grid md:grid-cols-2 gap-8">
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						<div className="aspect-square overflow-hidden rounded-2xl">
							<img
								src="./profile/profile.jpg" // Replace this with your image path
								alt="Niladri Chatterjee"
								className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
							/>
						</div>
					</motion.div>
					<motion.div
						className="space-y-4"
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
					>
						<p className="text-gray-300 leading-relaxed">
							Hi! I'm a passionate full-stack developer with 5 years of experience in building web applications. I specialize in React, Node.js, and modern web technologies.
						</p>
						<p className="text-gray-300 leading-relaxed">
							When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical blog posts.
						</p>
						<div className="pt-4">
							<h3 className="text-2xl font-semibold mb-4 gradient-text">Quick Facts</h3>
							<ul className="list-none space-y-3">
								<motion.li
									className="flex items-center space-x-2 text-gray-300"
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: 0.8 }}
								>
									<span className="w-2 h-2 bg-white rounded-full" />
									<span>Based in Kolkata, WB, India</span>
								</motion.li>
								<motion.li
									className="flex items-center space-x-2 text-gray-300"
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: 0.9 }}
								>
									<span className="w-2 h-2 bg-white rounded-full" />
									<span>B.Tech in Computer Science</span>
								</motion.li>
								<motion.li
									className="flex items-center space-x-2 text-gray-300"
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: 1 }}
								>
									<span className="w-2 h-2 bg-white rounded-full" />
									<span>CGPA: 8.48</span>
								</motion.li>
							</ul>
						</div>

						<motion.div
							className="flex justify-start space-x-4"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
						>
							<a
								href="./pdf/Niladri_Chatterjee(CV).pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
							>
								Download CV
							</a>
							<a
								href="/#/experience"
								className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
							>
								My Skills
							</a>
						</motion.div>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
};

export default About;