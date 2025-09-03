'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ExternalLink, Calendar, Award, Download } from 'lucide-react';
import type { Metadata } from 'next';

// Certificate data structure
const certificates = [
	{
		id: 1,
		title: 'Machine Learning & Deep Learning in Python & R',
		issuer: 'Udemy',
		date: 'Sept 3, 2025',
		status: 'Completed',
		description: 'Comprehensive course covering machine learning and deep learning concepts using Python and R programming languages. Gained hands-on experience with supervised, unsupervised, and deep learning models.',
		image: '/files/certificates_pdf/ml.png',
		credentialId: 'UC-1f524f58-c185-4a90-94a7-de932676e538',
		skills: ['Machine Learning', 'Deep Learning', 'Python', 'R', 'Data Science', 'Statistical Modeling', 'Start-Tech Academy'],
		verificationUrl: 'https://ude.my/UC-1f524f58-c185-4a90-94a7-de932676e538',
		downloadUrl: '/files/certificates_pdf/udmey machineLearning.pdf'
	},
	{
		id: 2,
		title: 'Complete Web Development Course',
		issuer: 'Udemy',
		date: 'May 31, 2025',
		status: 'Completed',
		description: 'Comprehensive full-stack web development course covering HTML, CSS, JavaScript, Node.js, React, MongoDB, and modern deployment techniques. 79.5 total hours of hands-on learning.',
		image: '/files/certificates_pdf/web.png',
		credentialId: 'UC-84529c90-0247-44ac-99e1-c4c3b4d07a78',
		skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React', 'MongoDB', 'Full-Stack Development', 'Hitesh Choudhary'],
		verificationUrl: 'https://ude.my/UC-84529c90-0247-44ac-99e1-c4c3b4d07a78',
		downloadUrl: '/files/certificates_pdf/udamey web devlopment.pdf'
	},
	{
		id: 3,
		title: 'C++ Data Structures & Algorithms + LEETCODE Exercises',
		issuer: 'Udemy',
		date: 'July 6, 2024',
		status: 'Completed',
		description: 'Comprehensive course covering fundamental and advanced data structures and algorithms using C++. Includes practical LeetCode exercises to enhance problem-solving skills and algorithmic thinking.',
		image: '/files/certificates_pdf/dsa.png',
		credentialId: 'UC-b199280d-cf9a-4551-bb05-81490b462626',
		skills: ['Data Structures', 'Algorithms', 'C++', 'LeetCode', 'Problem Solving', 'Algorithmic Thinking', 'Scott Barrett'],
		verificationUrl: 'https://ude.my/UC-b199280d-cf9a-4551-bb05-81490b462626',
		downloadUrl: '/files/certificates_pdf/udemy dsa.pdf'
	}
];

export default function CertificatesPage() {
	const [selectedCertificate, setSelectedCertificate] = useState<typeof certificates[0] | null>(null);

	return (
		<div className="min-h-screen pt-20 px-4 max-w-7xl mx-auto pb-20">
			<motion.div 
				className="text-center mb-16"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				<h2 className="text-4xl font-bold mb-4 gradient-text">Certificates & Achievements</h2>
				<p className="text-gray-400 max-w-3xl mx-auto">
					Professional certifications and achievements that demonstrate my commitment to continuous learning 
					in web development, machine learning, and data structures & algorithms.
				</p>
			</motion.div>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{certificates.map((certificate, index) => (
					<motion.div
						key={certificate.id}
						className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300 group cursor-pointer"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: index * 0.1 }}
						whileHover={{ y: -5 }}
						onClick={() => setSelectedCertificate(certificate)}
					>
						<div className="relative overflow-hidden">
							<img
								src={certificate.image}
								alt={certificate.title}
								className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
							/>
							<div className="absolute top-4 right-4 flex flex-col gap-2">
								<span className="px-3 py-1 bg-blue-500/80 text-white text-sm rounded-full backdrop-blur-sm">
									{certificate.date}
								</span>
								<span className={`px-3 py-1 text-white text-sm rounded-full backdrop-blur-sm ${
									certificate.status === 'Completed' || certificate.status === 'Complete' 
										? 'bg-green-500/80' 
										: certificate.status === 'Ongoing'
										? 'bg-yellow-500/80'
										: 'bg-gray-500/80'
								}`}>
									{certificate.status}
								</span>
							</div>
						</div>
						
						<div className="p-6 space-y-4">
							<div className="flex items-center gap-2 mb-2">
								<Award className="w-5 h-5 text-blue-400" />
								<span className="text-blue-400 text-sm font-medium">{certificate.issuer}</span>
							</div>
							
							<h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
								{certificate.title}
							</h3>
							
							<p className="text-gray-400 leading-relaxed text-sm line-clamp-3">
								{certificate.description}
							</p>
							
							<div className="flex flex-wrap gap-2">
								{certificate.skills.slice(0, 3).map(skill => (
									<span 
										key={skill} 
										className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded border border-blue-500/30"
									>
										{skill}
									</span>
								))}
								{certificate.skills.length > 3 && (
									<span className="px-2 py-1 text-xs bg-gray-500/20 text-gray-300 rounded">
										+{certificate.skills.length - 3} more
									</span>
								)}
							</div>
							
							<div className="flex items-center justify-between pt-4 border-t border-gray-700">
								<div className="flex items-center gap-2 text-gray-400 text-sm">
									<Calendar className="w-4 h-4" />
									<span>{certificate.date}</span>
								</div>
								
								<div className="text-right">
									<p className="text-xs text-gray-500">Click to view details</p>
								</div>
							</div>
						</div>
					</motion.div>
				))}
			</div>

			{/* Certificate Detail Modal */}
			<AnimatePresence>
				{selectedCertificate && (
					<motion.div
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setSelectedCertificate(null)}
					>
						<motion.div
							className="relative w-full max-w-4xl max-h-[90vh] bg-gray-800 rounded-xl overflow-hidden"
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
							onClick={(e) => e.stopPropagation()}
						>
							{/* Close button */}
							<button
								className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
								onClick={() => setSelectedCertificate(null)}
							>
								<X className="w-6 h-6 text-white" />
							</button>

							{/* Certificate image */}
							<div className="relative h-64 md:h-80">
								<img
									src={selectedCertificate.image}
									alt={selectedCertificate.title}
									className="w-full h-full object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
								<div className="absolute bottom-4 left-4 text-white">
									<div className="flex items-center gap-2 mb-2">
										<Award className="w-6 h-6 text-blue-400" />
										<span className="text-blue-400 font-medium">{selectedCertificate.issuer}</span>
									</div>
									<h2 className="text-2xl font-bold">{selectedCertificate.title}</h2>
								</div>
							</div>

							{/* Certificate details */}
							<div className="p-8 space-y-6">
								<div className="flex items-center gap-4 text-gray-400">
									<div className="flex items-center gap-2">
										<Calendar className="w-5 h-5" />
										<span>{selectedCertificate.date}</span>
									</div>
									<div className="flex items-center gap-2">
										<span className="text-sm">ID: {selectedCertificate.credentialId}</span>
									</div>
									<div className="flex items-center gap-2">
										<span className={`px-3 py-1 text-white text-sm rounded-full ${
											selectedCertificate.status === 'Completed' || selectedCertificate.status === 'Complete' 
												? 'bg-green-500/80' 
												: selectedCertificate.status === 'Ongoing'
												? 'bg-yellow-500/80'
												: 'bg-gray-500/80'
										}`}>
											{selectedCertificate.status}
										</span>
									</div>
								</div>

								<p className="text-gray-300 leading-relaxed">
									{selectedCertificate.description}
								</p>

								<div>
									<h3 className="text-lg font-semibold text-white mb-3">Skills & Technologies</h3>
									<div className="flex flex-wrap gap-2">
										{selectedCertificate.skills.map(skill => (
											<span 
												key={skill} 
												className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
											>
												{skill}
											</span>
										))}
									</div>
								</div>

								<div className="flex gap-4 pt-4">
									{selectedCertificate.verificationUrl && selectedCertificate.verificationUrl !== '#' && (
										<a 
											href={selectedCertificate.verificationUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
										>
											<ExternalLink className="w-4 h-4" />
											Verify Certificate
										</a>
									)}
									{selectedCertificate.downloadUrl && selectedCertificate.downloadUrl !== '#' && (
										<a 
											href={selectedCertificate.downloadUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
										>
											<Download className="w-4 h-4" />
											Download PDF
										</a>
									)}
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}