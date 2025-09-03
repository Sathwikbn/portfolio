'use client';

export default function SkillsPage() {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-7xl mx-auto pb-20">
			<div className="text-center mb-12">
				<h2 className="text-4xl font-bold mb-4 text-white">Skills</h2>
				<p className="text-gray-400 max-w-3xl mx-auto">
					Technologies and skills I'm learning and working with as I grow in software development
				</p>
			</div>

			{/* 3x2 Grid Layout */}
			<div className="grid lg:grid-cols-3 gap-8 mb-8">
				{/* Programming Languages */}
				<div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
					<div className="flex items-center mb-6">
						<div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center mr-3">
							<span className="text-white text-lg">&lt;/&gt;</span>
						</div>
						<h3 className="text-xl font-semibold text-white">Programming Languages</h3>
					</div>
					<div className="grid grid-cols-2 gap-3">
						<div className="bg-gray-700/50 rounded-xl p-4 flex items-center gap-3 hover:bg-gray-600/50 transition-all">
							<div className="w-10 h-10 rounded-lg bg-gray-600 flex items-center justify-center">
								<span className="text-white text-xs font-bold">PY</span>
							</div>
							<span className="text-gray-200 font-medium">Python</span>
						</div>
						<div className="bg-gray-700/50 rounded-xl p-4 flex items-center gap-3 hover:bg-gray-600/50 transition-all">
							<div className="w-10 h-10 rounded-lg bg-gray-600 flex items-center justify-center">
								<span className="text-white text-xs font-bold">JS</span>
							</div>
							<span className="text-gray-200 font-medium">JavaScript</span>
						</div>
						<div className="bg-gray-700/50 rounded-xl p-4 flex items-center gap-3 hover:bg-gray-600/50 transition-all">
							<div className="w-10 h-10 rounded-lg bg-gray-600 flex items-center justify-center">
								<span className="text-white text-sm font-bold">C</span>
							</div>
							<span className="text-gray-200 font-medium">C</span>
						</div>
						<div className="bg-gray-700/50 rounded-xl p-4 flex items-center gap-3 hover:bg-gray-600/50 transition-all">
							<div className="w-10 h-10 rounded-lg bg-gray-600 flex items-center justify-center">
								<span className="text-white text-xs font-bold">JAVA</span>
							</div>
							<span className="text-gray-200 font-medium">Java</span>
						</div>
					</div>
				</div>

				{/* Frameworks & Libraries */}
				<div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
					<div className="flex items-center mb-6">
						<div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center mr-3">
							<span className="text-white text-xs font-bold">LIB</span>
						</div>
						<h3 className="text-xl font-semibold text-white">Frameworks & Libraries</h3>
					</div>
					<div className="grid grid-cols-2 gap-3">
						<div className="bg-gray-700/50 rounded-xl p-4 flex items-center gap-3 hover:bg-gray-600/50 transition-all">
							<div className="w-10 h-10 rounded-lg bg-gray-600 flex items-center justify-center">
								<span className="text-white text-xs font-bold">R</span>
							</div>
							<span className="text-gray-200 font-medium">React</span>
						</div>
						<div className="bg-gray-700/50 rounded-xl p-4 flex items-center gap-3 hover:bg-gray-600/50 transition-all">
							<div className="w-10 h-10 rounded-lg bg-gray-600 flex items-center justify-center">
								<span className="text-white text-xs font-bold">CSS</span>
							</div>
							<span className="text-gray-200 font-medium">Tailwind CSS</span>
						</div>
						<div className="bg-gray-700/50 rounded-xl p-4 flex items-center gap-3 hover:bg-gray-600/50 transition-all">
							<div className="w-10 h-10 rounded-lg bg-gray-600 flex items-center justify-center">
								<span className="text-white text-sm font-bold">B</span>
							</div>
							<span className="text-gray-200 font-medium">Bootstrap</span>
						</div>
						<div className="bg-gray-700/50 rounded-xl p-4 flex items-center gap-3 hover:bg-gray-600/50 transition-all">
							<div className="w-10 h-10 rounded-lg bg-gray-600 flex items-center justify-center">
								<span className="text-white text-xs font-bold">CV</span>
							</div>
							<span className="text-gray-200 font-medium">OpenCV</span>
						</div>
					</div>
				</div>

				{/* Tools & Platforms */}
				<div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
					<div className="flex items-center mb-6">
						<div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center mr-3">
							<span className="text-white text-xs font-bold">TL</span>
						</div>
						<h3 className="text-xl font-semibold text-white">Tools & Platforms</h3>
					</div>
					<div className="grid grid-cols-2 gap-3">
						<div className="bg-gray-700/50 rounded-xl p-4 flex items-center gap-3 hover:bg-gray-600/50 transition-all">
							<div className="w-10 h-10 rounded-lg bg-gray-600 flex items-center justify-center">
								<span className="text-white text-xs font-bold">GT</span>
							</div>
							<span className="text-gray-200 font-medium">Git</span>
						</div>
						<div className="bg-gray-700/50 rounded-xl p-4 flex items-center gap-3 hover:bg-gray-600/50 transition-all">
							<div className="w-10 h-10 rounded-lg bg-gray-600 flex items-center justify-center">
								<span className="text-white text-xs font-bold">GH</span>
							</div>
							<span className="text-gray-200 font-medium">GitHub</span>
						</div>
						<div className="bg-gray-700/50 rounded-xl p-4 flex items-center gap-3 hover:bg-gray-600/50 transition-all">
							<div className="w-10 h-10 rounded-lg bg-gray-600 flex items-center justify-center">
								<span className="text-white text-xs font-bold">ST</span>
							</div>
							<span className="text-gray-200 font-medium">Streamlit</span>
						</div>
						<div className="bg-gray-700/50 rounded-xl p-4 flex items-center gap-3 hover:bg-gray-600/50 transition-all">
							<div className="w-10 h-10 rounded-lg bg-gray-600 flex items-center justify-center">
								<span className="text-white text-xs font-bold">VS</span>
							</div>
							<span className="text-gray-200 font-medium">VS Code</span>
						</div>
					</div>
				</div>
			</div>

			{/* Second Row - 3 columns */}
			<div className="grid lg:grid-cols-3 gap-8">
				{/* Databases */}
				<div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
					<div className="flex items-center mb-6">
						<div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center mr-3">
							<span className="text-white text-xs font-bold">DB</span>
						</div>
						<h3 className="text-xl font-semibold text-white">Databases</h3>
					</div>
					<div className="grid grid-cols-2 gap-3">
						<div className="bg-gray-700/50 rounded-xl p-4 flex items-center gap-3 hover:bg-gray-600/50 transition-all">
							<div className="w-10 h-10 rounded-lg bg-gray-600 flex items-center justify-center">
								<span className="text-white text-xs font-bold">SQL</span>
							</div>
							<span className="text-gray-200 font-medium">MySQL</span>
						</div>
						<div className="bg-gray-700/50 rounded-xl p-4 flex items-center gap-3 hover:bg-gray-600/50 transition-all">
							<div className="w-10 h-10 rounded-lg bg-gray-600 flex items-center justify-center">
								<span className="text-white text-xs font-bold">MG</span>
							</div>
							<span className="text-gray-200 font-medium">MongoDB</span>
						</div>
						<div className="bg-gray-700/50 rounded-xl p-4 flex items-center gap-3 hover:bg-gray-600/50 transition-all">
							<div className="w-10 h-10 rounded-lg bg-gray-600 flex items-center justify-center">
								<span className="text-white text-xs font-bold">SQL</span>
							</div>
							<span className="text-gray-200 font-medium">SQL</span>
						</div>
						<div className="bg-gray-700/50 rounded-xl p-4 flex items-center gap-3 hover:bg-gray-600/50 transition-all">
							<div className="w-10 h-10 rounded-lg bg-gray-600 flex items-center justify-center">
								<span className="text-white text-xs font-bold">DB</span>
							</div>
							<span className="text-gray-200 font-medium">Database Design</span>
						</div>
					</div>
				</div>

				{/* Technologies & Methodologies */}
				<div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
					<div className="flex items-center mb-6">
						<div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center mr-3">
							<span className="text-white text-xs font-bold">TM</span>
						</div>
						<h3 className="text-xl font-semibold text-white">Technologies & Methodologies</h3>
					</div>
					<div className="grid grid-cols-2 gap-3">
						<div className="bg-gray-700/50 rounded-xl p-4 flex items-center gap-3 hover:bg-gray-600/50 transition-all">
							<div className="w-10 h-10 rounded-lg bg-gray-600 flex items-center justify-center">
								<span className="text-white text-xs font-bold">ML</span>
							</div>
							<span className="text-gray-200 font-medium">Machine Learning</span>
						</div>
						<div className="bg-gray-700/50 rounded-xl p-4 flex items-center gap-3 hover:bg-gray-600/50 transition-all">
							<div className="w-10 h-10 rounded-lg bg-gray-600 flex items-center justify-center">
								<span className="text-white text-xs font-bold">DS</span>
							</div>
							<span className="text-gray-200 font-medium">Data Structures</span>
						</div>
						<div className="bg-gray-700/50 rounded-xl p-4 flex items-center gap-3 hover:bg-gray-600/50 transition-all">
							<div className="w-10 h-10 rounded-lg bg-gray-600 flex items-center justify-center">
								<span className="text-white text-xs font-bold">AL</span>
							</div>
							<span className="text-gray-200 font-medium">Algorithms</span>
						</div>
						<div className="bg-gray-700/50 rounded-xl p-4 flex items-center gap-3 hover:bg-gray-600/50 transition-all">
							<div className="w-10 h-10 rounded-lg bg-gray-600 flex items-center justify-center">
								<span className="text-white text-xs font-bold">AG</span>
							</div>
							<span className="text-gray-200 font-medium">Agile (Scrum)</span>
						</div>
					</div>
				</div>

				{/* Additional Tools */}
				<div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
					<div className="flex items-center mb-6">
						<div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center mr-3">
							<span className="text-white text-xs font-bold">AT</span>
						</div>
						<h3 className="text-xl font-semibold text-white">Additional Tools</h3>
					</div>
					<div className="grid grid-cols-2 gap-3">
						<div className="bg-gray-700/50 rounded-xl p-4 flex items-center gap-3 hover:bg-gray-600/50 transition-all">
							<div className="w-10 h-10 rounded-lg bg-gray-600 flex items-center justify-center">
								<span className="text-white text-xs font-bold">PM</span>
							</div>
							<span className="text-gray-200 font-medium">Postman</span>
						</div>
						<div className="bg-gray-700/50 rounded-xl p-4 flex items-center gap-3 hover:bg-gray-600/50 transition-all">
							<div className="w-10 h-10 rounded-lg bg-gray-600 flex items-center justify-center">
								<span className="text-white text-xs font-bold">JS</span>
							</div>
							<span className="text-gray-200 font-medium">jQuery</span>
						</div>
						<div className="bg-gray-700/50 rounded-xl p-4 flex items-center gap-3 hover:bg-gray-600/50 transition-all">
							<div className="w-10 h-10 rounded-lg bg-gray-600 flex items-center justify-center">
								<span className="text-white text-xs font-bold">API</span>
							</div>
							<span className="text-gray-200 font-medium">API Testing</span>
						</div>
						<div className="bg-gray-700/50 rounded-xl p-4 flex items-center gap-3 hover:bg-gray-600/50 transition-all">
							<div className="w-10 h-10 rounded-lg bg-gray-600 flex items-center justify-center">
								<span className="text-white text-xs font-bold">WEB</span>
							</div>
							<span className="text-gray-200 font-medium">Web Development</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}