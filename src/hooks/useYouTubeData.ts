import { useState, useEffect } from 'react';

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

// Dados mockados para demonstração
const MOCK_CHANNEL_STATS: ChannelStats = {
    subscriberCount: '1250',
    viewCount: '45600',
    videoCount: '24'
};

const MOCK_VIDEOS: VideoData[] = [
    {
        id: '1',
        title: 'CodeCast #24 - Desenvolvimento Web Moderno com React e TypeScript',
        publishedAt: '2024-01-15T10:00:00Z',
        viewCount: '1250',
        likeCount: '89',
        thumbnail: 'https://img.youtube.com/vi/example1/maxresdefault.jpg',
        duration: 'PT45M30S'
    },
    {
        id: '2',
        title: 'CodeCast #23 - Inteligência Artificial e Machine Learning na Prática',
        publishedAt: '2024-01-08T10:00:00Z',
        viewCount: '2100',
        likeCount: '156',
        thumbnail: 'https://img.youtube.com/vi/example2/maxresdefault.jpg',
        duration: 'PT52M15S'
    },
    {
        id: '3',
        title: 'CodeCast #22 - DevOps e Deploy Automatizado',
        publishedAt: '2024-01-01T10:00:00Z',
        viewCount: '1800',
        likeCount: '134',
        thumbnail: 'https://img.youtube.com/vi/example3/maxresdefault.jpg',
        duration: 'PT38M45S'
    },
    {
        id: '4',
        title: 'CodeCast #21 - Programação Mobile com React Native',
        publishedAt: '2023-12-25T10:00:00Z',
        viewCount: '1650',
        likeCount: '98',
        thumbnail: 'https://img.youtube.com/vi/example4/maxresdefault.jpg',
        duration: 'PT41M20S'
    },
    {
        id: '5',
        title: 'CodeCast #20 - Banco de Dados e SQL Avançado',
        publishedAt: '2023-12-18T10:00:00Z',
        viewCount: '1950',
        likeCount: '142',
        thumbnail: 'https://img.youtube.com/vi/example5/maxresdefault.jpg',
        duration: 'PT47M10S'
    }
];

const MOCK_ANALYTICS: AnalyticsData[] = [
    { date: '2023-07', views: 1200, subscribers: 450, videos: 2 },
    { date: '2023-08', views: 1800, subscribers: 520, videos: 3 },
    { date: '2023-09', views: 2400, subscribers: 580, videos: 2 },
    { date: '2023-10', views: 3200, subscribers: 650, videos: 4 },
    { date: '2023-11', views: 4100, subscribers: 720, videos: 3 },
    { date: '2023-12', views: 5200, subscribers: 850, videos: 4 },
    { date: '2024-01', views: 6800, subscribers: 1050, videos: 3 }
];

export const useYouTubeData = () => {
  const [channelStats, setChannelStats] = useState<ChannelStats | null>(null);
  const [latestVideos, setLatestVideos] = useState<VideoData[]>([]);
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchYouTubeData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Configurações da API do YouTube
        const API_KEY = 'AIzaSyD7SG7cscw9BbLEb54kttQJLxMHhe9lGec';
        const CHANNEL_ID = 'UCAHl0uSUDCKWJkHrB8zzaTA';

        // Buscar estatísticas do canal
        const channelResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`
        );
        const channelData = await channelResponse.json();

        if (!channelData.items || channelData.items.length === 0) {
          throw new Error('Canal não encontrado');
        }

        // Buscar vídeos mais recentes
        const videosResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&order=date&type=video&maxResults=10&key=${API_KEY}`
        );
        const videosData = await videosResponse.json();

        // Buscar estatísticas detalhadas dos vídeos
        const videoIds = videosData.items.map((video: any) => video.id.videoId).join(',');
        const videoStatsResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=statistics,contentDetails&id=${videoIds}&key=${API_KEY}`
        );
        const videoStatsData = await videoStatsResponse.json();

        // Processar dados do canal
        const channelStats: ChannelStats = {
          subscriberCount: channelData.items[0]?.statistics?.subscriberCount || '0',
          viewCount: channelData.items[0]?.statistics?.viewCount || '0',
          videoCount: channelData.items[0]?.statistics?.videoCount || '0'
        };

        // Processar dados dos vídeos
        const processedVideos: VideoData[] = videosData.items.map((video: any, index: number) => {
          const stats = videoStatsData.items[index]?.statistics || {};
          return {
            id: video.id.videoId,
            title: video.snippet.title,
            publishedAt: video.snippet.publishedAt,
            viewCount: stats.viewCount || '0',
            likeCount: stats.likeCount || '0',
            thumbnail: video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.default?.url,
            duration: videoStatsData.items[index]?.contentDetails?.duration || 'PT0S'
          };
        });

        setChannelStats(channelStats);
        setLatestVideos(processedVideos);
        setAnalyticsData(MOCK_ANALYTICS); // Para analytics históricos, seria necessário usar YouTube Analytics API

      } catch (err) {
        console.error('Erro ao buscar dados do YouTube:', err);
        // Em caso de erro, usar dados mockados como fallback
        setChannelStats(MOCK_CHANNEL_STATS);
        setLatestVideos(MOCK_VIDEOS);
        setAnalyticsData(MOCK_ANALYTICS);
        setError('Usando dados de demonstração. Verifique sua conexão para dados em tempo real.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchYouTubeData();
  }, []);

    return {
        channelStats,
        latestVideos,
        analyticsData,
        isLoading,
        error
    };
};

// Função auxiliar para integrar com a API real do YouTube
export const fetchRealYouTubeData = async (apiKey: string, channelId: string) => {
    try {
        // Buscar estatísticas do canal
        const channelResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`
        );
        const channelData = await channelResponse.json();

        // Buscar vídeos mais recentes
        const videosResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&type=video&maxResults=10&key=${apiKey}`
        );
        const videosData = await videosResponse.json();

        // Buscar estatísticas detalhadas dos vídeos
        const videoIds = videosData.items.map((video: any) => video.id.videoId).join(',');
        const videoStatsResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=statistics,contentDetails&id=${videoIds}&key=${apiKey}`
        );
        const videoStatsData = await videoStatsResponse.json();

        // Processar dados do canal
        const channelStats: ChannelStats = {
            subscriberCount: channelData.items[0]?.statistics?.subscriberCount || '0',
            viewCount: channelData.items[0]?.statistics?.viewCount || '0',
            videoCount: channelData.items[0]?.statistics?.videoCount || '0'
        };

        // Processar dados dos vídeos
        const processedVideos: VideoData[] = videosData.items.map((video: any, index: number) => {
            const stats = videoStatsData.items[index]?.statistics || {};
            return {
                id: video.id.videoId,
                title: video.snippet.title,
                publishedAt: video.snippet.publishedAt,
                viewCount: stats.viewCount || '0',
                likeCount: stats.likeCount || '0',
                thumbnail: video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.default?.url,
                duration: videoStatsData.items[index]?.contentDetails?.duration || 'PT0S'
            };
        });

        return {
            channelStats,
            latestVideos: processedVideos,
            analyticsData: MOCK_ANALYTICS // Para analytics históricos, seria necessário usar YouTube Analytics API
        };

    } catch (error) {
        console.error('Erro ao buscar dados reais do YouTube:', error);
        throw new Error('Falha ao conectar com a API do YouTube');
    }
};
