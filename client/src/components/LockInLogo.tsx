interface LockInLogoProps {
  variant?: "full" | "compact";
  className?: string;
}

export function LockInLogo({ variant = "full", className = "" }: LockInLogoProps) {
  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-1 font-mono font-bold ${className}`} role="img" aria-label="LOCK IN">
        <span className="text-foreground" aria-hidden="true">∥L</span>
        <span className="text-primary" aria-hidden="true">//</span>
        <span className="text-foreground" aria-hidden="true">IN</span>
        <span className="sr-only">LOCK IN</span>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center leading-none font-bold ${className}`} role="img" aria-label="LOCK IN">
      <div className="flex items-center gap-0.5">
        <span className="text-foreground" aria-hidden="true">L</span>
        <span className="relative">
          <span className="text-foreground" aria-hidden="true">O</span>
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="text-primary text-2xl font-black" style={{ transform: 'rotate(20deg)' }} aria-hidden="true">/</span>
          </span>
        </span>
        <span className="text-foreground" aria-hidden="true">CK</span>
      </div>
      <div className="text-foreground" aria-hidden="true">IN</div>
      <span className="sr-only">LOCK IN</span>
    </div>
  );
}
