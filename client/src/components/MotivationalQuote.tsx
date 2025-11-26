import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

type Category = "discipline" | "hard-work" | "focus";

const quotes = {
    discipline: [
        { text: "Discipline is doing what needs to be done, even if you don't want to do it.", author: "Unknown" },
        { text: "We must all suffer from one of two pains: the pain of discipline or the pain of regret.", author: "Jim Rohn" },
        { text: "Self-discipline is the magic power that makes you virtually unstoppable.", author: "Dan Kennedy" },
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "Discipline is the bridge between goals and accomplishment.", author: "Jim Rohn" },
    ],
    "hard-work": [
        { text: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke" },
        { text: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing.", author: "Pele" },
        { text: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.", author: "Colin Powell" },
        { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
        { text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
    ],
    focus: [
        { text: "Concentrate all your thoughts upon the work at hand. The sun's rays do not burn until brought to a focus.", author: "Alexander Graham Bell" },
        { text: "Starve your distractions, feed your focus.", author: "Unknown" },
        { text: "The successful warrior is the average man, with laser-like focus.", author: "Bruce Lee" },
        { text: "Focus on being productive instead of busy.", author: "Tim Ferriss" },
        { text: "It is not a daily increase, but a daily decrease. Hack away at the unessential.", author: "Bruce Lee" },
    ]
};

export function MotivationalQuote() {
    const [category, setCategory] = useState<Category>("focus");
    const [quote, setQuote] = useState(quotes["focus"][0]);
    const [key, setKey] = useState(0);

    const randomizeQuote = (newCategory?: Category) => {
        const targetCategory = newCategory || category;
        const categoryQuotes = quotes[targetCategory];
        const randomQuote = categoryQuotes[Math.floor(Math.random() * categoryQuotes.length)];
        setQuote(randomQuote);
        setKey(prev => prev + 1);
    };

    const handleCategoryChange = (newCategory: Category) => {
        setCategory(newCategory);
        randomizeQuote(newCategory);
    };

    useEffect(() => {
        randomizeQuote();
    }, []);

    return (
        <div className="space-y-4">
            <div className="flex justify-center gap-2">
                {(["focus", "discipline", "hard-work"] as Category[]).map((cat) => (
                    <Button
                        key={cat}
                        variant={category === cat ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleCategoryChange(cat)}
                        className="capitalize text-xs bg-background/50 backdrop-blur-sm"
                    >
                        {cat.replace("-", " ")}
                    </Button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                >
                    <Card className="bg-primary/10 backdrop-blur-md border-primary/20 shadow-[0_0_15px_rgba(0,217,255,0.1)] overflow-hidden relative group hover:shadow-[0_0_25px_rgba(0,217,255,0.2)] transition-shadow duration-500">
                        <div className="absolute top-0 left-0 w-1 h-full bg-primary shadow-[0_0_10px_var(--primary)]" />
                        <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
                            <Quote className="h-8 w-8 text-primary mb-3 absolute top-4 left-4 rotate-180 opacity-50" />
                            <blockquote className="text-lg md:text-xl font-bold text-foreground italic mb-4 relative z-10 font-serif leading-relaxed drop-shadow-sm">
                                "{quote.text}"
                            </blockquote>
                            <cite className="text-xs font-black text-primary uppercase tracking-widest flex items-center gap-2">
                                <span className="w-4 h-[1px] bg-primary/50"></span>
                                {quote.author}
                                <span className="w-4 h-[1px] bg-primary/50"></span>
                            </cite>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-primary"
                                onClick={() => randomizeQuote()}
                            >
                                <RefreshCw className="h-4 w-4" />
                            </Button>
                        </CardContent>
                    </Card>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
