'use client';


import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const certificates = [
	{
		title: "Introduction to Critical Infrastructure Protection",
		issuer: "OPSWAT Academy",
		date: "26th February 2025",
		link: "https://drive.google.com/file/d/1S8BpY-DfihMWCFUs3DVUmMfrCOX08Rw2/view?usp=sharing",
		description: "This certificate verifies the completion of the Introduction to Critical Infrastructure Protection (CIP) program, covering cybersecurity principles, infrastructure security, and risk mitigation strategies.",
		skills: ["Cybersecurity", "Risk Management", "Industrial Security"]
	},
	{
		title: "JavaScript (Basic) Certification",
		issuer: "HackerRank",
		date: "18th February 2025",
		link: "https://drive.google.com/file/d/1YIs_JKF15Ucv9PQvnhN6a4HysKUStk_W/view?usp=sharing",
		description: "This certificate verifies proficiency in fundamental JavaScript concepts, including syntax, data structures, and basic problem-solving.",
		skills: ["JavaScript", "ES6", "Asynchronous Programming"]
	},
	{
		title: "Docker Training Certificate",
		issuer: "KodeKloud",
		date: "18th Fabruary 2025",
		link: "https://drive.google.com/file/d/18UHbenVNgcYs2Msm4iHZv1MOOZcLy1eR/view?usp=sharing",
		description: "Learning Docker teaches containerization, deployment, networking, storage, security, CI/CD, and cloud integration.",
		skills: ["Docker", "Containerization", "CI/CD"]
	},
	{
		title: "Bulding Responsive Landing Pages",
		issuer: "Geekster",
		date: "16th May 2023",
		link: "https://drive.google.com/file/d/1QJMu7NJ-eSHic7MuidUW1e8Pf7BkvVBy/view?usp=sharing",
		description: "Learn to build responsive landing pages using HTML and CSS.",
		skills: ["HTML", "CSS", "Responsive Design"]
	},
	{
		title: "Cascade Style Sheets (CSS) Fundamentals",
		issuer: "HackeRank",
		date: "10th Oct 2023",
		link: "https://drive.google.com/file/d/16KVHNxwq8Q41Cs2USwRosGFCBtIVvlqT/view?usp=sharing",
		description: "Learn to build responsive landing pages using HTML and CSS.",
		skills: ["CSS", "Flexbox", "Grid"]
	},
	{
		title: "Python Programming",
		issuer: "HackeRank",
		date: "10 Oct 2023",
		link: "https://drive.google.com/file/d/1o-1sIXb88GM--DQzmPADKVw75kU-Kn7h/view?usp=sharing",
		description: "Certified in Python (Basic) from HackerRank, proving foundational programming skills.",
		skills: ["Python", "Functions", "Data Structures"]
	},
	{
		title: "Coding: Development & Advanced - Engineering Virtual Experience",
		issuer: "Accenture",
		date: "10 Jul 2023",
		link: "https://drive.google.com/file/d/162Pysz-iylBXsylsqhGCfKRhpMftyO2L/view?usp=sharing",
		description: "Completed engineering virtual experience in advanced coding and software development practices",
		skills: ["OOP", "Code Refactoring", "Agile"]
	},
	{
		title: "Back-End Engineering Virtual Experience Program",
		issuer: "Forage",
		date: "10 Jul 2023",
		link: "https://drive.google.com/file/d/1VvvFgzQLuKFR1Z1vwaZI6z_iyDJ0A06Y/view?usp=sharing",
		description: "Completed practical tasks in software architecture, refactoring, and testing.",
		skills: ["Software Architecture", "Unit Testing", "TDD"]
	},
	{
		title: "Shields Up: Cybersecurity Virtual Experience Program",
		issuer: "Forage",
		date: "10 Jul 2023",
		link: "https://drive.google.com/file/d/1L8p4c4NCcg0XvMbzCKdO6Jc3l1zXbZgq/view?usp=sharing",
		description: "Completed virtual experience in cybersecurity, focusing on threats and vulnerabilities.",
		skills: ["Cybersecurity", "Threat Mitigation", "Ransomware"]
	},
	{
		title: "Digital Intelligence Virtual Case Experience",
		issuer: "Forage",
		date: "10 Jul 2023",
		link: "https://drive.google.com/file/d/1grppjZvoqaLFp4ljYBDjJ7SSd7k4iyt2/view?usp=sharing",
		description: "Completed virtual experience in AI, data analytics, and predictive modeling.",
		skills: ["AI", "Data Analytics", "Predictive Modeling"]
	},
	{
		title: "Solutions Architecture Virtual Experience Program",
		issuer: "AWS (Amazon Web Services)",
		date: "10 Jul 2023",
		link: "https://drive.google.com/file/d/19acEIFzrcJaa6nl8_I7e4eTQNYmgRTgu/view?usp=sharing",
		description: "Completed virtual experience in designing scalable and efficient hosting architectures.",
		skills: ["Cloud Architecture", "System Design", "Infrastructure"]
	},
	{
		title: "Data Visualisation: Empowering Business with Effective Insights",
		issuer: "Tata",
		date: "10 Jul 2023",
		link: "https://drive.google.com/file/d/1imaDqjUzHNF1Z7e0aYnWWXxzfHowpSIU/view?usp=sharing",
		description: "Completed practical tasks in creating and communicating business visuals.",
		skills: ["Data Visualization", "Business Insights", "Reporting"]
	},
	{
		title: "AWS Cloud Practitioner Essentials",
		issuer: "AWS Training and Certification",
		date: "20th August 2022",
		link: "https://drive.google.com/file/d/110Bso4ejZlS95C7S3fvfNJ0cmfkAnqp1/view?usp=sharing",
		description: "This certificate verifies the completion of AWS Cloud Practitioner Essentials, covering foundational cloud concepts, AWS services, security, architecture, pricing, and support.",
		skills: ["AWS", "Cloud Computing", "Security"]
	}

];

const Certificates = () => {
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
					<Award className="w-8 h-8" />
					<h2 className="text-4xl font-bold gradient-text">Certificates</h2>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-6">
					{certificates.map((cert, index) => (
						<motion.div
							key={cert.title}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.1 }}
							className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all group"
						>
							<h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
							<div className="text-gray-400 space-y-2">
								<div className="flex items-center justify-between">
									<span className="text-lg">{cert.issuer}</span>
									<div className="flex items-center gap-2">
										<Calendar className="w-4 h-4" />
										<span>{cert.date}</span>
									</div>
								</div>
								<p className="text-gray-300">{cert.description}</p>
								<div className="flex flex-wrap gap-2 mt-4">
									{cert.skills.map((skill) => (
										<span
											key={skill}
											className="px-2 py-1 text-sm bg-white/10 rounded-full"
										>
											{skill}
										</span>
									))}
								</div>
								<a
									href={cert.link}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mt-4 group-hover:translate-x-2 transition-transform"
								>
									View Certificate
									<ExternalLink className="w-4 h-4" />
								</a>
							</div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</div>
	);
};

export default Certificates;