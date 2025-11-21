import { JournalEditor } from "@/components/JournalEditor";
import journalImage from "@assets/generated_images/open_journal_with_pen.png";

export default function JournalPage() {
  return (
    <div className="h-full overflow-auto">
      <div className="relative h-48 bg-gradient-to-br from-accent/20 via-background to-primary/10 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={journalImage}
            alt="Journal"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative text-center space-y-2 px-4">
          <h1 className="text-4xl font-serif font-medium">Your Journal</h1>
          <p className="text-muted-foreground">
            Reflect on your digital wellness journey
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-8">
        <JournalEditor />
      </div>
    </div>
  );
}
