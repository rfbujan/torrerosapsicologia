'use client';

import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { RefreshCcw } from 'lucide-react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const t = useTranslations('Error');

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
            <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">
                    {t('title')}
                </h2>
                <p className="text-neutral-600">
                    {t('description')}
                </p>
                <button
                    onClick={reset}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow-lg hover:bg-primary-dark transition-all duration-300"
                >
                    <RefreshCcw className="w-4 h-4 mr-2" />
                    {t('retry')}
                </button>
            </div>
        </div>
    );
}
