import { SessionTimer } from "@/components/SessionTimer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Headphones, Target, Zap, Activity } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { FlowGuide } from "@/components/FlowGuide";
import heroImg from "@assets/lock_in_hero.png";

export default function LockInPage() {
  const today = new Date().toISOString().split('T')[0];
  const { data: intentions = [] } = useQuery({
    queryKey: ['/api/intentions', today],
  });

  const userIntention =
    (Array.isArray(intentions) && intentions[0]?.content) ||
    localStorage.getItem("currentIntention") ||
    "Create it, Build it, Ship it";

  return (
    <div className="h-full w-full overflow-auto relative flex flex-col bg-background">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      {/* Ambient glow effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-orange-500/5 blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      </div>

      {/* Status Badges - Top Corners */}
      <div className="absolute top-4 left-4 z-30">
        <Badge variant="outline" className="border-primary/40 bg-primary/10 text-primary font-mono text-xs uppercase tracking-wider backdrop-blur-sm" data-testid="badge-session-active">
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse mr-2" />
          Session Active
        </Badge>
      </div>

      <div className="absolute top-4 right-4 z-30">
        <Badge variant="outline" className="border-orange-500/40 bg-orange-500/10 text-orange-500 font-mono text-xs uppercase tracking-wider backdrop-blur-sm" data-testid="badge-mode-deep-work">
          <Headphones className="h-3 w-3 mr-2" />
          Deep Work Mode
        </Badge>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-8">

        {/* Flow Guide */}
        <div className="mb-8 w-full max-w-md opacity-90">
          <FlowGuide currentStep="lock-in" />
        </div>

        {/* Current Intention Display */}
        <Card className="max-w-2xl w-full mb-12 bg-gradient-to-br from-primary/5 to-orange-500/5 border-primary/20 backdrop-blur-sm shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                Current Mission
              </span>
            </div>
            <h1 className="text-xl md:text-2xl font-black tracking-tight leading-tight" data-testid="text-current-intention">
              {userIntention}
            </h1>
          </CardContent>
        </Card>

        {/* Timer Section */}
        <div className="w-full max-w-4xl space-y-8">

          {/* Status Indicator */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card/60 border border-primary/20 backdrop-blur-md shadow-lg">
              <div className="h-3 w-3 rounded-full bg-primary animate-pulse shadow-[0_0_12px_var(--primary)]" />
              <span className="text-sm font-mono font-bold text-primary tracking-widest uppercase">
                System Ready
              </span>
            </div>
          </div>

          {/* Main Timer Component with decorative frame */}
          <div className="relative">
            {/* Corner decorations */}
            <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-primary/20 rounded-tl-xl" />
            <div className="absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-primary/20 rounded-tr-xl" />
            <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-2 border-l-2 border-primary/20 rounded-bl-xl" />
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-primary/20 rounded-br-xl" />

            <SessionTimer />
          </div>

          {/* Intensity Meter */}
          <Card className="bg-card/40 border-border/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="h-4 w-4 text-primary" />
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                  Focus Intensity
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((level) => (
                  <div
                    key={level}
                    className="h-2 rounded-full bg-muted/50 overflow-hidden relative"
                  >
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent w-[200%] animate-progress-beam"
                      style={{ animationDelay: `${level * 0.4}s` }}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Motivational Quote */}
          <div className="text-center opacity-70 hover:opacity-100 transition-opacity duration-500">
            <div className="inline-flex items-center gap-2 mb-2">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Mantra</span>
            </div>
            <p className="text-sm md:text-base font-serif italic text-foreground/80">
              "Flow is not a luxury. It is a necessity."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
