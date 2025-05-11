'use client';

import { motion } from 'framer-motion';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { Download, Terminal, HardDrive, MemoryStick as Memory, User, KeyRound, FileDown, Shield, Box, Cpu } from 'lucide-react';

const Kali = () => {
	const specifications = [
		{ icon: <Memory className="w-5 h-5" />, label: 'RAM', value: '2GB' },
		{ icon: <HardDrive className="w-5 h-5" />, label: 'Storage', value: '90GB (Flexible)' },
		{ icon: <User className="w-5 h-5" />, label: 'Username', value: 'kali' },
		{ icon: <KeyRound className="w-5 h-5" />, label: 'Password', value: 'kali@nil' },
		{ icon: <FileDown className="w-5 h-5" />, label: 'File Size', value: '11GB' },
		{ icon: <Box className="w-5 h-5" />, label: 'Format', value: 'OVA File' },
	];

	const features = [
		{
			icon: <Shield className="w-6 h-6" />,
			title: "Pre-configured Security Tools",
			description: "Ready-to-use penetration testing and security assessment tools"
		},
		{
			icon: <Cpu className="w-6 h-6" />,
			title: "Optimized Performance",
			description: "Configured for optimal performance in VirtualBox environment"
		},
		{
			icon: <Terminal className="w-6 h-6" />,
			title: "Custom Configuration",
			description: "Pre-configured settings for immediate use after import"
		}
	];

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<div className="relative overflow-hidden pt-20 pb-32">
				<div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
					<div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
				</div>

				<div className="relative max-w-4xl mx-auto px-4">
					<ScrollAnimation>
						<div className="text-center mb-12">
							<div className="flex justify-center mb-6">
								<div className="p-3 bg-[#0A2335] rounded-xl">
									<Terminal className="w-12 h-12 text-[#367BF0]" />
								</div>
							</div>
							<h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
								Kali Linux for VirtualBox
							</h1>
							<p className="text-xl text-gray-400 mb-8">
								Pre-configured Kali Linux OVA with essential security tools
							</p>
							<motion.a
								href="https://mega.nz/file/Uid1DI6T#GXSPao6M3evGdKYVM-koj9zUdC31KnteKDW--5ZjG50"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-3 px-8 py-4 bg-[#367BF0] text-white rounded-xl font-medium hover:bg-[#2461D4] transition-all group"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								<Download className="w-5 h-5" />
								Download OVA File
								<span className="text-sm opacity-80">(11GB)</span>
							</motion.a>
						</div>
					</ScrollAnimation>

					{/* Features Grid */}
					<ScrollAnimation>
						<div className="grid md:grid-cols-3 gap-6 mb-16">
							{features.map((feature, index) => (
								<motion.div
									key={feature.title}
									className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/5"
									whileHover={{ scale: 1.02 }}
								>
									<div className="text-[#367BF0] mb-4">{feature.icon}</div>
									<h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
									<p className="text-gray-400 text-sm">{feature.description}</p>
								</motion.div>
							))}
						</div>
					</ScrollAnimation>
				</div>
			</div>

			{/* Specifications Section */}
			<div className="bg-black/50 py-24">
				<div className="max-w-4xl mx-auto px-4">
					<ScrollAnimation>
						<h2 className="text-3xl font-bold mb-8 gradient-text">System Specifications</h2>
						<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
							{specifications.map((spec) => (
								<motion.div
									key={spec.label}
									className="bg-gray-800/50 p-4 rounded-xl backdrop-blur-sm border border-white/5 hover:bg-gray-800/70 transition-all"
									whileHover={{ scale: 1.02 }}
								>
									<div className="flex items-start gap-3">
										<div className="text-[#367BF0]">{spec.icon}</div>
										<div>
											<p className="text-sm text-gray-400">{spec.label}</p>
											<p className="text-white font-medium">{spec.value}</p>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</ScrollAnimation>

					<ScrollAnimation>
						<div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-white/5">
							<h2 className="text-xl font-semibold mb-4">Important Information</h2>
							<ul className="space-y-3 text-gray-300">
								<li className="flex items-start gap-2">
									<span className="text-[#367BF0]">•</span>
									<span>Pre-configured Kali Linux virtual machine optimized for VirtualBox</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-[#367BF0]">•</span>
									<span>Dynamically allocated storage - only uses space as needed</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-[#367BF0]">•</span>
									<span>Includes common security tools and penetration testing software</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-[#367BF0]">•</span>
									<span>Requires VirtualBox installation and 11GB free space</span>
								</li>
							</ul>
						</div>
					</ScrollAnimation>

					<ScrollAnimation>
						<div className="text-center mt-12">
							<p className="text-sm text-gray-400 max-w-2xl mx-auto">
								By downloading, you agree to use this Kali Linux image responsibly and in accordance with applicable laws and regulations. This image is provided for educational and authorized testing purposes only.
							</p>
						</div>
					</ScrollAnimation>
				</div>
			</div>
		</div>
	);
};

export default Kali;