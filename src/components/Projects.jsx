import { motion } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: "Immipass \u2013 Emergency Assistance App",
            description: "A mobile application designed to help users in foreign countries during emergencies using location-based assistance and optimized UI/UX.",
            tech: ["Flutter", "REST APIs", "Dart", "Geolocation"],
            github: "https://github.com/DinkarTiwari03",
            demo: "#",
            featured: true
        },
        {
            title: "TaskFlow Manager",
            description: "A full-stack task management application with real-time updates and team collaboration features.",
            tech: ["React.js", "Node.js", "Express", "MongoDB"],
            github: "https://github.com/DinkarTiwari03",
            demo: "#",
            featured: false
        },
        {
            title: "Weatherize App",
            description: "A cross-platform mobile application providing real-time weather forecasting using public weather APIs.",
            tech: ["Flutter", "RESTful API", "Provider"],
            github: "https://github.com/DinkarTiwari03",
            demo: "#",
            featured: false
        }
    ];

    return (
        <section id="projects" className="py-24 px-6 sm:px-12 z-10 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 flex flex-col items-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-accent">Projects</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-accent to-purple-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`glass-panel p-8 rounded-2xl flex flex-col group relative overflow-hidden transition-all duration-300 hover:-translate-y-2 ${project.featured ? 'md:col-span-2 md:flex-row gap-8 bg-gradient-to-br from-white/10 to-transparent border-accent/20' : ''}`}
                        >
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-purple-500/0 group-hover:from-accent/10 group-hover:to-purple-500/10 transition-colors duration-500 rounded-2xl pointer-events-none"></div>

                            <div className={`flex flex-col ${project.featured ? 'justify-between w-full' : 'h-full justify-between'}`}>
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 bg-white/5 rounded-xl group-hover:text-accent transition-colors">
                                            <Folder size={32} strokeWidth={1.5} />
                                        </div>
                                        <div className="flex gap-4">
                                            <a href={project.github} className="text-slate-400 hover:text-accent transition-colors" target="_blank" rel="noreferrer">
                                                <FaGithub size={20} />
                                            </a>
                                            <a href={project.demo} className="text-slate-400 hover:text-accent transition-colors" target="_blank" rel="noreferrer">
                                                <ExternalLink size={20} />
                                            </a>
                                        </div>
                                    </div>

                                    <h3 className={`font-bold text-white mb-4 group-hover:text-accent transition-colors ${project.featured ? 'text-3xl' : 'text-xl'}`}>{project.title}</h3>

                                    <p className="text-slate-400 mb-8 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto text-sm font-medium">
                                    {project.tech.map((tech, tIdx) => (
                                        <span key={tIdx} className={`px-3 py-1 rounded-full ${project.featured ? 'bg-accent/10 text-accent border border-accent/20' : 'text-slate-300 bg-white/5'}`}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-12"
                >
                    <a href="https://github.com/DinkarTiwari03" target="_blank" rel="noreferrer" className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors inline-flex items-center gap-2 font-medium">
                        View Full Archive <ExternalLink size={16} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
