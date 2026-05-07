import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
    const education = [
        {
            degree: "B.Tech in Computer Science & Eng.",
            institution: "KPR Institute of Engineering and Technology",
            year: "2023 \u2013 2027",
            score: "CGPA: 8.3",
            icon: <GraduationCap />
        },
        {
            degree: "Higher Secondary (+2)",
            institution: "Om National Academy",
            year: "Completed",
            score: "Score: 72.25% (Biology & Maths)",
            icon: <GraduationCap />
        }
    ];

    const certifications = [
        "Backend Development \u2013 PW Skills",
        "Probability for Data Science \u2013 Great Learning",
        "ReactJS Certification"
    ];

    return (
        <section id="education" className="py-24 px-6 sm:px-12 z-10 relative">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
                {/* Education Section */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                            Education
                        </h2>
                        <div className="w-16 h-1 bg-accent rounded-full"></div>
                    </motion.div>

                    <div className="space-y-8">
                        {education.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="glass-panel p-6 rounded-2xl flex gap-6 group hover:-translate-y-1 transition-transform"
                            >
                                <div className="w-12 h-12 rounded-xl bg-accent/20 text-accent flex items-center justify-center shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.degree}</h3>
                                    <p className="text-slate-400 font-medium mb-1">{item.institution}</p>
                                    <div className="flex flex-wrap gap-4 text-sm mt-3">
                                        <span className="text-accent bg-accent/10 px-2 py-1 rounded">{item.year}</span>
                                        <span className="text-purple-400 bg-purple-400/10 px-2 py-1 rounded">{item.score}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications Section */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                            Certifications
                        </h2>
                        <div className="w-16 h-1 bg-purple-500 rounded-full"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="glass-panel p-8 rounded-2xl h-[calc(100%-80px)] flex flex-col justify-center gap-6 relative overflow-hidden"
                    >
                        <div className="absolute -right-10 -bottom-10 text-white/5 pointer-events-none">
                            <Award size={200} strokeWidth={1} />
                        </div>
                        {certifications.map((cert, idx) => (
                            <div key={idx} className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors">
                                    <Award size={18} />
                                </div>
                                <span className="text-lg text-slate-300 font-medium group-hover:text-white transition-colors">{cert}</span>
                            </div>
                        ))}

                        {/* Languages Known section piggybacked here */}
                        <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
                            <h4 className="text-sm uppercase tracking-wider text-slate-500 font-bold mb-4">Languages Known</h4>
                            <div className="flex flex-wrap gap-3">
                                {["English", "Hindi", "Bhojpuri", "Nepali"].map((lang, lIdx) => (
                                    <span key={lIdx} className="px-4 py-2 rounded-lg bg-white/5 text-slate-300 text-sm">{lang}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
