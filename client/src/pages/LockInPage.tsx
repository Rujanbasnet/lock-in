import { SessionTimer } from "@/components/SessionTimer";
import { Zap, Lock } from "lucide-react";

export default function LockInPage() {
  return (
    <div className="h-full overflow-auto bg-gradient-to-br from-background via-background to-primary/5 flex flex-col">
      {/* Sticky Header */}
      <div className="sticky top-0 z-20 bg-gradient-to-b from-background via-background to-background/80 backdrop-blur-sm border-b border-border/50 px-6 py-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <Lock className="h-7 w-7 text-primary animate-pulse" />
            <h1 className="text-2xl md:text-3xl font-serif font-bold">LOCKED IN</h1>
          </div>
          <p className="text-sm text-muted-foreground">
            Stay focused. Keep this open. No distractions. Just work.
          </p>
        </div>
      </div>

      {/* Main Content - Centered */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-2xl">
          <SessionTimer />
        </div>
      </div>

      {/* Footer Tips */}
      <div className="border-t border-border/50 bg-muted/30 px-6 py-6 text-center">
        <div className="max-w-2xl mx-auto space-y-2">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
            💡 Pro Tips
          </p>
          <p className="text-sm text-muted-foreground">
            Share your screen • Switch modes anytime • Keep going, you got this!
          </p>
        </div>
      </div>
    </div>
  );
}
