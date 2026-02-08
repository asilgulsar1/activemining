"use client";

import { motion } from "framer-motion";
import { Zap, Battery, Factory, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "@/navigation";
import dynamic from "next/dynamic";

const PowerMap = dynamic(() => import("@/components/map/PowerMap"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full flex items-center justify-center bg-[#0B0C10] text-gray-500">
            Loading Map...
        </div>
    )
});

export default function PurchasePowerPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--sovereign-emerald)]/5 rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Hero */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 rounded-full bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
                        <Zap className="w-4 h-4" />
                        <span className="text-sm font-bold uppercase tracking-wider">Industrial Energy Contracts</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Bulk <span className="text-yellow-500">Power Purchasing</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                        Secure long-term, low-cost energy contracts for large-scale mining operations. We bridge the gap between energy producers and miners.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/10">
                        Contact Energy Desk <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {[
                        {
                            icon: <Battery className="w-8 h-8 text-yellow-500" />,
                            title: "Capacity Availability",
                            desc: "Immediate access to 5MW - 100MW blocks across USA, Paraguay, and UAE."
                        },
                        {
                            icon: <Factory className="w-8 h-8 text-[var(--sovereign-emerald)]" />,
                            title: "Infrastructure Ready",
                            desc: "Sites are developed with transformers, switchgear, and cooling in place."
                        },
                        {
                            icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
                            title: "Rate Protection",
                            desc: "Fixed-rate PPAs (Power Purchase Agreements) to hedge against market volatility."
                        }
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-panel p-8 rounded-2xl border border-white/10"
                        >
                            <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Locations Map Placeholder */}
                <div className="glass-panel border border-white/10 rounded-2xl p-8 md:p-12 mb-20 md:mb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Global Energy Portfolio</h2>
                            <p className="text-gray-400 mb-8">
                                We strategically identify jurisdictions with surplus energy generation and favorable regulatory environments to ensure sustainability and longevity.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { country: "United States", type: "Hydro / Natural Gas", status: "Available" },
                                    { country: "United Arab Emirates", type: "Solar / Grid", status: "Limited" },
                                    { country: "Paraguay", type: "Hydroelectric", status: "Waitlist" },
                                    { country: "Ethiopia", type: "Hydroelectric", status: "Available" },
                                ].map((loc, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-[var(--sovereign-emerald)]" />
                                            <span className="font-bold text-white">{loc.country}</span>
                                        </div>
                                        <span className="text-sm text-gray-400">{loc.type}</span>
                                        <span className={`text-xs font-bold px-2 py-1 rounded bg-black/30 ${loc.status === 'Available' ? 'text-[var(--sovereign-emerald)]' : 'text-yellow-500'}`}>
                                            {loc.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-xl overflow-hidden bg-black/20 md:h-[500px] border border-white/5 z-0">
                            <PowerMap />
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center bg-gradient-to-br from-[var(--sovereign-emerald)]/20 to-blue-600/20 rounded-3xl p-12 border border-white/10">
                    <h2 className="text-3xl font-bold text-white mb-4">Contract Inquiries</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        For requirements above 1MW, please contact our institutional desk for custom pricing and availability.
                    </p>
                    <Link href="/contact" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors">
                        Speak with our Team
                    </Link>
                </div>
            </div>
        </div>
    );
}
