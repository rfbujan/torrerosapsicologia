'use client';

import { MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function WhatsAppWidget() {
    const t = useTranslations('WhatsAppWidget');
    // Using formatting to make the URL
    // The user provided +34609135066
    const whatsappUrl = `https://wa.me/34609135066?text=${encodeURIComponent(t('defaultMessage'))}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group flex items-center justify-center"
            aria-label={t('ariaLabel')}
        >
            <MessageCircle className="w-8 h-8 group-hover:animate-pulse" />
        </a>
    );
}
