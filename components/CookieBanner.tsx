'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { X } from 'lucide-react';

export function CookieBanner() {
    const t = useTranslations('CookieBanner');
    const [mounted, setMounted] = useState(false);
    const [consent, setConsent] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMounted(true);
            setConsent(localStorage.getItem('cookieConsent') === 'true');
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookieConsent', 'true');
        setConsent(true);
    };

    if (!mounted || consent) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[60] bg-white border-t border-gray-200 shadow-2xl p-4 md:p-6 text-sm text-gray-700 animate-in slide-in-from-bottom-5 duration-500 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="max-w-4xl">
                <p>
                    {t('message')} <Link href="/legal/cookies" className="text-primary-dark underline hover:opacity-80 transition-opacity font-medium">{t('policyLinkText')}</Link>.
                </p>
            </div>

            <div className="flex gap-3 w-full md:w-auto shrink-0">
                <button
                    onClick={acceptCookies}
                    className="flex-1 md:flex-none bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-lg transition-colors whitespace-nowrap"
                >
                    {t('accept')}
                </button>
                <button
                    onClick={() => setConsent(true)}
                    aria-label="Cerrar banner (sólo cerrar)"
                    className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
