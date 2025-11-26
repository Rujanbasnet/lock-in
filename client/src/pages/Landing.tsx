import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Target, Zap, Headphones } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LockInLogo } from "@/components/LockInLogo";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background flex flex-col w-full font-sans text-foreground">
      {/* Header */}
      <div className="border-b border-border/40 px-6 py-4 bg-background/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo Integration */}
            <LockInLogo />
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              onClick={() => (window.location.href = "/login")}
              data-testid="button-login"
              variant="ghost"
              className="hover:bg-primary/10 hover:text-primary"
            >
              Sign In
            </Button>
            <Button
              onClick={() => {
                localStorage.setItem("testMode", "true");
                window.location.reload();
              }}
              data-testid="button-test-enter"
              size="sm"
              className="bg-primary text-white hover:bg-primary/90 shadow-md font-bold"
            >
              Start Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center px-4 py-20 relative overflow-auto">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/lock_in_hero.png')`,
            filter: "brightness(0.4) blur(0px)"
          }}
        />

        {/* Overlay for readability - Reduced opacity at top to show logo better */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/90 z-10" />

        <div className="max-w-5xl text-center space-y-10 relative z-20 pt-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            System Online
          </div>

          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
              LOCK <span className="text-primary">IN.</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                MASTER YOUR CRAFT.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Your personal mission control for deep work. Set your intention,
              block out the noise, and execute.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              onClick={() => (window.location.href = "/login")}
              className="h-16 px-10 text-xl bg-primary text-white hover:bg-primary/90 shadow-[0_0_30px_rgba(25,149,83,0.4)] hover:shadow-[0_0_40px_rgba(25,149,83,0.6)] transition-all duration-300 rounded-xl font-bold uppercase tracking-wide"
            >
              Initiate Protocol <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 max-w-5xl mx-auto text-left">
            <div className="bg-card/40 backdrop-blur-md p-6 rounded-2xl border border-border/50 shadow-lg hover:border-primary/50 transition-colors duration-300">
              <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 text-primary">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Set Intention</h3>
              <p className="text-muted-foreground text-sm">Define a singular, clear goal for your session. No ambiguity.</p>
            </div>
            <div className="bg-card/40 backdrop-blur-md p-6 rounded-2xl border border-border/50 shadow-lg hover:border-primary/50 transition-colors duration-300">
              <div className="h-12 w-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4 text-secondary">
                <Headphones className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Lock In</h3>
              <p className="text-muted-foreground text-sm">Enter deep work mode with a dedicated timer and environment.</p>
            </div>
            <div className="bg-card/40 backdrop-blur-md p-6 rounded-2xl border border-border/50 shadow-lg hover:border-primary/50 transition-colors duration-300">
              <div className="h-12 w-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4 text-accent-foreground">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Execute</h3>
              <p className="text-muted-foreground text-sm">Track your output and build a streak of relentless shipping.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border/40 px-6 py-8 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground font-mono">
            SYSTEM STATUS: ONLINE // READY TO SHIP
          </p>
        </div>
      </div>
    </div>
  );
}
