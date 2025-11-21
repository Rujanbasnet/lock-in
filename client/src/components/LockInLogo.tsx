interface LockInLogoProps {
  variant?: "full" | "compact";
  className?: string;
}

export function LockInLogo({ variant = "full", className = "" }: LockInLogoProps) {
  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-1 font-mono font-bold ${className}`}>
        <span className="text-foreground">∥L</span>
        <span className="text-primary">//</span>
        <span className="text-foreground">IN</span>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center leading-none font-bold ${className}`}>
      <div className="flex items-center gap-0.5">
        <span className="text-foreground">L</span>
        <span className="relative">
          <span className="text-foreground">O</span>
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="text-primary text-2xl font-black" style={{ transform: 'rotate(20deg)' }}>/</span>
          </span>
        </span>
        <span className="text-foreground">CK</span>
      </div>
      <div className="text-foreground">IN</div>
    </div>
  );
}
