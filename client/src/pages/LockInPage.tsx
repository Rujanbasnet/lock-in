import { SessionTimer } from "@/components/SessionTimer";
import { Badge } from "@/components/ui/badge";
import { Lock, Zap } from "lucide-react";
import workspaceImg from "@assets/generated_images/abstract_tech_workspace_background.png";
import { useQuery } from "@tanstack/react-query";

export default function LockInPage() {
  const today = new Date().toISOString().split('T')[0];
  const { data: intentions = [] } = useQuery({
    queryKey: ['/api/intentions', today],
  });

  const userIntention = (Array.isArray(intentions) && intentions[0]?.content) || "Create it, Build it, Ship it";

  return (
    <div className="h-full w-full overflow-auto relative flex flex-col bg-background/50">
      {/* Subtle background workspace imagery */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.08] pointer-events-none"
        style={{ backgroundImage: `url(${workspaceImg})` }}
      />

      {/* Ambient Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/5 blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      </div>

      {/* Animated Progress Beams - Top and Bottom */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent 
                    animate-pulse opacity-60 z-20" />

      {/* Animated Progress Beams - Left and Right */}
      <div className="absolute top-0 left-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary to-transparent 
                    animate-pulse opacity-60 z-20" />
      <div className="absolute top-0 right-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-secondary to-transparent 
                    animate-pulse opacity-60 z-20" />

      {/* Status Indicators - Corners */}
      <div className="absolute top-3 left-3 z-30">
        <Badge variant="outline" className="border-primary/50 text-primary font-mono text-[10px] uppercase tracking-wider" data-testid="badge-session-active">
          <Lock className="h-2 w-2 mr-1 animate-pulse" />
          Active
        </Badge>
      </div>

      <div className="absolute top-3 right-3 z-30">
        <Badge variant="outline" className="border-chart-4/50 text-chart-4 font-mono text-[10px] uppercase tracking-wider" data-testid="badge-mode-deep-work">
          <Zap className="h-2 w-2 mr-1" />
          Deep Work
        </Badge>
      </div>

      {/* Motivational Mantra - Top Section */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-4 pt-8 md:pt-10 pb-2 md:pb-3 flex-shrink-0">
        <p className="text-[9px] md:text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-2">
          Current Mission
        </p>
        <h1 className="text-sm md:text-lg lg:text-xl font-black tracking-tight leading-tight" data-testid="text-current-intention">
          {userIntention}
        </h1>
      </div>

      <main className="flex-1 max-w-5xl mx-auto w-full p-6 flex flex-col items-center justify-center relative z-10">
        <div className="w-full max-w-3xl space-y-8">
          {/* Status Indicator */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card/40 border border-primary/20 backdrop-blur-md shadow-[0_0_15px_rgba(0,217,255,0.1)]">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#00d9ff]" />
              <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase">
                System Ready
              </span>
            </div>
          </div>

          {/* Main Timer Component */}
          <div className="relative">
            {/* Decorative corners */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-primary/30 rounded-tl-lg" />
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-primary/30 rounded-tr-lg" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-primary/30 rounded-bl-lg" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-primary/30 rounded-br-lg" />

            <SessionTimer />
          </div>

          {/* Intensity Meter */}
          <div className="grid grid-cols-3 gap-4 pt-8">
            <div className="col-span-3 text-center mb-2">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                Current Intensity Level
              </span>
            </div>
            {[1, 2, 3].map((level) => (
              <div
                key={level}
                className="h-1.5 rounded-full bg-muted overflow-hidden relative"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent w-[200%] animate-progress-beam"
                  style={{ animationDelay: `${level * 0.5}s` }}
                />
              </div>
            ))}
          </div>

          {/* Motivational Mantra */}
          <div className="text-center pt-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
            <p className="text-sm font-mono text-muted-foreground">
              "Flow is not a luxury. It is a necessity."
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
