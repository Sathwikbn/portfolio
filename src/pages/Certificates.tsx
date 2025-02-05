import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const certificates = [
	{
		title: "Bulding Responsive Landing Pages",
		issuer: "Geekster",
		date: "16th May 2023",
		link: "./certificates/html_css.pdf",
		description: "Learn to build responsive landing pages using HTML and CSS.",
		skills: ["HTML5 & CSS3", "Responsive Design", "Mobile-First Approach", "Flexbox & Grid", "Cross-Browser Compatibility", "User Experience (UX)", "Debugging & Testing"]
	},
	{
		title: "Cascade Style Sheets (CSS) Fundamentals",
		issuer: "HackeRank",
		date: "10th Oct 2023",
		link: "./certificates/css_hackerrank.pdf",
		description: "Learn to build responsive landing pages using HTML and CSS.",
		skills: ["CSS Fundamentals", "Selectors & Specificity", "Box Model", "Flexbox", "Grid", "Responsive Design"]
	},
	{
		title: "Python Programming",
		issuer: "HackeRank",
		date: "10 Oct 2023",
		link: "./certificates/python_hackerrank.pdf",
		description: "Certified in Python (Basic) from HackerRank, proving foundational programming skills.",
		skills: ["Data Types", "Control Flow", "Loops", "Functions", "Basic Data Structures"]
	},
	{
		title: "Coding: Development & Advanced - Engineering Virtual Experience",
		issuer: "Accenture",
		date: "10 Jul 2023",
		link: "./certificates/Development & Advanced.pdf",
		description: "Completed engineering virtual experience in advanced coding and software development practices",
		skills: ["Object Oriented Programming", "Code Refactoring", "Continuous Integration", "Agile Planning"]
	},
	{
		title: "Back-End Engineering Virtual Experience Program",
		issuer: "Forage",
		date: "10 Jul 2023",
		link: "./certificates/Back-End Engineering Virtual Experience.pdf",
		description: "Completed practical tasks in software architecture, refactoring, and testing.",
		skills: ["Software Architecture", "Refactoring", "Unit Testing", "Test-Driven Development"]
	},
	{
		title: "Shields Up: Cybersecurity Virtual Experience Program",
		issuer: "Forage",
		date: "10 Jul 2023",
		link: "./certificates/Cybersecurity Virtual Experience.pdf",
		description: "Completed virtual experience in cybersecurity, focusing on threats and vulnerabilities.",
		skills: ["Zero-Day Vulnerability Response", "Ransomware Bypass", "Cybersecurity Awareness", "Threat Mitigation"]
	},
	{
		title: "Digital Intelligence Virtual Case Experience",
		issuer: "Forage",
		date: "10 Jul 2023",
		link: "./certificates/Digital Intelligence Virtual Case Experience.pdf",
		description: "Completed virtual experience in AI, data analytics, and predictive modeling.",
		skills: ["Responsible AI", "Quant Finance Modelling", "Data Analytics Strategy", "Predictive Healthcare", "Predictive and Statistical Modelling"]
	},
	{
		title: "Solutions Architecture Virtual Experience Program",
		issuer: "AWS (Amazon Web Services)",
		date: "10 Jul 2023",
		link: "./certificates/Solutions Architecture Virtual Experience.pdf",
		description: "Completed virtual experience in designing scalable and efficient hosting architectures.",
		skills: ["Scalable Architecture Design", "Cloud Hosting", "System Design Principles", "Infrastructure Planning"]
	},
	{
		title: "Data Visualisation: Empowering Business with Effective Insights",
		issuer: "Tata",
		date: "10 Jul 2023",
		link: "public/certificates/Empowering Business.pdf",
		description: "Completed practical tasks in creating and communicating business visuals.",
		skills: ["Framing the Business Scenario", "Choosing the Right Visuals", "Creating Effective Visuals",]
	},
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