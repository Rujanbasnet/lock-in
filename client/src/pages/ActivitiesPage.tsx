import { ActivityLogger } from "@/components/ActivityLogger";
import { ActivityTimeline } from "@/components/ActivityTimeline";
import { PageHeader } from "@/components/PageHeader";
import { Activity } from "lucide-react";

export default function ActivitiesPage() {
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
    {
      id: '4',
      name: 'Online Learning',
      category: 'Learning',
      duration: 60,
      startTime: '2:00 PM',
      color: 'bg-chart-2',
    },
  ];

  return (
    <div className="h-full overflow-auto">
      <PageHeader 
        icon={<Activity className="h-6 w-6 text-chart-4" />}
        title="Activity Log"
        description="See exactly how you locked in today. Track your Deep Work, Creative, Social, and Rest sessions throughout the day."
      />
      
      <div className="max-w-7xl mx-auto p-6 md:p-8 space-y-6 md:space-y-8">

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <ActivityLogger />
          </div>

          <div className="lg:col-span-2">
            <ActivityTimeline activities={mockActivities} />
          </div>
        </div>
      </div>
    </div>
  );
}
