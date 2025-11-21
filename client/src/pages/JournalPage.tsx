import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/PageHeader";
import { Calendar, Target, BookOpen } from "lucide-react";
import { useState } from "react";
import workspaceImg from "@assets/generated_images/abstract_tech_workspace_background.png";

export default function JournalPage() {
  const [reflection, setReflection] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  
  // Mock intention from earlier (in real app, would come from state management)
  const todayIntention = {
    type: "deep-work",
    content: "Get the user authentication feature into production",
  };

  const handleSaveReflection = () => {
    console.log("Reflection saved:", reflection);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
    setReflection("");
  };

  const intentionTypeLabels: Record<string, string> = {
    "deep-work": "Deep Work",
    creative: "Creative",
    social: "Social",
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
          <CardHeader>
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              <CardTitle>Your Intention</CardTitle>
            </div>
            <CardDescription>What you committed to at the start of your session</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                  Focus Mode
                </p>
                <p className="text-lg font-semibold">
                  {intentionTypeLabels[todayIntention.type] || todayIntention.type}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                  Intention
                </p>
                <p className="text-lg leading-relaxed">"{todayIntention.content}"</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reflection Form */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Your Reflection</CardTitle>
                <CardDescription>
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
              <p className="text-sm text-muted-foreground font-semibold">Reflection prompts:</p>
              <div className="space-y-2">
                <div className="p-3 rounded-lg bg-muted/50 hover-elevate cursor-pointer">
                  <p className="text-sm font-medium">How aligned were you with your intention?</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50 hover-elevate cursor-pointer">
                  <p className="text-sm font-medium">What was the biggest win from your session?</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50 hover-elevate cursor-pointer">
                  <p className="text-sm font-medium">What slowed you down or distracted you?</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50 hover-elevate cursor-pointer">
                  <p className="text-sm font-medium">What will you do differently tomorrow?</p>
                </div>
              </div>
            </div>

            {/* Journal Input */}
            <Textarea
              placeholder="Start writing your reflection. Be honest about your session..."
              className="min-h-[300px] resize-none text-base leading-relaxed"
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
