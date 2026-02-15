"use client";

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
    const t = useTranslations('Hero');
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

    const NavLinks = () => (
        <>
            <Link href="/" className="text-foreground/80 hover:text-primary transition-colors font-medium">Home</Link>
            <Link href="/#services" className="text-foreground/80 hover:text-primary transition-colors font-medium">Services</Link>
            <Link href="/#about" className="text-foreground/80 hover:text-primary transition-colors font-medium">About</Link>
        </>
    );

    const LangSwitcher = () => (
        <div className="flex gap-4 items-center">
            <Link href={pathname} locale="es" className="text-sm font-medium hover:text-primary transition-colors">ES</Link>
            <span className="text-secondary-dark">|</span>
            <Link href={pathname} locale="en" className="text-sm font-medium hover:text-primary transition-colors">EN</Link>
        </div>
    );

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
                scrolled || isOpen ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
            )}
        >
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 z-50">
                    <h1 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                        {t('brandName')}
                    </h1>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {/* <NavLinks />  -- Commented out until we have proper anchor link handling or pages */}
                    <LangSwitcher />
                </nav>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden z-50 text-foreground" onClick={toggleMenu}>
                    {isOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Nav Overlay */}
                <div className={cn(
                    "fixed inset-0 bg-white/95 backdrop-blur-sm z-40 flex flex-col justify-center items-center gap-8 transition-transform duration-300 md:hidden",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}>
                    {/* <NavLinks /> */}
                    <div className="scale-125">
                        <LangSwitcher />
                    </div>
                </div>
            </div>
        </header>
    );
}
