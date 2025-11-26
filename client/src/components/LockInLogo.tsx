import { Headphones } from "lucide-react";

interface LockInLogoProps {
  variant?: "full" | "compact" | "icon";
  className?: string;
}

export function LockInLogo({ variant = "full", className = "" }: LockInLogoProps) {
  if (variant === "icon") {
    return (
      <div className={`h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground ${className}`} role="img" aria-label="LOCK IN">
        <Headphones className="h-5 w-5" />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 font-black text-xl tracking-tighter ${className}`} role="img" aria-label="LOCK IN">
      <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
        <Headphones className="h-5 w-5" />
      </div>
      {variant !== "compact" && <span>LOCK IN</span>}
      {variant === "compact" && <span>LOCK IN</span>}
    </div>
  );
}
