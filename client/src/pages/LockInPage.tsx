import { SessionTimer } from "@/components/SessionTimer";
import { Badge } from "@/components/ui/badge";
import { Lock, Zap } from "lucide-react";

export default function LockInPage() {
  return (
    <div className="h-full overflow-auto relative flex flex-col">
      {/* Animated Progress Beams - Top and Bottom */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent 
                    animate-pulse opacity-60 z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent 
                    animate-pulse opacity-60 z-20" />
      
      {/* Animated Progress Beams - Left and Right */}
      <div className="absolute top-0 left-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary to-transparent 
                    animate-pulse opacity-60 z-20" />
      <div className="absolute top-0 right-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-secondary to-transparent 
                    animate-pulse opacity-60 z-20" />

      {/* Status Indicators - Corners */}
      <div className="absolute top-3 left-3 z-30">
        <Badge variant="outline" className="border-primary/50 text-primary font-mono text-[10px] uppercase tracking-wider" data-testid="badge-session-active">
          <Lock className="h-2.5 w-2.5 mr-1 animate-pulse" />
          Active
        </Badge>
      </div>
      
      <div className="absolute top-3 right-3 z-30">
        <Badge variant="outline" className="border-chart-4/50 text-chart-4 font-mono text-[10px] uppercase tracking-wider" data-testid="badge-mode-deep-work">
          <Zap className="h-2.5 w-2.5 mr-1" />
          Deep Work
        </Badge>
      </div>

      {/* Main Content - Centered */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-6 md:py-8 bg-gradient-to-br from-background via-card/20 to-background">
        {/* Motivational Mantra */}
        <div className="mb-4 md:mb-6 text-center max-w-2xl">
          <p className="text-xs md:text-sm font-mono text-muted-foreground uppercase tracking-widest mb-1.5">
            Current Mission
          </p>
          <h1 className="text-lg md:text-2xl lg:text-3xl font-black tracking-tight leading-tight" data-testid="text-current-intention">
            Build the feature. Ship it today.
          </h1>
        </div>

        {/* Timer Component */}
        <div className="w-full max-w-5xl">
          <SessionTimer />
        </div>

        {/* Intensity Meter */}
        <div className="mt-6 md:mt-8 w-full max-w-md">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[10px] md:text-xs font-mono text-muted-foreground uppercase tracking-wider">
              <span>Intensity</span>
              <span data-testid="text-intensity-percentage">87%</span>
            </div>
            <div className="h-1.5 bg-border rounded-full overflow-hidden" role="progressbar" aria-valuenow={87} aria-valuemin={0} aria-valuemax={100} aria-label="Focus intensity">
              <div className="h-full bg-gradient-to-r from-primary via-secondary to-destructive w-[87%] 
                           rounded-full animate-pulse" />
            </div>
            <div className="flex items-center justify-between text-[9px] md:text-[10px] font-mono text-muted-foreground/60 uppercase">
              <span>Locked In</span>
              <span>Relentless</span>
            </div>
          </div>
        </div>

        {/* Contextual Mantra */}
        <div className="mt-4 md:mt-6 text-center">
          <p className="text-xs md:text-sm font-mono text-primary uppercase tracking-wide" data-testid="text-mantra">
            "Stay ruthless for 47 more minutes"
          </p>
        </div>
      </div>

      {/* Compact Stats Footer */}
      <div className="border-t border-border/50 bg-card/60 backdrop-blur-sm px-4 py-2.5">
        <div className="max-w-7xl mx-auto flex justify-around items-center text-center gap-4">
          <div className="flex-1">
            <p className="text-[9px] md:text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-0.5">Session</p>
            <p className="text-xs md:text-sm font-mono font-bold" data-testid="text-session-time">00:47:32</p>
          </div>
          <div className="flex-1">
            <p className="text-[9px] md:text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-0.5">Today</p>
            <p className="text-xs md:text-sm font-mono font-bold" data-testid="text-today-time">04:32:18</p>
          </div>
          <div className="flex-1">
            <p className="text-[9px] md:text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-0.5">Streak</p>
            <p className="text-xs md:text-sm font-mono font-bold text-destructive" data-testid="text-streak-days">7 Days</p>
          </div>
        </div>
      </div>
    </div>
  );
}
