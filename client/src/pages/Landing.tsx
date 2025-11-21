import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Target, BarChart3, Lock } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10 flex flex-col">
      {/* Header */}
      <div className="border-b border-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-serif font-bold">LOCK IN</h1>
          </div>
          <Button onClick={() => (window.location.href = "/api/login")} data-testid="button-login">
            Sign In
          </Button>
        </div>
      </div>

      {/* Hero */}
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-3xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-serif font-bold">
              Stop Procrastinating. Start Producing.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Set your intention, lock in with a timer, reflect on your progress, and build unstoppable momentum. Your focus multiplies when tracked.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => (window.location.href = "/api/login")} data-testid="button-start-free">
              <Lock className="h-5 w-5 mr-2" />
              Start Free (7-Day Trial)
            </Button>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 pt-12">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <Target className="h-6 w-6 text-chart-1" />
                  <CardTitle className="text-lg">Set Intention</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Define exactly what you're locking in for today. Be specific. Be clear.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">Lock In</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Start the timer. Switch between Deep Work, Creative, Social, and Rest modes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <BarChart3 className="h-6 w-6 text-chart-4" />
                  <CardTitle className="text-lg">Track Progress</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Journal your session, compare vs. intention, and watch your Lock In Time grow.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Pricing Hint */}
          <div className="bg-primary/5 rounded-lg border border-primary/20 p-6 text-sm">
            <p className="text-muted-foreground">
              <strong>7-day free trial</strong> when you sign in. Then just <strong>$5/month</strong> to keep your focus sharp.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
