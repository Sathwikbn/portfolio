import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Home = () => {
	return (
		<div className="min-h-screen flex items-center justify-center px-4">
			<div className="text-center relative z-10 max-w-4xl mx-auto">
				<motion.h1
					className="text-6xl md:text-8xl font-bold mb-6 relative tracking-tighter"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					Niladri Chatterjee
				</motion.h1>
				<motion.h1
					className="text-4xl md:text-6xl font-bold mb-6 relative tracking-tighter"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					I design & code for web
				</motion.h1>

				<motion.p
					className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					Software Developer specializing in full-stack development with expertise in React.js, Node.js, and modern web technologies. I value simple content structure, clean design patterns, and thoughtful efficient code.
				</motion.p>

				<motion.div
					className="flex justify-center space-x-4"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
				>
					<a
						href="./pdf/Niladri_Chatterjee(CV).pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
					>
						Download CV
					</a>
					<a
						href="/#/about"
						className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
					>
						About Me
					</a>
				</motion.div>

				<motion.div
					className="flex justify-center space-x-6 mt-12"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.6 }}
				>
					<a
						href="https://github.com/niladri-1"
						target="_blank"
						rel="noopener noreferrer"
						className="group p-2 hover:bg-white/10 rounded-full transition-colors"
					>
						<Github className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
					</a>
					<a
						href="https://linkedin.com/in/niladri1"
						target="_blank"
						rel="noopener noreferrer"
						className="group p-2 hover:bg-white/10 rounded-full transition-colors"
					>
						<Linkedin className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
					</a>
					<a
						href="mailto:code.niladri@gmail.com"
						className="group p-2 hover:bg-white/10 rounded-full transition-colors"
					>
						<Mail className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
					</a>
				</motion.div>
			</div>
		</div>
	);
};

export default Home;