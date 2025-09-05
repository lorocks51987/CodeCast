import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface NeonButtonProps {
    children: ReactNode;
    onClick?: () => void;
    href?: string;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    target?: string;
}

const NeonButton = ({
    children,
    onClick,
    href,
    variant = 'primary',
    size = 'md',
    className,
    target
}: NeonButtonProps) => {
    const baseClasses = "relative overflow-hidden font-semibold rounded-lg transition-all duration-300 font-mono border-2 inline-flex items-center justify-center group";

    const variants = {
        primary: "bg-terminal-green text-terminal-bg border-terminal-green hover:bg-transparent hover:text-terminal-green shadow-neon hover:shadow-neon-strong",
        secondary: "bg-transparent text-terminal-green border-terminal-green hover:bg-terminal-green hover:text-terminal-bg shadow-neon hover:shadow-neon-strong",
        outline: "bg-transparent text-foreground border-terminal-green/50 hover:border-terminal-green hover:text-terminal-green hover:shadow-neon"
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    };

    const combinedClasses = cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
    );

    const content = (
        <>
            <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
        </>
    );

    if (href) {
        return (
            <a href={href} target={target} className={combinedClasses}>
                {content}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={combinedClasses}>
            {content}
        </button>
    );
};

export default NeonButton;