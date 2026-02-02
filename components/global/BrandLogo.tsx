"use client";

import { motion } from "framer-motion";

export function BrandLogo({ className = "" }: { className?: string }) {
    return (
        <div className={`flex items-baseline tracking-tight ${className}`}>
            <span className="font-heading font-bold text-2xl text-[var(--titanium-silver)] tracking-wide">
                ActiveMining
            </span>
            <span className="ml-2 font-heading font-bold text-[0.65rem] uppercase tracking-[0.2em] text-[var(--sovereign-emerald)] translate-y-[-2px]">
                Global
            </span>
        </div>
    );
}

export function InstitutionalCrest({ className = "" }: { className?: string }) {
    return (
        <div className={`relative w-10 h-10 ${className}`}>
            {/* Abstract Obsidian Shield */}
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 5 L90 25 V65 L50 95 L10 65 V25 Z" fill="var(--midnight-obsidian)" stroke="var(--titanium-silver)" strokeWidth="1" />
                {/* Emerald Laser Line */}
                <path d="M50 20 V80" stroke="var(--sovereign-emerald)" strokeWidth="2" />
            </svg>
        </div>
    );
}
