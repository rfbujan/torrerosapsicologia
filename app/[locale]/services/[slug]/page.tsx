import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Header } from '../../../../components/Header';
import { Footer } from '../../../../components/Footer';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from '@/i18n/routing';

const validSlugs = ['therapy', 'assessments', 'group', 'workshops'];

export function generateStaticParams() {
    return validSlugs.map((slug) => ({ slug }));
}

// Generates correct metadata for the specific service
export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string, slug: string }>;
}) {
    const { locale, slug } = await params;
    setRequestLocale(locale);

    if (!validSlugs.includes(slug)) {
        return {};
    }

    const t = await getTranslations({ locale, namespace: `ServiceDetails.${slug}` });
    return {
        title: `${t('title')} | Centro Torre Rosa`,
        description: t('subtitle'),
    };
}

export default async function ServicePage({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>;
}) {
    const { locale, slug } = await params;
    setRequestLocale(locale);

    // Validate if slug exists in our known list
    if (!validSlugs.includes(slug)) {
        notFound();
    }

    // Since this is a server component handling dynamic dynamic keys locally
    // we use getTranslations to specifically grab this section.
    const t = await getTranslations({ locale, namespace: `ServiceDetails.${slug}` });
    const tCta = await getTranslations({ locale, namespace: 'CTA' });

    const tShared = await getTranslations({ locale, namespace: 'ServiceDetails' });

    // Fetch the list of benefits manually because next-intl returns arrays as an object of indices
    // 4 items per benefit list based on what we added to json files
    const benefits = [0, 1, 2, 3].map((i) => t(`benefits.${i}`));

    return (
        <main className="min-h-screen flex flex-col font-sans bg-white">
            <Header />

            {/* Hero Image Section */}
            <div className="relative w-full h-[50vh] md:h-[60vh] mt-20">
                <Image
                    src="/torre_rosa_feet_rainbow.jpg"
                    alt="Niño jugando con arcoíris"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
                <div className="absolute inset-0 bg-secondary/20 mix-blend-multiply"></div>

                <div className="absolute bottom-0 w-full p-8 md:p-16">
                    <div className="container mx-auto max-w-4xl">
                        <span className="inline-block px-3 py-1 mb-4 rounded-full bg-secondary/80 backdrop-blur-sm text-primary-dark text-sm font-semibold tracking-wide uppercase shadow-sm">
                            {t('subtitle')}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight drop-shadow-sm">
                            {t('title')}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 max-w-4xl py-16 space-y-16 flex-grow">

                {/* Main Body Text */}
                <div className="prose prose-lg md:prose-xl text-neutral-600 prose-p:leading-relaxed max-w-none whitespace-pre-wrap">
                    {t('content')}
                </div>

                {/* Benefits / Process Box */}
                <div className="bg-gradient-to-br from-secondary/30 to-white rounded-3xl p-8 md:p-12 border border-secondary/50 shadow-sm relative overflow-hidden">
                    {/* Decorative blurred blob */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

                    <h3 className="text-2xl font-bold text-foreground mb-8 text-center md:text-left">
                        {t('benefitsTitle')}
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-6 list-none p-0 m-0">
                        {benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-4">
                                <div className="mt-1 bg-white p-2 rounded-full shadow-sm">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                </div>
                                <span className="text-lg text-neutral-700 font-medium leading-snug">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Call to action & Navigation */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-neutral-100">
                    <Link href="/#services" className="text-neutral-500 hover:text-primary transition-colors font-medium flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 rotate-180" />
                        {tShared('backToServices')}
                    </Link>

                    <a
                        href="https://calendly.com/eligarciadi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-white text-lg font-semibold shadow-lg hover:bg-primary-dark transition-all duration-300 group hover:-translate-y-1"
                    >
                        {tCta('bookSession')}
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

            </div>

            <Footer />
        </main>
    );
}
