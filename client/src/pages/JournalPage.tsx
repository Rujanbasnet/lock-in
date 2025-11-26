import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/PageHeader";
import { Calendar, Target, BookOpen, X, Loader2, Clock, Trash2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import journalImg from "@assets/journal_background.jpg";
import { format } from "date-fns";

const reflectionPrompts = [
  "How aligned were you with your intention?",
  "What was the biggest win from your session?",
  "What slowed you down or distracted you?",
  "What will you do differently tomorrow?",
];

interface JournalEntry {
  id: string;
  content: string;
  timestamp: string;
  intention?: string;
}

export default function JournalPage() {
  const [reflection, setReflection] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [history, setHistory] = useState<JournalEntry[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Load history from localStorage on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem("journalHistory");
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error("Failed to parse journal history", e);
      }
    }
  }, []);

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
    const newEntry: JournalEntry = {
      id: crypto.randomUUID(),
      content: reflection,
      timestamp: new Date().toISOString(),
      intention: todayIntention?.content || localStorage.getItem("currentIntention") || "No intention set"
    };

    const updatedHistory = [newEntry, ...history];
    setHistory(updatedHistory);
    localStorage.setItem("journalHistory", JSON.stringify(updatedHistory));

    console.log("Reflection saved:", reflection);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
    setReflection("");
  };

  const handleDeleteEntry = (id: string) => {
    const updatedHistory = history.filter(entry => entry.id !== id);
    setHistory(updatedHistory);
    localStorage.setItem("journalHistory", JSON.stringify(updatedHistory));
  };

  const handlePromptClick = (prompt: string) => {
    const promptLine = reflection ? `\n► ${prompt}\n` : `► ${prompt}\n`;
    const newValue = reflection + promptLine;
    setReflection(newValue);

    // Focus textarea and position cursor at the end
    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
        textareaRef.current.selectionStart = newValue.length;
        textareaRef.current.selectionEnd = newValue.length;
      }
    }, 0);
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
    <div className="h-full overflow-auto relative">
      {/* Global Background for the page */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center fixed"
        style={{ backgroundImage: `url(${journalImg})` }}
      />
      <div className="absolute inset-0 z-0 bg-background/80 backdrop-blur-[2px]" />

      <div className="relative z-10">
        <PageHeader
          icon={<BookOpen className="h-6 w-6" />}
          iconColor="text-secondary"
          title="Debrief & Reflect"
          description="Compare your intention with what you accomplished. What worked? What didn't? Stay honest, stay ruthless."
          // We don't need the PageHeader's internal background if we have a global one,
          // or we can keep it transparent. Let's make it transparent to show the global one.
          className="bg-transparent border-b-0"
        />

        <div className="max-w-4xl mx-auto p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              {/* Your Intention */}
              <Card className="border-primary/30 bg-primary/5 backdrop-blur-md shadow-lg">
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
                  ) : (
                    <>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                          Focus Mode
                        </p>
                        <p className="text-sm font-semibold">
                          {todayIntention?.type ? (intentionTypeLabels[todayIntention.type] || todayIntention.type) : "Session"}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                          Intention
                        </p>
                        <p className="text-sm leading-relaxed">
                          "{todayIntention?.content || localStorage.getItem("currentIntention") || "No intention set"}"
                        </p>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Reflection Form */}
              <Card className="backdrop-blur-md bg-background/60 shadow-lg">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">New Entry</CardTitle>
                      <CardDescription className="text-xs">
                        Log your thoughts and progress
                      </CardDescription>
                    </div>
                    <Button variant="ghost" size="sm" data-testid="button-calendar">
                      <Calendar className="h-4 w-4 mr-2" />
                      {format(new Date(), "MMM d, yyyy")}
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
                    ref={textareaRef}
                    placeholder="Start writing your reflection..."
                    className="min-h-[300px] resize-none text-sm leading-relaxed font-mono bg-background/50"
                    value={reflection}
                    onChange={(e) => setReflection(e.target.value)}
                    data-testid="textarea-reflection"
                  />

                  {/* Save */}
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">
                      {isSaved ? "✓ Saved to history" : reflection ? "Ready to save" : "Start typing to reflect"}
                    </p>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        onClick={() => window.location.href = "/journal/history"}
                        className="gap-2"
                      >
                        <Clock className="h-4 w-4" /> View History
                      </Button>
                      <Button
                        onClick={handleSaveReflection}
                        disabled={!reflection.trim()}
                        data-testid="button-save-reflection"
                      >
                        Save Entry
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
