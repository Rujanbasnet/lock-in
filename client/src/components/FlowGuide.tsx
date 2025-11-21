import { CheckCircle2, Circle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FlowGuideProps {
    currentStep: "intention" | "lock-in" | "journal";
}

export function FlowGuide({ currentStep }: FlowGuideProps) {
    const steps = [
        { id: "intention", label: "Set Intention", number: "01" },
        { id: "lock-in", label: "Lock In", number: "02" },
        { id: "journal", label: "Debrief", number: "03" },
    ];

    const getCurrentIndex = () => steps.findIndex((s) => s.id === currentStep);
    const currentIndex = getCurrentIndex();

    return (
        <div className="w-full max-w-4xl mx-auto mb-8">
            <div className="relative flex items-center justify-between w-full">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-muted -z-10 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-primary transition-all duration-500 ease-in-out"
                        style={{ width: `${(currentIndex / (steps.length - 1)) * 100}%` }}
                    />
                </div>

                {steps.map((step, index) => {
                    const isCompleted = index < currentIndex;
                    const isCurrent = index === currentIndex;

                    return (
                        <div key={step.id} className="flex flex-col items-center gap-2 bg-background px-2">
                            <div
                                className={cn(
                                    "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 font-mono font-bold text-sm",
                                    isCompleted
                                        ? "bg-primary border-primary text-primary-foreground"
                                        : isCurrent
                                            ? "bg-background border-primary text-primary shadow-[0_0_15px_rgba(25,149,83,0.5)] scale-110"
                                            : "bg-muted border-muted-foreground/30 text-muted-foreground"
                                )}
                            >
                                {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : step.number}
                            </div>
                            <span
                                className={cn(
                                    "text-xs font-bold uppercase tracking-wider transition-colors duration-300",
                                    isCurrent ? "text-primary" : "text-muted-foreground"
                                )}
                            >
                                {step.label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
