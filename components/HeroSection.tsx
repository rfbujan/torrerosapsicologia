import { useTranslations } from 'next-intl';
import { PinkTower } from './PinkTower';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
    const t = useTranslations('Hero');

    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-primary/5 via-secondary/20 to-background px-4">
            {/* Background Graphic - Faded, Large */}
            <div className="absolute right-[-10%] top-[20%] opacity-5 w-[40vh] h-auto pointer-events-none md:w-[60vh]">
                <PinkTower />
            </div>

            <div className="container mx-auto z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="text-center md:text-left space-y-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-secondary text-primary-dark text-sm font-semibold tracking-wide uppercase">
                        {t('subtitle')}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight tracking-tight">
                        {t.rich('title', {
                            span: (chunks) => <span className="text-primary">{chunks}</span>
                        })}
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-600 max-w-lg mx-auto md:mx-0">
                        {t('description')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                        <Link
                            href="/#contact"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow-lg hover:bg-primary-dark transition-all duration-300 group"
                        >
                            {t('contactBtn')}
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/#services"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-foreground border border-neutral-200 font-semibold shadow-sm hover:bg-secondary transition-all duration-300"
                        >
                            {t('specialty')}
                        </Link>
                    </div>
                </div>

                {/* Visual Focus */}
                <div className="flex justify-center items-center relative">
                    <div className="relative w-64 md:w-80 h-auto drop-shadow-2xl">
                        <PinkTower className="w-full h-auto text-primary" />
                        {/* Decorative Elements */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-secondary/50 to-primary/20 rounded-full blur-3xl opacity-60"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
