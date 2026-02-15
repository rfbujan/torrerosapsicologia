import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Quote } from 'lucide-react';

export function AboutSection() {
    const t = useTranslations('About');

    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

                    {/* Image Side */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:mr-auto rounded-2xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-secondary/20 z-10 mix-blend-multiply"></div>
                            {/* Placeholder for Psychologist Image - replacing with a solid color block for now or a generic placeholder if available */}
                            <div className="w-full h-full bg-neutral-100 flex items-center justify-center text-neutral-400">
                                {/* In a real scenario, use <Image src="..." /> */}
                                <span className="text-sm uppercase tracking-widest">[Psychologist Photo]</span>
                            </div>
                        </div>
                        {/* Decorative block */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10"></div>
                        <div className="absolute -top-6 -left-6 w-40 h-40 bg-secondary/40 rounded-full blur-2xl -z-10"></div>
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
                            <p>
                                {t('bio')}
                            </p>
                            <p>
                                {t('schoolIntegration')}
                            </p>
                        </div>

                        <div className="bg-secondary/20 p-6 rounded-xl border-l-4 border-primary relative">
                            <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
                            <p className="italic text-neutral-700 font-medium">
                                "{t('philosophy')}"
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
