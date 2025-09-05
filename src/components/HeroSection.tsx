import { useEffect, useState } from 'react';
import NeonButton from './NeonButton';

const HeroSection = () => {
    const [displayText, setDisplayText] = useState('');
    const fullText = 'CodeCast – Histórias que inspiram.';

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index < fullText.length) {
                setDisplayText(fullText.slice(0, index + 1));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 100);

        return () => clearInterval(timer);
    }, []);

    const scrollToEpisodes = () => {
        const element = document.getElementById('episodios');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
            {/* Matrix Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-terminal-bg/50 to-terminal-bg z-10"></div>

            <div className="container mx-auto px-4 text-center relative z-20">
                <div className="max-w-4xl mx-auto space-y-8 pb-24 md:pb-28 lg:pb-32 animate-fade-in">
                    {/* Terminal Prompt */}
                    <div className="font-mono text-terminal-green text-left max-w-2xl mx-auto">
                        <span className="text-muted-foreground">user@codecast:~$</span> start_podcast
                    </div>

                    {/* Main Title */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-space">
                        <span className="terminal-text text-terminal-green">
                            {displayText}
                        </span>
                        <span className="animate-blink border-r-4 border-terminal-green ml-1"></span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-space max-w-3xl mx-auto leading-relaxed">
                        Um podcast que conecta conhecimento, carreira e vida real na programação.
                    </p>

                    {/* Code-style Description */}
                    <div className="code-block max-w-2xl mx-auto text-left text-sm md:text-base">
                        <div className="text-terminal-green">
                            <span className="text-muted-foreground">const</span> codecast = {'{'}
                        </div>
                        <div className="ml-4">
                            <span className="text-terminal-green">hosts</span>: [<span className="text-yellow-400">'Luiz'</span>, <span className="text-yellow-400">'André'</span>],
                        </div>
                        <div className="ml-4">
                            <span className="text-terminal-green">topic</span>: <span className="text-yellow-400">'tecnologia & vida'</span>,
                        </div>
                        <div className="ml-4">
                            <span className="text-terminal-green">format</span>: <span className="text-yellow-400">'conversas reais'</span>,
                        </div>
                        <div className="ml-4">
                            <span className="text-terminal-green">audience</span>: <span className="text-yellow-400">'devs inspirados'</span>
                        </div>
                        <div className="text-terminal-green">{'};'}</div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                        <NeonButton onClick={scrollToEpisodes} size="lg" variant="primary">
                            {'>'} Ouça agora
                        </NeonButton>
                        <NeonButton
                            href="https://www.instagram.com/codecast_unimar/"
                            target="_blank"
                            size="lg"
                            variant="secondary"
                        >
                            Seguir no Instagram
                        </NeonButton>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="pointer-events-none hidden md:block absolute bottom-2 md:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
                        <div className="w-6 h-10 border-2 border-terminal-green rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-terminal-green rounded-full mt-2 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;