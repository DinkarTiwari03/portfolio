import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f172a]/80 backdrop-blur-md py-4 shadow-lg shadow-black/20' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-purple-400">
                    DKT.
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-slate-300 hover:text-accent transition-colors text-sm font-medium">
                            {link.name}
                        </a>
                    ))}
                    <div className="flex items-center gap-4 ml-4 pl-4 border-l border-white/10">
                        <a href="https://github.com/DinkarTiwari03" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors"><FaGithub size={20} /></a>
                        <a href="https://www.linkedin.com/in/dinkar-kumar-tiwari-185786289/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent transition-colors"><FaLinkedin size={20} /></a>
                    </div>
                </div>

                {/* Mobile Nav Toggle */}
                <button className="md:hidden text-slate-300" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#0f172a]/95 backdrop-blur-lg border-t border-white/10 py-6 flex flex-col items-center gap-6 shadow-2xl">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-accent font-medium">
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
