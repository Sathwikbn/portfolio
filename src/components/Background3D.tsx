'use client';

import React, { useEffect, useState } from 'react';

const Background3D = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		let animationFrame: number;
		
		const handleMouseMove = (e: MouseEvent) => {
			if (animationFrame) {
				cancelAnimationFrame(animationFrame);
			}
			
			animationFrame = requestAnimationFrame(() => {
				const x = (e.clientX - window.innerWidth / 2) * 0.1;
				const y = (e.clientY - window.innerHeight / 2) * 0.1;
				setMousePosition({ x, y });
			});
		};

		window.addEventListener('mousemove', handleMouseMove, { passive: true });
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			if (animationFrame) {
				cancelAnimationFrame(animationFrame);
			}
		};
	}, []);

	return (
		<>
			<div className="canvas-container" />
			<div className="fixed inset-0 -z-10">
				<div className="absolute inset-0 gradient-grid" />
				<div
					className="spotlight"
					style={{
						transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
					}}
				/>
			</div>
		</>
	);
};

export default Background3D;