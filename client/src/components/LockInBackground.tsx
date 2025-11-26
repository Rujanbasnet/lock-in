import { useEffect, useState } from "react";

export function LockInBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const words = [
        { text: "DISCIPLINE", top: "10%", left: "5%", opacity: 0.05, size: "text-6xl" },
        { text: "FOCUS", top: "15%", right: "10%", opacity: 0.04, size: "text-8xl" },
        { text: "RELENTLESS", bottom: "20%", left: "8%", opacity: 0.03, size: "text-7xl" },
        { text: "EXECUTE", bottom: "10%", right: "5%", opacity: 0.05, size: "text-6xl" },
        { text: "FLOW STATE", top: "40%", left: "15%", opacity: 0.02, size: "text-5xl" },
        { text: "DEEP WORK", top: "30%", right: "20%", opacity: 0.03, size: "text-5xl" },
        { text: "MASTERY", bottom: "40%", right: "15%", opacity: 0.02, size: "text-6xl" },
        { text: "GRIND", bottom: "30%", left: "20%", opacity: 0.02, size: "text-5xl" },
    ];

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/notebook.png')]" />

            {/* Scattered Words */}
            {words.map((word, i) => (
                <div
                    key={i}
                    className={`absolute font-black tracking-tighter ${word.size} font-sans`}
                    style={{
                        top: word.top,
                        left: word.left,
                        right: word.right,
                        bottom: word.bottom,
                        opacity: word.opacity,
                        transform: `rotate(${Math.random() * 10 - 5}deg)`,
                    }}
                >
                    {word.text}
                </div>
            ))}

            {/* Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
    );
}
