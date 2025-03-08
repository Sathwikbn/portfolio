'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Building2, ExternalLink, ArrowRight } from 'lucide-react';

const experiences = [
	{
		title: "Full Stack Developer",
		company: "Codecraft Infotech",
		location: "Remote",
		period: "01/2025 - 02/2025",
		type: "Internship",
		image: "./experience/codeCraft_page.jpg",
		certificateUrl: "https://drive.google.com/file/d/1LiSBv6NbRnCXWn2tE8dzK5yZCVHzL2pg/view?usp=drive_link",
		description: [
			"Engineered a real-time collaborative document editor using Next.js, TypeScript, and Liveblocks, reducing latency by 30%",
			"Implemented and optimized a personal portfolio with Next.js and Tailwind CSS, improving performance by 40%"
		]
	},
	{
		title: "Software Engineering Intern",
		company: "Code Alpha",
		location: "Remote",
		period: "06/2024 - 09/2024",
		type: "Internship",
		image: "./experience/codeAlpha_page.jpg",
		certificateUrl: "https://drive.google.com/file/d/1Hilwvk8K4VDr-4cXXAp6Z_e-1F39TmL9/view?usp=drive_link",
		description: [
			"Optimized web application performance with JavaScript and React.js, achieving a 98% error-free rate",
			"Implemented advanced features on a React.js platform, resulting in a 40% surge in user interaction"
		]
	},
	{
		title: "Full Stack Development Intern ",
		company: "Bharat Intern",
		location: "Remote",
		period: "06/2024 - 07/2024",
		type: "Internship",
		image: "./experience/bharatIntern_page.jpg",
		certificateUrl: "https://drive.google.com/file/d/1RvoNihBkln4pMJWG3Oa4pzNdMEorxlBV/view?usp=drive_link",
		description: [
			"Designed 3 websites with CSS, JavaScript, React.js, Node.js and MongoDB, resulting in a 30% increase in user engagement",
			"Built a money tracker app using HTML, CSS, React.js, Node.js, and MongoDB, improving user financial tracking by 25%"
		]
	}
];

const Experience = () => {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-5xl mx-auto pb-20">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<motion.h2
					className="text-4xl font-bold mb-12 gradient-text flex items-center gap-3"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
				>
					<Briefcase className="w-8 h-8" />
					Professional Experience
				</motion.h2>

				<div className="space-y-12">
					{experiences.map((exp, index) => (
						<motion.div
							key={exp.title}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							className="group relative bg-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5"
						>
							<div className="grid md:grid-cols-[1fr,300px] gap-6">
								{/* Left Column - Content */}
								<div className="p-8">
									<div className="flex items-center gap-3 mb-6">
										<div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
											<Building2 className="w-7 h-7" />
										</div>
										<div>
											<h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
											<p className="text-gray-400 text-lg">{exp.company}</p>
										</div>
									</div>

									<div className="flex items-center gap-2 text-gray-300 mb-6">
										<MapPin className="w-4 h-4" />
										<span>{exp.location}</span>
										<span>{exp.period}</span>
									</div>

									<ul className="space-y-4">
										{exp.description.map((item, i) => (
											<motion.li
												key={i}
												initial={{ opacity: 0, x: -20 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
												className="flex items-start gap-3 text-gray-300"
											>
												<ArrowRight className="w-5 h-5 mt-0.5 text-gray-400" />
												<span className="leading-relaxed">{item}</span>
											</motion.li>
										))}
									</ul>
								</div>

								{/* Right Column - Image */}
								<div className="relative h-full">
									<div className="absolute inset-0">
										<img
											src={exp.image}
											alt={exp.company}
											className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
										/>
										<div className="absolute inset-0 bg-gradient-to-r from-gray-800/80 to-transparent" />
									</div>
									<div className="relative h-full flex items-center justify-center">
										<motion.a
											href={exp.certificateUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="px-8 py-3 text-black font-bold bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl flex items-center gap-2 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-white/20"
											whileHover={{ y: -5 }}
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ duration: 0.5, delay: 0.5 }}
										>
											View Certificate
											<ExternalLink className="w-4 h-4" />
										</motion.a>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</div>
	);
};

export default Experience;