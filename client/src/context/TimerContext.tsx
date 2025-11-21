import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useActivities } from '@/hooks/use-activities';
import { useToast } from '@/hooks/use-toast';
import { Brain, Palette, Zap, Users, Moon, Coffee } from "lucide-react";

// Define modes here as they are needed for the context
export const modes = [
    {
        id: "deep-work",
        label: "Deep Work",
        icon: Brain,
        color: "from-chart-1 to-chart-1/70",
        textColor: "text-chart-1",
        bgGlow: "bg-chart-1/10",
        isFocusTime: true,
    },
    {
        id: "creative",
        label: "Creative",
        icon: Palette,
        color: "from-chart-2 to-chart-2/70",
        textColor: "text-chart-2",
        bgGlow: "bg-chart-2/10",
        isFocusTime: true,
    },
    {
        id: "flow",
        label: "Flow",
        icon: Zap,
        color: "from-primary to-primary/70",
        textColor: "text-primary",
        bgGlow: "bg-primary/10",
        isFocusTime: true,
    },
    {
        id: "social",
        label: "Social",
        icon: Users,
        color: "from-chart-3 to-chart-3/70",
        textColor: "text-chart-3",
        bgGlow: "bg-chart-3/10",
        isFocusTime: false,
    },
    {
        id: "break",
        label: "Break",
        icon: Coffee,
        color: "from-secondary to-secondary/70",
        textColor: "text-secondary",
        bgGlow: "bg-secondary/10",
        isFocusTime: false,
    },
    {
        id: "rest",
        label: "Rest",
        icon: Moon,
        color: "from-chart-4 to-chart-4/70",
        textColor: "text-chart-4",
        bgGlow: "bg-chart-4/10",
        isFocusTime: false,
    },
];

interface ModeHistoryItem {
    mode: string;
    duration: number;
    startedAt: number;
}

interface TimerContextType {
    isRunning: boolean;
    totalMilliseconds: number;
    modeTimers: Record<string, number>;
    currentMode: string | null;
    modeHistory: ModeHistoryItem[];
    sessionStartTime: number | null;
    startTimer: () => void;
    pauseTimer: () => void;
    resetTimer: () => void;
    setMode: (modeId: string) => void;
    finishSession: () => void;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export function TimerProvider({ children }: { children: ReactNode }) {
    const { addActivity } = useActivities();
    const { toast } = useToast();

    const [isRunning, setIsRunning] = useState(false);
    const [totalMilliseconds, setTotalMilliseconds] = useState(0);
    const [modeTimers, setModeTimers] = useState<Record<string, number>>({
        "deep-work": 0,
        creative: 0,
        flow: 0,
        social: 0,
        break: 0,
        rest: 0,
    });
    const [currentMode, setCurrentMode] = useState<string | null>(null);
    const [modeHistory, setModeHistory] = useState<ModeHistoryItem[]>([]);
    const [sessionStartTime, setSessionStartTime] = useState<number | null>(null);

    // Timer Interval Logic
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

    const startTimer = () => {
        if (currentMode) {
            setIsRunning(true);
            if (!sessionStartTime) setSessionStartTime(Date.now());
        }
    };

    const pauseTimer = () => {
        setIsRunning(false);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setTotalMilliseconds(0);
        setCurrentMode(null);
        setModeHistory([]);
        setModeTimers({
            "deep-work": 0,
            creative: 0,
            flow: 0,
            social: 0,
            break: 0,
            rest: 0,
        });
        setSessionStartTime(null);
    };

    const setMode = (modeId: string) => {
        const newModeData = modes.find((m) => m.id === modeId);

        // Record previous mode history
        if (currentMode && currentMode !== modeId) {
            setModeHistory([
                ...modeHistory,
                { mode: currentMode, duration: modeTimers[currentMode], startedAt: Date.now() },
            ]);
        }

        // Switch to new mode
        setCurrentMode(modeId);

        // Auto-start if not running
        if (!isRunning) {
            setIsRunning(true);
            if (!sessionStartTime) setSessionStartTime(Date.now());
        }
    };

    const finishSession = () => {
        // Auto-log the session
        const totalFocusTime = modeTimers["deep-work"] + modeTimers.creative + modeTimers.flow;

        if (totalFocusTime > 60000) { // Only log if > 1 minute
            const dominantModeId = Object.entries(modeTimers)
                .sort(([, a], [, b]) => b - a)[0][0];

            const dominantMode = modes.find(m => m.id === dominantModeId);

            addActivity({
                name: `${dominantMode?.label || 'Focus'} Session`,
                category: dominantMode?.isFocusTime ? 'Work' : 'Break',
                duration: Math.floor(totalFocusTime / 60000),
                startTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                color: dominantMode?.isFocusTime ? 'bg-primary' : 'bg-secondary',
            });

            toast({
                title: "Session Logged",
                description: "Your activity has been automatically recorded.",
            });
        }

        // Reset after logging
        resetTimer();
    };

    return (
        <TimerContext.Provider value={{
            isRunning,
            totalMilliseconds,
            modeTimers,
            currentMode,
            modeHistory,
            sessionStartTime,
            startTimer,
            pauseTimer,
            resetTimer,
            setMode,
            finishSession
        }}>
            {children}
        </TimerContext.Provider>
    );
}

export function useTimer() {
    const context = useContext(TimerContext);
    if (context === undefined) {
        throw new Error('useTimer must be used within a TimerProvider');
    }
    return context;
}
