import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/PageHeader";
import { Calendar, Target, BookOpen, X, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import workspaceImg from "@assets/generated_images/abstract_tech_workspace_background.png";

const reflectionPrompts = [
  "How aligned were you with your intention?",
  "What was the biggest win from your session?",
  "What slowed you down or distracted you?",
  "What will you do differently tomorrow?",
];

export default function JournalPage() {
  const [reflection, setReflection] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  
  // Fetch today's intention from the database
  const todayDate = new Date().toISOString().split('T')[0];
  const { data: todayIntention, isLoading } = useQuery({
    queryKey: ['/api/intention', todayDate],
    queryFn: async () => {
      const response = await fetch(`/api/intention/${todayDate}`);
      if (!response.ok) {
        return null;
      }
      return response.json();
    },
  });

  const handleSaveReflection = () => {
    console.log("Reflection saved:", reflection);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
    setReflection("");
  };

  const handlePromptClick = (prompt: string) => {
    const promptLine = reflection ? `\n► ${prompt}\n` : `► ${prompt}\n`;
    setReflection(reflection + promptLine);
  };

  const intentionTypeLabels: Record<string, string> = {
    "deep-work": "Deep Work",
    creative: "Creative",
    flow: "Flow",
    social: "Social",
    break: "Break",
    rest: "Rest",
  };

  return (
    <div className="h-full overflow-auto">
      <PageHeader 
        icon={<BookOpen className="h-6 w-6" />}
        iconColor="text-secondary"
        title="Debrief & Reflect"
        description="Compare your intention with what you accomplished. What worked? What didn't? Stay honest, stay ruthless."
        backgroundImage={workspaceImg}
        gridColor="rgba(255, 0, 110, 0.3)"
        gridOpacity={0.04}
      />

      <div className="max-w-4xl mx-auto p-8 space-y-8">
        {/* Your Intention */}
        <Card className="border-primary/30 bg-primary/5">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">Your Intention</CardTitle>
            </div>
            <CardDescription className="text-xs">What you committed to at the start of your session</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {isLoading ? (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" />
                <p className="text-sm">Loading intention...</p>
              </div>
            ) : todayIntention ? (
              <>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    Focus Mode
                  </p>
                  <p className="text-sm font-semibold">
                    {intentionTypeLabels[todayIntention.type] || todayIntention.type}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    Intention
                  </p>
                  <p className="text-sm leading-relaxed">"{todayIntention.content}"</p>
                </div>
              </>
            ) : (
              <p className="text-sm text-muted-foreground italic">No intention set yet. Set one on the Intention page to get started.</p>
            )}
          </CardContent>
        </Card>

        {/* Reflection Form */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">Your Reflection</CardTitle>
                <CardDescription className="text-xs">
                  How did your session go? Did you follow through on your intention?
                </CardDescription>
              </div>
              <Button variant="ghost" size="sm" data-testid="button-calendar">
                <Calendar className="h-4 w-4 mr-2" />
                Today
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Quick Prompts */}
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">Click to add prompts:</p>
              <div className="grid grid-cols-2 gap-1">
                {reflectionPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => handlePromptClick(prompt)}
                    className="p-2 rounded-lg bg-muted/50 hover-elevate cursor-pointer transition-colors text-left"
                    data-testid={`button-prompt-${reflectionPrompts.indexOf(prompt)}`}
                  >
                    <p className="text-xs font-medium">{prompt}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Journal Input */}
            <Textarea
              placeholder="Start writing your reflection. Be honest about your session..."
              className="min-h-[400px] resize-none text-sm leading-relaxed font-mono"
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              data-testid="textarea-reflection"
            />

            {/* Save */}
            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground">
                {isSaved ? "✓ Reflection saved" : reflection ? "Ready to save" : "Start typing to reflect"}
              </p>
              <Button
                onClick={handleSaveReflection}
                disabled={!reflection.trim()}
                data-testid="button-save-reflection"
              >
                Save Reflection
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
