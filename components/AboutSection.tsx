import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function AboutSection() {
    const t = useTranslations('About');

    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

                    {/* Image Side */}
                    <div className="w-full md:w-1/2 relative flex justify-center py-10">
                        {/* Background Offset Texture Block */}
                        <div className="absolute top-4 left-[10%] w-[80%] h-full bg-secondary rounded-[4rem_1rem_4rem_1rem] bg-grain -z-10 rotate-3"></div>

                        {/* Foreground Image Block */}
                        <div className="relative aspect-[4/5] w-full max-w-[85%] mx-auto rounded-[3rem_0.5rem_3rem_0.5rem] overflow-hidden border-8 border-white shadow-[12px_12px_0_var(--color-primary-light)]">
                            <div className="absolute inset-0 bg-primary/10 z-10 mix-blend-multiply"></div>
                            <Image
                                src="/torre_rosa_psychologist.jpg"
                                alt="Centro Torre Rosa Psychologist"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Decorative floating elements */}
                        <div className="absolute -bottom-4 right-4 w-24 h-24 bg-primary rounded-[1rem_1rem_2rem_1rem] -z-20 rotate-12"></div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full md:w-1/2 space-y-8">
                        <div className="space-y-4">
                            <span className="text-primary-dark font-semibold tracking-wider uppercase text-sm">
                                {t('subtitle')}
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                                {t.rich('title', {
                                    span: (chunks) => <span className="text-primary">{chunks}</span>
                                })}
                            </h2>
                        </div>

                        <div className="prose prose-lg text-neutral-600">
                            <p>{t('p1')}</p>
                            <p>{t('p2')}</p>
                            <p className="font-semibold text-foreground pt-4">{t('p3')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
