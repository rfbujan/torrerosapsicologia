import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';
import { PinkTower } from './PinkTower';

export function HeroSection() {
    const t = useTranslations('Hero');
    const tCta = useTranslations('CTA');

    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/30 px-4 pt-24 md:pt-32 bg-grain">

            {/* The Asymmetric Container */}
            <div className="container mx-auto z-10 w-full relative">

                {/* Floating Elements / Chaos relative to the rigid text */}
                <div className="absolute right-0 top-[10%] opacity-10 pointer-events-none mix-blend-multiply md:-right-[10%] w-[50vh] h-[50vh] md:w-[70vh] md:h-[70vh] -rotate-12">
                    {/* Big faded watermark logo */}
                    <Image src="/torre_rosa_logo.jpg" alt="" fill className="object-contain grayscale blur-sm" />
                </div>

                {/* Massive Typographic Block - Left weighted */}
                <div className="relative z-20 max-w-[90%] md:max-w-4xl space-y-8 md:space-y-12 isolate">

                    <span className="inline-block px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm text-primary-dark text-sm md:text-base font-bold tracking-widest uppercase shadow-sm border border-secondary">
                        {t('subtitle')}
                    </span>

                    <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] font-black text-foreground leading-[0.9] tracking-tighter mix-blend-darken relative">
                        {/* Interactive floating Pink Tower that overlaps the text intentionally to create depth */}
                        <div className="absolute -right-8 -top-12 md:-right-24 md:-top-16 z-30 hover:scale-110 transition-transform duration-700 shadow-2xl rounded-2xl md:rounded-[3rem_0.5rem_3rem_0.5rem] overflow-hidden border-4 border-white bg-white w-40 h-64 md:w-56 md:h-96 hidden sm:block p-4 flex justify-center items-end bg-gradient-to-b from-white to-secondary/20">
                            <PinkTower className="w-full h-[90%] text-primary" />
                        </div>

                        {t.rich('title', {
                            span: (chunks) => <span className="text-primary block ml-[5%] md:ml-[10%] relative z-10 drop-shadow-sm">{chunks}</span>
                        })}
                    </h1>

                    <div className="pl-0 md:pl-12 max-w-xl relative z-20">
                        <p className="text-xl md:text-2xl text-neutral-700 font-medium leading-relaxed mb-8">
                            {t('description')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                            <a
                                href="https://calendly.com/eligarciadi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-white text-lg font-bold shadow-[0_8px_30px_rgb(242,162,177,0.4)] hover:bg-primary-dark hover:-translate-y-1 transition-all duration-300 group"
                            >
                                {tCta('bookSession')}
                                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </a>
                            <Link
                                href="/#services"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-foreground text-lg border-2 border-neutral-100 font-bold shadow-sm hover:border-secondary hover:bg-neutral-50 transition-all duration-300"
                            >
                                {t('specialty')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile-only visible Pink Tower footprint */}
            <div className="relative mt-16 sm:hidden w-full h-80 z-10 flex justify-end">
                <div className="w-48 h-full shadow-xl rounded-[2rem_0.5rem_2rem_0.5rem] overflow-hidden border-4 border-white bg-white rotate-6 hover:rotate-0 transition-transform p-4 flex justify-center items-end bg-gradient-to-b from-white to-secondary/20">
                    <PinkTower className="w-full h-full text-primary" />
                </div>
            </div>
        </section>
    );
}
