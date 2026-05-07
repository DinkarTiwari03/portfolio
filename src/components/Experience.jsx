import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            role: "Flutter Developer Intern",
            company: "Krutibimb Concepts",
            period: "Dec 2024 – Jan 2025",
            points: [
                "Built cross-platform mobile applications using Flutter.",
                "Integrated REST APIs to ensure seamless data flow.",
                "Improved UI/UX responsiveness across various device screen sizes."
            ]
        },
        {
            role: "Freelance Flutter Developer",
            company: "Independent Client Work",
            period: "Feb 2025 – Present",
            points: [
                "Developed real-world applications independently, handling end-to-end delivery.",
                "Solved client-focused problems with optimized mobile UI solutions."
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 px-6 sm:px-12 z-10 relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Work <span className="text-purple-400">Experience</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0 sm:pl-8">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            className="mb-12 relative md:pl-12 pl-6"
                        >
                            <div className="absolute -left-[25px] md:-left-[24px] top-1 h-12 w-12 rounded-full glass-panel flex items-center justify-center bg-[#0f172a]">
                                <Briefcase size={20} className="text-purple-400" />
                            </div>

                            <div className="glass-panel glass-panel-hover p-6 md:p-8 rounded-2xl group transition-all relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative z-10 flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4">
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 sm:mb-0">{exp.role}</h3>
                                    <span className="text-accent text-sm font-medium bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap">{exp.period}</span>
                                </div>
                                <h4 className="text-slate-400 text-lg font-medium mb-6">{exp.company}</h4>

                                <ul className="space-y-3">
                                    {exp.points.map((point, pIdx) => (
                                        <li key={pIdx} className="flex flex-start text-slate-300">
                                            <span className="text-accent mr-3 mt-1.5">•</span>
                                            <span className="leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
