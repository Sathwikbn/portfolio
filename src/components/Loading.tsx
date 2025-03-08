'use client';

import { motion } from 'framer-motion';

const Loading = () => {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<motion.div
				className="w-16 h-16 border-4 border-white rounded-full border-t-transparent"
				animate={{ rotate: 360 }}
				transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
			/>
		</div>
	);
};

export default Loading;