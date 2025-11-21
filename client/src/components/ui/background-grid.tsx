import React from 'react';
import { useLocation } from 'wouter';

export function BackgroundGrid() {
    const [location] = useLocation();

    // Define theme colors based on route
    const getTheme = () => {
        switch (location) {
            case '/lock-in':
                return {
                    primary: 'bg-destructive/10',
                    secondary: 'bg-orange-500/10',
                    grid: 'bg-[linear-gradient(to_right,hsl(var(--destructive))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--destructive))_1px,transparent_1px)] opacity-20'
                };
            case '/journal':
                return {
                    primary: 'bg-green-500/10',
                    secondary: 'bg-emerald-500/10',
                    grid: 'bg-[linear-gradient(to_right,hsl(var(--secondary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--secondary))_1px,transparent_1px)] opacity-20'
                };
            case '/settings':
                return {
                    primary: 'bg-slate-500/10',
                    secondary: 'bg-gray-500/10',
                    grid: 'bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] opacity-10'
                };
            default:
                return {
                    primary: 'bg-primary/10',
                    secondary: 'bg-secondary/10',
                    grid: 'bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] opacity-15'
                };
        }
    };

    const theme = getTheme();

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background transition-colors duration-700">
            {/* Grid Lines */}
            <div className="absolute inset-0 w-full h-full opacity-[0.15]">
                <div className={`absolute inset-0 ${theme.grid} bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] transition-all duration-700`} />
            </div>

            {/* Moving Perspective Grid at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-[40vh] overflow-hidden opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00D9FF_1px,transparent_1px),linear-gradient(to_bottom,#00D9FF_1px,transparent_1px)] bg-[size:4rem_4rem] animate-grid origin-bottom" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            {/* Ambient Glows */}
            <div className={`absolute top-0 left-1/4 w-96 h-96 ${theme.primary} rounded-full blur-[128px] animate-pulse-glow transition-colors duration-700`} />
            <div className={`absolute bottom-0 right-1/4 w-96 h-96 ${theme.secondary} rounded-full blur-[128px] animate-pulse-glow transition-colors duration-700`} style={{ animationDelay: '1s' }} />
        </div>
    );
}
