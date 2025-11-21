import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Target, Zap, Headphones } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background flex flex-col w-full font-sans text-foreground">
      {/* Header */}
      <div className="border-b border-border/40 px-6 py-4 bg-background/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo Integration */}
            <div className="flex items-center gap-2 font-black text-xl tracking-tighter">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                <Headphones className="h-5 w-5" />
              </div>
              <span>LOCK IN</span>
            </div>
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
                window.location.href = "/";
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
      <div className="flex-1 flex items-center justify-center px-4 py-20 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/lofi_mission_control_desk_1763764425522.png')`,
            filter: "brightness(0.5) blur(0px)"
          }}
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90 z-10" />

        <div className="max-w-5xl text-center space-y-10 relative z-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles className="h-4 w-4" />
            <span>Enter the Flow State</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-foreground drop-shadow-2xl">
            LOCK <span className="text-primary">IN.</span><br />
            <span className="text-4xl md:text-6xl font-bold text-muted-foreground tracking-normal">SHIP RELENTLESSLY.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Your personal mission control for deep work. Set your intention, block out the noise, and execute.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              onClick={() => (window.location.href = "/api/login")}
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
