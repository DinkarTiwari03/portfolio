import { motion } from 'framer-motion';
import { Code2, Smartphone, Database, Server } from 'lucide-react';

const About = () => {
    const cards = [
        { icon: <Smartphone className="text-accent" size={24} />, title: "Mobile Apps", desc: "Building cross-platform Fluter applications." },
        { icon: <Code2 className="text-purple-400" size={24} />, title: "Web Dev", desc: "Interactive frontends using React.js." },
        { icon: <Server className="text-green-400" size={24} />, title: "Backend", desc: "Scalable REST APIs with Node.js & Express." },
        { icon: <Database className="text-orange-400" size={24} />, title: "Databases", desc: "Data modeling in MongoDB & SQL." }
    ];

    return (
        <section id="about" className="py-24 px-6 sm:px-12 z-10 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-accent">Me</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-accent to-purple-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-white">Versatile Developer & <span className="text-purple-400">Problem Solver</span></h3>
                        <p className="text-slate-400 text-lg leading-relaxed mb-6">
                            I am a passionate Computer Science student and a driven developer with hands-on experience in building scalable applications. I specialize in <strong className="text-slate-200">Flutter, React, Node.js, and REST APIs</strong>, creating engaging and user-friendly products.
                        </p>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            My strong interest in <strong className="text-accent">Data Structures & Algorithms</strong> enables me to write efficient, optimized code and tackle complex technical challenges to deliver real-world impact.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="glass-panel p-4 text-center">
                                <span className="block text-3xl font-bold text-accent mb-1">8.3</span>
                                <span className="text-sm text-slate-400">CGPA (B.Tech)</span>
                            </div>
                            <div className="glass-panel p-4 text-center">
                                <span className="block text-3xl font-bold text-purple-400 mb-1">2+</span>
                                <span className="text-sm text-slate-400">Years Coding</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {cards.map((card, idx) => (
                            <div key={idx} className="glass-panel glass-panel-hover p-6 rounded-2xl group flex flex-col items-start gap-4">
                                <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                                    {card.icon}
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">{card.title}</h4>
                                    <p className="text-sm text-slate-400">{card.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
