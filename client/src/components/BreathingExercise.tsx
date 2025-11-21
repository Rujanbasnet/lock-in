import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState, useEffect } from "react";

interface BreathingExerciseProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const phases = [
  { text: "Breathe in...", duration: 4000 },
  { text: "Hold...", duration: 4000 },
  { text: "Breathe out...", duration: 4000 },
  { text: "Rest...", duration: 2000 },
];

export function BreathingExercise({ open, onOpenChange }: BreathingExerciseProps) {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [cycle, setCycle] = useState(1);

  useEffect(() => {
    if (!open) {
      setCurrentPhase(0);
      setCycle(1);
      return;
    }

    const timer = setTimeout(() => {
      if (currentPhase === phases.length - 1) {
        if (cycle >= 5) {
          onOpenChange(false);
          return;
        }
        setCycle(cycle + 1);
        setCurrentPhase(0);
      } else {
        setCurrentPhase(currentPhase + 1);
      }
    }, phases[currentPhase].duration);

    return () => clearTimeout(timer);
  }, [open, currentPhase, cycle, onOpenChange]);

  const scale = currentPhase === 0 ? 1.2 : currentPhase === 2 ? 0.8 : 1;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 border-0">
        <div className="relative h-[600px] bg-gradient-to-br from-primary/10 via-background to-accent/10 flex items-center justify-center overflow-hidden">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10"
            onClick={() => onOpenChange(false)}
            data-testid="button-close-breathing"
          >
            <X className="h-5 w-5" />
          </Button>

          <div className="text-center space-y-12">
            <div
              className="mx-auto rounded-full bg-primary/20 backdrop-blur transition-all duration-[3000ms] ease-in-out"
              style={{
                width: `${scale * 200}px`,
                height: `${scale * 200}px`,
              }}
            />

            <div className="space-y-4">
              <p className="text-3xl font-serif text-foreground transition-opacity duration-500">
                {phases[currentPhase].text}
              </p>
              <p className="text-sm text-muted-foreground">
                Cycle {cycle} of 5
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
