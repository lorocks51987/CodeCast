import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Play,
    ThumbsUp,
    Eye,
    Calendar,
    TrendingUp,
    Users,
    Clock,
    ExternalLink,
    BarChart3,
    Star
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { useYouTubeData } from '@/hooks/useYouTubeData';

interface VideoData {
    id: string;
    title: string;
    publishedAt: string;
    viewCount: string;
    likeCount: string;
    thumbnail: string;
    duration: string;
}

interface ChannelStats {
    subscriberCount: string;
    viewCount: string;
    videoCount: string;
}

interface AnalyticsData {
    date: string;
    views: number;
    subscribers: number;
    videos: number;
}

const DashboardSection = () => {
    const {
        channelStats,
        latestVideos,
        analyticsData,
        isLoading,
        error
    } = useYouTubeData();

    const formatNumber = (num: string | number) => {
        const number = typeof num === 'string' ? parseInt(num) : num;
        if (number >= 1000000) {
            return (number / 1000000).toFixed(1) + 'M';
        } else if (number >= 1000) {
            return (number / 1000).toFixed(1) + 'K';
        }
        return number.toString();
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    const formatDuration = (duration: string) => {
        // Remove PT prefix and convert to readable format
        const cleanDuration = duration.replace('PT', '');
        const match = cleanDuration.match(/(\d+H)?(\d+M)?(\d+S)?/);
        if (match) {
            const hours = match[1] ? match[1].replace('H', '') : '0';
            const minutes = match[2] ? match[2].replace('M', '') : '0';
            const seconds = match[3] ? match[3].replace('S', '') : '0';

            if (hours !== '0') {
                return `${hours}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
            } else {
                return `${minutes}:${seconds.padStart(2, '0')}`;
            }
        }
        return duration;
    };

    const getHighQualityThumbnail = (videoId: string) => {
        // YouTube thumbnail qualities (from lowest to highest)
        // Default: https://img.youtube.com/vi/VIDEO_ID/default.jpg (120x90)
        // Medium: https://img.youtube.com/vi/VIDEO_ID/mqdefault.jpg (320x180)
        // High: https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg (480x360)
        // Standard: https://img.youtube.com/vi/VIDEO_ID/sddefault.jpg (640x480)
        // Max: https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg (1280x720)
        return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    };

    // Get the latest posted podcast (most recent by publication date, excluding shorts)
    const getLatestVideo = () => {
        if (!latestVideos || latestVideos.length === 0) return null;

        // Filter out shorts (videos shorter than 5 minutes)
        const podcasts = latestVideos.filter(video => {
            const duration = video.duration.replace('PT', '');
            const match = duration.match(/(\d+H)?(\d+M)?(\d+S)?/);
            if (match) {
                const hours = match[1] ? parseInt(match[1].replace('H', '')) : 0;
                const minutes = match[2] ? parseInt(match[2].replace('M', '')) : 0;
                const seconds = match[3] ? parseInt(match[3].replace('S', '')) : 0;
                const totalSeconds = hours * 3600 + minutes * 60 + seconds;
                return totalSeconds >= 300; // Only videos 5+ minutes (podcasts)
            }
            return false; // If we can't parse duration, exclude it
        });

        if (podcasts.length === 0) return null;

        // Sort podcasts by publication date (most recent first)
        const sortedPodcasts = [...podcasts].sort((a, b) =>
            new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );

        return sortedPodcasts[0];
    };

    const latestVideo = getLatestVideo();

    if (isLoading) {
        return (
            <section id="dashboard" className="py-20 bg-gradient-dark relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16 animate-slide-up">
                            <div className="font-mono text-terminal-green text-sm mb-4">
                                <span className="text-muted-foreground">{'// '}</span>
                                Carregando métricas...
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold font-space mb-6">
                                <span className="terminal-text">Dashboard</span> YouTube
                            </h2>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                                Acompanhe o crescimento e performance do canal CodeCast com dados em tempo real.
                            </p>
                        </div>
                        <div className="animate-pulse">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="h-32 bg-card border border-border rounded-lg"></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="dashboard" className="py-20 bg-gradient-dark relative">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 animate-slide-up">
                        <div className="font-mono text-terminal-green text-sm mb-4">
                            <span className="text-muted-foreground">{'// '}</span>
                            Métricas do canal
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-space mb-6">
                            <span className="terminal-text">Dashboard</span> YouTube
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                            Acompanhe o crescimento e performance do canal CodeCast com dados em tempo real.
                        </p>
                        {error && (
                            <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg max-w-2xl mx-auto">
                                <p className="text-yellow-400 text-sm">{error}</p>
                            </div>
                        )}
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        <div className="group bg-card border border-border rounded-lg p-6 hover:border-terminal-green transition-all duration-300 hover:shadow-neon animate-slide-up">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-2 bg-terminal-green/10 rounded-lg">
                                    <Eye className="h-6 w-6 text-terminal-green" />
                                </div>
                                <div className="text-right">
                                    <div className="text-3xl font-bold terminal-text">
                                        {formatNumber(channelStats?.viewCount || '0')}
                                    </div>
                                    <p className="text-sm text-muted-foreground">Visualizações</p>
                                </div>
                            </div>
                        </div>

                        <div className="group bg-card border border-border rounded-lg p-6 hover:border-terminal-green transition-all duration-300 hover:shadow-neon animate-slide-up" style={{ animationDelay: '0.1s' }}>
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-2 bg-terminal-green/10 rounded-lg">
                                    <Users className="h-6 w-6 text-terminal-green" />
                                </div>
                                <div className="text-right">
                                    <div className="text-3xl font-bold terminal-text">
                                        {formatNumber(channelStats?.subscriberCount || '0')}
                                    </div>
                                    <p className="text-sm text-muted-foreground">Inscritos</p>
                                </div>
                            </div>
                        </div>

                        <div className="group bg-card border border-border rounded-lg p-6 hover:border-terminal-green transition-all duration-300 hover:shadow-neon animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-2 bg-terminal-green/10 rounded-lg">
                                    <Play className="h-6 w-6 text-terminal-green" />
                                </div>
                                <div className="text-right">
                                    <div className="text-3xl font-bold terminal-text">
                                        {formatNumber(channelStats?.videoCount || '0')}
                                    </div>
                                    <p className="text-sm text-muted-foreground">Vídeos</p>
                                </div>
                            </div>
                        </div>

                        <div className="group bg-card border border-border rounded-lg p-6 hover:border-terminal-green transition-all duration-300 hover:shadow-neon animate-slide-up" style={{ animationDelay: '0.3s' }}>
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-2 bg-terminal-green/10 rounded-lg">
                                    <ThumbsUp className="h-6 w-6 text-terminal-green" />
                                </div>
                                <div className="text-right">
                                    <div className="text-3xl font-bold terminal-text">
                                        {formatNumber(
                                            latestVideos?.reduce((total, video) =>
                                                total + parseInt(video.likeCount || '0'), 0
                                            ) || '0'
                                        )}
                                    </div>
                                    <p className="text-sm text-muted-foreground">Curtidas</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Latest Podcast and Stats */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        {/* Latest Podcast */}
                        <div className="bg-card border border-border rounded-lg p-6 hover:border-terminal-green transition-all duration-300 hover:shadow-neon animate-slide-up">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-terminal-green/10 rounded-lg">
                                    <Play className="h-6 w-6 text-terminal-green" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold terminal-text">Último Podcast</h3>
                                    <p className="text-muted-foreground">Postado mais recentemente</p>
                                </div>
                            </div>

                            {latestVideo ? (
                                <div className="space-y-4">
                                    <div className="relative group">
                                        <img
                                            src={getHighQualityThumbnail(latestVideo.id)}
                                            alt={latestVideo.title}
                                            className="w-full h-48 object-cover rounded-lg border border-border"
                                        />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                                            <button
                                                onClick={() => window.open(`https://youtube.com/watch?v=${latestVideo.id}`, '_blank')}
                                                className="bg-terminal-green text-terminal-bg px-6 py-3 rounded-lg font-medium hover:bg-terminal-green/90 transition-colors flex items-center gap-2"
                                            >
                                                <Play className="h-5 w-5" />
                                                Assistir
                                            </button>
                                        </div>
                                        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                                            {formatDuration(latestVideo.duration)}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-medium text-foreground mb-2 line-clamp-2">
                                            {latestVideo.title}
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            Publicado em {formatDate(latestVideo.publishedAt)}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <Play className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                                    <p className="text-muted-foreground">Nenhum vídeo disponível</p>
                                </div>
                            )}
                        </div>

                        {/* Video Stats */}
                        <div className="bg-card border border-border rounded-lg p-6 hover:border-terminal-green transition-all duration-300 hover:shadow-neon animate-slide-up" style={{ animationDelay: '0.1s' }}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-terminal-green/10 rounded-lg">
                                    <BarChart3 className="h-6 w-6 text-terminal-green" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold terminal-text">Estatísticas do Vídeo</h3>
                                    <p className="text-muted-foreground">Visualizações, likes e engajamento</p>
                                </div>
                            </div>

                            {latestVideo ? (
                                <div className="space-y-6">
                                    {/* Main Stats */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="text-center p-4 bg-muted/30 rounded-lg">
                                            <div className="text-3xl font-bold terminal-text mb-1">
                                                {formatNumber(latestVideo.viewCount)}
                                            </div>
                                            <p className="text-xs text-muted-foreground">Visualizações</p>
                                        </div>
                                        <div className="text-center p-4 bg-muted/30 rounded-lg">
                                            <div className="text-3xl font-bold terminal-text mb-1">
                                                {formatNumber(latestVideo.likeCount)}
                                            </div>
                                            <p className="text-xs text-muted-foreground">Curtidas</p>
                                        </div>
                                    </div>

                                    {/* Engagement Rate */}
                                    <div className="p-4 bg-muted/30 rounded-lg">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium text-foreground">Taxa de Engajamento</span>
                                            <span className="text-sm terminal-text">
                                                {((parseInt(latestVideo.likeCount || '0') / parseInt(latestVideo.viewCount || '1')) * 100).toFixed(1)}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-muted rounded-full h-2">
                                            <div
                                                className="bg-terminal-green h-2 rounded-full transition-all duration-500"
                                                style={{
                                                    width: `${Math.min(((parseInt(latestVideo.likeCount || '0') / parseInt(latestVideo.viewCount || '1')) * 100), 100)}%`
                                                }}
                                            ></div>
                                        </div>
                                    </div>


                                    {/* Action Button */}
                                    <button
                                        onClick={() => window.open(`https://youtube.com/watch?v=${latestVideo.id}`, '_blank')}
                                        className="w-full bg-terminal-green text-terminal-bg py-3 rounded-lg font-medium hover:bg-terminal-green/90 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                        Ver no YouTube
                                    </button>
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                                    <p className="text-muted-foreground">Nenhuma estatística disponível</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardSection;