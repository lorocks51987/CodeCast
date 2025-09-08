import { Instagram, Youtube } from 'lucide-react';
import { useEffect, useState } from 'react';
import NeonButton from './NeonButton';

type Episode = {
    id: number;
    title: string;
    description: string;
    duration: string;
    youtubeId?: string;
    youtubeUrl?: string;
};

function extractYouTubeId(input?: string): string {
    if (!input) return '';
    const idPattern = /^[a-zA-Z0-9_-]{11}$/;
    if (idPattern.test(input)) return input;
    try {
        const url = new URL(input);
        if (url.hostname.includes('youtu.be')) {
            return url.pathname.replace('/', '');
        }
        const v = url.searchParams.get('v');
        if (v && idPattern.test(v)) return v;
        const embedMatch = url.pathname.match(/\/embed\/([a-zA-Z0-9_-]{11})/);
        if (embedMatch) return embedMatch[1];
    } catch (_) {
        // not a URL, fall through
    }
    return '';
}

const EpisodesSection = () => {
    const [visibleCount, setVisibleCount] = useState(4);
    const increment = 2;

    useEffect(() => {
        try {
            const isMobile = window.matchMedia('(max-width: 640px)').matches;
            setVisibleCount(isMobile ? 2 : 4);
        } catch (_) {
            // noop (SSR/older browsers)
        }
    }, []);

    const episodes: Episode[] = [
        {
            id: 1,
            title: 'Codecast #01 | Quem é Caio Coneglian? Conheça o Coordenador dos cursos de tecnologia',
            description: 'No episódio de estreia, conheça a trajetória de Caio Saraiva Coneglian, coordenador dos cursos de ADS, Ciência da Computação e Inteligência Artificial da Unimar.',
            youtubeUrl: 'https://www.youtube.com/watch?v=RgEXKwrqmFs',
            duration: '1:16:54'
        },
        {
            id: 2,
            title: 'CodeCast #02 | Quem é Henrique Leal? Coordenador de Pós-graduação em Ciência de Dados e IA',
            description: 'História e aprendizados de um professor e pesquisador da área de tecnologia: desafios, jornada e propósito.',
            youtubeUrl: 'https://www.youtube.com/watch?v=DGy2Fo5tCg4',
            duration: '58:40'
        },
        {
            id: 3,
            title: 'CodeCast #03 | Quem é Victor do "Marília Ao Contrário"?',
            description: 'Bate-papo com Victor, Gerente de TI e administrador da famosa página Marília Ao Contrário: carreira, bastidores e criatividade.',
            youtubeUrl: 'https://www.youtube.com/watch?v=Qcp2k3TNtAE',
            duration: '1:06:05'
        },
        {
            id: 4,
            title: 'CodeCast #04 | Quem é Fernanda Mesquita Serva? Pró-Reitora da Unimar',
            description: 'Trajetória na gestão universitária, desafios e conquistas, e o impacto na educação da região.',
            youtubeUrl: 'https://www.youtube.com/watch?v=N02y1LSROMk',
            duration: '1:08:09'
        },
        {
            id: 5,
            title: 'CodeCast #05 | Evandro Pinheiro — Professor da Unimar e Hacker Ético',
            description: '17+ anos em Desenvolvimento e Segurança de Aplicações: carreira, dicas e desafios da área.',
            youtubeUrl: 'https://www.youtube.com/watch?v=LhGqoVUlMvI',
            duration: '1:49:10'
        },
        {
            id: 6,
            title: 'CodeCast #06 | Douglas Rodrigues — Ex-piloto da FAB e Docente Unimar',
            description: 'Da aviação à docência: trajetória, aprendizados e próximos passos.',
            youtubeUrl: 'https://www.youtube.com/watch?v=q86G1dBGehM',
            duration: '1:03:25'
        },
        {
            id: 7,
            title: 'CodeCast #07 | Fabio Murakami — Coord. de tecnologia UnimarEAD e medalhista de Iaido',
            description: 'Tecnologia, EAD e a influência do Iaido na rotina e nas decisões.',
            youtubeUrl: 'https://www.youtube.com/watch?v=P-odhn2LM0M',
            duration: '1:47:11'
        },
        {
            id: 8,
            title: 'CodeCast #08 | Koga – Presidente da A.A.A.T. - Atlética de Tecnologia da Unimar! 🏆💻',
            description: 'Bastidores da gestão estudantil, liderança jovem, parceria CodeCast + AAAT e o impacto da experiência universitária na formação pessoal e profissional.',
            youtubeUrl: 'https://www.youtube.com/watch?v=klgrUFSfjX8',
            duration: '59:14'
        },
        {
            id: 9,
            title: 'CodeCast #09 | Gustavo Marttos — Docente Unimar e Engenheiro de Dados',
            description: 'Educação, tecnologia e carreira: formar talentos unindo teoria, prática e propósito.',
            youtubeUrl: 'https://www.youtube.com/watch?v=hw9S6lkLW3g',
            duration: '1:44:35'
        },
        {
            id: 10,
            title: 'CodeCast #10 | Márcio Tenreiro — Diretor de Desenvolvimento na Fábrica de Códigos',
            description: 'Liderança, inovação e construção de soluções que impactam negócios e pessoas.',
            youtubeUrl: 'https://www.youtube.com/watch?v=E7OqGvlNqvU',
            duration: '1:23:54'
        }
    ];

    return (
        <section id="episodios" className="py-20 bg-terminal-bg relative">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 animate-slide-up">
                        <div className="font-mono text-terminal-green text-sm mb-4">
                            <span className="text-muted-foreground">{'// '}</span>
                            Nossos episódios
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-space mb-6">
                            <span className="terminal-text">Episódios</span>
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                            Conteúdos frescos sobre tecnologia, carreira e histórias inspiradoras do mundo da programação.
                        </p>
                    </div>

                    {/* Episodes Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
                        {episodes.slice(0, visibleCount).map((episode, index) => (
                            <div
                                key={episode.id}
                                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-terminal-green transition-all duration-300 hover:shadow-neon animate-slide-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Video Thumbnail */}
                                <div className="relative aspect-video bg-code-bg">
                                    {(() => {
                                        const id = extractYouTubeId(episode.youtubeId || episode.youtubeUrl);
                                        const src = id ? `https://www.youtube.com/embed/${id}` : '';
                                        return (
                                            <iframe
                                                src={src}
                                                title={episode.title}
                                                className="w-full h-full"
                                                loading="lazy"
                                                allowFullScreen
                                            />
                                        );
                                    })()}

                                    {/* Duration Badge */}
                                    <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-terminal-bg/90 text-terminal-green font-mono text-xs px-2 py-1 rounded">
                                        {episode.duration}
                                    </div>
                                </div>

                                {/* Episode Info */}
                                <div className="p-4 sm:p-6">
                                    <h3 className="text-lg sm:text-xl font-bold font-space mb-2 sm:mb-3 text-foreground group-hover:text-terminal-green transition-colors duration-300 line-clamp-2">
                                        {episode.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base line-clamp-3">
                                        {episode.description}
                                    </p>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                                        <NeonButton
                                            href={(() => {
                                                const id = extractYouTubeId(episode.youtubeId || episode.youtubeUrl);
                                                return id ? `https://youtube.com/watch?v=${id}` : (episode.youtubeUrl || '#');
                                            })()}
                                            target="_blank"
                                            size="sm"
                                            variant="primary"
                                            className="flex-1"
                                        >
                                            <Youtube className="w-4 h-4 mr-2" />
                                            <span className="hidden sm:inline">Assistir no YouTube</span>
                                            <span className="sm:hidden">YouTube</span>
                                        </NeonButton>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {visibleCount < episodes.length && (
                        <div className="text-center mb-12">
                            <NeonButton
                                onClick={() => setVisibleCount((count) => Math.min(count + increment, episodes.length))}
                                size="md"
                                variant="secondary"
                            >
                                Ver mais
                            </NeonButton>
                        </div>
                    )}

                    {/* Call to Action */}
                    <div className="text-center">
                        <div className="code-block max-w-md mx-auto mb-6">
                            <div className="text-terminal-green font-mono text-sm">
                                <span className="text-muted-foreground">if</span> (gostou_do_conteudo) {'{'}
                                <div className="ml-4">
                                    <span className="text-yellow-400">subscribe()</span>;
                                </div>
                                <div className="ml-4">
                                    <span className="text-yellow-400">compartilhe()</span>;
                                </div>
                                {'}'}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <NeonButton
                                href="https://www.youtube.com/@codecast_unimar"
                                target="_blank"
                                size="lg"
                                variant="primary"
                            >
                                <Youtube className="w-5 h-5 mr-2" />
                                Se inscrever no YouTube
                            </NeonButton>
                            <NeonButton
                                href="https://www.instagram.com/codecast_unimar/"
                                target="_blank"
                                size="lg"
                                variant="secondary"
                            >
                                <Instagram className="w-5 h-5 mr-2" />
                                Seguir no Instagram
                            </NeonButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EpisodesSection;