import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TimelineActivity {
  id: string;
  name: string;
  category: string;
  duration: number;
  startTime: string;
  color: string;
}

interface ActivityTimelineProps {
  activities?: TimelineActivity[];
}

export function ActivityTimeline({ activities = [] }: ActivityTimelineProps) {
  const totalMinutes = activities.reduce((sum, act) => sum + act.duration, 0);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <CardTitle>Today's Activities</CardTitle>
          <div className="text-2xl font-semibold" data-testid="text-total-time">
            {hours}h {minutes}m
          </div>
        </div>
        <CardDescription>Your digital time logged today</CardDescription>
      </CardHeader>
      <CardContent>
        {activities.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No activities logged yet today</p>
            <p className="text-sm text-muted-foreground mt-2">
              Start tracking to see your timeline
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between gap-4 rounded-lg border border-border p-3 hover-elevate"
                data-testid={`activity-${activity.id}`}
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className={`h-3 w-3 rounded-full ${activity.color}`} />
                  <div className="min-w-0 flex-1">
                    <div className="font-medium truncate">{activity.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {activity.startTime}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="whitespace-nowrap">
                    {activity.category}
                  </Badge>
                  <div className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                    {Math.floor(activity.duration / 60)}h {activity.duration % 60}m
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
