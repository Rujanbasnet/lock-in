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
    ],
    "hard-work": [
        { text: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke" },
        { text: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing.", author: "Pele" },
        { text: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.", author: "Colin Powell" },
    ],
    focus: [
        { text: "Concentrate all your thoughts upon the work at hand. The sun's rays do not burn until brought to a focus.", author: "Alexander Graham Bell" },
        { text: "Starve your distractions, feed your focus.", author: "Unknown" },
        { text: "The successful warrior is the average man, with laser-like focus.", author: "Bruce Lee" },
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
                        className="capitalize text-xs"
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
                    <Card className="bg-black/40 backdrop-blur-md border-white/10 shadow-xl overflow-hidden relative group">
                        <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                        <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
                            <Quote className="h-8 w-8 text-primary/40 mb-3 absolute top-4 left-4 rotate-180" />
                            <blockquote className="text-lg md:text-xl font-medium text-white/90 italic mb-3 relative z-10 font-serif leading-relaxed">
                                "{quote.text}"
                            </blockquote>
                            <cite className="text-xs font-bold text-primary uppercase tracking-widest">
                                — {quote.author}
                            </cite>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-white/50 hover:text-white"
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
