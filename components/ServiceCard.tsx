import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";

interface ServiceCardProps {
    title: string;
    description: string;
    href: string;
    icon?: React.ReactNode;
    learnMoreLabel: string;
}

export function ServiceCard({ title, description, href, icon, learnMoreLabel }: ServiceCardProps) {
    return (
        <Link
            href={href}
            className="group block p-8 bg-white rounded-[2rem_0.5rem_2rem_0.5rem] border-2 border-secondary/60 hover:border-primary/50 shadow-[6px_6px_0_var(--color-secondary-dark)] hover:shadow-[10px_10px_0_var(--color-primary-light)] hover:-translate-y-2 transition-all duration-300 h-full flex flex-col"
        >
            <div className="mb-6 text-primary group-hover:scale-110 transition-transform duration-300 origin-left">
                {icon}
            </div>
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
        </Link>
    );
}
