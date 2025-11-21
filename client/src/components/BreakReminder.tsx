import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Timer, Settings } from "lucide-react";
import { useState, useEffect } from "react";

export function BreakReminder() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 25 * 60));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-lg">Next Break</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            data-testid="button-break-settings"
            onClick={() => console.log('Break settings opened')}
          >
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-center">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-semibold tabular-nums" data-testid="text-break-timer">
              {minutes}:{seconds.toString().padStart(2, '0')}
            </span>
          </div>
        </div>
        <Button
          className="w-full"
          variant="outline"
          data-testid="button-start-breathing"
          onClick={() => console.log('Breathing exercise started')}
        >
          <Timer className="h-4 w-4 mr-2" />
          Start Breathing Exercise
        </Button>
      </CardContent>
    </Card>
  );
}
