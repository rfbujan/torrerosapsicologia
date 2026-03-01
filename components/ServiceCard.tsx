import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/routing";

interface ServiceCardProps {
    title: string;
    description: string;
    href: string;
    image?: string;
    learnMoreLabel: string;
}

export function ServiceCard({ title, description, href, image, learnMoreLabel }: ServiceCardProps) {
    return (
        <Link
            href={href}
            className="group block bg-white rounded-[2rem_0.5rem_2rem_0.5rem] border-2 border-secondary/60 hover:border-primary/50 shadow-[6px_6px_0_var(--color-secondary-dark)] hover:shadow-[10px_10px_0_var(--color-primary-light)] hover:-translate-y-2 transition-all duration-300 h-full flex flex-col overflow-hidden"
        >
            {image && (
                <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
            )}

            <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {title}
                </h3>
                <p className="text-neutral-600 leading-relaxed flex-grow">
                    {description}
                </p>
                <div className="mt-6 flex items-center text-primary-dark font-semibold text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <span className="mr-2">{learnMoreLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                </div>
            </div>
        </Link>
    );
}
