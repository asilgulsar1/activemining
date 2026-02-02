"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface KineticTextProps {
    text: string | number;
    className?: string; // Additional classes
    type?: "reveal" | "count"; // Animation type
    delay?: number; // Delay in seconds
}

export function KineticTypography({ text, className, type = "reveal", delay = 0 }: KineticTextProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    // Count-up logic
    const springValue = useSpring(0, { bounce: 0, duration: 2000 });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView && type === "count" && typeof text === "number") {
            springValue.set(text);
        }
    }, [isInView, type, text, springValue]);

    useEffect(() => {
        if (type === "count") {
            return springValue.on("change", (latest) => {
                setDisplayValue(Math.floor(latest));
            });
        }
    }, [springValue, type]);

    if (type === "count" && typeof text === "number") {
        return (
            <span ref={ref} className={cn("inline-block tabular-nums tracking-tighter", className)}>
                {displayValue.toLocaleString()}
            </span>
        );
    }

    // Text Reveal Logic
    const words = text.toString().split(" ");

    return (
        <span ref={ref} className={cn("inline-block", className)}>
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden align-bottom">
                    <motion.span
                        initial={{ y: "100%" }}
                        animate={isInView ? { y: 0 } : {}}
                        transition={{
                            duration: 0.5,
                            delay: delay + i * 0.05,
                            ease: [0.33, 1, 0.68, 1], // Cubic bezier for "premium" feel
                        }}
                        className="inline-block mr-[0.25em]"
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}
