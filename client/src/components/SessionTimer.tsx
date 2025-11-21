import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Palette, Users, Moon, Play, Pause, RotateCcw } from "lucide-react";
import { useState, useEffect } from "react";

const modes = [
  {
    id: "deep-work",
    label: "Deep Work",
    icon: Brain,
    color: "from-chart-1 to-chart-1/70",
    textColor: "text-chart-1",
    bgGlow: "bg-chart-1/10",
  },
  {
    id: "creative",
    label: "Creative",
    icon: Palette,
    color: "from-chart-2 to-chart-2/70",
    textColor: "text-chart-2",
    bgGlow: "bg-chart-2/10",
  },
  {
    id: "social",
    label: "Social",
    icon: Users,
    color: "from-chart-3 to-chart-3/70",
    textColor: "text-chart-3",
    bgGlow: "bg-chart-3/10",
  },
  {
    id: "rest",
    label: "Rest",
    icon: Moon,
    color: "from-chart-4 to-chart-4/70",
    textColor: "text-chart-4",
    bgGlow: "bg-chart-4/10",
  },
];

export function SessionTimer() {
  const [isRunning, setIsRunning] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [currentMode, setCurrentMode] = useState<string | null>(null);
  const [modeHistory, setModeHistory] = useState<
    Array<{ mode: string; duration: number }>
  >([]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setTotalSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleModeChange = (modeId: string) => {
    if (currentMode && currentMode !== modeId && isRunning) {
      setModeHistory([...modeHistory, { mode: currentMode, duration: 0 }]);
    }
    setCurrentMode(modeId);
    if (!isRunning) setIsRunning(true);
    console.log(`Locked in: ${modes.find((m) => m.id === modeId)?.label}`);
  };

  const handleStart = () => {
    if (currentMode) {
      setIsRunning(!isRunning);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setTotalSeconds(0);
    setCurrentMode(null);
    setModeHistory([]);
  };

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const currentModeData = currentMode ? modes.find((m) => m.id === currentMode) : null;

  return (
    <div className="space-y-6">
      {/* Main Timer Display */}
      <div
        className={`relative overflow-hidden rounded-2xl border-2 p-12 transition-all ${
          currentModeData
            ? `border-chart-1/50 ${currentModeData.bgGlow}`
            : "border-border bg-card"
        }`}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {currentModeData && (
            <div
              className={`absolute inset-0 bg-gradient-to-br ${currentModeData.color}`}
            />
          )}
        </div>

        <div className="relative text-center space-y-6">
          <div
            className="font-mono tabular-nums"
            style={{
              fontSize: "120px",
              fontWeight: "700",
              lineHeight: "1",
              letterSpacing: "-0.02em",
            }}
            data-testid="text-timer-display"
          >
            {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </div>

          {currentModeData && (
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 justify-center">
                <currentModeData.icon className={`h-6 w-6 ${currentModeData.textColor}`} />
                <span
                  className={`text-2xl font-semibold ${currentModeData.textColor}`}
                  data-testid="text-current-mode"
                >
                  {currentModeData.label}
                </span>
              </div>
              {isRunning && (
                <div className="text-sm text-muted-foreground">
                  Session in progress
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mode Selection */}
      <div>
        <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
          Lock In Mode
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {modes.map((mode) => {
            const Icon = mode.icon;
            const isActive = currentMode === mode.id;

            return (
              <button
                key={mode.id}
                onClick={() => handleModeChange(mode.id)}
                disabled={isRunning && !isActive}
                data-testid={`button-mode-${mode.id}`}
                className={`
                  relative overflow-hidden rounded-xl border p-4 transition-all
                  hover-elevate active-elevate-2
                  ${
                    isActive
                      ? `border-2 border-current ${mode.bgGlow} ring-2 ring-offset-2 ring-offset-background ring-current`
                      : isRunning
                        ? "opacity-50 cursor-not-allowed"
                        : "border-border bg-card"
                  }
                `}
              >
                <div className="relative flex flex-col items-center gap-2 text-center">
                  <Icon
                    className={`h-6 w-6 transition-colors ${
                      isActive ? mode.textColor : "text-muted-foreground"
                    }`}
                  />
                  <span
                    className={`text-sm font-semibold ${
                      isActive ? mode.textColor : "text-foreground"
                    }`}
                  >
                    {mode.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-3 flex-wrap">
        <Button
          onClick={handleStart}
          disabled={!currentMode}
          size="lg"
          className="flex-1"
          data-testid="button-start-timer"
        >
          {isRunning ? (
            <>
              <Pause className="h-5 w-5 mr-2" />
              Pause
            </>
          ) : (
            <>
              <Play className="h-5 w-5 mr-2" />
              Start Session
            </>
          )}
        </Button>
        <Button
          onClick={handleReset}
          variant="outline"
          size="lg"
          data-testid="button-reset-timer"
        >
          <RotateCcw className="h-5 w-5 mr-2" />
          Reset
        </Button>
      </div>

      {/* Mode History */}
      {modeHistory.length > 0 && (
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
              Session Breakdown
            </h3>
            <div className="space-y-2">
              {modeHistory.map((entry, idx) => {
                const mode = modes.find((m) => m.id === entry.mode);
                return (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-sm p-2 rounded-lg bg-muted/30"
                    data-testid={`history-entry-${idx}`}
                  >
                    <div className="flex items-center gap-2">
                      {mode && <mode.icon className={`h-4 w-4 ${mode.textColor}`} />}
                      <span>{mode?.label}</span>
                    </div>
                    <span className="font-mono text-muted-foreground">
                      {Math.floor(entry.duration / 3600)}h{" "}
                      {Math.floor((entry.duration % 3600) / 60)}m
                    </span>
                  </div>
                );
              })}
              {currentMode && (
                <div className="flex items-center justify-between text-sm p-2 rounded-lg bg-primary/10 font-semibold">
                  <div className="flex items-center gap-2">
                    {currentModeData && (
                      <currentModeData.icon
                        className={`h-4 w-4 ${currentModeData.textColor}`}
                      />
                    )}
                    <span>{currentModeData?.label} (Current)</span>
                  </div>
                  <span className="font-mono">
                    {Math.floor(totalSeconds / 3600)}h{" "}
                    {Math.floor((totalSeconds % 3600) / 60)}m
                  </span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
