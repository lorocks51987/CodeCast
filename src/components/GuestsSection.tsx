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
            quote: 'O mais Importante da aréa de TI são pessoas.',
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
                    <div className="relative bg-gradient-to-br from-card via-card to-card/80 border border-border rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-10 mb-6 sm:mb-8 hover:border-terminal-green transition-all duration-700 hover:shadow-2xl hover:shadow-terminal-green/20 group overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-terminal-green/5 via-transparent to-terminal-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-terminal-green/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-terminal-green/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                            {/* Guest Photo */}
                            <div className="relative group/photo order-2 lg:order-1">
                                <div className="relative">
                                    {/* Decorative Elements */}
                                    <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-terminal-green/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
                                    <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-terminal-green/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"></div>

                                    {/* Main Photo Container */}
                                    <div className="aspect-square max-w-xs sm:max-w-sm mx-auto lg:max-w-none rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-terminal-green/20 to-terminal-green/5 border-2 border-terminal-green/20 group-hover:border-terminal-green transition-all duration-700 group-hover:scale-105 group-hover:rotate-1 shadow-2xl">
                                        <img
                                            src={guests[currentGuest].image}
                                            alt={guests[currentGuest].name}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                        />
                                    </div>

                                    {/* Glow Effect - Only behind the image */}
                                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-terminal-green/20 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 -z-10"></div>
                                </div>
                            </div>

                            {/* Guest Info */}
                            <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-1 lg:order-2">
                                {/* Header */}
                                <div className="space-y-3 sm:space-y-4">
                                    <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold font-space text-foreground group-hover:text-terminal-green transition-colors duration-500 leading-tight">
                                        {guests[currentGuest].name}
                                    </h3>
                                </div>

                                {/* Info Cards */}
                                <div className="space-y-3 sm:space-y-4">
                                    <div className="group/info flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-muted/30 rounded-xl sm:rounded-2xl hover:bg-terminal-green/5 hover:border-terminal-green/30 border border-transparent transition-all duration-500 hover:translate-x-2">
                                        <div className="p-2 sm:p-3 bg-terminal-green/10 rounded-lg sm:rounded-xl group-hover/info:bg-terminal-green group-hover/info:text-terminal-bg transition-all duration-500 flex-shrink-0">
                                            <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-terminal-green group-hover/info:text-terminal-bg" />
                                        </div>
                                        <div>
                                            <p className="text-xs sm:text-sm text-muted-foreground group-hover/info:text-foreground transition-colors duration-500">Cargo</p>
                                            <p className="text-sm sm:text-base font-medium group-hover/info:text-terminal-green transition-colors duration-500">{guests[currentGuest].role} na {guests[currentGuest].company}</p>
                                        </div>
                                    </div>

                                    <div className="group/info flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-muted/30 rounded-xl sm:rounded-2xl hover:bg-terminal-green/5 hover:border-terminal-green/30 border border-transparent transition-all duration-500 hover:translate-x-2 delay-100">
                                        <div className="p-2 sm:p-3 bg-terminal-green/10 rounded-lg sm:rounded-xl group-hover/info:bg-terminal-green group-hover/info:text-terminal-bg transition-all duration-500 flex-shrink-0">
                                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-terminal-green group-hover/info:text-terminal-bg" />
                                        </div>
                                        <div>
                                            <p className="text-xs sm:text-sm text-muted-foreground group-hover/info:text-foreground transition-colors duration-500">Localização</p>
                                            <p className="text-sm sm:text-base font-medium group-hover/info:text-terminal-green transition-colors duration-500">{guests[currentGuest].location}</p>
                                        </div>
                                    </div>

                                    <div className="group/info flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-muted/30 rounded-xl sm:rounded-2xl hover:bg-terminal-green/5 hover:border-terminal-green/30 border border-transparent transition-all duration-500 hover:translate-x-2 delay-200">
                                        <div className="p-2 sm:p-3 bg-terminal-green/10 rounded-lg sm:rounded-xl group-hover/info:bg-terminal-green group-hover/info:text-terminal-bg transition-all duration-500 flex-shrink-0">
                                            <Code className="w-4 h-4 sm:w-5 sm:h-5 text-terminal-green group-hover/info:text-terminal-bg" />
                                        </div>
                                        <div>
                                            <p className="text-xs sm:text-sm text-muted-foreground group-hover/info:text-foreground transition-colors duration-500">Especialidade</p>
                                            <p className="text-sm sm:text-base font-medium group-hover/info:text-terminal-green transition-colors duration-500">{guests[currentGuest].expertise}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Quote Section */}
                                <div className="relative p-4 sm:p-6 bg-gradient-to-r from-terminal-green/5 to-terminal-green/10 border border-terminal-green/20 rounded-xl sm:rounded-2xl group-hover:border-terminal-green/40 transition-all duration-500">
                                    <div className="absolute top-2 left-4 sm:top-4 sm:left-6 text-terminal-green/30 text-2xl sm:text-4xl font-serif">"</div>
                                    <div className="text-terminal-green font-mono text-xs sm:text-sm mb-2 sm:mb-3 group-hover:text-terminal-green/80 transition-colors duration-500">
                                        <span className="text-muted-foreground">{'// '}</span>
                                        Frase marcante do episódio
                                    </div>
                                    <blockquote className="text-sm sm:text-lg lg:text-xl italic text-foreground leading-relaxed group-hover:text-terminal-green/90 transition-colors duration-500 pl-3 sm:pl-4">
                                        {guests[currentGuest].quote}
                                    </blockquote>
                                    <div className="absolute bottom-2 right-4 sm:bottom-4 sm:right-6 text-terminal-green/30 text-2xl sm:text-4xl font-serif">"</div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevGuest}
                            className="absolute left-2 sm:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-terminal-bg/90 backdrop-blur-md border-2 border-terminal-green/40 hover:border-terminal-green hover:bg-terminal-green hover:text-terminal-bg text-terminal-green rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-500 hover:shadow-2xl hover:shadow-terminal-green/30 hover:scale-110 group/btn touch-manipulation"
                        >
                            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover/btn:scale-110 transition-transform duration-300" />
                        </button>

                        <button
                            onClick={nextGuest}
                            className="absolute right-2 sm:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-terminal-bg/90 backdrop-blur-md border-2 border-terminal-green/40 hover:border-terminal-green hover:bg-terminal-green hover:text-terminal-bg text-terminal-green rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-500 hover:shadow-2xl hover:shadow-terminal-green/30 hover:scale-110 group/btn touch-manipulation"
                        >
                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover/btn:scale-110 transition-transform duration-300" />
                        </button>
                    </div>

                    
                </div>
            </div>
        </section>
    );
};

export default GuestsSection;