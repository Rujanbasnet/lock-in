import { IntentionForm } from "@/components/IntentionForm";
import { useLocation } from "wouter";

export default function IntentionPage() {
  const [, navigate] = useLocation();

  const handleSaveIntention = (intention: { type: string; content: string }) => {
    console.log("Intention saved:", intention);
    // Navigate to lock-in page
    navigate("/lock-in");
  };

  return (
    <div className="h-full overflow-auto">
      <div className="relative bg-gradient-to-br from-primary/20 via-background to-accent/20 px-8 py-16 border-b border-border">
        <div className="max-w-3xl mx-auto text-center space-y-2">
          <h1 className="text-5xl font-serif font-medium">Lock In Your Intention</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Before you start the timer, define exactly what you're committing to today. Be specific, be clear, be ready to deliver.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-8">
        <IntentionForm onSave={handleSaveIntention} />
      </div>
    </div>
  );
}
