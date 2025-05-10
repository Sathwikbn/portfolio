'use client';

import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, Clock } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import Image from 'next/image';

const certificates = [
	{
		title: "Typescript Programming",
		issuer: "Geekster",
		date: "22th April 2025",
		link: "/files/certificates_pdf/Typescript.pdf",
		description: "Covers TypeScript fundamentals, including syntax, types. Includes practical examples and real-world applications.",
		skills: ["TypeScript", "JavaScript", "Frontend Development", "Backend Development"]
	},
	{
		title: "AWS ECS Deployment and Management",
		issuer: "KodeKloud",
		date: "20th March 2025",
		link: "/files/certificates_pdf/aws_ecs.pdf",
		description: "Covers deploying and managing containers on AWS using ECS, including cluster management, load balancing, auto-scaling, and CI/CD integration.",
		skills: ["AWS ECS", "Cloud Computing", "DevOps", "CI/CD"]
	},
	{
		title: "Critical Infrastructure Protection",
		issuer: "OPSWAT Academy",
		date: "26th February 2025",
		link: "/files/certificates_pdf/critical_infrastructure_protection.pdf",
		description: "Covers cybersecurity principles, infrastructure security, and risk mitigation strategies.",
		skills: ["Cybersecurity", "Risk Management", "Industrial Security"]
	},
	{
		title: "JavaScript Programming",
		issuer: "HackerRank",
		date: "18th February 2025",
		link: "/files/certificates_pdf/javascript.pdf",
		description: "Validates JavaScript fundamentals, including syntax, functions, and problem-solving.",
		skills: ["JavaScript", "ES6", "Asynchronous Programming"]
	},
	{
		title: "Docker Fundamentals",
		issuer: "KodeKloud",
		date: "18th Fabruary 2025",
		link: "/files/certificates_pdf/docker_fundamentals.pdf",
		description: "Teaches containerization, networking, security, and CI/CD with Docker.",
		skills: ["Docker", "Containerization", "CI/CD"]
	},
	{
		title: "Python Programming",
		issuer: "HackeRank",
		date: "10 Oct 2023",
		link: "/files/certificates_pdf/python.pdf",
		description: "Validates Python basics, including loops, functions, and data structures.",
		skills: ["Python", "Functions", "Data Structures"]
	},
	{
		title: "Cybersecurity Virtual Program",
		issuer: "Forage",
		date: "10 Jul 2023",
		link: "/files/certificates_pdf/cybersecurity_virtual_program.pdf",
		description: "Focuses on cybersecurity threats, vulnerabilities, and risk mitigation.",
		skills: ["Cybersecurity", "Threat Mitigation", "Ransomware"]
	}
];

const Certificates = () => {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
			<ScrollAnimation>
				<div className="text-center mb-12">
					<div className="inline-flex items-center justify-center gap-3 mb-4">
						<Award className="w-8 h-8 text-purple-400" />
						<h2 className="text-4xl font-bold gradient-text">Certificates</h2>
					</div>
					<p className="text-gray-400 max-w-2xl mx-auto">
						A collection of professional certifications and achievements in software development, cloud computing, and cybersecurity.
					</p>
				</div>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{certificates.map((cert, index) => (
					<ScrollAnimation key={cert.title}>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="group bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5"
						>
							<div className="p-6">
								<div className="flex items-center justify-between mb-4">
									<h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors line-clamp-1">
										{cert.title}
									</h3>
									<div className="flex items-center gap-2 text-gray-400 text-sm">
										<Clock className="w-4 h-4" />
										<span>{cert.date}</span>
									</div>
								</div>

								<div className="space-y-4">
									<div className="flex items-center justify-between text-gray-300">
										<div className="flex items-center gap-2">
											<Award className="w-4 h-4 text-purple-400" />
											<span className="font-medium">{cert.issuer}</span>
										</div>
									</div>

									<p className="text-gray-400 text-sm line-clamp-2">
										{cert.description}
									</p>

									<div className="flex flex-wrap gap-2">
										{cert.skills.map((skill) => (
											<span
												key={skill}
												className="px-2 py-1 text-xs bg-purple-500/10 text-purple-400 rounded-full"
											>
												{skill}
											</span>
										))}
									</div>

									<a
										href={cert.link}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors group-hover:translate-x-2 duration-300"
									>
										View Certificate
										<ExternalLink className="w-4 h-4" />
									</a>
								</div>
							</div>
						</motion.div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Certificates;