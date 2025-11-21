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
          <h1 className="text-5xl font-serif font-medium">Set Your Intention</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each day is a fresh start. Choose how you want to engage with technology today.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-8">
        <IntentionCard />
      </div>
    </div>
  );
}
