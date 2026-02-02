"use client";

import { motion } from "framer-motion";
import { Link } from "@/navigation";
import { CloudIcon, Cpu, Zap } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
            {/* Background Gradients using Brand Palette */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,rgba(4,110,71,0.1),var(--midnight-obsidian))]" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-[var(--midnight-obsidian)] shadow-xl shadow-[var(--sovereign-emerald)]/5 ring-1 ring-[var(--titanium-silver)]/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

            <div className="mx-auto max-w-2xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex justify-center mb-6">
                        <div className="relative">
                            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[var(--sovereign-emerald)] to-emerald-800 opacity-50 blur"></div>
                            <div className="relative rounded-full glass-panel px-4 py-1.5 text-sm leading-6 text-gray-300">
                                <span className="hidden md:inline">Institutional-Grade Infrastructure.</span>
                                <Link href="/asic-hosting" className="font-semibold text-[var(--sovereign-emerald)] ml-2 hover:text-[var(--sovereign-emerald-hover)] transition-colors">
                                    <span className="absolute inset-0" aria-hidden="true" />
                                    View Facilities <span aria-hidden="true">&rarr;</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-gradient">
                        Fractional Cloud Mining
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-gray-400 max-w-xl mx-auto">
                        Start mining Bitcoin without hardware overhead.
                        Purchase fractional hashrate from our high-performance fleet
                        and earn daily rewards directly to your wallet.
                    </p>

                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="#calculator"
                            className="rounded-md bg-[var(--sovereign-emerald)] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[var(--sovereign-emerald-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sovereign-emerald)] transition-all hover:scale-105"
                        >
                            Calculate Profit
                        </Link>
                        <Link href="#plans" className="text-sm font-semibold leading-6 text-white group flex items-center gap-1">
                            View Plans <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>
                </motion.div>

                {/* Feature Grid with Bento-like Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-y-16 lg:grid-cols-3"
                >
                    <div className="flex flex-col items-center p-6 rounded-2xl border border-[var(--titanium-silver)]/20 hover:bg-white/5 transition-colors">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--sovereign-emerald)]/10 text-[var(--sovereign-emerald)] ring-1 ring-[var(--sovereign-emerald)]/20">
                            <Zap className="h-6 w-6" />
                        </div>
                        <h3 className="mt-4 text-base font-semibold leading-7 text-white">Instant Activation</h3>
                        <p className="mt-1 text-sm leading-6 text-gray-500">Mining begins 24h after purchase</p>
                    </div>
                    <div className="flex flex-col items-center p-6 rounded-2xl border border-[var(--titanium-silver)]/20 hover:bg-white/5 transition-colors">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--sovereign-emerald)]/10 text-[var(--sovereign-emerald)] ring-1 ring-[var(--sovereign-emerald)]/20">
                            <Cpu className="h-6 w-6" />
                        </div>
                        <h3 className="mt-4 text-base font-semibold leading-7 text-white">S21 & S19 XP Fleet</h3>
                        <p className="mt-1 text-sm leading-6 text-gray-500">Latest gen hardware efficiency</p>
                    </div>
                    <div className="flex flex-col items-center p-6 rounded-2xl border border-[var(--titanium-silver)]/20 hover:bg-white/5 transition-colors">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--sovereign-emerald)]/10 text-[var(--sovereign-emerald)] ring-1 ring-[var(--sovereign-emerald)]/20">
                            <CloudIcon className="h-6 w-6" />
                        </div>
                        <h3 className="mt-4 text-base font-semibold leading-7 text-white">Daily Payouts</h3>
                        <p className="mt-1 text-sm leading-6 text-gray-500">Direct to your BTC wallet</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
