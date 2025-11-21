import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Palette, Users, Moon } from "lucide-react";
import { useState } from "react";

const intentionTypes = [
  {
    id: "deep-work",
    label: "Deep Work",
    icon: Brain,
    description: "Focused, uninterrupted productivity",
    color: "text-chart-1",
  },
  {
    id: "creative",
    label: "Creative",
    icon: Palette,
    description: "Exploration and ideation",
    color: "text-chart-2",
  },
  {
    id: "social",
    label: "Social",
    icon: Users,
    description: "Connection and collaboration",
    color: "text-chart-3",
  },
  {
    id: "rest",
    label: "Rest",
    icon: Moon,
    description: "Mindful downtime and recovery",
    color: "text-chart-4",
  },
];

export function IntentionCard() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif text-3xl">What Are You Locking In For?</CardTitle>
        <CardDescription>
          Define your focus mode. Are you ready for Deep Work, Creative exploration, Social connection, or Rest & recovery?
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {intentionTypes.map((intention) => {
            const Icon = intention.icon;
            const isSelected = selected === intention.id;
            
            return (
              <button
                key={intention.id}
                onClick={() => {
                  setSelected(intention.id);
                  console.log(`Intention set: ${intention.label}`);
                }}
                data-testid={`button-intention-${intention.id}`}
                className={`
                  group relative overflow-visible rounded-xl border p-6 text-left transition-all
                  hover-elevate active-elevate-2
                  ${isSelected 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border bg-card'
                  }
                `}
              >
                <div className="flex flex-col gap-3">
                  <Icon className={`h-8 w-8 ${isSelected ? 'text-primary' : intention.color}`} />
                  <div>
                    <div className="font-semibold text-lg">{intention.label}</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {intention.description}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
        {selected && (
          <p className="text-center text-sm text-muted-foreground mt-6">
            Intention set. Your digital choices today will reflect this focus.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
