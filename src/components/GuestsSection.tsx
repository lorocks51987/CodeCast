import guest1 from '@/assets/guest-1.jpg';
import guest2 from '@/assets/guest-2.jpg';
import guest3 from '@/assets/guest-3.jpg';
import guest4 from '@/assets/guest-4.jpg';
import { Briefcase, ChevronLeft, ChevronRight, Code, MapPin } from 'lucide-react';
import { useState } from 'react';

const GuestsSection = () => {
    const [currentGuest, setCurrentGuest] = useState(0);

    const guests = [
        {
            id: 1,
            name: 'Caio Saraiva Coneglian',
            role: 'Coordenador de Cursos',
            company: 'UNIMAR',
            location: 'Marília, SP',
            expertise: 'ADS, Ciência da Computação e IA',
            image: guest1,
            quote: 'o mais Importante da aréa de TI são pessoas.',
            socialLink: 'https://www.instagram.com/codecast_unimar/'
        },
        {
            id: 2,
            name: 'Fernanda Mesquita Serva',
            role: 'Pró-Reitora',
            company: 'UNIMAR',
            location: 'Marília, SP',
            expertise: 'Gestão Universitária',
            image: guest2,
            quote: 'A Unimar é uma universidade muito viva.',
            socialLink: 'https://www.instagram.com/codecast_unimar/'
        },
        {
            id: 3,
            name: 'Evandro Pinheiro',
            role: 'Professor e Hacker Ético',
            company: 'UNIMAR',
            location: 'Marília, SP',
            expertise: 'Desenvolvimento e Segurança de Aplicações',
            image: guest3,
            quote: 'A engenharia social é muito importante.',
            socialLink: 'https://www.instagram.com/codecast_unimar/'
        },
        {
            id: 4,
            name: 'Douglas Rodrigues',
            role: 'Ex-piloto da FAB e Docente',
            company: 'UNIMAR',
            location: 'Marília, SP',
            expertise: 'Aviação e Docência',
            image: guest4,
            quote: 'Persistência é o caminho para o sucesso.',
            socialLink: 'https://www.instagram.com/codecast_unimar/'
        }
    ];

    const nextGuest = () => {
        setCurrentGuest((prev) => (prev + 1) % guests.length);
    };

    const prevGuest = () => {
        setCurrentGuest((prev) => (prev - 1 + guests.length) % guests.length);
    };

    const goToGuest = (index: number) => {
        setCurrentGuest(index);
    };


    return (
        <section id="convidados" className="py-20 bg-gradient-dark relative">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 animate-slide-up">
                        <div className="font-mono text-terminal-green text-sm mb-4">
                            <span className="text-muted-foreground">{'// '}</span>
                            Quem já passou por aqui
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-space mb-6">
                            <span className="terminal-text">Convidados</span> em Destaque
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                            Profissionais inspiradores que compartilharam suas histórias e conhecimentos conosco.
                        </p>
                    </div>

                    {/* Main Guest Display */}
                    <div className="relative bg-card border border-border rounded-2xl p-8 mb-8 hover:border-terminal-green transition-all duration-500 hover:shadow-neon group">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            {/* Guest Photo */}
                            <div className="relative group/photo">
                                <div className="aspect-square rounded-2xl overflow-hidden bg-code-bg border-2 border-terminal-green/30 group-hover:border-terminal-green transition-all duration-500 group-hover:scale-105">
                                    <img
                                        src={guests[currentGuest].image}
                                        alt={guests[currentGuest].name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-terminal-green/20 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute inset-0 bg-terminal-green/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Guest Info */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold font-space text-foreground mb-2 group-hover:text-terminal-green transition-colors duration-500">
                                        {guests[currentGuest].name}
                                    </h3>

                                    <div className="space-y-3 text-muted-foreground">
                                        <div className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-500">
                                            <div className="p-2 bg-terminal-green/10 rounded-lg group-hover:bg-terminal-green group-hover:text-terminal-bg transition-all duration-500">
                                                <Briefcase className="w-4 h-4 text-terminal-green group-hover:text-terminal-bg" />
                                            </div>
                                            <span className="group-hover:text-foreground transition-colors duration-500">{guests[currentGuest].role} na {guests[currentGuest].company}</span>
                                        </div>
                                        <div className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-500 delay-100">
                                            <div className="p-2 bg-terminal-green/10 rounded-lg group-hover:bg-terminal-green group-hover:text-terminal-bg transition-all duration-500">
                                                <MapPin className="w-4 h-4 text-terminal-green group-hover:text-terminal-bg" />
                                            </div>
                                            <span className="group-hover:text-foreground transition-colors duration-500">{guests[currentGuest].location}</span>
                                        </div>
                                        <div className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-500 delay-200">
                                            <div className="p-2 bg-terminal-green/10 rounded-lg group-hover:bg-terminal-green group-hover:text-terminal-bg transition-all duration-500">
                                                <Code className="w-4 h-4 text-terminal-green group-hover:text-terminal-bg" />
                                            </div>
                                            <span className="group-hover:text-foreground transition-colors duration-500">{guests[currentGuest].expertise}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Quote */}
                                <div className="code-block group-hover:bg-terminal-green/5 transition-all duration-500 group-hover:border-terminal-green/30">
                                    <div className="text-terminal-green font-mono text-sm mb-2 group-hover:text-terminal-green/80 transition-colors duration-500">
                                        <span className="text-muted-foreground">{'// '}</span>
                                        Frase marcante do episódio
                                    </div>
                                    <blockquote className="text-lg italic text-foreground leading-relaxed group-hover:text-terminal-green/90 transition-colors duration-500">
                                        "{guests[currentGuest].quote}"
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevGuest}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-terminal-green/20 hover:bg-terminal-green hover:text-terminal-bg text-terminal-green rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-neon"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <button
                            onClick={nextGuest}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-terminal-green/20 hover:bg-terminal-green hover:text-terminal-bg text-terminal-green rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-neon"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Guest Dots Navigation */}
                    <div className="flex justify-center gap-3">
                        {guests.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToGuest(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentGuest
                                    ? 'bg-terminal-green shadow-neon'
                                    : 'bg-muted hover:bg-terminal-green/50'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GuestsSection;