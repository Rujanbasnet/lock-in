import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/PageHeader";
import { Clock, ArrowLeft, Trash2, Calendar, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import journalImg from "@assets/journal_background.jpg";

interface JournalEntry {
    id: string;
    content: string;
    timestamp: string;
    intention?: string;
}

export default function JournalHistoryPage() {
    const [history, setHistory] = useState<JournalEntry[]>([]);

    useEffect(() => {
        const savedHistory = localStorage.getItem("journalHistory");
        if (savedHistory) {
            try {
                setHistory(JSON.parse(savedHistory));
            } catch (e) {
                console.error("Failed to parse journal history", e);
            }
        }
    }, []);

    const handleDeleteEntry = (id: string) => {
        const updatedHistory = history.filter(entry => entry.id !== id);
        setHistory(updatedHistory);
        localStorage.setItem("journalHistory", JSON.stringify(updatedHistory));
    };

    return (
        <div className="h-full overflow-auto relative">
            {/* Global Background for the page */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center fixed"
                style={{ backgroundImage: `url(${journalImg})` }}
            />
            <div className="absolute inset-0 z-0 bg-background/80 backdrop-blur-[2px]" />

            <div className="relative z-10">
                <PageHeader
                    icon={<Clock className="h-6 w-6" />}
                    iconColor="text-primary"
                    title="Journal History"
                    description="Review your past reflections and track your progress over time."
                    className="bg-transparent border-b-0"
                />

                <div className="max-w-4xl mx-auto p-8 space-y-6">
                    <Button
                        variant="ghost"
                        className="gap-2 text-muted-foreground hover:text-foreground pl-0"
                        onClick={() => window.location.href = "/journal"}
                    >
                        <ArrowLeft className="h-4 w-4" /> Back to Journal
                    </Button>

                    <div className="grid gap-6">
                        {history.length === 0 ? (
                            <div className="text-center py-20 border-2 border-dashed border-muted rounded-xl bg-background/40 backdrop-blur-sm">
                                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                                <h3 className="text-lg font-medium text-foreground">No entries found</h3>
                                <p className="text-muted-foreground mt-1">Start writing in your journal to see your history here.</p>
                                <Button
                                    className="mt-6"
                                    onClick={() => window.location.href = "/journal"}
                                >
                                    Write First Entry
                                </Button>
                            </div>
                        ) : (
                            history.map((entry) => (
                                <Card key={entry.id} className="group hover:border-primary/50 transition-all duration-300 bg-background/40 backdrop-blur-md shadow-lg border-white/10">
                                    <CardHeader className="pb-3">
                                        <div className="flex items-center justify-between">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="h-4 w-4 text-primary" />
                                                    <CardTitle className="text-base font-mono">
                                                        {format(new Date(entry.timestamp), "MMMM d, yyyy • h:mm a")}
                                                    </CardTitle>
                                                </div>
                                                <CardDescription className="text-xs font-medium text-muted-foreground/80">
                                                    Intention: <span className="text-foreground">{entry.intention}</span>
                                                </CardDescription>
                                            </div>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="opacity-0 group-hover:opacity-100 transition-opacity text-destructive hover:text-destructive hover:bg-destructive/10"
                                                onClick={() => handleDeleteEntry(entry.id)}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="prose prose-sm dark:prose-invert max-w-none">
                                            <p className="whitespace-pre-wrap leading-relaxed text-foreground/90">
                                                {entry.content}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
