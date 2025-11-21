import { IntentionCard } from "@/components/IntentionCard";
import heroImage from "@assets/generated_images/sunrise_new_day_beginning.png";

export default function IntentionPage() {
  return (
    <div className="h-full overflow-auto">
      <div className="relative h-64 bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src={heroImage}
            alt="New day beginning"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative text-center space-y-2 px-4">
          <h1 className="text-5xl font-serif font-medium">Lock In Your Intention</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Before you lock in, define exactly what you're committing to today. Be clear, be focused, be ready to deliver.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-8">
        <IntentionCard />
      </div>
    </div>
  );
}
