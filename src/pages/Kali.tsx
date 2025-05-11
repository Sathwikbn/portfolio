'use client';

import { motion } from 'framer-motion';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { Download, Terminal, HardDrive, MemoryStick as Memory, User, KeyRound, FileDown } from 'lucide-react';

const Kali = () => {
	const specifications = [
		{ icon: <Memory className="w-5 h-5" />, label: 'RAM', value: '2GB' },
		{ icon: <HardDrive className="w-5 h-5" />, label: 'Storage', value: '90GB (Flexible)' },
		{ icon: <User className="w-5 h-5" />, label: 'Username', value: 'kali' },
		{ icon: <KeyRound className="w-5 h-5" />, label: 'Password', value: 'kali@nil' },
		{ icon: <FileDown className="w-5 h-5" />, label: 'File Size', value: '11GB' },
		{ icon: <Terminal className="w-5 h-5" />, label: 'Type', value: 'OVA File' },
	];

	return (
		<div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20">
			<ScrollAnimation>
				<div className="flex items-center gap-4 mb-8">
					<div className="p-3 bg-[#0A2335] rounded-xl">
						<Terminal className="w-8 h-8 text-[#367BF0]" />
					</div>
					<h1 className="text-4xl font-bold gradient-text">Kali Linux VirtualBox Image</h1>
				</div>
			</ScrollAnimation>

			<ScrollAnimation>
				<div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-white/5 mb-8">
					<h2 className="text-xl font-semibold mb-4">System Specifications</h2>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
						{specifications.map((spec) => (
							<div
								key={spec.label}
								className="bg-white/5 p-4 rounded-lg flex items-start gap-3 hover:bg-white/10 transition-colors"
							>
								<div className="text-gray-400">{spec.icon}</div>
								<div>
									<p className="text-sm text-gray-400">{spec.label}</p>
									<p className="text-white font-medium">{spec.value}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</ScrollAnimation>

			<ScrollAnimation>
				<div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-white/5 mb-8">
					<h2 className="text-xl font-semibold mb-4">Important Information</h2>
					<ul className="space-y-2 text-gray-300">
						<li>• This is a pre-configured Kali Linux virtual machine for VirtualBox</li>
						<li>• The storage is dynamically allocated, meaning it will only use space as needed</li>
						<li>• Default login credentials are provided above</li>
						<li>• Make sure you have VirtualBox installed before downloading</li>
						<li>• Ensure you have at least 11GB of free space for the download</li>
					</ul>
				</div>
			</ScrollAnimation>

			<ScrollAnimation>
				<div className="text-center">
					<motion.a
						href="https://mega.nz/file/Uid1DI6T#GXSPao6M3evGdKYVM-koj9zUdC31KnteKDW--5ZjG50"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-8 py-4 bg-[#367BF0] text-white rounded-xl font-medium hover:bg-[#2461D4] transition-colors group"
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
					>
						<Download className="w-5 h-5" />
						Download Kali Linux OVA
						<span className="text-sm opacity-80">(11GB)</span>
					</motion.a>
					<p className="mt-4 text-sm text-gray-400">
						By downloading, you agree to use this image responsibly and in accordance with applicable laws
					</p>
				</div>
			</ScrollAnimation>
		</div>
	);
};

export default Kali;