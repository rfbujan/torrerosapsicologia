import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ArrowUpRight, Calendar, Mic, Newspaper, Presentation, Play } from 'lucide-react';
import { cn } from '@/lib/utils';

export function NewsSection() {
    const t = useTranslations('News');

    // Fetch the 6 items manually from translations
    const items = [0, 1, 2, 3, 4, 5].map(i => ({
        type: t(`items.${i}.type`),
        title: t(`items.${i}.title`),
        date: t(`items.${i}.date`),
        description: t(`items.${i}.description`),
        action: t(`items.${i}.action`),
        image: t.has(`items.${i}.image`) ? t(`items.${i}.image`) : null,
        href: t.has(`items.${i}.href`) ? t(`items.${i}.href`) : null,
    }));

    const getIcon = (type: string) => {
        switch (type.toUpperCase()) {
            case 'TALLER':
            case 'WORKSHOP':
                return <Presentation className="w-5 h-5" />;
            case 'PODCAST':
                return <Mic className="w-5 h-5" />;
            case 'VÍDEO':
            case 'VIDEO':
                return <Play className="w-5 h-5" />;
            case 'ARTÍCULO':
            case 'ARTICLE':
                return <Newspaper className="w-5 h-5" />;
            default:
                return <Calendar className="w-5 h-5" />;
        }
    };

    const getColorClass = (type: string) => {
        switch (type.toUpperCase()) {
            case 'TALLER':
            case 'WORKSHOP':
                return "bg-primary/10 text-primary-dark";
            case 'PODCAST':
                return "bg-blue-50 text-blue-700";
            case 'VÍDEO':
            case 'VIDEO':
                return "bg-red-50 text-red-700";
            case 'ARTÍCULO':
            case 'ARTICLE':
                return "bg-amber-50 text-amber-700";
            default:
                return "bg-secondary text-primary-dark";
        }
    };

    return (
        <section className="py-24 bg-neutral-50 border-t border-neutral-100">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="space-y-4 max-w-2xl">
                        <span className="text-primary-dark font-semibold tracking-wider uppercase text-sm">
                            {t('subtitle')}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                            {t('title')}
                        </h2>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item, index) => {
                        const CardWrapper = item.href ? 'a' : 'div';
                        const wrapperProps = item.href ? {
                            href: item.href,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        } : {};

                        return (
                            <CardWrapper
                                key={index}
                                {...wrapperProps}
                                className="group bg-white rounded-[0.5rem_2rem_0.5rem_2rem] border-2 border-neutral-100/80 hover:border-primary/40 shadow-[6px_6px_0_#f5f5f5] hover:shadow-[10px_10px_0_var(--color-secondary)] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full cursor-pointer overflow-hidden"
                            >
                                {item.image && (
                                    <div className="relative w-full h-48 overflow-hidden bg-neutral-100 shrink-0">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                    </div>
                                )}

                                <div className="p-8 flex flex-col flex-grow relative">
                                    {/* Texture overlay on hover */}
                                    <div className="absolute inset-0 bg-grain opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply pointer-events-none"></div>

                                    <div className="flex items-center justify-between mb-6 relative z-10">
                                        <span className={cn(
                                            "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide",
                                            getColorClass(item.type)
                                        )}>
                                            {getIcon(item.type)}
                                            {item.type}
                                        </span>
                                        <span className="text-sm font-medium text-neutral-400">
                                            {item.date}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-foreground mb-4 leading-snug group-hover:text-primary transition-colors relative z-10">
                                        {item.title}
                                    </h3>

                                    <p className="text-neutral-600 mb-8 flex-grow relative z-10">
                                        {item.description}
                                    </p>

                                    <div className="inline-flex items-center font-semibold text-primary group-hover:text-primary-dark transition-colors mt-auto relative z-10">
                                        {item.action}
                                        <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </div>
                                </div>
                            </CardWrapper>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
