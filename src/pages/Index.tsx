import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import EpisodesSection from '@/components/EpisodesSection';
import Footer from '@/components/Footer';
import GuestsSection from '@/components/GuestsSection';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HostsSection from '@/components/HostsSection';
import MatrixBackground from '@/components/MatrixBackground';

const Index = () => {
    return (
        <div className="min-h-screen bg-terminal-bg text-foreground">
            {/* Matrix Background Effect */}
            <MatrixBackground />

            {/* Fixed Header */}
            <Header />

            {/* Main Content */}
            <main className="relative z-10">
                <HeroSection />
                <HostsSection />
                <AboutSection />
                <EpisodesSection />
                <GuestsSection />
                <ContactSection />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Index;