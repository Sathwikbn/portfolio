'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Users } from 'lucide-react';
import type { Metadata } from 'next';

const educationData = [
	{
		degree: "Bachelor of Engineering (B.E.)",
		field: "Computer Science and Engineering",
		institution: "HKBK College of Engineering",
		location: "Bangalore, Karnataka",
		duration: "2021 - 2025",
		status: "Pursuing",
		image: "/education/college_img.jpg",
		description: "Currently pursuing B.E. in Computer Science and Engineering with focus on software development, data structures, algorithms, and modern web technologies.",
		subjects: [
			"Data Structures and Algorithms",
			"Object-Oriented Programming",
			"Database Management Systems",
			"Computer Networks",
			"Software Engineering",
			"Web Technologies",
			"Operating Systems",
			"Machine Learning"
		],
		achievements: [
			"Working on multiple web development projects",
			"Learning modern frameworks and technologies"
		]
	},
	{
		degree: "Higher Secondary Education",
		field: "Science (PCMc)",
		institution: "Deeksha Centre for Learning",
		location: "Bangalore, Karnataka", 
		duration: "2019 - 2021",
		status: "Completed",
		image: "/education/school_img.jpg",
		description: "Completed Higher Secondary Education with Physics, Chemistry, Mathematics, and Computer Science.",
		subjects: [
			"Physics",
			"Chemistry", 
			"Mathematics",
			"Electronics",
			"Computer Science",
			"English"
		],
		achievements: [
			"Strong performance in Mathematics and Physics",
			"Foundation in computer programming"
		]
	}
];

export default function EducationPage() {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
			<motion.div 
				className="text-center mb-16"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				<h2 className="text-4xl font-bold mb-4 gradient-text">Educational Journey</h2>
				<p className="text-gray-400 max-w-3xl mx-auto">
					My academic background and learning journey that has shaped my passion for technology and software development.
				</p>
			</motion.div>

			<div className="space-y-12">
				{educationData.map((edu, index) => (
					<motion.div
						key={edu.institution}
						className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: index * 0.2 }}
					>
						<div className="md:flex">
							<div className="md:w-1/3">
								<img
									src={edu.image}
									alt={edu.institution}
									className="w-full h-64 md:h-full object-cover"
								/>
							</div>
							
							<div className="md:w-2/3 p-8">
								<div className="flex items-start justify-between mb-4">
									<div>
										<h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
										<p className="text-xl text-blue-400 mb-2">{edu.field}</p>
										<p className="text-lg text-gray-300 mb-4">{edu.institution}</p>
									</div>
									<span className={`px-3 py-1 rounded-full text-sm font-medium ${
										edu.status === 'Pursuing' 
											? 'bg-green-500/20 text-green-400 border border-green-500/30' 
											: 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
									}`}>
										{edu.status}
									</span>
								</div>

								<div className="flex items-center gap-6 mb-6 text-gray-400">
									<div className="flex items-center gap-2">
										<Calendar className="w-4 h-4" />
										<span>{edu.duration}</span>
									</div>
									<div className="flex items-center gap-2">
										<MapPin className="w-4 h-4" />
										<span>{edu.location}</span>
									</div>
								</div>

								<p className="text-gray-300 leading-relaxed mb-6">
									{edu.description}
								</p>

								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<h4 className="flex items-center gap-2 text-white font-semibold mb-3">
											<BookOpen className="w-5 h-5 text-blue-400" />
											Key Subjects
										</h4>
										<div className="grid grid-cols-2 gap-2">
											{edu.subjects.map((subject, subIndex) => (
												<motion.span
													key={subject}
													className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded text-sm"
													initial={{ opacity: 0, scale: 0.9 }}
													animate={{ opacity: 1, scale: 1 }}
													transition={{ 
														duration: 0.3, 
														delay: index * 0.2 + subIndex * 0.05 
													}}
												>
													{subject}
												</motion.span>
											))}
										</div>
									</div>

									<div>
										<h4 className="flex items-center gap-2 text-white font-semibold mb-3">
											<Award className="w-5 h-5 text-yellow-400" />
											Achievements
										</h4>
										<ul className="space-y-2">
											{edu.achievements.map((achievement, achIndex) => (
												<motion.li
													key={achievement}
													className="flex items-start gap-2 text-gray-300 text-sm"
													initial={{ opacity: 0, x: -10 }}
													animate={{ opacity: 1, x: 0 }}
													transition={{ 
														duration: 0.4, 
														delay: index * 0.2 + achIndex * 0.1 
													}}
												>
													<div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
													{achievement}
												</motion.li>
											))}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				))}
			</div>

			<motion.div 
				className="mt-16"
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.6 }}
			>
				<div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-8 backdrop-blur-sm border border-blue-500/20">
					<div className="text-center">
						<h3 className="text-2xl font-semibold mb-4 text-white">Continuous Learning</h3>
						<p className="text-gray-300 mb-6 max-w-3xl mx-auto">
							Beyond formal education, I'm committed to continuous learning through online courses, 
							coding challenges, and hands-on projects. I regularly explore new technologies and 
							frameworks to stay current with industry trends.
						</p>
						
						<div className="grid md:grid-cols-3 gap-6 mt-8">
							<div className="bg-gray-800/30 rounded-lg p-6">
								<GraduationCap className="w-8 h-8 text-blue-400 mx-auto mb-3" />
								<h4 className="text-white font-semibold mb-2">Online Courses</h4>
								<p className="text-gray-400 text-sm">
									Actively pursuing online courses in web development, programming languages, and emerging technologies.
								</p>
							</div>
							
							<div className="bg-gray-800/30 rounded-lg p-6">
								<BookOpen className="w-8 h-8 text-green-400 mx-auto mb-3" />
								<h4 className="text-white font-semibold mb-2">Self-Study</h4>
								<p className="text-gray-400 text-sm">
									Regular reading of technical documentation, programming books, and industry best practices.
								</p>
							</div>
							
							<div className="bg-gray-800/30 rounded-lg p-6">
								<Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
								<h4 className="text-white font-semibold mb-2">Community</h4>
								<p className="text-gray-400 text-sm">
									Active participation in coding communities, forums, and collaborative learning platforms.
								</p>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}