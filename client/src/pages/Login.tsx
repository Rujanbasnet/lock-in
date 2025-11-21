import { Button } from "@/components/ui/button";
import { LockInLogo } from "@/components/LockInLogo";
import { Lock, ArrowRight, Code2, Zap, Target } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen bg-background flex flex-col overflow-hidden relative">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.05]" 
           style={{
             backgroundImage: 'linear-gradient(rgba(0, 217, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 217, 255, 0.5) 1px, transparent 1px)',
             backgroundSize: '60px 60px'
           }} 
      />
      
      {/* Scanline effect */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{
             backgroundImage: 'repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 2px)',
             backgroundSize: '100% 2px'
           }} 
      />

      {/* Glow accents */}
      <div className="absolute top-20 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-20" />

      <div className="flex-1 flex flex-col items-center justify-center px-4 relative z-10 w-full">
        <div className="w-full max-w-md space-y-8">
          {/* Logo Section */}
          <div className="text-center space-y-4">
            <div className="inline-block p-3 rounded-lg bg-primary/10 border border-primary/20">
              <LockInLogo variant="compact" className="text-4xl" />
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary">
                  Lock In
                </span>
              </h1>
              <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
                Mission Control for Your Focus
              </p>
            </div>
          </div>

          {/* Auth Card */}
          <div className="space-y-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8">
            {/* Authentication Section */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-xl font-bold uppercase tracking-tight">Ready to Execute?</h2>
                <p className="text-sm text-muted-foreground">
                  Sign in with your Replit account to start tracking your focus time
                </p>
              </div>

              <Button
                onClick={() => (window.location.href = "/api/login")}
                size="lg"
                className="w-full text-base font-bold uppercase tracking-wide bg-primary text-primary-foreground hover:bg-primary/90
                           shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60 transition-all duration-200"
                data-testid="button-signin-auth"
              >
                <Lock className="h-5 w-5 mr-2" />
                Sign in with Replit
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>

              <p className="text-xs text-muted-foreground text-center font-mono">
                Secure OAuth • No password needed
              </p>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border/30" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-card/50 text-muted-foreground">OR</span>
              </div>
            </div>

            {/* Demo Access */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-tight">Try Demo First</h3>
              <Button
                onClick={() => (window.location.href = "/")}
                variant="outline"
                size="lg"
                className="w-full text-base font-bold uppercase tracking-wide border-primary/50"
                data-testid="button-demo-access"
              >
                <Code2 className="h-5 w-5 mr-2" />
                Enter Test Mode
              </Button>
              <p className="text-xs text-muted-foreground text-center font-mono">
                Full access • No signup required
              </p>
            </div>
          </div>

          {/* Features Highlight */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="text-center space-y-2 p-3 rounded-lg bg-primary/5 border border-primary/20">
              <Zap className="h-5 w-5 text-primary mx-auto" />
              <p className="text-xs font-mono font-bold uppercase text-muted-foreground">Real-Time</p>
            </div>
            <div className="text-center space-y-2 p-3 rounded-lg bg-secondary/5 border border-secondary/20">
              <Target className="h-5 w-5 text-secondary mx-auto" />
              <p className="text-xs font-mono font-bold uppercase text-muted-foreground">Track Focus</p>
            </div>
            <div className="text-center space-y-2 p-3 rounded-lg bg-chart-4/5 border border-chart-4/20">
              <Lock className="h-5 w-5 text-chart-4 mx-auto" />
              <p className="text-xs font-mono font-bold uppercase text-muted-foreground">Private</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border/30 px-6 py-6 bg-card/30 backdrop-blur-sm relative z-10 w-full">
        <p className="text-xs text-muted-foreground text-center font-mono">
          Built for makers, builders, and shippers who refuse to waste time
        </p>
      </div>
    </div>
  );
}
