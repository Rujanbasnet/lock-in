import { SessionTimer } from "@/components/SessionTimer";
import { Card, CardContent } from "@/components/ui/card";
import { Zap } from "lucide-react";

export default function LockInPage() {
  return (
    <div className="h-full overflow-auto flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-b from-background via-background to-transparent border-b border-border px-8 py-6">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <Zap className="h-7 w-7 text-primary" />
          <div>
            <h1 className="text-3xl font-serif font-bold">Locked In</h1>
            <p className="text-sm text-muted-foreground">Keep this open. Stay focused. No distractions.</p>
          </div>
        </div>
      </div>

      {/* Main Timer */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-4xl">
          <SessionTimer />
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border px-8 py-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 bg-transparent shadow-none">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-1">
                    Your Session
                  </p>
                  <p className="text-xl font-mono font-bold">Deep Work Mode</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-1">
                    Total Time
                  </p>
                  <p className="text-xl font-mono font-bold">00:15:32</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-1">
                    Tip
                  </p>
                  <p className="text-sm text-muted-foreground">Switch modes anytime without losing momentum</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
