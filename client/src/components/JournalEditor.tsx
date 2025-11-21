import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Lightbulb } from "lucide-react";
import { useState } from "react";

const prompts = [
  "How did technology serve you today?",
  "What would you change tomorrow?",
  "What moments felt most meaningful?",
  "When did you feel most present?",
];

export function JournalEditor() {
  const [content, setContent] = useState("");
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <CardTitle className="font-serif text-2xl">Daily Reflection</CardTitle>
          <Button variant="ghost" size="sm" data-testid="button-calendar">
            <Calendar className="h-4 w-4 mr-2" />
            Today
          </Button>
        </div>
        <CardDescription>
          Take a moment to reflect on your digital wellness
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Lightbulb className="h-4 w-4" />
            <span>Writing prompts:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {prompts.map((prompt) => (
              <Badge
                key={prompt}
                variant={selectedPrompt === prompt ? "default" : "secondary"}
                className="cursor-pointer hover-elevate"
                onClick={() => {
                  setSelectedPrompt(prompt);
                  console.log('Prompt selected:', prompt);
                }}
                data-testid={`badge-prompt-${prompts.indexOf(prompt)}`}
              >
                {prompt}
              </Badge>
            ))}
          </div>
        </div>

        <Textarea
          placeholder="Start writing your thoughts..."
          className="min-h-[300px] resize-none text-base leading-relaxed font-serif"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          data-testid="textarea-journal"
        />

        <div className="flex items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            {content ? 'Auto-saved' : 'Start typing to save'}
          </p>
          <Button
            variant="outline"
            onClick={() => {
              console.log('Journal entry saved:', content);
              setContent("");
              setSelectedPrompt(null);
            }}
            data-testid="button-save-journal"
          >
            Clear Entry
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
