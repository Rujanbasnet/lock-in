import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

interface DayData {
  day: string;
  minutes: number;
}

interface WeeklyOverviewProps {
  data?: DayData[];
}

export function WeeklyOverview({ data = [] }: WeeklyOverviewProps) {
  const total = data.reduce((sum, day) => sum + day.minutes, 0);
  const average = data.length > 0 ? Math.round(total / data.length) : 0;

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <CardTitle>Weekly Overview</CardTitle>
          <div className="text-sm text-muted-foreground">
            Avg: {Math.floor(average / 60)}h {average % 60}m/day
          </div>
        </div>
        <CardDescription>Your digital time over the past 7 days</CardDescription>
      </CardHeader>
      <CardContent>
        {data.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Not enough data yet</p>
            <p className="text-sm text-muted-foreground mt-2">
              Keep logging to see your weekly patterns
            </p>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <XAxis
                dataKey="day"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${Math.floor(value / 60)}h`}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const minutes = payload[0].value as number;
                    return (
                      <div className="rounded-lg border bg-popover px-3 py-2 text-sm shadow-md">
                        <div className="font-medium">{payload[0].payload.day}</div>
                        <div className="text-muted-foreground">
                          {Math.floor(minutes / 60)}h {minutes % 60}m
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar
                dataKey="minutes"
                fill="hsl(var(--chart-1))"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}
