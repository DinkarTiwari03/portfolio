import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-6 sm:px-12 z-10">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm text-accent mb-8"
                >
                    <Terminal size={16} />
                    <span>Hello, World! Welcome to my portfolio</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
                >
                    I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-400 to-accent bg-300% animate-gradient">Dinkar Kumar Tiwari</span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl md:text-3xl font-medium text-slate-300 mb-6"
                >
                    Full Stack & Flutter Developer
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="h-12 flex justify-center items-center mb-8"
                >
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto animate-typing overflow-hidden whitespace-nowrap border-r-2 border-white pr-2">
                        Building scalable mobile and web experiences with modern technologies.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <a
                        href="#projects"
                        className="group relative px-8 py-3 bg-accent text-primary font-bold rounded-full overflow-hidden w-full sm:w-auto"
                    >
                        <div className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                        <span className="relative flex items-center justify-center gap-2">
                            View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>

                    <a
                        href="#contact"
                        className="group px-8 py-3 glass-panel glass-panel-hover text-white font-medium rounded-full flex items-center justify-center gap-2 w-full sm:w-auto"
                    >
                        Contact Me <Mail size={18} />
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
