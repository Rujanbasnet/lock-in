import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Brain, Palette, Zap, Users, Moon, Coffee } from "lucide-react";
import { useState } from "react";

const intentionModes = [
  {
    id: "deep-work",
    label: "Deep Work",
    icon: Brain,
    description: "Focused, uninterrupted work",
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
    id: "flow",
    label: "Flow",
    icon: Zap,
    description: "Immersed, effortless momentum",
    color: "text-primary",
  },
  {
    id: "social",
    label: "Social",
    icon: Users,
    description: "Connection and collaboration",
    color: "text-chart-3",
  },
  {
    id: "break",
    label: "Break",
    icon: Coffee,
    description: "Structured downtime",
    color: "text-chart-4",
  },
  {
    id: "rest",
    label: "Rest",
    icon: Moon,
    description: "Recovery and reflection",
    color: "text-chart-5",
  },
];

interface IntentionFormProps {
  onSave?: (intention: { type: string; content: string }) => void;
}

export function IntentionForm({ onSave }: IntentionFormProps) {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [content, setContent] = useState("");

  const handleSave = () => {
    if (selectedType && content.trim()) {
      onSave?.({ type: selectedType, content: content.trim() });
      setContent("");
      setSelectedType(null);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif text-3xl">What Are You Locking In For?</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Mode Selection */}
        <div>
          <label className="text-sm font-semibold text-muted-foreground mb-3 block uppercase tracking-wide">
            Your Focus Mode
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {intentionModes.map((mode) => {
              const Icon = mode.icon;
              const isSelected = selectedType === mode.id;
              return (
                <button
                  key={mode.id}
                  onClick={() => setSelectedType(mode.id)}
                  data-testid={`button-intention-mode-${mode.id}`}
                  className={`
                    relative rounded-lg border p-4 text-center transition-all
                    hover-elevate active-elevate-2
                    ${
                      isSelected
                        ? `border-2 border-current bg-primary/5`
                        : "border-border bg-card"
                    }
                  `}
                >
                  <Icon
                    className={`h-6 w-6 mx-auto mb-2 ${
                      isSelected ? mode.color : "text-muted-foreground"
                    }`}
                  />
                  <div className={`font-semibold text-sm ${isSelected ? mode.color : ""}`}>
                    {mode.label}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{mode.description}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Intention Text */}
        <div>
          <label className="text-sm font-semibold text-muted-foreground mb-2 block uppercase tracking-wide">
            Today my intention is to...
          </label>
          <Textarea
            placeholder="Examples:&#10;• Get this feature into production&#10;• Start Chapter 2&#10;• Debug the API endpoint&#10;• Design the landing page"
            className="min-h-[120px] resize-none text-base"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            data-testid="textarea-intention"
          />
          <p className="text-xs text-muted-foreground mt-2">
            Be specific about what you want to accomplish today
          </p>
        </div>

        {/* Save Button */}
        <Button
          onClick={handleSave}
          disabled={!selectedType || !content.trim()}
          size="lg"
          className="w-full"
          data-testid="button-save-intention"
        >
          Lock In My Intention
        </Button>
      </CardContent>
    </Card>
  );
}
