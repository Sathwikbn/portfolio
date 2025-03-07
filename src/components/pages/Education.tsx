'use client';


import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, FileText } from 'lucide-react';

const Education = () => {
	const educationData = [
		{
			school: "Bengal College of Engineering and Technology",
			location: "Durgapur, WB, India",
			duration: "July 2020 - June 2024",
			degree: "B.Tech (Computer Science and Engineering)",
			grade: "CGPA: 8.48 (80%)",
			image: "./education/college_img.jpg",
			coursework: [
				"Data Structures and Algorithms",
				"Object-Oriented Programming",
				"Database Management Systems",
				"Operating Systems",
				"Computer Networks",
				"Artificial Intelligence",
				"Machine Learning",
				"Compiler Design",
				"Computer Architecture"
			],
			description: "During my time at BCET, I have built a strong foundation in computer science, focusing on software development, problem-solving, and real-world applications. Engaging in hands-on projects, internships, and coding challenges has helped me enhance my technical and analytical skills. This experience prepares me for a future in software development, equipping me with the ability to create scalable and efficient solutions."
		},
		{
			school: "Birsingha Bhagabati Vidyalaya",
			location: "Medinipur, WB, India",
			duration: "June 2018 - July 2019",
			degree: "Higher Secondary (WBSC)",
			grade: "Percentage: 79%",
			image: "./education/school_img.jpg",
			subjects: [
				"Mathematics",
				"Physics",
				"Chemistry",
				"Computer Science"
			],
			description: "My higher secondary education laid the foundation for my technical journey, strengthening my analytical thinking and problem-solving abilities. The strong emphasis on mathematics and computer science has been instrumental in shaping my passion for software development, enabling me to approach complex technical challenges with confidence."
		}
	];

	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<motion.div
					className="flex items-center gap-3 mb-12"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
				>
					<GraduationCap className="w-8 h-8" />
					<h2 className="text-4xl font-bold">Education</h2>
				</motion.div>

				<div className="space-y-12">
					{educationData.map((edu, index) => (
						<motion.div
							key={edu.school}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							className="relative bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all"
						>
							<div className="absolute top-0 right-0 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-bl-xl flex items-center gap-2">
								<Calendar className="w-4 h-4 text-gray-300" />
								<span className="text-gray-300">{edu.duration}</span>
							</div>

							<div className="grid md:grid-cols-[300px,1fr] gap-6">
								{/* Left Column - Image */}
								<div className="relative h-full">
									<div className="aspect-[3/4] overflow-hidden">
										<img
											src={edu.image}
											alt={edu.school}
											className="w-full h-full object-cover"
										/>
									</div>
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
										<div className="p-6">
											<h3 className="text-xl font-bold mb-2">{edu.school}</h3>
											<div className="flex items-center gap-2 text-gray-300 mb-1">
												<MapPin className="w-4 h-4" />
												<span>{edu.location}</span>
											</div>
											<div className="flex items-center gap-2 text-gray-300">
												<Award className="w-4 h-4" />
												<span>{edu.grade}</span>
											</div>
										</div>
									</div>
								</div>

								{/* Right Column - Content */}
								<div className="p-6">
									<div className="flex items-center gap-2 mb-4">
										<BookOpen className="w-5 h-5 text-gray-400" />
										<h4 className="text-lg font-semibold">{edu.degree}</h4>
									</div>

									<div className="flex items-start gap-2 text-gray-300 mb-6">
										<FileText className="w-5 h-5 mt-1 flex-shrink-0" />
										<p className="text-sm leading-relaxed">{edu.description}</p>
									</div>

									{edu.coursework && (
										<div className="mb-6">
											{/* <h5 className="text-sm font-semibold text-gray-400 mb-3">Relevant Coursework</h5> */}
											<div className="flex flex-wrap gap-2">
												{edu.coursework.map((course) => (
													<span
														key={course}
														className="px-3 py-1 bg-white/10 rounded-full text-sm"
													>
														{course}
													</span>
												))}
											</div>
										</div>
									)}

									{edu.subjects && (
										<div className="mb-6">
											{/* <h5 className="text-sm font-semibold text-gray-400 mb-3">Core Subjects</h5> */}
											<div className="flex flex-wrap gap-2">
												{edu.subjects.map((subject) => (
													<span
														key={subject}
														className="px-3 py-1 bg-white/10 rounded-full text-sm"
													>
														{subject}
													</span>
												))}
											</div>
										</div>
									)}

									{/* <div className="flex items-start gap-2 text-gray-300">
										<FileText className="w-5 h-5 mt-1 flex-shrink-0" />
										<p className="text-sm leading-relaxed">{edu.description}</p>
									</div> */}

								</div>
							</div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</div>
	);
};

export default Education;