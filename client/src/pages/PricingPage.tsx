import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function PricingPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const subscribeMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest("POST", "/api/get-or-create-subscription", {});
      return response;
    },
    onSuccess: (data) => {
      window.location.href = "/checkout";
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to start subscription. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubscribe = () => {
    setIsLoading(true);
    subscribeMutation.mutate();
  };

  const features = [
    "Set daily intentions",
    "Track focus sessions (Deep Work, Creative, Social, Rest)",
    "Real-time timer with milliseconds",
    "Journal & reflect on sessions",
    "View activity logs",
    "Calculate 'Lock In Time'",
    "Priority support",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10 px-4 py-12">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-serif font-bold">Choose Your Plan</h1>
          <p className="text-lg text-muted-foreground">
            Get started free, then unlock unlimited focus.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Free Trial */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>7-Day Free Trial</CardTitle>
              <CardDescription>Experience the full power of LOCK IN</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="text-4xl font-bold">$0</div>
                <p className="text-sm text-muted-foreground">First 7 days, then upgrade</p>
              </div>

              <ul className="space-y-3">
                {features.slice(0, 5).map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-chart-1 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="w-full" disabled>
                Already Included
              </Button>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className="border-2 border-primary shadow-lg">
            <CardHeader className="bg-primary/5">
              <div className="flex items-center justify-between mb-2">
                <CardTitle>Pro Plan</CardTitle>
                <div className="bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full">
                  RECOMMENDED
                </div>
              </div>
              <CardDescription>Unlimited focus potential</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-baseline gap-1">
                  <div className="text-4xl font-bold">$5</div>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">Billed monthly, cancel anytime</p>
              </div>

              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                onClick={handleSubscribe}
                disabled={isLoading || subscribeMutation.isPending}
                data-testid="button-subscribe"
              >
                {isLoading || subscribeMutation.isPending ? "Starting..." : "Start Pro Plan"}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <div className="space-y-4 pt-8 border-t border-border">
          <h3 className="text-xl font-serif font-bold">Questions?</h3>
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">What happens after my trial ends?</h4>
              <p className="text-sm text-muted-foreground">
                You'll be prompted to upgrade to Pro. Without an active subscription, you can still view your past data but cannot create new sessions.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Can I cancel anytime?</h4>
              <p className="text-sm text-muted-foreground">
                Yes! Cancel your subscription at any time through your settings. No questions asked.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Is my data safe?</h4>
              <p className="text-sm text-muted-foreground">
                All your intentions, sessions, and reflections are securely stored and never shared with anyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
