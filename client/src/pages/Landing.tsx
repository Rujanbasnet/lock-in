import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Target, BarChart3, Lock, ArrowRight } from "lucide-react";
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
          <Button 
            onClick={() => (window.location.href = "/api/login")} 
            data-testid="button-login"
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary/10"
          >
            Sign In
          </Button>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              onClick={() => (window.location.href = "/api/login")} 
              data-testid="button-start-free"
              className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 
                       shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60 
                       transition-all duration-200 font-bold uppercase tracking-wide"
            >
              <Lock className="h-5 w-5 mr-2" />
              Start 7-Day Trial
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <div className="text-sm text-muted-foreground font-mono">
              Then <span className="text-primary font-bold">$5/month</span> to stay locked in
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 pt-16 max-w-5xl mx-auto">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-200 group">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-chart-1/10 border border-chart-1/20 
                                group-hover:bg-chart-1/20 transition-colors">
                    <Target className="h-6 w-6 text-chart-1" />
                  </div>
                  <div className="text-xs font-mono font-bold text-chart-1 uppercase tracking-wider">01</div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-lg uppercase tracking-tight">Set Intent</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    No vague goals. Define exactly what you're building today. Commit or quit.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-200 group">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 
                                group-hover:bg-primary/20 transition-colors">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-xs font-mono font-bold text-primary uppercase tracking-wider">02</div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-lg uppercase tracking-tight">Execute</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Start the timer. Enter deep work. Watch milliseconds tick. Stay ruthless.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-200 group">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-chart-4/10 border border-chart-4/20 
                                group-hover:bg-chart-4/20 transition-colors">
                    <BarChart3 className="h-6 w-6 text-chart-4" />
                  </div>
                  <div className="text-xs font-mono font-bold text-chart-4 uppercase tracking-wider">03</div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-lg uppercase tracking-tight">Measure</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Track Lock In Time. Review output. Adjust intensity. Repeat tomorrow.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Proof / Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto border-t border-border/50">
            <div className="text-center space-y-2 pt-8" data-testid="stat-timer-size">
              <div className="text-4xl font-mono font-black text-primary" data-testid="text-timer-size">180px</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide font-mono">Timer Font Size</div>
            </div>
            <div className="text-center space-y-2 pt-8" data-testid="stat-tracking">
              <div className="text-4xl font-mono font-black text-secondary" data-testid="text-tracking">Real-Time</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide font-mono">Millisecond Tracking</div>
            </div>
            <div className="text-center space-y-2 pt-8" data-testid="stat-pricing">
              <div className="text-4xl font-mono font-black text-chart-4" data-testid="text-pricing">$5/mo</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide font-mono">After Trial</div>
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
