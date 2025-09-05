import { Code, Coffee, Users, Zap } from 'lucide-react';

const AboutSection = () => {
    const features = [
        {
            icon: Code,
            title: 'Código & Carreira',
            description: 'Discussões profundas sobre tecnologias, linguagens e trajetórias profissionais.'
        },
        {
            icon: Coffee,
            title: 'Conversas Reais',
            description: 'Bate-papos descontraídos sobre desafios, sucessos e lições aprendidas.'
        },
        {
            icon: Users,
            title: 'Convidados Especiais',
            description: 'Profissionais experientes compartilhando suas histórias e conhecimentos.'
        },
        {
            icon: Zap,
            title: 'Conteúdo Prático',
            description: 'Dicas aplicáveis e insights valiosos para sua jornada como dev.'
        }
    ];

    return (
        <section id="sobre" className="py-20 bg-gradient-dark relative">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 animate-slide-up">
                        <div className="font-mono text-terminal-green text-sm mb-4">
                            <span className="text-muted-foreground">{'// '}</span>
                            Sobre o podcast
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-space mb-6">
                            O <span className="terminal-text">CodeCast</span>
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            O CodeCast é um podcast apresentado por <span className="text-terminal-green font-semibold">Luiz</span> e <span className="text-terminal-green font-semibold">André</span>,
                            trazendo convidados da tecnologia para compartilhar experiências, aprendizados e trajetórias. Somos um podcast da <span className="text-terminal-green font-semibold">UNIMAR</span> (Universidade de Marília).
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="group p-6 rounded-lg bg-card border border-border hover:border-terminal-green transition-all duration-300 hover:shadow-neon animate-slide-up"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="flex items-center justify-center w-12 h-12 bg-terminal-green/10 rounded-lg mb-4 group-hover:bg-terminal-green/20 transition-colors duration-300">
                                        <Icon className="w-6 h-6 text-terminal-green" />
                                    </div>
                                    <h3 className="text-lg font-semibold font-space mb-2 text-foreground">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Code Block Style Quote */}
                    <div className="code-block max-w-3xl mx-auto text-center">
                        <div className="text-terminal-green font-mono">
                            <div className="text-muted-foreground mb-2">{'/* Sobre o CodeCast */'}</div>
                            <div className="text-base md:text-lg">
                                <span className="text-muted-foreground">const</span> codecast = <span className="text-yellow-400">"Um podcast que traz as histórias</span>
                            </div>
                            <div className="ml-4 text-base md:text-lg">
                                <span className="text-yellow-400">de quem faz a tecnologia acontecer,</span>
                            </div>
                            <div className="ml-4 text-base md:text-lg">
                                <span className="text-yellow-400">conectando conhecimento e carreira."</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;