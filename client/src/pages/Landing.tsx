import { Button } from "@/components/ui/button";
import { Lock, ArrowRight } from "lucide-react";
import { LockInLogo } from "@/components/LockInLogo";
import workspaceImg from "@assets/generated_images/developer_focused_at_workstation.png";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="border-b border-border px-6 py-4 bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LockInLogo variant="compact" className="text-xl" />
          </div>
          <div className="flex items-center gap-2">
            <Button 
              onClick={() => (window.location.href = "/login")} 
              data-testid="button-login"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10"
            >
              Sign In
            </Button>
            <Button
              onClick={() => {
                localStorage.setItem("testMode", "true");
                window.location.href = "/";
              }}
              data-testid="button-test-enter"
              size="sm"
              variant="ghost"
              className="text-xs"
              title="Test the app without signing in"
            >
              Test
            </Button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="flex-1 flex items-center justify-center px-4 py-20 relative overflow-hidden">
        {/* Background workspace imagery */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
          style={{ backgroundImage: `url(${workspaceImg})` }}
        />
        
        {/* Dark gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/95" />
        
        {/* Animated gradient accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 animate-gradient" />
        
        {/* Grid overlay for tech aesthetic */}
        <div className="absolute inset-0 opacity-[0.08]" 
             style={{
               backgroundImage: 'linear-gradient(rgba(0, 217, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 217, 255, 0.3) 1px, transparent 1px)',
               backgroundSize: '50px 50px'
             }} 
        />
        
        <div className="max-w-5xl text-center space-y-12 relative z-10">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <LockInLogo className="text-6xl" />
          </div>
          
          <div className="space-y-6">
            <div className="inline-block">
              <div className="text-xs font-mono font-bold text-primary mb-4 tracking-widest uppercase 
                            border border-primary/30 px-4 py-2 rounded-md bg-primary/5">
                Mission Control for High Performers
              </div>
            </div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none uppercase">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary animate-gradient">
                Lock In.
              </span>
              <br />
              <span className="text-foreground">
                Ship Relentlessly.
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
              Stop wasting time. Start executing. Track every millisecond of focused work and watch your output skyrocket.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-4 justify-center items-center -mt-2">
            <Button 
              size="lg" 
              onClick={() => (window.location.href = "/api/login")} 
              data-testid="button-start-free"
              className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 
                       shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60 
                       transition-all duration-200 font-bold uppercase tracking-wide"
            >
              <Lock className="h-5 w-5 mr-2" />
              Ready to lock in?
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>

          {/* Social Proof / Stats */}
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 pt-16 max-w-4xl border-t border-border/50 w-full px-4">
            <div className="text-center space-y-2 pt-8 flex-1" data-testid="stat-timer-size">
              <div className="text-4xl font-mono font-black text-primary" data-testid="text-timer-size">180px</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide font-mono">Timer Font Size</div>
            </div>
            <div className="text-center space-y-2 pt-8 flex-1" data-testid="stat-tracking">
              <div className="text-4xl font-mono font-black text-secondary" data-testid="text-tracking">Real-Time</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide font-mono">Millisecond Tracking</div>
            </div>
            <div className="text-center space-y-2 pt-8 flex-1" data-testid="stat-pricing">
              <div className="text-4xl font-mono font-black text-chart-4" data-testid="text-pricing">100%</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide font-mono">Free Forever</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border px-6 py-8 bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground font-mono">
            Built for makers, builders, and shippers who refuse to waste time.
          </p>
        </div>
      </div>
    </div>
  );
}
