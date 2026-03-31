import { Header } from '../../components/Header';
import { HeroSection } from '../../components/HeroSection';
import { ServicesSection } from '../../components/ServicesSection';
import { MethodologySection } from '../../components/MethodologySection';
import { AboutSection } from '../../components/AboutSection';
import { NewsSection } from '../../components/NewsSection';
import { ContactSection } from '../../components/ContactSection';
import { Footer } from '../../components/Footer';
import { setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        alternates: {
            canonical: `https://www.torrerosapsicologia.com/${locale}`,
            languages: {
                es: '/es',
                en: '/en'
            }
        }
    };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

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
