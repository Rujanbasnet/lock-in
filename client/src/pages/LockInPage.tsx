import { SessionTimer } from "@/components/SessionTimer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LockInPage() {
  return (
    <div className="h-full overflow-auto">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 px-8 py-16 border-b border-border">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="h-6 w-6 text-primary" />
            <h1 className="text-5xl font-serif font-medium">Lock In</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your focus mode and watch the timer. Switch between modes anytime
            while maintaining your momentum. Perfect for streaming or accountability.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto p-8 space-y-8">
        <SessionTimer />

        {/* Tips Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Share2 className="h-5 w-5" />
              Pro Tips
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              ✦ <strong>Share Your Screen</strong> - Show this timer on stream or in video
              calls to stay accountable and motivate others.
            </p>
            <p>
              ✦ <strong>Switch Modes</strong> - Pause the timer, change modes, and resume.
              Your session history tracks every mode switch.
            </p>
            <p>
              ✦ <strong>Full Focus</strong> - No distractions. Just you, your work, and
              the timer. That's it.
            </p>
            <p>
              ✦ <strong>Track Patterns</strong> - See which mode you spend the most time
              in and optimize your workflow.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
