'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';

// Type definition for experience entries
interface Experience {
	company: string;
	role: string;
	duration: string;
	location: string;
	type: string;
	image: string;
	description: string;
	achievements: string[];
	technologies: string[];
	certificate: string | null;
	website: string | null;
	linkedin: string | null;
}

// Experience data - Ready for your real professional experiences!
const experiences: Experience[] = [
	// Add your professional experiences here when you get them
	// Example structure for future professional experience:
	/*
	{
		company: "Company Name",
		role: "Software Developer",
		duration: "Jan 2024 - Present",
		location: "City, Country",
		type: "Full-time", // or "Part-time", "Contract", "Internship"
		image: "/experience/company-logo.jpg", // Add company logo
		description: "Brief description of your role and responsibilities.",
		achievements: [
			"Key achievement 1",
			"Key achievement 2",
			"Key achievement 3"
		],
		technologies: ["React", "Node.js", "TypeScript", "AWS"],
		certificate: null, // or "/files/experience_pdf/certificate.pdf" if applicable
		website: "https://company-website.com", // Company website (optional)
		linkedin: "https://linkedin.com/company/company-name" // Company LinkedIn (optional)
	},
	*/
	
	// Your real experiences will be added here when you get them!
	// For now, this array is empty and ready for your future opportunities.
];

export default function ExperiencePage() {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
			<motion.div 
				className="text-center mb-16"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				<h2 className="text-4xl font-bold mb-4 gradient-text">Professional Experience</h2>
				<p className="text-gray-400 max-w-3xl mx-auto">
					Building my professional journey in software development. Ready to contribute to meaningful projects and grow with innovative teams.
				</p>
			</motion.div>

			{experiences.length > 0 ? (
				<div className="space-y-8">
					{experiences.map((exp, index) => (
						<motion.div
							key={exp.company}
							className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
						>
							<div className="md:flex">
								<div className="md:w-1/4">
									<img
										src={exp.image}
										alt={exp.company}
										className="w-full h-48 md:h-full object-cover"
									/>
								</div>
								
								<div className="md:w-3/4 p-8">
									<div className="flex items-start justify-between mb-4">
										<div>
											<h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
											<p className="text-xl text-blue-400 mb-2">{exp.company}</p>
										</div>
										<span className="px-3 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full text-sm font-medium">
											{exp.type}
										</span>
									</div>

									<div className="flex items-center gap-6 mb-4 text-gray-400">
										<div className="flex items-center gap-2">
											<Calendar className="w-4 h-4" />
											<span>{exp.duration}</span>
										</div>
										<div className="flex items-center gap-2">
											<MapPin className="w-4 h-4" />
											<span>{exp.location}</span>
										</div>
									</div>

									<p className="text-gray-300 leading-relaxed mb-6">
										{exp.description}
									</p>

									<div className="grid md:grid-cols-2 gap-6 mb-6">
										<div>
											<h4 className="text-white font-semibold mb-3">Key Achievements</h4>
											<ul className="space-y-2">
												{exp.achievements.map((achievement, achIndex) => (
													<li key={achievement} className="flex items-start gap-2 text-gray-300 text-sm">
														<div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
														{achievement}
													</li>
												))}
											</ul>
										</div>

										<div>
											<h4 className="text-white font-semibold mb-3">Technologies Used</h4>
											<div className="flex flex-wrap gap-2">
												{exp.technologies.map((tech) => (
													<span
														key={tech}
														className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded text-sm"
													>
														{tech}
													</span>
												))}
											</div>
										</div>
									</div>

									<div className="pt-4 border-t border-gray-700">
										<div className="flex flex-wrap gap-4">
											{exp.certificate && (
												<a
													href={exp.certificate}
													target="_blank"
													rel="noopener noreferrer"
													className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
												>
													<ExternalLink className="w-4 h-4" />
													<span>View Certificate</span>
												</a>
											)}
											{exp.website && (
												<a
													href={exp.website}
													target="_blank"
													rel="noopener noreferrer"
													className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
												>
													<ExternalLink className="w-4 h-4" />
													<span>Company Website</span>
												</a>
											)}
											{exp.linkedin && (
												<a
													href={exp.linkedin}
													target="_blank"
													rel="noopener noreferrer"
													className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors"
												>
													<ExternalLink className="w-4 h-4" />
													<span>LinkedIn</span>
												</a>
											)}
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			) : (
				<motion.div 
					className="text-center py-16"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<div className="bg-gray-800/30 rounded-xl p-12 backdrop-blur-sm border border-gray-700/50">
						<Briefcase className="w-16 h-16 text-blue-400 mx-auto mb-6" />
						<h3 className="text-2xl font-semibold text-white mb-4">Ready to Start My Professional Journey</h3>
						<p className="text-gray-400 mb-8 max-w-2xl mx-auto">
							I'm actively seeking opportunities to apply my skills in web development and software engineering. 
							While I don't have professional experience yet, I've built a strong foundation through self-learning, 
							projects, and certifications.
						</p>
						<div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
							<div className="bg-gray-700/30 rounded-lg p-6">
								<h4 className="text-white font-semibold mb-3">🎯 What I'm Looking For</h4>
								<ul className="text-gray-400 text-sm space-y-2">
									<li>• Entry-level developer positions</li>
									<li>• Internship opportunities</li>
									<li>• Freelance projects</li>
									<li>• Open source contributions</li>
								</ul>
							</div>
							<div className="bg-gray-700/30 rounded-lg p-6">
								<h4 className="text-white font-semibold mb-3">💪 What I Bring</h4>
								<ul className="text-gray-400 text-sm space-y-2">
									<li>• Strong technical foundation</li>
									<li>• Eagerness to learn and grow</li>
									<li>• Portfolio of real projects</li>
									<li>• Professional certifications</li>
								</ul>
							</div>
						</div>
					</div>
				</motion.div>
			)}

			<motion.div 
				className="mt-16"
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.5 }}
			>
				<div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-8 backdrop-blur-sm border border-blue-500/20 text-center">
					<h3 className="text-2xl font-semibold mb-4 text-white">Let's Build Something Together</h3>
					<p className="text-gray-300 mb-6 max-w-3xl mx-auto">
						I'm passionate about creating innovative solutions and eager to contribute to meaningful projects. 
						Whether you're looking for a dedicated team member or have an interesting project to collaborate on, 
						I'd love to hear from you.
					</p>
					<div className="grid md:grid-cols-3 gap-4 mb-6 text-sm">
						<div className="bg-gray-800/50 rounded-lg p-4">
							<h4 className="text-white font-semibold mb-2">🎯 Seeking</h4>
							<p className="text-gray-400">Entry-level developer roles, internships, or freelance opportunities</p>
						</div>
						<div className="bg-gray-800/50 rounded-lg p-4">
							<h4 className="text-white font-semibold mb-2">💼 Flexible</h4>
							<p className="text-gray-400">Open to full-time, part-time, remote, or hybrid arrangements</p>
						</div>
						<div className="bg-gray-800/50 rounded-lg p-4">
							<h4 className="text-white font-semibold mb-2">🚀 Committed</h4>
							<p className="text-gray-400">Dedicated to continuous learning and delivering quality work</p>
						</div>
					</div>
					<div className="flex justify-center gap-4">
						<a
							href="/contact"
							className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
						>
							Get In Touch
						</a>
						<a
							href="/files/cv_pdf/Sathwik_BN_CV.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
						>
							Download CV
						</a>
					</div>
				</div>
			</motion.div>
		</div>
	);
}