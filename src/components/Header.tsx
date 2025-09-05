import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-terminal-bg/90 backdrop-blur-md shadow-neon' : 'bg-transparent'
            }`}>
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <button
                        onClick={scrollToTop}
                        className="terminal-text text-2xl font-bold font-mono hover:text-terminal-green transition-colors duration-300 cursor-pointer"
                    >
                        <span className="text-terminal-green">{'>'}</span>
                        <span className="animate-typing">CodeCast_</span>
                        <span className="animate-blink border-r-2 border-terminal-green"></span>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {['apresentadores', 'sobre', 'episodios', 'convidados', 'contato'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="terminal-text hover:text-terminal-green transition-colors duration-300 font-mono capitalize relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terminal-green transition-all duration-300 group-hover:w-full"></span>
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden terminal-text hover:text-terminal-green transition-colors duration-300"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 py-4 border-t border-terminal-green/30">
                        <div className="flex flex-col space-y-4">
                            {['apresentadores', 'sobre', 'episodios', 'convidados', 'contato'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className="terminal-text hover:text-terminal-green transition-colors duration-300 font-mono capitalize text-left"
                                >
                                    <span className="text-terminal-green mr-2">{'>'}</span>
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;