import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
  backgroundImage?: string;
  iconColor?: string;
  titleColor?: string;
  gridOpacity?: number;
  gridColor?: string;
}

export function PageHeader({
  title,
  description,
  icon,
  className = "",
  backgroundImage,
  iconColor = "text-primary",
  titleColor = "text-foreground",
  gridOpacity = 0.03,
  gridColor = "rgba(0, 217, 255, 0.4)"
}: PageHeaderProps) {
  return (
    <div className={`relative border-b border-border/40 bg-background/20 backdrop-blur-md overflow-hidden ${className}`}>
      {/* Background image if provided */}
      {backgroundImage && (
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {/* Dark gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
        </div>
      )}

      {/* Tech grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${gridColor} 1px, transparent 1px), linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          opacity: gridOpacity
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-start gap-3">
          {icon && <div className={`mt-1 ${iconColor}`}>{icon}</div>}
          <div className="flex-1">
            <h1 className={`text-2xl md:text-3xl font-black tracking-tight uppercase mb-1.5 ${titleColor}`}>{title}</h1>
            <p className="text-sm md:text-base text-muted-foreground font-medium max-w-3xl">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
