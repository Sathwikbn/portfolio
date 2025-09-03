'use client';

import type { Metadata } from 'next';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission here
		console.log('Form submitted:', formData);
		// Reset form
		setFormData({
			name: '',
			email: '',
			subject: '',
			message: ''
		});
	};

	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
			<div className="text-center mb-12">
				<motion.h2 
					className="text-4xl font-bold mb-4 text-white"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					Get In Touch
				</motion.h2>
				<motion.p 
					className="text-gray-400 max-w-3xl mx-auto"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					I'm always interested in new opportunities, collaborations, and interesting projects. Feel free to reach out!
				</motion.p>
			</div>

			<div className="grid lg:grid-cols-2 gap-12">
				{/* Contact Information */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
				>
					<h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
					
					<div className="space-y-6">
						<div className="flex items-center gap-4">
							<div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
								<Mail className="w-5 h-5 text-gray-300" />
							</div>
							<div>
								<p className="text-gray-400 text-sm">Email</p>
								<p className="text-white">sathwiksathwikbn138@gmail.com</p>
							</div>
						</div>

						<div className="flex items-center gap-4">
							<div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
								<Phone className="w-5 h-5 text-gray-300" />
							</div>
							<div>
								<p className="text-gray-400 text-sm">Phone</p>
								<p className="text-white">+91 9428697768</p>
							</div>
						</div>

						<div className="flex items-center gap-4">
							<div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
								<MapPin className="w-5 h-5 text-gray-300" />
							</div>
							<div>
								<p className="text-gray-400 text-sm">Location</p>
								<p className="text-white">Bengaluru, Karnataka, India</p>
							</div>
						</div>
					</div>

					{/* Social Links */}
					<div className="mt-8">
						<h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
						<div className="flex gap-4">
							<a 
								href="https://github.com/sathwikbn" 
								target="_blank" 
								rel="noopener noreferrer"
								className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
							>
								<Github className="w-5 h-5 text-gray-300" />
							</a>
							<a 
								href="https://linkedin.com/in/sathwik-bn" 
								target="_blank" 
								rel="noopener noreferrer"
								className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
							>
								<Linkedin className="w-5 h-5 text-gray-300" />
							</a>
							<a 
								href="https://twitter.com/sathwikbn" 
								target="_blank" 
								rel="noopener noreferrer"
								className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
							>
								<Twitter className="w-5 h-5 text-gray-300" />
							</a>
						</div>
					</div>
				</motion.div>

				{/* Contact Form */}
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
				>
					<h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
					
					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="grid md:grid-cols-2 gap-4">
							<div>
								<label htmlFor="name" className="block text-gray-400 text-sm mb-2">
									Your Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gray-500 transition-colors"
									placeholder="Enter your name"
								/>
							</div>
							<div>
								<label htmlFor="email" className="block text-gray-400 text-sm mb-2">
									Your Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gray-500 transition-colors"
									placeholder="Enter your email"
								/>
							</div>
						</div>

						<div>
							<label htmlFor="subject" className="block text-gray-400 text-sm mb-2">
								Subject
							</label>
							<input
								type="text"
								id="subject"
								name="subject"
								value={formData.subject}
								onChange={handleChange}
								required
								className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gray-500 transition-colors"
								placeholder="Enter subject"
							/>
						</div>

						<div>
							<label htmlFor="message" className="block text-gray-400 text-sm mb-2">
								Message
							</label>
							<textarea
								id="message"
								name="message"
								value={formData.message}
								onChange={handleChange}
								required
								rows={6}
								className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gray-500 transition-colors resize-none"
								placeholder="Enter your message"
							/>
						</div>

						<button
							type="submit"
							className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
						>
							<Send className="w-4 h-4" />
							Send Message
						</button>
					</form>
				</motion.div>
			</div>

			{/* Quick Contact Cards */}
			<motion.div 
				className="mt-16 grid md:grid-cols-3 gap-6"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.6 }}
			>
				<div className="bg-gray-800/50 rounded-xl p-6 text-center backdrop-blur-sm">
					<div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
						<Mail className="w-6 h-6 text-gray-300" />
					</div>
					<h4 className="text-white font-semibold mb-2">Email Me</h4>
					<p className="text-gray-400 text-sm">For project inquiries and collaborations</p>
				</div>

				<div className="bg-gray-800/50 rounded-xl p-6 text-center backdrop-blur-sm">
					<div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
						<Github className="w-6 h-6 text-gray-300" />
					</div>
					<h4 className="text-white font-semibold mb-2">GitHub</h4>
					<p className="text-gray-400 text-sm">Check out my projects and contributions</p>
				</div>

				<div className="bg-gray-800/50 rounded-xl p-6 text-center backdrop-blur-sm">
					<div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
						<Linkedin className="w-6 h-6 text-gray-300" />
					</div>
					<h4 className="text-white font-semibold mb-2">LinkedIn</h4>
					<p className="text-gray-400 text-sm">Connect with me professionally</p>
				</div>
			</motion.div>
		</div>
	);
}