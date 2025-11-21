import { SessionTimer } from "@/components/SessionTimer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Share2 } from "lucide-react";

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
            Choose your focus mode and watch the timer. Switch between modes anytime—Deep Work & Creative time counts toward your Lock In Time. Perfect for streaming or accountability.
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
              How It Works
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              ✦ <strong>Lock In Time</strong> - Your Deep Work + Creative time combined. This is your real productive time.
            </p>
            <p>
              ✦ <strong>Other Timers</strong> - Social & Rest time is tracked separately and doesn't count toward Lock In Time.
            </p>
            <p>
              ✦ <strong>Switch Modes</strong> - Pause and switch between modes anytime. Each mode has its own timer, and the main display shows milliseconds for that motivational boost.
            </p>
            <p>
              ✦ <strong>Share Your Screen</strong> - Keep this open while you work. Perfect for streaming, accountability partners, or just keeping yourself motivated.
            </p>
            <p>
              ✦ <strong>Quick Journaling</strong> - Once you lock in your time, head to the journal to reflect on your session.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
