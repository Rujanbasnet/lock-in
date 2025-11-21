import { SessionTimer } from "@/components/SessionTimer";
import { Badge } from "@/components/ui/badge";
import { Lock, Zap } from "lucide-react";

export default function LockInPage() {
  return (
    <div className="h-full overflow-auto relative">
      {/* Animated Progress Beams - Top and Bottom */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent 
                    animate-pulse opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent 
                    animate-pulse opacity-60" />
      
      {/* Animated Progress Beams - Left and Right */}
      <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary to-transparent 
                    animate-pulse opacity-60" />
      <div className="absolute top-0 right-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-secondary to-transparent 
                    animate-pulse opacity-60" />

      {/* Status Indicators - Corners */}
      <div className="absolute top-4 left-4 z-10">
        <Badge variant="outline" className="border-primary/50 text-primary font-mono text-xs uppercase tracking-wider" data-testid="badge-session-active">
          <Lock className="h-3 w-3 mr-1 animate-pulse" />
          Active
        </Badge>
      </div>
      
      <div className="absolute top-4 right-4 z-10">
        <Badge variant="outline" className="border-chart-4/50 text-chart-4 font-mono text-xs uppercase tracking-wider" data-testid="badge-mode-deep-work">
          <Zap className="h-3 w-3 mr-1" />
          Deep Work
        </Badge>
      </div>

      {/* Main Timer - Full Bleed */}
      <div className="min-h-full flex flex-col items-center justify-center px-4 py-8 bg-gradient-to-br from-background via-card/30 to-background">
        {/* Motivational Mantra */}
        <div className="mb-8 text-center max-w-2xl">
          <p className="text-sm md:text-base font-mono text-muted-foreground uppercase tracking-widest mb-2">
            Current Mission
          </p>
          <h1 className="text-2xl md:text-4xl font-black tracking-tight leading-tight" data-testid="text-current-intention">
            Build the feature. Ship it today.
          </h1>
        </div>

        {/* Timer Component */}
        <div className="w-full max-w-4xl">
          <SessionTimer />
        </div>

        {/* Intensity Meter */}
        <div className="mt-12 w-full max-w-md" data-testid="intensity-meter">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-muted-foreground uppercase tracking-wider">
              <span>Intensity</span>
              <span data-testid="text-intensity-percentage">87%</span>
            </div>
            <div className="h-2 bg-border rounded-full overflow-hidden" role="progressbar" aria-valuenow={87} aria-valuemin={0} aria-valuemax={100} aria-label="Focus intensity">
              <div className="h-full bg-gradient-to-r from-primary via-secondary to-destructive w-[87%] 
                           rounded-full animate-pulse" />
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground/60 uppercase">
              <span>Locked In</span>
              <span>Relentless</span>
            </div>
          </div>
        </div>

        {/* Contextual Mantra */}
        <div className="mt-12 text-center">
          <p className="text-sm font-mono text-primary uppercase tracking-wide" data-testid="text-mantra">
            "Stay ruthless for 47 more minutes"
          </p>
        </div>
      </div>

      {/* Footer Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border/50 bg-card/80 backdrop-blur-sm px-6 py-4">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Session</p>
            <p className="text-base font-mono font-bold" data-testid="text-session-time">00:47:32</p>
          </div>
          <div>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Today</p>
            <p className="text-base font-mono font-bold" data-testid="text-today-time">04:32:18</p>
          </div>
          <div>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Streak</p>
            <p className="text-base font-mono font-bold text-destructive" data-testid="text-streak-days">7 Days</p>
          </div>
        </div>
      </div>
    </div>
  );
}
