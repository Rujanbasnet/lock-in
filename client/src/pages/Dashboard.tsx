import { ActivityTimeline } from "@/components/ActivityTimeline";
import { WeeklyOverview } from "@/components/WeeklyOverview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Target, BookOpen, BarChart3, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

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
      <div className="max-w-7xl mx-auto p-8 space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-5xl font-serif font-bold mb-2">Ready to Lock In?</h1>
          <p className="text-lg text-muted-foreground">
            Follow the workflow to maximize your productivity and stay focused on what matters
          </p>
        </div>

        {/* Main Workflow Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Step 1: Set Intention */}
          <Card className="border-2 hover:border-primary/50 transition-colors cursor-pointer hover-elevate" 
                onClick={() => navigate("/intention")}>
            <CardContent className="p-6">
              <div className="flex flex-col h-full gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-chart-1/20">
                    <Target className="h-5 w-5 text-chart-1" />
                  </div>
                  <div className="text-xs font-bold bg-chart-1/20 text-chart-1 px-2 py-1 rounded">STEP 1</div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Set Intention</h3>
                  <p className="text-sm text-muted-foreground">Define exactly what you're committing to today</p>
                </div>
                <div className="mt-auto">
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 2: Lock In */}
          <Card className="border-2 border-primary hover:border-primary/70 transition-colors cursor-pointer hover-elevate shadow-lg shadow-primary/10" 
                onClick={() => navigate("/lock-in")}>
            <CardContent className="p-6 bg-gradient-to-br from-primary/5 to-transparent">
              <div className="flex flex-col h-full gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-xs font-bold bg-primary/20 text-primary px-2 py-1 rounded">STEP 2</div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-primary">Start Locking In</h3>
                  <p className="text-sm text-muted-foreground">Timer starts. Focus begins. No distractions.</p>
                </div>
                <div className="mt-auto">
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 3: Reflect */}
          <Card className="border-2 hover:border-primary/50 transition-colors cursor-pointer hover-elevate" 
                onClick={() => navigate("/journal")}>
            <CardContent className="p-6">
              <div className="flex flex-col h-full gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-chart-2/20">
                    <BookOpen className="h-5 w-5 text-chart-2" />
                  </div>
                  <div className="text-xs font-bold bg-chart-2/20 text-chart-2 px-2 py-1 rounded">STEP 3</div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Reflect & Journal</h3>
                  <p className="text-sm text-muted-foreground">Compare your intention with what you accomplished</p>
                </div>
                <div className="mt-auto">
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 4: Review */}
          <Card className="border-2 hover:border-primary/50 transition-colors cursor-pointer hover-elevate" 
                onClick={() => navigate("/activities")}>
            <CardContent className="p-6">
              <div className="flex flex-col h-full gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-chart-4/20">
                    <BarChart3 className="h-5 w-5 text-chart-4" />
                  </div>
                  <div className="text-xs font-bold bg-chart-4/20 text-chart-4 px-2 py-1 rounded">STEP 4</div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Review Activity</h3>
                  <p className="text-sm text-muted-foreground">Track your Lock In Time throughout the day</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-1">Today's Lock In Time</p>
              <p className="text-3xl font-bold font-mono">04:32:18</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-1">Deep Work + Creative</p>
              <p className="text-3xl font-bold font-mono">02:45:30</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-1">7 Day Streak</p>
              <p className="text-3xl font-bold">🔥 7</p>
            </CardContent>
          </Card>
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
