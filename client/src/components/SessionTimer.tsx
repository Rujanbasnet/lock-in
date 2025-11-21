import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, CheckCircle, Volume2, VolumeX } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { useTimer, modes } from "@/context/TimerContext";

export function SessionTimer() {
  const [, navigate] = useLocation();
  const {
    isRunning,
    modeTimers,
    currentMode,
    startTimer,
    pauseTimer,
    resetTimer,
    setMode,
    finishSession
  } = useTimer();

  // Audio State
  const [audioEnabled, setAudioEnabled] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Initialize Audio Context
  useEffect(() => {
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const toggleAudio = () => {
    if (!audioEnabled) {
      // Start Brown Noise (Simulated with low frequency oscillator for now as a placeholder)
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContext();
      audioContextRef.current = ctx;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(55, ctx.currentTime); // 55Hz = A1 (Deep drone)

      // Add some modulation for texture
      const lfo = ctx.createOscillator();
      lfo.type = 'sine';
      lfo.frequency.setValueAtTime(0.1, ctx.currentTime);
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(500, ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(gain.gain);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      lfo.start();

      gain.gain.setValueAtTime(0.05, ctx.currentTime); // Low volume

      oscillatorRef.current = osc;
      gainNodeRef.current = gain;
      setAudioEnabled(true);
    } else {
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
      setAudioEnabled(false);
    }
  };

  const handleFinishSession = () => {
    finishSession();
    navigate("/");
  };

  // Focus Time (Deep Work + Creative + Flow)
  const focusMilliseconds = modeTimers["deep-work"] + modeTimers.creative + modeTimers.flow;
  const focusSeconds = Math.floor(focusMilliseconds / 1000);
  const focusMillisecondsOnly = Math.floor((focusMilliseconds % 1000) / 10);
  const focusHours = Math.floor(focusSeconds / 3600);
  const focusMinutes = Math.floor((focusSeconds % 3600) / 60);
  const focusSecsOnly = focusSeconds % 60;

  // Break Time (Social + Break + Rest)
  const breakMilliseconds = modeTimers.social + modeTimers.break + modeTimers.rest;
  const breakSeconds = Math.floor(breakMilliseconds / 1000);
  const breakMillisecondsOnly = Math.floor((breakMilliseconds % 1000) / 10);
  const breakHours = Math.floor(breakSeconds / 3600);
  const breakMinutes = Math.floor((breakSeconds % 3600) / 60);
  const breakSecsOnly = breakSeconds % 60;

  const currentModeData = currentMode ? modes.find((m) => m.id === currentMode) : null;

  return (
    <div className="space-y-6 w-full">
      {/* Main Timer Display - Massive and Motivating */}
      <div
        className={`relative overflow-hidden rounded-2xl border-2 transition-all ${currentModeData
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

        <div className="relative p-4 md:p-6 text-center space-y-4">
          {/* Focus Time - Main Big Timer */}
          <div className="space-y-1">
            <div className="flex items-center justify-between px-4">
              <div className="text-[9px] font-bold text-primary uppercase tracking-widest mb-2">
                Focus Time
              </div>
              <Button
                variant="ghost"
                size="icon"
                className={`h-6 w-6 ${audioEnabled ? 'text-primary animate-pulse' : 'text-muted-foreground'}`}
                onClick={toggleAudio}
                title="Toggle Neural Focus Audio"
              >
                {audioEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
              </Button>
            </div>
            <div className="flex items-end justify-center gap-0 md:gap-1">
              <div
                className="font-mono tabular-nums leading-none text-primary"
                style={{
                  fontSize: "clamp(48px, 12vw, 100px)",
                  fontWeight: "900",
                  letterSpacing: "-0.03em",
                  textShadow: "0 0 20px currentColor",
                }}
                data-testid="text-focus-timer"
              >
                {String(focusHours).padStart(2, "0")}:{String(focusMinutes).padStart(2, "0")}:
                {String(focusSecsOnly).padStart(2, "0")}
              </div>
              <div
                className="font-mono tabular-nums leading-none"
                style={{
                  fontSize: "clamp(24px, 6vw, 48px)",
                  fontWeight: "700",
                  letterSpacing: "-0.02em",
                  color: "hsl(var(--muted-foreground))",
                  marginBottom: "clamp(6px, 2vw, 16px)",
                }}
              >
                .{String(focusMillisecondsOnly).padStart(2, "0")}
              </div>
            </div>
          </div>

          {/* Break Time - Secondary Timer */}
          <div className="space-y-1 pt-3 border-t border-border/30">
            <div className="text-[9px] font-bold text-secondary uppercase tracking-widest mb-2">
              Break Time
            </div>
            <div className="flex items-end justify-center gap-0 md:gap-1">
              <div
                className="font-mono tabular-nums leading-none text-secondary"
                style={{
                  fontSize: "clamp(32px, 8vw, 64px)",
                  fontWeight: "800",
                  letterSpacing: "-0.03em",
                }}
                data-testid="text-break-timer"
              >
                {String(breakHours).padStart(2, "0")}:{String(breakMinutes).padStart(2, "0")}:
                {String(breakSecsOnly).padStart(2, "0")}
              </div>
              <div
                className="font-mono tabular-nums leading-none"
                style={{
                  fontSize: "clamp(16px, 4vw, 32px)",
                  fontWeight: "700",
                  letterSpacing: "-0.02em",
                  color: "hsl(var(--muted-foreground))",
                  marginBottom: "clamp(4px, 1.5vw, 8px)",
                }}
              >
                .{String(breakMillisecondsOnly).padStart(2, "0")}
              </div>
            </div>
          </div>

          {/* Current Mode Label */}
          {currentModeData && (
            <div className="flex flex-col items-center gap-2 pt-2">
              <div className="flex items-center gap-2 justify-center">
                <currentModeData.icon
                  className={`h-5 w-5 ${currentModeData.textColor}`}
                />
                <span
                  className={`text-lg md:text-2xl font-bold ${currentModeData.textColor}`}
                  data-testid="text-current-mode"
                >
                  {currentModeData.label}
                </span>
              </div>
              {isRunning && (
                <div className="text-xs text-muted-foreground animate-pulse">
                  ● Session Running
                </div>
              )}
              {!isRunning && currentMode && (
                <div className="text-xs text-muted-foreground">Ready to start</div>
              )}
            </div>
          )}

          {!currentMode && (
            <div className="text-sm text-muted-foreground pt-2">Select a mode to begin</div>
          )}
        </div>
      </div>

      {/* Mode Selection Grid */}
      <div>
        <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4 block">
          Switch Mode (Anytime)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
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
                onClick={() => setMode(mode.id)}
                data-testid={`button-mode-${mode.id}`}
                className={`
                  relative overflow-hidden rounded-lg border transition-all p-3
                  hover-elevate active-elevate-2 cursor-pointer
                  ${isActive
                    ? `border-2 border-current ${mode.bgGlow} ring-2 ring-offset-2 ring-offset-background ring-current shadow-lg`
                    : "border-border hover:border-border/50"
                  }
                `}
              >
                <div className="relative flex flex-col items-center gap-1 text-center">
                  <Icon
                    className={`h-4 w-4 transition-colors ${isActive ? mode.textColor : "text-muted-foreground"
                      }`}
                  />
                  <span
                    className={`text-xs font-bold transition-colors ${isActive ? mode.textColor : "text-foreground"
                      }`}
                  >
                    {mode.label}
                  </span>
                  <span className="text-[10px] text-muted-foreground font-mono mt-0.5">
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
          onClick={isRunning ? pauseTimer : startTimer}
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
          onClick={resetTimer}
          variant="outline"
          size="lg"
          className="min-h-14"
          data-testid="button-reset-timer"
        >
          <RotateCcw className="h-6 w-6" />
        </Button>
      </div>

      {/* End Session Button */}
      <div className="flex justify-center">
        <Button
          onClick={handleFinishSession}
          size="default"
          className="min-h-9 font-bold"
          data-testid="button-finish-session"
        >
          <CheckCircle className="h-4 w-4 mr-2" />
          End session
        </Button>
      </div>

      {/* Time Breakdown */}
      {Object.values(modeTimers).some(time => time > 0) && (
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xs font-bold text-muted-foreground mb-4 uppercase tracking-widest">
              Session Breakdown
            </h3>
            <div className="space-y-4">
              {/* Focus Time Summary */}
              {focusSeconds > 0 && (
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                    Total Focus Time
                  </div>
                  <div className="font-mono text-2xl font-bold text-primary">
                    {String(focusHours).padStart(2, "0")}:{String(focusMinutes).padStart(2, "0")}:
                    {String(focusSecsOnly).padStart(2, "0")}
                  </div>
                </div>
              )}

              {/* Break Time Summary */}
              {breakSeconds > 0 && (
                <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                  <div className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">
                    Total Break Time
                  </div>
                  <div className="font-mono text-2xl font-bold text-secondary">
                    {String(breakHours).padStart(2, "0")}:{String(breakMinutes).padStart(2, "0")}:
                    {String(breakSecsOnly).padStart(2, "0")}
                  </div>
                </div>
              )}

              {/* Individual Mode Times */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                {modes.map((mode) => {
                  const modeSeconds = Math.floor(modeTimers[mode.id] / 1000);
                  const modeHours = Math.floor(modeSeconds / 3600);
                  const modeMinutes = Math.floor((modeSeconds % 3600) / 60);
                  const modeSecsOnly = modeSeconds % 60;

                  if (modeSeconds === 0) return null;

                  return (
                    <div
                      key={mode.id}
                      className="flex items-center justify-between text-xs p-2 rounded-lg bg-muted/40 border border-border/50"
                      data-testid={`timer-${mode.id}`}
                    >
                      <div className="flex items-center gap-1.5">
                        <mode.icon className={`h-3 w-3 ${mode.textColor}`} />
                        <span className="font-medium text-[11px]">{mode.label}</span>
                      </div>
                      <span className="font-mono font-bold text-foreground text-[10px]">
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
