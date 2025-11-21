import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingDown, Award } from "lucide-react";

export function QuickStats() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            This Week
          </CardTitle>
          <TrendingDown className="h-4 w-4 text-chart-2" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-semibold">18h 42m</div>
          <p className="text-xs text-muted-foreground mt-1">
            12% less than last week
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Current Streak
          </CardTitle>
          <Award className="h-4 w-4 text-chart-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-semibold">7 days</div>
          <p className="text-xs text-muted-foreground mt-1">
            Logging every day
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
