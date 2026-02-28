import { useTranslations } from 'next-intl';
import { ServiceCard } from './ServiceCard';
import { Brain, Heart, Users, BookOpen } from 'lucide-react';

export function ServicesSection() {
    const t = useTranslations('Services');

    return (
        <section id="services" className="py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <span className="text-primary-dark font-semibold tracking-wider uppercase text-sm">
                        {t('subtitle')}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        {t('title')}
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ServiceCard
                        title={t('therapy.title')}
                        description={t('therapy.description')}
                        href="/services/therapy"
                        icon={<Heart className="w-10 h-10" strokeWidth={1.5} />}
                        learnMoreLabel={t('learnMore')}
                    />
                    <ServiceCard
                        title={t('assessments.title')}
                        description={t('assessments.description')}
                        href="/services/assessments"
                        icon={<Brain className="w-10 h-10" strokeWidth={1.5} />}
                        learnMoreLabel={t('learnMore')}
                    />
                    <ServiceCard
                        title={t('group.title')}
                        description={t('group.description')}
                        href="/services/group"
                        icon={<Users className="w-10 h-10" strokeWidth={1.5} />}
                        learnMoreLabel={t('learnMore')}
                    />
                    <ServiceCard
                        title={t('workshops.title')}
                        description={t('workshops.description')}
                        href="/services/workshops"
                        icon={<BookOpen className="w-10 h-10" strokeWidth={1.5} />}
                        learnMoreLabel={t('learnMore')}
                    />
                </div>
            </div>
        </section>
    );
}
