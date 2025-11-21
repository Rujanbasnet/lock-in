import { ActivityTimeline } from "@/components/ActivityTimeline";
import { WeeklyOverview } from "@/components/WeeklyOverview";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, BarChart3, ArrowRight, LayoutDashboard } from "lucide-react";
import { useLocation } from "wouter";
import workspaceImg from "@assets/generated_images/developer_focused_at_workstation.png";
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
    <div className="h-full overflow-auto">
      <PageHeader
        icon={<LayoutDashboard className="h-6 w-6" />}
        iconColor="text-primary"
        title="Mission Control"
        description="Execute the protocol. Lock in and ship. Your command center for ruthless productivity."
        backgroundImage={workspaceImg}
        gridColor="rgba(0, 217, 255, 0.4)"
        gridOpacity={0.05}
      />

      <div className="max-w-7xl mx-auto p-6 lg:p-8 space-y-6">
        {/* Quick Action */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="border-primary/50 text-primary font-mono text-xs uppercase">
              <div className="h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
              Online
            </Badge>
            <Badge variant="outline" className="border-destructive/50 text-destructive font-mono text-xs">
              7 Day Streak
            </Badge>
          </div>
          <Button
            size="lg"
            onClick={() => navigate("/lock-in")}
            data-testid="button-quick-lock-in"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 font-bold uppercase tracking-wide"
          >
            <Zap className="h-5 w-5 mr-2" />
            Quick Lock In
          </Button>
        </div>

        {/* Performance Metrics - Mission Control Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-border/50 bg-gradient-to-br from-card to-card/50 hover:border-primary/50 transition-all" data-testid="card-lock-in-time">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider">
                  Lock In Time
                </p>
                <Zap className="h-4 w-4 text-primary" />
              </div>
              <p className="text-4xl font-mono font-black text-foreground mb-1" data-testid="text-lock-in-time">
                {Math.floor(totalFocusMinutes / 60)}h {totalFocusMinutes % 60}m
              </p>
              <p className="text-xs text-muted-foreground font-mono">Today's total execution time</p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-gradient-to-br from-card to-card/50 hover:border-secondary/50 transition-all" data-testid="card-deep-creative-time">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider">
                  Deep + Creative
                </p>
                <Zap className="h-4 w-4 text-secondary" />
              </div>
              <p className="text-4xl font-mono font-black text-foreground mb-1" data-testid="text-deep-creative-time">
                {Math.floor(totalFocusMinutes / 60)}h {totalFocusMinutes % 60}m
              </p>
              <p className="text-xs text-muted-foreground font-mono">High-intensity work modes</p>
            </CardContent>
          </Card>

          {/* Stage 4: Review */}
          <Card
            className="border-chart-4/30 bg-gradient-to-br from-chart-4/5 to-transparent hover:border-chart-4/60 
                       transition-all cursor-pointer group hover-elevate relative overflow-hidden"
            onClick={() => navigate("/activities")}
            data-testid="card-review"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-chart-4/5 rounded-full -translate-y-16 translate-x-16 
                            group-hover:scale-150 transition-transform duration-500" />
            <CardContent className="p-5 relative z-10">
              <div className="flex flex-col h-full gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-chart-4/20 border border-chart-4/30">
                    <BarChart3 className="h-5 w-5 text-chart-4" />
                  </div>
                  <div className="text-[10px] font-mono font-black text-chart-4 px-2 py-1 bg-chart-4/20 rounded uppercase tracking-widest">
                    04
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="font-black text-base uppercase tracking-tight">Analyze</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Track metrics. Optimize flow.
                  </p>
                </div>
                <div className="mt-auto flex items-center text-chart-4 text-xs font-mono font-bold">
                  <span className="mr-2">MEASURE</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Activity & Weekly */}
      <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6 lg:px-8 pb-8">
        <div className="lg:col-span-2 space-y-6">
          <ActivityTimeline activities={todaysActivities} />
          <WeeklyOverview data={mockWeeklyData} />
        </div>
      </div>
    </div>
  );
}
