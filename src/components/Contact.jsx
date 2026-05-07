import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 sm:px-12 z-10 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in <span className="text-accent">Touch</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-accent to-purple-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Have a question or want to work together? I'm currently open to new opportunities and my inbox is always open.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="glass-panel p-6 rounded-2xl flex items-center gap-6 group hover:-translate-y-1 transition-transform">
                            <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-colors">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="text-sm uppercase tracking-wider text-slate-500 font-bold mb-1">Email</h4>
                                <a href="mailto:dinkartiwari811@gmail.com" className="text-lg text-white font-medium hover:text-accent transition-colors">dinkartiwari811@gmail.com</a>
                            </div>
                        </div>

                        <div className="glass-panel p-6 rounded-2xl flex items-center gap-6 group hover:-translate-y-1 transition-transform">
                            <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="text-sm uppercase tracking-wider text-slate-500 font-bold mb-1">Phone</h4>
                                <a href="tel:+917349511589" className="text-lg text-white font-medium hover:text-purple-400 transition-colors">+91-7349511589</a>
                            </div>
                        </div>

                        <div className="glass-panel p-6 rounded-2xl flex items-center gap-6 group hover:-translate-y-1 transition-transform">
                            <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-sm uppercase tracking-wider text-slate-500 font-bold mb-1">Location</h4>
                                <p className="text-lg text-white font-medium">Coimbatore, India</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form className="glass-panel p-8 rounded-2xl flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                                <input type="text" id="name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all" placeholder="John Doe" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                                <input type="email" id="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                <textarea id="message" rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all resize-none" placeholder="Hello..." />
                            </div>
                            <button type="submit" className="w-full py-4 bg-gradient-to-r from-accent to-purple-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
