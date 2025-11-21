import { Zap } from "lucide-react";

interface LockInLogoProps {
  variant?: "full" | "compact";
  className?: string;
}

export function LockInLogo({ variant = "full", className = "" }: LockInLogoProps) {
  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-2 font-mono font-bold ${className}`} role="img" aria-label="LOCK IN">
        <div className="relative flex items-center justify-center w-8 h-8 bg-primary/10 rounded-md border border-primary/20 shadow-[0_0_10px_rgba(0,217,255,0.3)]">
          <Zap className="w-5 h-5 text-primary fill-primary/20" />
        </div>
        <span className="text-foreground tracking-tighter">
          LOCK<span className="text-primary">IN</span>
        </span>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center leading-none font-bold ${className}`} role="img" aria-label="LOCK IN">
      <div className="relative flex items-center justify-center w-16 h-16 mb-2 bg-primary/5 rounded-xl border border-primary/20 shadow-[0_0_20px_rgba(0,217,255,0.2)] animate-pulse-glow">
        <Zap className="w-10 h-10 text-primary fill-primary/20" />
        <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full -z-10" />
      </div>
      <div className="flex items-center gap-1 text-2xl tracking-tighter">
        <span className="text-foreground">LOCK</span>
        <span className="text-primary">IN</span>
      </div>
    </div>
  );
}
