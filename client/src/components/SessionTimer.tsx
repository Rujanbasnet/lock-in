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
    countsToCoreTime: true,
  },
  {
    id: "creative",
    label: "Creative",
    icon: Palette,
    color: "from-chart-2 to-chart-2/70",
    textColor: "text-chart-2",
    bgGlow: "bg-chart-2/10",
    countsToCoreTime: true,
  },
  {
    id: "social",
    label: "Social",
    icon: Users,
    color: "from-chart-3 to-chart-3/70",
    textColor: "text-chart-3",
    bgGlow: "bg-chart-3/10",
    countsToCoreTime: false,
  },
  {
    id: "rest",
    label: "Rest",
    icon: Moon,
    color: "from-chart-4 to-chart-4/70",
    textColor: "text-chart-4",
    bgGlow: "bg-chart-4/10",
    countsToCoreTime: false,
  },
];

export function SessionTimer() {
  const [isRunning, setIsRunning] = useState(false);
  const [totalMilliseconds, setTotalMilliseconds] = useState(0);
  const [modeTimers, setModeTimers] = useState<Record<string, number>>({
    "deep-work": 0,
    creative: 0,
    social: 0,
    rest: 0,
  });
  const [currentMode, setCurrentMode] = useState<string | null>(null);
  const [modeHistory, setModeHistory] = useState<
    Array<{ mode: string; duration: number; startedAt: number }>
  >([]);
  const [sessionStartTime, setSessionStartTime] = useState<number | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && currentMode) {
      interval = setInterval(() => {
        setTotalMilliseconds((prev) => prev + 50);
        setModeTimers((prev) => ({
          ...prev,
          [currentMode]: prev[currentMode] + 50,
        }));
      }, 50);
    }

    return () => clearInterval(interval);
  }, [isRunning, currentMode]);

  const handleModeChange = (modeId: string) => {
    if (currentMode && currentMode !== modeId && isRunning) {
      setModeHistory([
        ...modeHistory,
        { mode: currentMode, duration: modeTimers[currentMode], startedAt: Date.now() },
      ]);
    }
    setCurrentMode(modeId);
    if (!isRunning) {
      setIsRunning(true);
      if (!sessionStartTime) setSessionStartTime(Date.now());
    }
    console.log(`Locked in: ${modes.find((m) => m.id === modeId)?.label}`);
  };

  const handleStart = () => {
    if (currentMode) {
      setIsRunning(!isRunning);
      if (!sessionStartTime && !isRunning) setSessionStartTime(Date.now());
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setTotalMilliseconds(0);
    setCurrentMode(null);
    setModeHistory([]);
    setModeTimers({
      "deep-work": 0,
      creative: 0,
      social: 0,
      rest: 0,
    });
    setSessionStartTime(null);
  };

  // Main timer with milliseconds
  const totalSeconds = Math.floor(totalMilliseconds / 1000);
  const milliseconds = Math.floor((totalMilliseconds % 1000) / 10);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  // Lock In Time (Deep Work + Creative only)
  const lockInMilliseconds = modeTimers["deep-work"] + modeTimers.creative;
  const lockInSeconds = Math.floor(lockInMilliseconds / 1000);
  const lockInHours = Math.floor(lockInSeconds / 3600);
  const lockInMinutes = Math.floor((lockInSeconds % 3600) / 60);
  const lockInSecsOnly = lockInSeconds % 60;

  const currentModeData = currentMode ? modes.find((m) => m.id === currentMode) : null;

  return (
    <div className="space-y-6 w-full">
      {/* Main Timer Display - Massive and Motivating */}
      <div
        className={`relative overflow-hidden rounded-2xl border-2 transition-all ${
          currentModeData
            ? `border-2 ${currentModeData.bgGlow}`
            : "border-border bg-card"
        }`}
      >
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          {currentModeData && (
            <div
              className={`absolute inset-0 bg-gradient-to-br ${currentModeData.color}`}
            />
          )}
        </div>

        <div className="relative p-8 md:p-12 text-center space-y-8">
          {/* Timer */}
          <div className="space-y-4">
            <div className="flex items-end justify-center gap-0 md:gap-1">
              <div
                className="font-mono tabular-nums leading-none"
                style={{
                  fontSize: "clamp(80px, 20vw, 180px)",
                  fontWeight: "900",
                  letterSpacing: "-0.03em",
                }}
                data-testid="text-timer-display"
              >
                {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
                {String(seconds).padStart(2, "0")}
              </div>
              <div
                className="font-mono tabular-nums leading-none"
                style={{
                  fontSize: "clamp(40px, 10vw, 80px)",
                  fontWeight: "700",
                  letterSpacing: "-0.02em",
                  color: "hsl(var(--muted-foreground))",
                  marginBottom: "clamp(8px, 3vw, 20px)",
                }}
              >
                .{String(milliseconds).padStart(2, "0")}
              </div>
            </div>

            {/* Current Mode Label */}
            {currentModeData && (
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-3 justify-center">
                  <currentModeData.icon
                    className={`h-8 w-8 ${currentModeData.textColor}`}
                  />
                  <span
                    className={`text-3xl md:text-4xl font-bold ${currentModeData.textColor}`}
                    data-testid="text-current-mode"
                  >
                    {currentModeData.label}
                  </span>
                </div>
                {isRunning && (
                  <div className="text-sm text-muted-foreground animate-pulse">
                    ● Session Running
                  </div>
                )}
                {!isRunning && currentMode && (
                  <div className="text-sm text-muted-foreground">Ready to start</div>
                )}
              </div>
            )}

            {!currentMode && (
              <div className="text-lg text-muted-foreground">Select a mode to begin</div>
            )}
          </div>

          {/* Lock In Time Highlight */}
          {currentModeData && (
            <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
              <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                Lock In Time (Deep Work + Creative)
              </div>
              <div
                className="font-mono tabular-nums text-4xl md:text-5xl font-bold text-primary"
                data-testid="text-lock-in-time"
              >
                {String(lockInHours).padStart(2, "0")}:{String(lockInMinutes).padStart(2, "0")}:
                {String(lockInSecsOnly).padStart(2, "0")}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mode Selection Grid */}
      <div>
        <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4 block">
          Switch Mode (Anytime)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {modes.map((mode) => {
            const Icon = mode.icon;
            const isActive = currentMode === mode.id;
            const modeSeconds = Math.floor(modeTimers[mode.id] / 1000);
            const modeHours = Math.floor(modeSeconds / 3600);
            const modeMinutes = Math.floor((modeSeconds % 3600) / 60);
            const modeSecsOnly = modeSeconds % 60;

            return (
              <button
                key={mode.id}
                onClick={() => handleModeChange(mode.id)}
                disabled={isRunning && !isActive}
                data-testid={`button-mode-${mode.id}`}
                className={`
                  relative overflow-hidden rounded-lg border transition-all p-4
                  hover-elevate active-elevate-2
                  ${
                    isActive
                      ? `border-2 border-current ${mode.bgGlow} ring-2 ring-offset-2 ring-offset-background ring-current shadow-lg`
                      : isRunning
                        ? "opacity-40 cursor-not-allowed border-border"
                        : "border-border hover:border-border/50"
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
                    className={`text-sm font-bold transition-colors ${
                      isActive ? mode.textColor : "text-foreground"
                    }`}
                  >
                    {mode.label}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono mt-1">
                    {String(modeHours).padStart(2, "0")}:{String(modeMinutes).padStart(2, "0")}:
                    {String(modeSecsOnly).padStart(2, "0")}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex gap-3 flex-wrap">
        <Button
          onClick={handleStart}
          disabled={!currentMode}
          size="lg"
          className="flex-1 min-h-14 text-lg font-bold"
          data-testid="button-start-timer"
        >
          {isRunning ? (
            <>
              <Pause className="h-6 w-6 mr-2" />
              Pause
            </>
          ) : (
            <>
              <Play className="h-6 w-6 mr-2" />
              Start
            </>
          )}
        </Button>
        <Button
          onClick={handleReset}
          variant="outline"
          size="lg"
          className="min-h-14"
          data-testid="button-reset-timer"
        >
          <RotateCcw className="h-6 w-6" />
        </Button>
      </div>

      {/* Time Breakdown */}
      {(modeTimers["deep-work"] > 0 ||
        modeTimers.creative > 0 ||
        modeTimers.social > 0 ||
        modeTimers.rest > 0) && (
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xs font-bold text-muted-foreground mb-4 uppercase tracking-widest">
              Session Breakdown
            </h3>
            <div className="space-y-3">
              {/* Individual Mode Times */}
              <div className="grid grid-cols-2 gap-3">
                {modes.map((mode) => {
                  const modeSeconds = Math.floor(modeTimers[mode.id] / 1000);
                  const modeHours = Math.floor(modeSeconds / 3600);
                  const modeMinutes = Math.floor((modeSeconds % 3600) / 60);
                  const modeSecsOnly = modeSeconds % 60;

                  if (modeSeconds === 0) return null;

                  return (
                    <div
                      key={mode.id}
                      className="flex items-center justify-between text-sm p-3 rounded-lg bg-muted/40 border border-border/50"
                      data-testid={`timer-${mode.id}`}
                    >
                      <div className="flex items-center gap-2">
                        <mode.icon className={`h-4 w-4 ${mode.textColor}`} />
                        <span className="font-medium">{mode.label}</span>
                      </div>
                      <span className="font-mono font-bold text-foreground">
                        {String(modeHours).padStart(2, "0")}:{String(modeMinutes).padStart(2, "0")}:
                        {String(modeSecsOnly).padStart(2, "0")}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
