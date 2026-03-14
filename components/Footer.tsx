import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Instagram } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
    const t = useTranslations('Footer');
    const tHero = useTranslations('Hero'); // Reuse brand name

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-dark text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <div className="flex items-center gap-3">
                            <Image src="/torre_rosa_logo.jpg" alt="Centro Torre Rosa Logo" width={48} height={48} className="object-cover rounded-md bg-white p-1" />
                            <h3 className="text-2xl font-bold">{tHero('brandName')}</h3>
                        </div>
                        <p className="text-white/80 max-w-sm">
                            {tHero('subtitle')}
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-lg">Links</h4>
                        <nav className="flex flex-col space-y-2">
                            <Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
                            <Link href="/#services" className="text-white/80 hover:text-white transition-colors">Services</Link>
                            <Link href="/#about" className="text-white/80 hover:text-white transition-colors">About</Link>
                            <Link href="/#contact" className="text-white/80 hover:text-white transition-colors">Contact</Link>
                        </nav>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-lg">Social</h4>
                        <a href="https://www.instagram.com/orientadora_montessori_/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors" aria-label="Instagram">
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
                    <p>© {currentYear} {tHero('brandName')}. {t('rights')}</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/legal/aviso-legal" className="hover:text-white transition-colors">{t('legal')}</Link>
                        <Link href="/legal/privacidad" className="hover:text-white transition-colors">{t('privacy')}</Link>
                        <Link href="/legal/cookies" className="hover:text-white transition-colors">{t('cookies')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
