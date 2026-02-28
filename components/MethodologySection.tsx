import { useTranslations } from 'next-intl';
import { CheckCircle2 } from 'lucide-react';

export function MethodologySection() {
    const t = useTranslations('Methodology');

    // Manually generating the techniques array since next-intl handling of arrays can be complex,
    // but we can map over indices or use raw messages. For simplicity, we can fetch them by index.
    const techniques = [0, 1, 2, 3, 4].map((i) => t(`techniques.${i}`));

    return (
        <section id="methodology" className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-primary-dark font-semibold tracking-wider uppercase text-sm">
                        {t('subtitle')}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        {t('title')}
                    </h2>
                </div>

                <div className="space-y-8 prose prose-lg text-neutral-600 max-w-none">
                    <p>{t('p1')}</p>
                    <p>{t('p2')}</p>
                    <p>{t('p3')}</p>

                    <div className="bg-secondary/20 rounded-2xl p-8 my-8 border border-secondary">
                        <h3 className="text-xl font-semibold text-foreground mb-6 mt-0">
                            {t('techniquesTitle')}
                        </h3>
                        <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
                            {techniques.map((tech, index) => (
                                <li key={index} className="flex items-start gap-3 m-0">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                    <span>{tech}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <p className="font-medium text-foreground text-xl text-center pt-4">
                        {t('p4')}
                    </p>
                </div>
            </div>
        </section>
    );
}
