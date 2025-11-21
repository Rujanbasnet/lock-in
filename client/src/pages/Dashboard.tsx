import { ActivityTimeline } from "@/components/ActivityTimeline";
import { WeeklyOverview } from "@/components/WeeklyOverview";
import { IntentionHero } from "@/components/IntentionHero";
import { MotivationalQuote } from "@/components/MotivationalQuote";
import { FlowGuide } from "@/components/FlowGuide";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, BarChart3, ArrowRight, Sparkles, History } from "lucide-react";
import { useLocation } from "wouter";
import { useActivities } from "@/hooks/use-activities";

export default function Dashboard() {
  const [, navigate] = useLocation();
  const { activities } = useActivities();

  // Calculate stats from real activities
  const todaysActivities = activities.filter(a => {
    // In a real app, check date. For demo, show all.
    return true;
  });

  const totalFocusMinutes = todaysActivities
    .filter(a => a.category === 'Work')
    .reduce((acc, curr) => acc + curr.duration, 0);

  const mockWeeklyData = [
    { day: 'Mon', minutes: 240 },
    { day: 'Tue', minutes: 300 },
    { day: 'Wed', minutes: 180 },
    { day: 'Thu', minutes: 270 },
    { day: 'Fri', minutes: 210 },
    { day: 'Sat', minutes: 150 },
    { day: 'Sun', minutes: 120 },
  ];

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      {/* Top Navigation / Header Area */}
      <div className="w-full px-6 py-4 flex items-center justify-between border-b border-border/40 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-primary animate-pulse" />
          <span className="font-mono font-bold text-sm tracking-widest uppercase text-muted-foreground">Mission Control</span>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="outline" className="font-mono text-xs border-primary/30 text-primary bg-primary/5">
            ONLINE
          </Badge>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 lg:p-8 space-y-12">

        {/* Step 1: Set Intention (The Main Focus) */}
        <section className="space-y-6">
          <div className="flex flex-col items-center text-center space-y-2 mb-8">
            <FlowGuide currentStep="intention" />
          </div>

          <IntentionHero />
        </section>

        {/* Dashboard Widgets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Left Column: Motivation & Quick Stats (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="h-4 w-4" /> Daily Inspiration
              </h3>
              <MotivationalQuote />
            </div>

            <Card className="border-none shadow-lg bg-gradient-to-br from-secondary/10 to-transparent">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">Deep Work</h3>
                  <Zap className="h-5 w-5 text-secondary" />
                </div>
                <div className="text-4xl font-black font-mono mb-1">
                  {Math.floor(totalFocusMinutes / 60)}<span className="text-lg text-muted-foreground">h</span> {totalFocusMinutes % 60}<span className="text-lg text-muted-foreground">m</span>
                </div>
                <p className="text-xs text-muted-foreground">Total focus time today</p>
              </CardContent>
            </Card>
          </div>

          {/* Middle Column: Weekly Overview (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                <BarChart3 className="h-4 w-4" /> Performance
              </h3>
              <WeeklyOverview data={mockWeeklyData} />
            </div>
          </div>

          {/* Right Column: Recent Activity / History (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                <History className="h-4 w-4" /> Recent Log
              </h3>
              <div className="bg-card/50 rounded-xl border border-border/50 p-4 h-[300px] overflow-y-auto custom-scrollbar">
                <ActivityTimeline activities={todaysActivities} />
              </div>
              <Button
                variant="ghost"
                className="w-full text-xs text-muted-foreground hover:text-primary"
                onClick={() => navigate("/activities")}
              >
                View Full History <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
