import { Instagram, Youtube } from 'lucide-react';
import type { SVGProps } from 'react';
const TikTokIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);

const ContactSection = () => {
    const socialLinks = [
        {
            name: 'Instagram',
            icon: Instagram,
            url: 'https://www.instagram.com/codecast_unimar/',
            description: 'Siga para updates e bastidores'
        },
        {
            name: 'YouTube',
            icon: Youtube,
            url: 'https://www.youtube.com/@codecast_unimar',
            description: 'Todos os episódios completos'
        },
        {
            name: 'TikTok',
            icon: TikTokIcon,
            url: 'https://www.tiktok.com/@codecast_unimar',
            description: 'Cortes dos episódios'
        }
    ];

    return (
        <section id="contato" className="py-20 bg-terminal-bg relative">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 animate-slide-up">
                        <div className="font-mono text-terminal-green text-sm mb-4">
                            <span className="text-muted-foreground">{'// '}</span>
                            Vamos conversar?
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-space mb-6">
                            Entre em <span className="terminal-text">Contato</span>
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Tem uma história interessante? Quer sugerir um tema? Ou apenas bater um papo sobre tech?
                        </p>
                    </div>

                    {/* Contact Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {socialLinks.map((link, index) => {
                            const Icon = link.icon;
                            return (
                                <div
                                    key={index}
                                    className="group text-center animate-slide-up"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-6 bg-card border border-border rounded-lg hover:border-terminal-green transition-all duration-300 hover:shadow-neon"
                                    >
                                        <div className="flex items-center justify-center w-16 h-16 bg-terminal-green/10 rounded-full mx-auto mb-4 group-hover:bg-terminal-green/20 transition-colors duration-300">
                                            <Icon className="w-8 h-8 text-terminal-green" />
                                        </div>
                                        <h3 className="text-xl font-semibold font-space mb-2 text-foreground group-hover:text-terminal-green transition-colors duration-300">
                                            {link.name}
                                        </h3>
                                        <p className="text-muted-foreground text-sm">
                                            {link.description}
                                        </p>
                                    </a>
                                </div>
                            );
                        })}
                    </div>

                    {/* Contact Info */}
                    <div className="bg-card border border-border rounded-2xl p-8 hover:border-terminal-green transition-all duration-300 hover:shadow-neon text-center">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold font-space mb-4">
                                Entre em <span className="terminal-text">Contato</span>
                            </h3>
                            <p className="text-muted-foreground text-lg">
                                Quer ser nosso convidado ou tem alguma sugestão?
                                <br />
                                Entre em contato conosco pelas redes sociais!
                            </p>
                        </div>

                        <div className="code-block max-w-2xl mx-auto">
                            <div className="text-terminal-green font-mono text-sm mb-4">
                                <span className="text-muted-foreground">{'// '}</span>
                                Formas de contato
                            </div>
                            <div className="text-base md:text-lg space-y-2">
                                <div>
                                    <span className="text-muted-foreground">const</span> contato = <span className="text-yellow-400">"Siga nossas redes sociais"</span>;
                                </div>
                                <div>
                                    <span className="text-muted-foreground">const</span> convite = <span className="text-yellow-400">"Quer ser convidado? Mande uma DM!"</span>;
                                </div>
                                <div>
                                    <span className="text-muted-foreground">const</span> sugestao = <span className="text-yellow-400">"Tem uma ideia? Compartilhe conosco!"</span>;
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;