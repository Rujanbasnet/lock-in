import { IntentionForm } from "@/components/IntentionForm";
import { PageHeader } from "@/components/PageHeader";
import { useLocation } from "wouter";
import { Target } from "lucide-react";

export default function IntentionPage() {
  const [, navigate] = useLocation();

  const handleSaveIntention = (intention: { type: string; content: string }) => {
    console.log("Intention saved:", intention);
    // Navigate to lock-in page
    navigate("/lock-in");
  };

  return (
    <div className="h-full overflow-auto">
      <PageHeader 
        icon={<Target className="h-6 w-6 text-primary" />}
        title="Lock In Your Intention"
        description="Before you start the timer, define exactly what you're committing to today. Be specific, be clear, be ready to deliver."
      />

      <div className="max-w-3xl mx-auto p-6 md:p-8">
        <IntentionForm onSave={handleSaveIntention} />
      </div>
    </div>
  );
}
