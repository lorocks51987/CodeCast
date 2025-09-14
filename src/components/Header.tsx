import { Menu, X, BarChart3 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
            <nav className="container mx-auto px-4 py-3 sm:py-4">
                <div className="flex items-center justify-between min-h-[60px]">
                    {/* Logo */}
                    <button
                        onClick={scrollToTop}
                        className="terminal-text text-base sm:text-lg lg:text-xl xl:text-2xl font-bold font-mono hover:text-terminal-green transition-colors duration-300 cursor-pointer flex-shrink-0"
                    >
                        <span className="text-terminal-green">{'>'}</span>
                        <span className="animate-typing">CodeCast_</span>
                        <span className="animate-blink border-r-2 border-terminal-green"></span>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                        {['apresentadores', 'sobre', 'episodios', 'convidados', 'dashboard', 'contato'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="terminal-text hover:text-terminal-green transition-colors duration-300 font-mono capitalize relative group text-sm xl:text-base whitespace-nowrap flex items-center gap-2"
                            >
                                {item === 'dashboard' && <BarChart3 className="h-4 w-4" />}
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terminal-green transition-all duration-300 group-hover:w-full"></span>
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden terminal-text hover:text-terminal-green transition-colors duration-300 p-2 rounded-md hover:bg-terminal-green/10 flex-shrink-0 touch-target"
                        aria-label="Menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden mt-4 py-4 border-t border-terminal-green/30 bg-terminal-bg/95 backdrop-blur-sm rounded-lg mx-2">
                        <div className="flex flex-col space-y-2">
                            {['apresentadores', 'sobre', 'episodios', 'convidados', 'dashboard', 'contato'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className="terminal-text hover:text-terminal-green transition-colors duration-300 font-mono capitalize text-left py-3 px-4 text-base rounded-md hover:bg-terminal-green/10 touch-target flex items-center"
                                >
                                    <span className="text-terminal-green mr-3">{'>'}</span>
                                    {item === 'dashboard' && <BarChart3 className="h-4 w-4 text-terminal-green mr-2" />}
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