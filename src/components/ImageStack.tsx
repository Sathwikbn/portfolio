'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { X, Maximize2 } from 'lucide-react';

interface ImageStackProps {
	images: string[];
	title: string;
	className?: string;
}

export default function ImageStack({ images, title, className = '' }: ImageStackProps) {
	const [isHovered, setIsHovered] = useState(false);
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	const fullscreenRef = useRef<HTMLDivElement>(null);

	const handleMouseEnter = () => {
		if (hoverTimeoutRef.current) {
			clearTimeout(hoverTimeoutRef.current);
		}
		hoverTimeoutRef.current = setTimeout(() => {
			setIsHovered(true);
		}, 200);
	};

	const handleMouseLeave = () => {
		if (hoverTimeoutRef.current) {
			clearTimeout(hoverTimeoutRef.current);
		}
		hoverTimeoutRef.current = setTimeout(() => {
			setIsHovered(false);
		}, 100);
	};

	const openFullscreen = async (imageIndex: number = 0) => {
		if (fullscreenRef.current) {
			try {
				setCurrentImageIndex(imageIndex);
				await fullscreenRef.current.requestFullscreen();
				setIsFullscreen(true);
			} catch (error) {
				console.log('Fullscreen not supported or failed:', error);
			}
		}
	};

	const closeFullscreen = async () => {
		try {
			if (document.fullscreenElement) {
				await document.exitFullscreen();
			}
			setIsFullscreen(false);
		} catch (error) {
			console.log('Error exiting fullscreen:', error);
		}
	};

	// Handle fullscreen change events
	useEffect(() => {
		const handleFullscreenChange = () => {
			if (!document.fullscreenElement) {
				setIsFullscreen(false);
			}
		};

		document.addEventListener('fullscreenchange', handleFullscreenChange);
		return () => {
			document.removeEventListener('fullscreenchange', handleFullscreenChange);
		};
	}, []);

	// Handle keyboard events in fullscreen
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (isFullscreen) {
				if (e.key === 'Escape') {
					closeFullscreen();
				} else if (e.key === 'ArrowLeft') {
					setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
				} else if (e.key === 'ArrowRight') {
					setCurrentImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
				}
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [isFullscreen, images.length]);

	return (
		<>
			<div 
				className={`relative ${className} cursor-pointer`}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				{/* Main image (always visible) */}
				<motion.img
					src={images[0]}
					alt={`${title} - Main view`}
					className="w-full h-48 sm:h-52 md:h-48 object-cover border-2 border-white/20 shadow-2xl rounded-lg"
					animate={{
						scale: isHovered ? 1.05 : 1,
					}}
					transition={{ duration: 0.3 }}
				/>

				{/* Image count indicator */}
				<div className="absolute bottom-3 right-3 flex space-x-1">
					{images.map((_, index) => (
						<div
							key={index}
							className="w-2 h-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/20"
						/>
					))}
				</div>

				{/* Hover instruction text */}
				<div className="absolute top-3 left-3 px-2 py-1 bg-black/50 backdrop-blur-sm rounded text-white text-xs font-medium">
					Hover to view all images
				</div>
			</div>

			{/* Hover Overlay */}
			<AnimatePresence>
				{isHovered && (
					<motion.div
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
					>
						{/* Overlay content */}
						<motion.div
							className="relative w-full h-full max-w-7xl max-h-[90vh] p-8"
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							transition={{ duration: 0.3, delay: 0.1 }}
						>
							{/* Project title */}
							<motion.h2
								className="text-3xl font-bold text-white mb-8 text-center"
								initial={{ y: -20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.4, delay: 0.2 }}
							>
								{title}
							</motion.h2>

							{/* Images grid */}
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
								{images.map((image, index) => (
									<motion.div
										key={index}
										className="relative group cursor-pointer"
										initial={{ y: 50, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
										onClick={() => openFullscreen(index)}
									>
										<img
											src={image}
											alt={`${title} - View ${index + 1}`}
											className="w-full h-80 md:h-96 object-cover rounded-xl border-2 border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-300"
										/>
										<div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded px-3 py-1 text-white text-sm font-medium">
											View {index + 1}
										</div>
										<div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity">
											<Maximize2 className="w-4 h-4 text-white" />
										</div>
									</motion.div>
								))}
							</div>

							{/* Instructions */}
							<motion.div
								className="text-center mt-8 text-gray-300"
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.4, delay: 0.6 }}
							>
								<p>Click any image to open in fullscreen • Move mouse away to close</p>
							</motion.div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Fullscreen Container */}
			<div
				ref={fullscreenRef}
				className={`${isFullscreen ? 'fixed inset-0 bg-black z-[9999] flex items-center justify-center' : 'hidden'}`}
			>
				{isFullscreen && (
					<>
						{/* Fullscreen image */}
						<motion.img
							src={images[currentImageIndex]}
							alt={`${title} - View ${currentImageIndex + 1}`}
							className="max-w-full max-h-full object-contain"
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.3 }}
						/>

						{/* Fullscreen controls */}
						<div className="absolute top-4 right-4 flex space-x-2">
							<button
								onClick={closeFullscreen}
								className="p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
							>
								<X className="w-6 h-6 text-white" />
							</button>
						</div>

						{/* Navigation arrows */}
						{images.length > 1 && (
							<>
								<button
									onClick={() => setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
									className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
								>
									<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
									</svg>
								</button>
								<button
									onClick={() => setCurrentImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
									className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
								>
									<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
									</svg>
								</button>
							</>
						)}

						{/* Image counter */}
						<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded px-4 py-2 text-white text-sm">
							{currentImageIndex + 1} / {images.length}
						</div>

						{/* Instructions */}
						<div className="absolute bottom-4 right-4 text-white text-sm bg-black/50 backdrop-blur-sm rounded px-3 py-1">
							ESC to exit • ← → to navigate
						</div>
					</>
				)}
			</div>
		</>
	);
}
