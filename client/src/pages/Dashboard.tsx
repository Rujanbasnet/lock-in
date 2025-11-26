import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Headphones, Flame, Zap, Clock, Target, Play, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLocation } from "wouter";
import { useActivities } from "@/hooks/use-activities";
import { LockInBackground } from "@/components/LockInBackground";
import { FlowGuide } from "@/components/FlowGuide";
import { useToast } from "@/hooks/use-toast";
import heroImg from "@assets/lock_in_hero.png";

export default function Dashboard() {
  const [, navigate] = useLocation();
  const { activities } = useActivities();
  const { toast } = useToast();
  const [isHovering, setIsHovering] = useState(false);
  const [intention, setIntention] = useState("");
  const [isIntentionSet, setIsIntentionSet] = useState(false);

  useEffect(() => {
    // Check if intention is already set
    const saved = localStorage.getItem("currentIntention");
    if (saved) setIsIntentionSet(true);
  }, []);

  const handleSaveIntention = () => {
    if (intention.trim()) {
      localStorage.setItem("currentIntention", intention);
      setIntention(""); // Clear input to show it's saved
      setIsIntentionSet(true);
      toast({
        title: "Intention Locked",
        description: "System primed. Initiate protocol when ready.",
        variant: "default",
        className: "border-primary/50 bg-primary/10 text-primary",
      });
    }
  };

  const handleLockIn = () => {
    if (isIntentionSet) {
      navigate("/lock-in");
    }
  };

  const setExampleIntention = (text: string) => {
    setIntention(text);
  };

  // Calculate stats
  const todaysActivities = activities.filter(a => a.category === 'Work');
  const totalFocusMinutes = todaysActivities.reduce((acc, curr) => acc + curr.duration, 0);
  const totalHours = Math.floor(totalFocusMinutes / 60);
  const totalMinutes = totalFocusMinutes % 60;

  // Mock data for demo
  const currentStreak = 7;
  const focusLevel = 12;
  const totalSessions = 156;

  const intentionExamples = [
    "Deep Work: Coding",
    "Study Session",
    "Writing Report",
    "Creative Flow"
  ];

  return (
    <div className="min-h-screen text-foreground overflow-hidden relative bg-background">
      {/* Background with lighter treatment */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center fixed opacity-10"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />

      {/* Printed Background Effect */}
      <LockInBackground />

      {/* Stats HUD - Gaming inspired top bar */}
      <div className="relative z-10 w-full px-8 py-4 flex items-center justify-between border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Headphones className="h-5 w-5 text-primary animate-pulse" />
            <span className="font-mono font-bold text-sm tracking-widest uppercase">Lock In</span>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary/70" />
              <span className="font-mono font-semibold">{totalHours}h {totalMinutes}m</span>
              <span className="text-xs text-muted-foreground uppercase">Today</span>
            </div>

            <div className="flex items-center gap-2">
              <Flame className="h-4 w-4 text-orange-500" />
              <span className="font-mono font-semibold">{currentStreak}</span>
              <span className="text-xs text-muted-foreground uppercase">Day Streak</span>
            </div>

            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary/70" />
              <span className="font-mono font-semibold">Level {focusLevel}</span>
              <div className="w-24 h-1.5 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-orange-500 w-3/4" />
              </div>
            </div>
          </div>
        </div>

        <Badge variant="outline" className="font-mono text-xs border-primary/30 text-primary bg-primary/5 px-3 py-1">
          {totalSessions} SESSIONS
        </Badge>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 py-12 flex flex-col items-center">

        {/* Protocol Guide */}
        <div className="w-full mb-12">
          <FlowGuide currentStep="intention" />
          <div className="text-center mt-4">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest opacity-70">
              Protocol: Set Intention &gt; Lock In &gt; Analyze
            </p>
          </div>
        </div>

        {/* Step 1: Set Intention */}
        <Card className="w-full max-w-2xl bg-gradient-to-br from-primary/5 to-orange-500/5 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors shadow-lg mb-8 relative group">
          <div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2 opacity-50">
            <span className="text-4xl font-black text-muted-foreground/20">01</span>
          </div>
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-bold uppercase tracking-wide">Set your intention for locking in</h3>
              </div>
              {isIntentionSet && (
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/50 animate-pulse">
                  <CheckCircle2 className="h-3 w-3 mr-1" />
                  Locked
                </Badge>
              )}
            </div>

            <div className="flex gap-3 mb-4">
              <Input
                placeholder={isIntentionSet ? "Intention locked. Type to update..." : "What is your mission?"}
                value={intention}
                onChange={(e) => setIntention(e.target.value)}
                onFocus={() => { if (intention === "") setIntention(""); }}
                onKeyDown={(e) => e.key === "Enter" && handleSaveIntention()}
                className="flex-1 h-12 bg-background/50 border-primary/20 focus:border-primary text-base"
              />
              <Button
                onClick={handleSaveIntention}
                disabled={!intention.trim()}
                className="h-12 px-6 bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90 transition-all"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Example Chips */}
            <div className="flex flex-wrap gap-2 mb-4">
              {intentionExamples.map((ex) => (
                <Badge
                  key={ex}
                  variant="outline"
                  className="cursor-pointer hover:bg-primary/10 hover:border-primary/50 transition-colors py-1 px-3"
                  onClick={() => setExampleIntention(ex)}
                >
                  {ex}
                </Badge>
              ))}
            </div>

            {/* Why Context */}
            <div className="mt-6 pt-4 border-t border-border/50">
              <p className="text-xs text-muted-foreground italic">
                <span className="font-bold text-primary/80 not-italic mr-1">Why?</span>
                Setting a clear intention primes your brain for deep work, reduces attention residue, and creates a clear definition of done.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Visual Connector */}
        <div className={`h-12 w-px bg-gradient-to-b from-primary/50 to-transparent mb-8 transition-all duration-500 ${isIntentionSet ? 'opacity-100' : 'opacity-30'}`} />

        {/* Step 2: Lock In Button */}
        <div className="relative mb-16 group">
          <div className="absolute -left-24 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2 opacity-50">
            <span className="text-4xl font-black text-muted-foreground/20">02</span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <div
                className={`absolute inset-0 bg-primary/20 rounded-full blur-3xl transition-all duration-500 ${isHovering && isIntentionSet ? 'scale-150 opacity-100' : 'scale-100 opacity-50'
                  }`}
              />
              <Button
                size="lg"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={handleLockIn}
                disabled={!isIntentionSet}
                className={`
                  relative h-40 w-40 rounded-full shadow-2xl border-4 transition-all duration-300 group
                  ${isIntentionSet
                    ? 'bg-gradient-to-br from-primary via-primary to-orange-500 hover:from-primary/90 hover:via-primary/90 hover:to-orange-500/90 shadow-primary/30 border-primary/20 hover:scale-105 cursor-pointer'
                    : 'bg-muted border-muted-foreground/20 opacity-50 cursor-not-allowed grayscale'}
                `}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className={`p-3 rounded-full backdrop-blur-sm transition-colors ${isIntentionSet ? 'bg-white/20 group-hover:bg-white/30' : 'bg-white/5'}`}>
                    <Play className={`h-10 w-10 ${isIntentionSet ? 'text-white fill-white' : 'text-muted-foreground'}`} />
                  </div>
                  <span className={`text-xl font-black uppercase tracking-wider drop-shadow-lg ${isIntentionSet ? 'text-white' : 'text-muted-foreground'}`}>
                    Lock In
                  </span>
                </div>
              </Button>
            </div>

            {!isIntentionSet && (
              <p className="text-xs text-muted-foreground animate-pulse">
                Set intention above to unlock protocol
              </p>
            )}
            {isIntentionSet && (
              <p className="text-xs text-primary font-bold tracking-widest uppercase animate-pulse">
                System Ready
              </p>
            )}
          </div>
        </div>

        {/* Quick Stats Footer */}
        <div className="grid grid-cols-2 gap-12 text-center opacity-80">
          <div>
            <div className="text-2xl font-black font-mono mb-1">
              {totalHours}<span className="text-sm text-muted-foreground">h</span> {totalMinutes}<span className="text-sm text-muted-foreground">m</span>
            </div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wide">Today's Focus</div>
          </div>

          <div>
            <div className="text-2xl font-black font-mono text-orange-500 mb-1 flex items-center justify-center gap-2">
              <Flame className="h-6 w-6" />
              {currentStreak}
            </div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wide">Day Streak</div>
          </div>
        </div>

      </div>
    </div>
  );
}
