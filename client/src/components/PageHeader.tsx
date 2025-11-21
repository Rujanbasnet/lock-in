import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

export function PageHeader({ title, description, icon, className = "" }: PageHeaderProps) {
  return (
    <div className={`relative border-b border-border bg-card/30 backdrop-blur-sm ${className}`}>
      {/* Tech grid overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{
             backgroundImage: 'linear-gradient(rgba(0, 217, 255, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 217, 255, 0.4) 1px, transparent 1px)',
             backgroundSize: '32px 32px'
           }} 
      />
      
      <div className="relative max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-start gap-3">
          {icon && <div className="mt-1">{icon}</div>}
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-black tracking-tight uppercase mb-1.5">{title}</h1>
            <p className="text-sm md:text-base text-muted-foreground font-medium max-w-3xl">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
