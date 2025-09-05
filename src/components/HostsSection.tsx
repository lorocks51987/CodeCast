import host1 from '@/assets/host1.jpeg';
import host2 from '@/assets/host2.jpg';
import { ExternalLink, Github, Instagram, Linkedin } from 'lucide-react';
import NeonButton from './NeonButton';

const HostsSection = () => {
    const hosts = [
        {
            id: 1,
            name: 'Luiz Henrique',
            role: 'Estagiário Desenvolvimento Web | 4º termo de ADS - UNIMAR',
            avatar: host1,
            bio: 'Apaixonado por tecnologia com foco em Full Stack e cibersegurança',
            social: {
                github: 'https://github.com/lorocks51987',
                instagram: 'https://instagram.com/luiz.henrique51987',
                linkedin: 'https://www.linkedin.com/in/luizhenrique51987/',
            },
            techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'Python', 'Vue.js', 'TailwindCSS', 'MySQL', 'Linux', 'WordPress', 'Git', 'Canva']
        },
        {
            id: 2,
            name: 'André Luís',
            role: 'Desenvolvedor em formação | 4º termo de ADS - UNIMAR',
            avatar: host2,
            bio: 'Apaixonado por tecnologia com foco em back-end e cibersegurança.',
            social: {
                github: 'https://github.com/oandrecarvalho',
                instagram: 'https://www.instagram.com/oandrecarvalhoo/',
                youtube: 'https://www.youtube.com/@codecast_unimar',
                linkedin: 'https://www.linkedin.com/in/oandrecarvalho/',
                email: 'andresantoscarvalho2004@gmail.com',
                whatsapp: 'https://wa.me/5514996002903?text=Olá,%20tudo%20bem?'
            },
            techStack: ['JavaScript', 'HTML5', 'CSS3', 'Python', 'C#', 'Bootstrap', 'Canva', 'Debian', 'Git', 'GitHub', 'PHP']
        }
    ];

    return (
        <section id="apresentadores" className="py-20 bg-gradient-dark relative">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 animate-slide-up">
                        <div className="font-mono text-terminal-green text-sm mb-4">
                            <span className="text-muted-foreground">{'// '}</span>
                            Quem apresenta
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-space mb-6">
                            <span className="terminal-text">Apresentadores</span> do CodeCast
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                            Conheça os hosts que trazem as melhores conversas sobre tecnologia e carreira.
                        </p>
                    </div>

                    {/* Hosts Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
                        {hosts.map((host, index) => (
                            <div
                                key={host.id}
                                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-terminal-green transition-all duration-300 hover:shadow-neon animate-slide-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* GitHub-style Header */}
                                <div className="bg-code-bg border-b border-border p-4 sm:p-6">
                                    <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                                        <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden bg-terminal-green/10 border-2 border-terminal-green/30 group-hover:border-terminal-green transition-all duration-300 flex-shrink-0">
                                            <img
                                                src={host.avatar}
                                                alt={host.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 text-center sm:text-left">
                                            <h3 className="text-lg sm:text-xl font-bold font-space text-foreground group-hover:text-terminal-green transition-colors duration-300">
                                                {host.name}
                                            </h3>
                                            <p className="text-muted-foreground text-xs sm:text-sm mt-1">{host.role}</p>
                                        </div>
                                        <div className="flex space-x-2 flex-wrap justify-center sm:justify-end">
                                            <a
                                                href={host.social.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 bg-code-bg border border-border rounded hover:border-terminal-green transition-all duration-300 hover:shadow-neon"
                                                title="GitHub"
                                            >
                                                <Github className="w-4 h-4 text-terminal-green" />
                                            </a>
                                            <a
                                                href={host.social.instagram}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 bg-code-bg border border-border rounded hover:border-terminal-green transition-all duration-300 hover:shadow-neon"
                                                title="Instagram"
                                            >
                                                <Instagram className="w-4 h-4 text-terminal-green" />
                                            </a>
                                            <a
                                                href={host.social.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 bg-code-bg border border-border rounded hover:border-terminal-green transition-all duration-300 hover:shadow-neon"
                                                title="LinkedIn"
                                            >
                                                <Linkedin className="w-4 h-4 text-terminal-green" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Bio Section */}
                                <div className="p-4 sm:p-6">
                                    <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                                        {host.bio}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="mb-4 sm:mb-6">
                                        <div className="text-xs sm:text-sm font-semibold text-foreground mb-2 font-mono">
                                            <span className="text-terminal-green">const</span> techStack = [
                                        </div>
                                        <div className="flex flex-wrap gap-1 sm:gap-2 ml-2 sm:ml-4">
                                            {host.techStack.map((tech, techIndex) => (
                                                <span key={techIndex} className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-terminal-green/10 text-terminal-green text-xs rounded font-mono">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="text-xs sm:text-sm font-semibold text-foreground font-mono">];</div>
                                    </div>

                                    {/* CTA Button */}
                                    <NeonButton
                                        href={host.social.linkedin}
                                        target="_blank"
                                        size="sm"
                                        variant="outline"
                                        className="w-full"
                                    >
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Conectar com {host.name}
                                    </NeonButton>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Code Block Quote */}
                    <div className="code-block max-w-3xl mx-auto text-center">
                        <div className="text-terminal-green font-mono">
                            <div className="text-muted-foreground mb-2">{'/* Nossa missão como apresentadores */'}</div>
                            <div className="text-base md:text-lg">
                                <span className="text-muted-foreground">const</span> missao = <span className="text-yellow-400">"Conectar desenvolvedores através de</span>
                            </div>
                            <div className="ml-4 text-base md:text-lg">
                                <span className="text-yellow-400">conversas autênticas, conhecimento prático</span>
                            </div>
                            <div className="ml-4 text-base md:text-lg">
                                <span className="text-yellow-400">e histórias reais do mundo tech."</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HostsSection;
