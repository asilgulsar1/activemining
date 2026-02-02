"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { CLOUD_MINING_PLANS } from "@/lib/services";
import { Link } from "@/navigation";

export default function PlansGrid() {
    return (
        <section id="plans" className="py-24 relative">
            {/* Background accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--sovereign-emerald)]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-[var(--sovereign-emerald)]">Simple Pricing</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl text-gradient">
                        Choose Your Mining Tier
                    </p>
                </div>

                <div className="isolate mx-auto grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {CLOUD_MINING_PLANS.map((plan) => {
                        const isHighEff = plan.id === 'high-efficiency';

                        return (
                            <motion.div
                                key={plan.id}
                                whileHover={{ y: -4 }}
                                className={`rounded-3xl p-8 transition-all ${isHighEff
                                    ? 'glass-panel ring-[var(--sovereign-emerald)] shadow-2xl shadow-[var(--sovereign-emerald)]/10 relative bg-[#0B0C10]/80'
                                    : 'border border-[var(--titanium-silver)]/10 bg-white/5 hover:bg-white/[0.07]'
                                    }`}
                            >
                                {isHighEff && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[var(--sovereign-emerald)] px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                                        Most Popular
                                    </div>
                                )}

                                <div className="flex items-center justify-between gap-x-4">
                                    <h3 id={plan.id} className="text-lg font-semibold leading-8 text-white">
                                        {plan.name}
                                    </h3>
                                    {isHighEff ? <Zap className="h-6 w-6 text-[var(--sovereign-emerald)]" /> : null}
                                </div>

                                <p className="mt-4 text-sm leading-6 text-gray-400">
                                    {isHighEff
                                        ? "Maximum profitability with lowest daily electricity costs."
                                        : "Best value entry point for new miners."}
                                </p>

                                <div className="mt-6 flex items-baseline gap-x-1">
                                    <span className="text-4xl font-bold tracking-tight text-white font-mono">${plan.costPerTh}</span>
                                    <span className="text-sm font-semibold leading-6 text-gray-500">/ TH</span>
                                </div>

                                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <Check className={`h-6 w-5 flex-none ${isHighEff ? 'text-[var(--sovereign-emerald)]' : 'text-gray-500'}`} aria-hidden="true" />
                                            {feature}
                                        </li>
                                    ))}
                                    <li className="flex gap-x-3">
                                        <Check className={`h-6 w-5 flex-none ${isHighEff ? 'text-[var(--sovereign-emerald)]' : 'text-gray-500'}`} aria-hidden="true" />
                                        Daily BTC Payouts
                                    </li>
                                </ul>

                                <Link
                                    href="/contact"
                                    aria-describedby={plan.id}
                                    className={`mt-8 block rounded-md px-3 py-3 text-center text-sm font-bold leading-6 transition-all ${isHighEff
                                        ? 'bg-[var(--sovereign-emerald)] text-white hover:bg-[var(--sovereign-emerald-hover)] shadow-lg hover:shadow-[var(--sovereign-emerald)]/25'
                                        : 'bg-white/10 text-white hover:bg-white/20'
                                        }`}
                                >
                                    Buy Hashrate
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
