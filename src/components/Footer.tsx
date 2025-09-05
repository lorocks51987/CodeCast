import { Code, Heart, Instagram, Youtube } from 'lucide-react';
import type { SVGProps } from 'react';
const TikTokIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'Instagram',
            icon: Instagram,
            url: 'https://www.instagram.com/codecast_unimar/'
        },
        {
            name: 'YouTube',
            icon: Youtube,
            url: 'https://www.youtube.com/@codecast_unimar'
        },
        {
            name: 'TikTok',
            icon: TikTokIcon,
            url: 'https://www.tiktok.com/@codecast_unimar'
        }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gradient-to-b from-terminal-bg to-black border-t border-terminal-green/30">
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    {/* Main Footer Content */}
                    <div className="text-center mb-8">
                        {/* Logo */}
                        <div className="terminal-text text-3xl font-bold font-mono mb-4">
                            <span className="text-terminal-green">{'>'}</span>
                            CodeCast_
                            <span className="animate-blink border-r-2 border-terminal-green ml-1"></span>
                        </div>

                        {/* Tagline */}
                        <p className="text-muted-foreground text-lg mb-6 font-space">
                            Histórias de quem faz a tecnologia acontecer — um podcast da UNIMAR
                        </p>

                        {/* Social Links */}
                        <div className="flex justify-center gap-6 mb-8">
                            {socialLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group p-3 bg-code-bg border border-border rounded-lg hover:border-terminal-green transition-all duration-300 hover:shadow-neon"
                                        aria-label={link.name}
                                    >
                                        <Icon className="w-6 h-6 text-terminal-green group-hover:text-terminal-green transition-colors duration-300" />
                                    </a>
                                );
                            })}
                        </div>

                        {/* Quick Links */}
                        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
                            {['sobre', 'episodios', 'convidados', 'contato'].map((link) => (
                                <button
                                    key={link}
                                    onClick={() => {
                                        const element = document.getElementById(link);
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="text-muted-foreground hover:text-terminal-green transition-colors duration-300 font-mono capitalize"
                                >
                                    {link}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Code Style Separator */}
                    <div className="code-block text-center mb-8">
                        <div className="text-terminal-green font-mono text-sm">
                            <span className="text-muted-foreground">{'// '}</span>
                            Obrigado por fazer parte da nossa comunidade!
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-terminal-green/20 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            {/* Copyright */}
                            <div className="text-terminal-green font-mono text-sm text-center md:text-left">
                                CodeCast © {currentYear} – Feito por
                                <span className="inline-flex items-center mx-1">
                                    <Code className="w-4 h-4 mx-1" />
                                </span>
                                devs para devs
                            </div>

                            {/* Made with Love */}
                            <div className="text-muted-foreground text-sm text-center md:text-right">
                                <span className="font-mono">Feito com </span>
                                <Heart className="w-4 h-4 inline text-red-500 animate-pulse" />
                                <span className="font-mono"> e muito </span>
                                <span className="text-terminal-green font-mono">{'<código />'}</span>
                            </div>
                        </div>
                    </div>

                    {/* Back to Top Button */}
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 w-12 h-12 bg-terminal-green/20 hover:bg-terminal-green hover:text-terminal-bg text-terminal-green rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-neon backdrop-blur-sm border border-terminal-green/30"
                        aria-label="Voltar ao topo"
                    >
                        <span className="text-xl font-bold">↑</span>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;