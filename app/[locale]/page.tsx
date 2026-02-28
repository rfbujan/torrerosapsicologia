import { Header } from '../../components/Header';
import { HeroSection } from '../../components/HeroSection';
import { ServicesSection } from '../../components/ServicesSection';
import { MethodologySection } from '../../components/MethodologySection';
import { AboutSection } from '../../components/AboutSection';
import { NewsSection } from '../../components/NewsSection';
import { ContactSection } from '../../components/ContactSection';
import { Footer } from '../../components/Footer';

export default function HomePage() {
    return (
        <main className="min-h-screen flex flex-col font-sans">
            <Header />
            <HeroSection />
            <ServicesSection />
            <MethodologySection />
            <AboutSection />
            <NewsSection />
            <ContactSection />
            <Footer />
        </main>
    );
}
