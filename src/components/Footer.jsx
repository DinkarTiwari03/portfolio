import { Heart } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="border-t border-white/10 py-8 px-6 z-10 relative bg-[#0f172a]/50 backdrop-blur-md">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-400 text-sm flex items-center gap-1">
                    Designed & Built with <Heart size={14} className="text-red-500 fill-red-500" /> by <span className="text-white font-medium">Dinkar Kumar Tiwari</span> \u00A9 {new Date().getFullYear()}
                </p>

                <div className="flex gap-6">
                    <a href="https://github.com/DinkarTiwari03" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                        <FaGithub size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/dinkar-kumar-tiwari-185786289/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent transition-colors">
                        <FaLinkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
