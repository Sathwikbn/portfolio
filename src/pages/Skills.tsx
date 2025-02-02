import { motion } from 'framer-motion';
import { Brain, PenTool as Tool, Code2, Layout, Server, Database, Users, Wrench, Lightbulb, MessageSquare } from 'lucide-react';
import {
	CppLogo, PythonLogo, JavaScriptLogo, SQLLogo,
	HTML5Logo, CSSLogo, ReactLogo,
	NodeLogo, ReduxLogo, FlaskLogo,
	OracleLogo, MySQLLogo, MongoDBLogo, FirebaseLogo,
	VSCodeLogo, GitLogo
} from '../components/TechLogos';

const skills = [
	{
		category: 'Programming Languages',
		icon: <Code2 className="w-6 h-6" />,
		items: [
			{ name: 'C++', icon: <CppLogo /> },
			{ name: 'Python', icon: <PythonLogo /> },
			{ name: 'JavaScript', icon: <JavaScriptLogo /> },
			{ name: 'SQL', icon: <SQLLogo /> }
		]
	},
	{
		category: 'Frontend Skills',
		icon: <Layout className="w-6 h-6" />,
		items: [
			{ name: 'HTML5', icon: <HTML5Logo /> },
			{ name: 'CSS', icon: <CSSLogo /> },
			{ name: 'JavaScript', icon: <JavaScriptLogo /> },
			{ name: 'React.js', icon: <ReactLogo /> }
		]
	},
	{
		category: 'Frameworks & Libraries',
		icon: <Server className="w-6 h-6" />,
		items: [
			{ name: 'React.js', icon: <ReactLogo /> },
			{ name: 'Redux', icon: <ReduxLogo /> },
			{ name: 'Node.js', icon: <NodeLogo /> },
			{ name: 'Flask', icon: <FlaskLogo /> }
		]
	},
	{
		category: 'Databases',
		icon: <Database className="w-6 h-6" />,
		items: [
			{ name: 'Oracle', icon: <OracleLogo /> },
			{ name: 'MySQL', icon: <MySQLLogo /> },
			{ name: 'MongoDB', icon: <MongoDBLogo /> },
			{ name: 'Firebase', icon: <FirebaseLogo /> }
		]
	},
	{
		category: 'Tools',
		icon: <Tool className="w-6 h-6" />,
		items: [
			{ name: 'VS Code', icon: <VSCodeLogo /> },
			{ name: 'Workbench', icon: <MySQLLogo /> },
			{ name: 'Compass', icon: <MongoDBLogo /> },
			{ name: 'Git', icon: <GitLogo /> },
			{ name: 'GitHub', icon: <GitLogo /> }
		]
	},
	{
		category: 'Soft Skills',
		icon: <Brain className="w-6 h-6" />,
		items: [
			{ name: 'Teamwork', icon: <Users className="w-4 h-4" /> },
			{ name: 'Troubleshooting', icon: <Wrench className="w-4 h-4" /> },
			{ name: 'Progressive', icon: <Lightbulb className="w-4 h-4" /> },
			{ name: 'Communication', icon: <MessageSquare className="w-4 h-4" /> }
		]
	}
];

const Skills = () => {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<motion.h2
					className="text-4xl font-bold mb-12 gradient-text"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					Skills & Expertise
				</motion.h2>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{skills.map((skillGroup, index) => (
						<motion.div
							key={skillGroup.category}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-colors"
						>
							<div className="flex items-center space-x-3 mb-4">
								<div className="p-2 bg-white/10 rounded-lg">
									{skillGroup.icon}
								</div>
								<h3 className="text-xl font-semibold">{skillGroup.category}</h3>
							</div>
							<div className="grid grid-cols-2 gap-4">
								{skillGroup.items.map((skill, skillIndex) => (
									<motion.div
										key={skill.name}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.5, delay: index * 0.2 + skillIndex * 0.1 }}
										className="bg-gray-700/50 px-4 py-3 rounded-lg text-center hover:bg-white/10 transition-colors group"
									>
										<div className="flex items-center justify-center space-x-2">
											<div className="text-gray-400 group-hover:text-white transition-colors">
												{skill.icon}
											</div>
											<span className="text-gray-400 group-hover:text-white transition-colors">
												{skill.name}
											</span>
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</div>
	);
};

export default Skills;