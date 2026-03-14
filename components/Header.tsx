"use client";

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const LangSwitcher = ({ pathname }: { pathname: string }) => (
    <div className="flex gap-4 items-center">
        <Link href={pathname} locale="es" className="text-sm font-medium hover:text-primary transition-colors">ES</Link>
        <span className="text-secondary-dark">|</span>
        <Link href={pathname} locale="en" className="text-sm font-medium hover:text-primary transition-colors">EN</Link>
    </div>
);

export function Header() {
    const t = useTranslations('Hero');
    const tCta = useTranslations('CTA');
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
                scrolled || isOpen ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
            )}
        >
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3 z-50">
                    <Image src="/torre_rosa_logo.jpg" alt="Centro Torre Rosa Logo" width={44} height={44} className="object-contain rounded-md" />
                    <h1 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                        {t('brandName')}
                    </h1>
                </Link>

                <div className="flex items-center gap-4 z-50">
                    <LangSwitcher pathname={pathname} />
                    {/* Desktop CTA */}
                    <a
                        href="https://calendly.com/eligarciadi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:inline-flex px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold shadow-sm hover:bg-primary-dark transition-all hover:-translate-y-0.5"
                    >
                        {tCta('bookSession')}
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden text-foreground ml-2" onClick={toggleMenu} aria-label="Toggle menu">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Nav Overlay */}
                <div className={cn(
                    "fixed inset-0 bg-white/95 backdrop-blur-sm z-40 flex flex-col justify-center items-center gap-8 pt-24 pb-8 transition-transform duration-300 md:hidden",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}>
                    {/* <NavLinks /> */}

                    <a
                        href="https://calendly.com/eligarciadi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 rounded-xl bg-primary text-white text-lg font-semibold shadow-sm hover:bg-primary-dark transition-all"
                    >
                        {tCta('bookSession')}
                    </a>
                </div>
            </div>
        </header>
    );
}
