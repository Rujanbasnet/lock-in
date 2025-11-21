import { IntentionCard } from "@/components/IntentionCard";
import { ActivityTimeline } from "@/components/ActivityTimeline";
import { WeeklyOverview } from "@/components/WeeklyOverview";
import { BreakReminder } from "@/components/BreakReminder";
import { QuickStats } from "@/components/QuickStats";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Target, Clock, BookOpen, BarChart3 } from "lucide-react";
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
        <div>
          <h1 className="text-4xl font-serif font-medium mb-2">Lock In Today</h1>
          <p className="text-muted-foreground">
            Focus hard, work smart, and track your progress. Here's your workflow for maximum productivity.
          </p>
        </div>

        {/* Workflow Guide */}
        <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10">
          <CardHeader>
            <CardTitle className="text-lg">Your Lock In Workflow</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-4 gap-4">
                {/* Step 1: Intention */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-chart-1 text-white text-sm font-bold">
                      1
                    </div>
                    <span className="font-semibold">Set Intention</span>
                  </div>
                  <p className="text-sm text-muted-foreground pl-10">
                    Define what you're locking in for today. Be specific about your goals.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2 w-fit ml-10"
                    data-testid="button-set-intention"
                    onClick={() => navigate("/intention")}
                  >
                    <Target className="h-4 w-4 mr-2" />
                    Set Now
                  </Button>
                </div>

                {/* Step 2: Lock In */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-chart-2 text-white text-sm font-bold">
                      2
                    </div>
                    <span className="font-semibold">Lock In</span>
                  </div>
                  <p className="text-sm text-muted-foreground pl-10">
                    Start the timer and focus. Switch modes as needed—Deep Work, Creative, Social, or Rest.
                  </p>
                  <Button
                    size="sm"
                    className="mt-2 w-fit ml-10"
                    data-testid="button-start-lock-in"
                    onClick={() => navigate("/lock-in")}
                  >
                    <Zap className="h-4 w-4 mr-2" />
                    Start Now
                  </Button>
                </div>

                {/* Step 3: Reflect */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-chart-3 text-white text-sm font-bold">
                      3
                    </div>
                    <span className="font-semibold">Reflect</span>
                  </div>
                  <p className="text-sm text-muted-foreground pl-10">
                    After your session, journal about what you accomplished and how aligned you were with your intention.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2 w-fit ml-10"
                    data-testid="button-reflect"
                    onClick={() => navigate("/journal")}
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    Journal
                  </Button>
                </div>

                {/* Step 4: Review */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-chart-4 text-white text-sm font-bold">
                      4
                    </div>
                    <span className="font-semibold">Review</span>
                  </div>
                  <p className="text-sm text-muted-foreground pl-10">
                    Check your activity log to see your Lock In Time throughout the day and track patterns.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2 w-fit ml-10"
                    data-testid="button-review-log"
                    onClick={() => navigate("/activities")}
                  >
                    <BarChart3 className="h-4 w-4 mr-2" />
                    View Log
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Set Intention */}
        <div>
          <h2 className="text-2xl font-serif font-medium mb-4">Today's Intention</h2>
          <IntentionCard />
        </div>

        {/* Quick Lock In Box */}
        <Card className="border-primary/50 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
          <CardContent className="p-0 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 p-8">
              <h2 className="text-3xl font-serif font-medium mb-2">Ready to Lock In?</h2>
              <p className="text-muted-foreground mb-6">
                You've set your intention. Now it's time to focus. No distractions, no delays. Just you and your work. The timer is waiting.
              </p>
              <Button size="lg" data-testid="button-lock-in-hero" onClick={() => navigate("/lock-in")}>
                <Zap className="h-5 w-5 mr-2" />
                Start Lock In Session
              </Button>
            </div>
            <div className="text-right p-8">
              <div className="text-6xl font-mono font-bold text-primary/20">
                00:00:00
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Activity & Stats */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <ActivityTimeline activities={mockActivities} />
            <WeeklyOverview data={mockWeeklyData} />
          </div>

          <div className="space-y-6">
            <BreakReminder />
            <QuickStats />
          </div>
        </div>
      </div>
    </div>
  );
}
