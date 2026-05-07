import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            skills: [
                { name: "Java", level: 85 },
                { name: "Python", level: 80 },
                { name: "C", level: 75 },
                { name: "Dart", level: 90 }
            ]
        },
        {
            title: "Frontend",
            skills: [
                { name: "React.js", level: 85 },
                { name: "HTML/CSS", level: 95 },
                { name: "JavaScript", level: 85 }
            ]
        },
        {
            title: "Backend & DB",
            skills: [
                { name: "Node.js", level: 80 },
                { name: "Express.js", level: 75 },
                { name: "MongoDB", level: 80 },
                { name: "SQL", level: 75 }
            ]
        },
        {
            title: "Tools",
            skills: [
                { name: "Git/GitHub", level: 90 },
                { name: "VS Code", level: 95 },
                { name: "IntelliJ/PyCharm", level: 85 }
            ]
        }
    ];

    return (
        <section id="skills" className="py-24 px-6 sm:px-12 z-10 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-accent">Skills</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-accent to-purple-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass-panel p-8 rounded-2xl"
                        >
                            <h3 className="text-xl font-semibold mb-6 text-white border-b border-white/10 pb-2">{category.title}</h3>
                            <div className="space-y-6">
                                {category.skills.map((skill, sIdx) => (
                                    <div key={sIdx}>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-slate-300 font-medium">{skill.name}</span>
                                            <span className="text-accent">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-white/5 rounded-full h-2">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.2 + (sIdx * 0.1) }}
                                                className="bg-gradient-to-r from-accent to-purple-500 h-2 rounded-full relative"
                                            >
                                                <div className="absolute top-0 right-0 bottom-0 w-2 rounded-full bg-white/50 blur-[2px]"></div>
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Floating Tech Icons - conceptual representation */}
                <div className="mt-16 sm:mt-24 flex flex-wrap justify-center gap-4 sm:gap-8 opacity-60">
                    {['Java', 'Python', 'Dart', 'React', 'NodeJS', 'MongoDB', 'Flutter'].map((tech, i) => (
                        <motion.div
                            key={i}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                            className="px-6 py-3 glass-panel rounded-full text-slate-300 text-sm font-medium tracking-wide"
                        >
                            {tech}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
