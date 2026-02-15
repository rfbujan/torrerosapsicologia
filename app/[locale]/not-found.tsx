import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Home } from 'lucide-react';

export default function NotFound() {
    const t = useTranslations('NotFound');

    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-primary">404</h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                    {t('title')}
                </h2>
                <p className="text-neutral-600 max-w-md mx-auto">
                    {t('description')}
                </p>
                <div className="pt-8">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow-lg hover:bg-primary-dark transition-all duration-300"
                    >
                        <Home className="w-4 h-4 mr-2" />
                        {t('backHome')}
                    </Link>
                </div>
            </div>
        </div>
    );
}
