import { ActivityTimeline } from "@/components/ActivityTimeline";
import { WeeklyOverview } from "@/components/WeeklyOverview";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Target, BookOpen, BarChart3, ArrowRight, Timer, TrendingUp, Flame, LayoutDashboard } from "lucide-react";
import { useLocation } from "wouter";
import workspaceImg from "@assets/generated_images/developer_focused_at_workstation.png";

export default function Dashboard() {
  const [, navigate] = useLocation();

  const mockActivities = [
    {
      id: '1',
      name: 'Email & Communication',
      category: 'Work',
      duration: 45,
      startTime: '9:00 AM',
      color: 'bg-chart-1',
    },
    {
      id: '2',
      name: 'Project Development',
      category: 'Work',
      duration: 120,
      startTime: '10:00 AM',
      color: 'bg-chart-1',
    },
    {
      id: '3',
      name: 'Social Media',
      category: 'Social',
      duration: 30,
      startTime: '12:30 PM',
      color: 'bg-chart-3',
    },
  ];

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
                <Timer className="h-4 w-4 text-primary" />
              </div>
              <p className="text-4xl font-mono font-black text-foreground mb-1" data-testid="text-lock-in-time">04:32:18</p>
              <p className="text-xs text-muted-foreground font-mono">Today's total execution time</p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-gradient-to-br from-card to-card/50 hover:border-secondary/50 transition-all" data-testid="card-deep-creative-time">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider">
                  Deep + Creative
                </p>
                <Target className="h-4 w-4 text-secondary" />
              </div>
              <p className="text-4xl font-mono font-black text-foreground mb-1" data-testid="text-deep-creative-time">02:45:30</p>
              <p className="text-xs text-muted-foreground font-mono">High-intensity work modes</p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-gradient-to-br from-card to-card/50 hover:border-destructive/50 transition-all" data-testid="card-streak">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider">
                  Streak
                </p>
                <Flame className="h-4 w-4 text-destructive" />
              </div>
              <p className="text-4xl font-mono font-black text-foreground mb-1" data-testid="text-streak">7 Days</p>
              <p className="text-xs text-muted-foreground font-mono">Consecutive lock-ins</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Workflow Quadrants */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold uppercase tracking-tight">Execution Protocol</h2>
            <div className="text-xs font-mono text-muted-foreground">4 STAGES</div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Stage 1: Intention */}
            <Card 
              className="border-chart-1/30 bg-gradient-to-br from-chart-1/5 to-transparent hover:border-chart-1/60 
                       transition-all cursor-pointer group hover-elevate relative overflow-hidden" 
              onClick={() => navigate("/intention")}
              data-testid="card-set-intention"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-chart-1/5 rounded-full -translate-y-16 translate-x-16 
                            group-hover:scale-150 transition-transform duration-500" />
              <CardContent className="p-5 relative z-10">
                <div className="flex flex-col h-full gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-md bg-chart-1/20 border border-chart-1/30">
                      <Target className="h-5 w-5 text-chart-1" />
                    </div>
                    <div className="text-[10px] font-mono font-black text-chart-1 px-2 py-1 bg-chart-1/20 rounded uppercase tracking-widest">
                      01
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-black text-base uppercase tracking-tight">Set Intention</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Define your target. No vague goals.
                    </p>
                  </div>
                  <div className="mt-auto flex items-center text-chart-1 text-xs font-mono font-bold">
                    <span className="mr-2">INITIATE</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stage 2: Lock In (Primary) */}
            <Card 
              className="border-primary/50 bg-gradient-to-br from-primary/10 to-transparent hover:border-primary 
                       transition-all cursor-pointer group shadow-lg shadow-primary/20 hover:shadow-primary/40 
                       hover-elevate relative overflow-hidden" 
              onClick={() => navigate("/lock-in")}
              data-testid="card-lock-in"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16 
                            group-hover:scale-150 transition-transform duration-500" />
              <CardContent className="p-5 relative z-10">
                <div className="flex flex-col h-full gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/20 border border-primary/40 
                                  animate-pulse-glow">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-[10px] font-mono font-black text-primary px-2 py-1 bg-primary/20 rounded uppercase tracking-widest">
                      02
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-black text-base uppercase tracking-tight text-primary">Lock In Now</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Start timer. Enter deep work.
                    </p>
                  </div>
                  <div className="mt-auto flex items-center text-primary text-xs font-mono font-bold">
                    <span className="mr-2">EXECUTE</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stage 3: Reflect */}
            <Card 
              className="border-secondary/30 bg-gradient-to-br from-secondary/5 to-transparent hover:border-secondary/60 
                       transition-all cursor-pointer group hover-elevate relative overflow-hidden" 
              onClick={() => navigate("/journal")}
              data-testid="card-reflect"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-16 translate-x-16 
                            group-hover:scale-150 transition-transform duration-500" />
              <CardContent className="p-5 relative z-10">
                <div className="flex flex-col h-full gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-md bg-secondary/20 border border-secondary/30">
                      <BookOpen className="h-5 w-5 text-secondary" />
                    </div>
                    <div className="text-[10px] font-mono font-black text-secondary px-2 py-1 bg-secondary/20 rounded uppercase tracking-widest">
                      03
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-black text-base uppercase tracking-tight">Debrief</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Assess output vs. intention.
                    </p>
                  </div>
                  <div className="mt-auto flex items-center text-secondary text-xs font-mono font-bold">
                    <span className="mr-2">REFLECT</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
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
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <ActivityTimeline activities={mockActivities} />
            <WeeklyOverview data={mockWeeklyData} />
          </div>
        </div>
      </div>
    </div>
  );
}
