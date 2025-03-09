'use client';

import { motion } from 'framer-motion';

const Loading = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center gap-8">
			<motion.div
				className="w-24 h-24 rounded-full border-4 border-white/20"
				style={{ borderTopColor: 'white' }}
				animate={{ rotate: 360 }}
				transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
			/>
			<motion.div
				className="text-2xl font-bold text-white/80"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				Loading...
			</motion.div>
		</div>
	);
};

export default Loading;