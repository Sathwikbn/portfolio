'use client';


import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<h2 className="text-4xl font-bold mb-12 gradient-text">Get in Touch</h2>

				<div className="grid md:grid-cols-2 gap-12">
					<div className="space-y-8">
						<h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
						<div className="space-y-4">
							<a
								href="mailto:code.niladri@gmail.com"
								className="group flex items-center space-x-3 p-2 w-fit hover:bg-white/10 rounded-full transition-colors"
							>
								<Mail className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
								<span className="text-gray-400 group-hover:text-white transition-colors">code.niladri@gmail.com</span>
							</a>
							<div className="group flex items-center space-x-3 p-2 w-fit">
								<Phone className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
								<span className="text-gray-400 group-hover:text-white transition-colors">+916296554939</span>
							</div>
							<div className="group flex items-center space-x-3 p-2 w-fit">
								<MapPin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
								<span className="text-gray-400 group-hover:text-white transition-colors">kolkata, India</span>
							</div>
						</div>
					</div>

					<div>
						<form className="space-y-4">
							<div>
								<label htmlFor="name" className="block text-sm font-medium mb-1">
									Name
								</label>
								<input
									type="text"
									id="name"
									className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-white/20 focus:ring-1 focus:ring-white/20 outline-none transition-colors"
								/>
							</div>

							<div>
								<label htmlFor="email" className="block text-sm font-medium mb-1">
									Email
								</label>
								<input
									type="email"
									id="email"
									className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-white/20 focus:ring-1 focus:ring-white/20 outline-none transition-colors"
								/>
							</div>

							<div>
								<label htmlFor="message" className="block text-sm font-medium mb-1">
									Message
								</label>
								<textarea
									id="message"
									rows={4}
									className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-white/20 focus:ring-1 focus:ring-white/20 outline-none transition-colors"
								></textarea>
							</div>

							<button
								type="submit"
								className="w-full px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
							>
								Send Message
							</button>
						</form>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Contact;