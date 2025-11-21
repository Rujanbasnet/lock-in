import { IntentionCard } from "@/components/IntentionCard";
import { ActivityTimeline } from "@/components/ActivityTimeline";
import { WeeklyOverview } from "@/components/WeeklyOverview";
import { BreakReminder } from "@/components/BreakReminder";
import { QuickStats } from "@/components/QuickStats";

export default function Dashboard() {
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
          <h1 className="text-4xl font-serif font-medium mb-2">Welcome back</h1>
          <p className="text-muted-foreground">
            Here's your digital wellness overview for today
          </p>
        </div>

        <IntentionCard />

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
