import { useTranslations } from 'next-intl';
import { Mail, MapPin, Phone } from 'lucide-react';

export function ContactSection() {
    const t = useTranslations('Contact');

    return (
        <section id="contact" className="py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <span className="text-primary-dark font-semibold tracking-wider uppercase text-sm">
                        {t('subtitle')}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        {t('title')}
                    </h2>
                    <p className="text-neutral-600">
                        {t('description')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8 p-8 bg-white rounded-2xl shadow-sm h-full">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-secondary rounded-lg text-primary-dark">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground mb-1">{t('location.label')}</h3>
                                <p className="text-neutral-600 leading-relaxed">
                                    Centro Internacional Maria Montessori<br />
                                    Calle Godino, 3<br />
                                    Málaga
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-secondary rounded-lg text-primary-dark">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground mb-1">{t('email.label')}</h3>
                                <a href="mailto:eligarciadi@gmail.com" className="text-neutral-600 hover:text-primary transition-colors">
                                    eligarciadi@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-secondary rounded-lg text-primary-dark">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground mb-1">{t('phone.label')}</h3>
                                <a href="tel:+34609135066" className="text-neutral-600 hover:text-primary transition-colors">
                                    +34 609 13 50 66
                                </a>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-neutral-100">
                            <p className="text-sm text-neutral-500 italic">
                                {t('schedule')}
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="space-y-6 p-8 bg-white rounded-2xl shadow-sm">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-foreground">
                                    {t('form.name')}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    placeholder={t('form.namePlaceholder')}
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-foreground">
                                    {t('form.email')}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    placeholder={t('form.emailPlaceholder')}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-foreground">
                                {t('form.message')}
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                                placeholder={t('form.messagePlaceholder')}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 px-6 rounded-lg bg-primary text-white font-semibold shadow-lg hover:bg-primary-dark transition-all duration-300"
                        >
                            {t('form.submit')}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
