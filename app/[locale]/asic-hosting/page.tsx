"use client";

import { motion } from "framer-motion";
import { Server, Shield, Zap, Thermometer, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Link } from "@/navigation";

export default function AsicHostingPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[var(--sovereign-emerald)]/5 rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Hero */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <div className="inline-block px-4 py-1 mb-4 rounded-full bg-[var(--sovereign-emerald)]/10 text-[var(--sovereign-emerald)] text-sm font-mono border border-[var(--sovereign-emerald)]/20">
                        UAE & USA Facilities
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Enterprise <span className="text-[var(--sovereign-emerald)]">ASIC Hosting</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Secure, low-cost colocation for your mining hardware. We manage the infrastructure so you can focus on the rewards.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/contact" className="px-8 py-3 bg-[var(--sovereign-emerald)] text-white font-bold rounded-lg hover:bg-emerald-600 transition-colors">
                            Request Quote
                        </Link>
                        <Link href="/infrastructure" className="px-8 py-3 bg-white/5 text-white font-bold rounded-lg hover:bg-white/10 transition-colors border border-white/10">
                            View Facilities
                        </Link>
                    </div>
                </div>

                {/* Rates Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 max-w-5xl mx-auto">
                    {[
                        {
                            title: "MOQ < 10 Units",
                            rate: "$0.09",
                            unit: "/ kWh",
                            features: ["Air Cooled", "95% Uptime SLA", "Standard Support"]
                        },
                        {
                            title: "10 - 100 Units",
                            rate: "$0.075",
                            unit: "/ kWh",
                            popular: true,
                            features: ["Air & Immersion", "98% Uptime SLA", "Priority Support", "VPN Access"]
                        },
                        {
                            title: "Enterprise > 100",
                            rate: "Custom",
                            unit: "Rate",
                            features: ["Immersion Cooling", "99.9% Uptime SLA", "Dedicated Account Mgr", "Repair Center On-site"]
                        }
                    ].map((plan, i) => (
                        <div key={i} className={`relative p-8 rounded-2xl border ${plan.popular ? 'border-[var(--sovereign-emerald)] bg-[var(--sovereign-emerald)]/5' : 'border-white/10 glass-panel'}`}>
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--sovereign-emerald)] text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
                            <div className="flex items-baseline mb-6">
                                <span className="text-4xl font-bold text-[var(--sovereign-emerald)]">{plan.rate}</span>
                                <span className="text-gray-400 ml-2">{plan.unit}</span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, f) => (
                                    <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
                                        <div className={`w-1.5 h-1.5 rounded-full ${plan.popular ? 'bg-[var(--sovereign-emerald)]' : 'bg-gray-500'}`} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact" className={`block w-full py-3 rounded-lg text-center font-bold transition-colors ${plan.popular ? 'bg-[var(--sovereign-emerald)] text-white hover:bg-emerald-600' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                                Get Started
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <div className="space-y-8">
                        <div className="flex gap-6">
                            <div className="w-12 h-12 rounded-xl bg-[var(--sovereign-emerald)]/10 flex items-center justify-center text-[var(--sovereign-emerald)] shrink-0">
                                <Thermometer className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Immersion Cooling</h3>
                                <p className="text-gray-400">Advanced single-phase immersion cooling technology allows for higher overclocks and extended hardware lifespan.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="w-12 h-12 rounded-xl bg-[var(--sovereign-emerald)]/10 flex items-center justify-center text-[var(--sovereign-emerald)] shrink-0">
                                <Shield className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">24/7 Security</h3>
                                <p className="text-gray-400">Manned security 24/7, biometric access control, and comprehensive CCTV coverage across all facilities.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="w-12 h-12 rounded-xl bg-[var(--sovereign-emerald)]/10 flex items-center justify-center text-[var(--sovereign-emerald)] shrink-0">
                                <Zap className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Redundant Power</h3>
                                <p className="text-gray-400">Dual-feed power substations ensure maximum uptime and stability for your mining operations.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden glass-panel border border-white/10">
                        {/* Placeholder for Facility Image */}
                        <Image
                            src="/asic-hosting/facility.png"
                            alt="Institutional ASIC Hosting Facility"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                    </div>
                </div>
            </div>
        </div>
    );
}
