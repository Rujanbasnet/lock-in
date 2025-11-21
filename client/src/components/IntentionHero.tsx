import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Target, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

export function IntentionHero() {
    const [, navigate] = useLocation();

    const handleFocus = () => {
        navigate("/intention");
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full"
        >
            <Card className="overflow-hidden border-none shadow-2xl relative min-h-[300px] flex items-center justify-center group cursor-pointer" onClick={handleFocus}>
                {/* Background Image Layer */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                        backgroundImage: `url('/lofi_mission_control_desk_1763764425522.png')`,
                        filter: "brightness(0.4) blur(2px)"
                    }}
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />

                <CardContent className="relative z-20 w-full max-w-3xl p-8 text-white flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6 w-full"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-mono uppercase tracking-widest mb-2">
                            <Target className="h-3 w-3" />
                            <span>Step 01: Initiate Protocol</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tight">
                            What is your <span className="text-primary">Intention</span>?
                        </h2>

                        <div className="w-full max-w-xl mx-auto mt-8 relative group-hover:scale-105 transition-transform duration-300">
                            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative bg-white/10 border border-white/20 text-white/50 h-16 text-xl flex items-center justify-center backdrop-blur-md rounded-xl font-medium">
                                Set your intention...
                            </div>
                        </div>

                        <p className="text-sm text-white/40 mt-4">
                            Click to define your mission
                        </p>
                    </motion.div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
