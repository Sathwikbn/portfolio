'use client';

import { motion } from 'framer-motion';
import { Code2, Briefcase, GraduationCap, Globe } from 'lucide-react';
import type { Metadata } from 'next';

const achievements = [
	{
		icon: <Code2 className="w-6 h-6" />,
		title: "Learning & Growing",
		description: "Continuously expanding my skills"
	},
	{
		icon: <Briefcase className="w-6 h-6" />,
		title: "Student",
		description: "Pursuing education in technology"
	},
	{
		icon: <GraduationCap className="w-6 h-6" />,
		title: "Passionate",
		description: "About software development"
	}
];

const interests = [
	"Web Development",
	"Frontend Development",
	"Backend Development",
	"Mobile Development",
	"UI/UX Design",
	"Data Structures"
];

export default function AboutPage() {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20">
			<motion.h2 
				className="text-4xl font-bold mb-8 gradient-text"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				About Me
			</motion.h2>

			<div className="grid md:grid-cols-2 gap-8">
				<motion.div 
					className="aspect-square overflow-hidden rounded-2xl"
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.1 }}
				>
					<img
						src="/profile/profile.jpg"
						alt="Sathwik B N"
						className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
					/>
				</motion.div>

				<motion.div 
					className="space-y-6"
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<div className="space-y-4">
						<p className="text-gray-300 leading-relaxed">
							Hi! I'm Sathwik B N, a passionate student and aspiring software developer based in Bangalore. Currently pursuing my B.E. in Computer Science and Engineering at HKBK College of Engineering, I'm building a strong foundation in programming and software development.
						</p>
						<p className="text-gray-300 leading-relaxed">
							My journey in technology began with curiosity about how things work behind the scenes, which led me to discover the fascinating world of programming and web development. I'm actively learning and exploring modern web technologies, focusing on full-stack development.
						</p>
						<p className="text-gray-300 leading-relaxed">
							I believe in continuous learning and staying updated with the latest trends in technology to build innovative solutions. My goal is to become a skilled software developer who can contribute meaningfully to the tech community.
						</p>
					</div>

					<div className="pt-4">
						<h3 className="text-2xl font-semibold mb-4 gradient-text">Quick Facts</h3>
						<ul className="list-none space-y-3">
							{["B.E. CSE at HKBK College", "Based in Bangalore, India", "Passionate about Technology"].map((fact, index) => (
								<motion.li
									key={fact}
									className="flex items-center space-x-2 text-gray-300"
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
								>
									<span className="w-2 h-2 bg-white rounded-full" />
									<span>{fact}</span>
								</motion.li>
							))}
						</ul>
					</div>

					<div className="flex justify-start space-x-4">
						<a
							href="/files/cv_pdf/Sathwik_BN_CV.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
						>
							Download CV
						</a>
						<a
							href="/skills"
							className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
						>
							My Skills
						</a>
					</div>
				</motion.div>
			</div>

			<motion.div 
				className="mt-16"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.4 }}
			>
				<h3 className="text-2xl font-semibold mb-8 gradient-text">Achievements</h3>
				<div className="grid md:grid-cols-3 gap-6">
					{achievements.map((achievement, index) => (
						<motion.div
							key={achievement.title}
							className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
						>
							<div className="text-white mb-4">{achievement.icon}</div>
							<h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
							<p className="text-gray-400">{achievement.description}</p>
						</motion.div>
					))}
				</div>
			</motion.div>

			<motion.div 
				className="mt-16"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.6 }}
			>
				<h3 className="text-2xl font-semibold mb-8 gradient-text">Areas of Interest</h3>
				<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
					{interests.map((interest, index) => (
						<motion.div
							key={interest}
							className="bg-white/5 p-4 rounded-xl backdrop-blur-sm flex items-center gap-3"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
						>
							<Globe className="w-5 h-5 text-gray-400" />
							<span className="text-gray-300">{interest}</span>
						</motion.div>
					))}
				</div>
			</motion.div>
		</div>
	);
}