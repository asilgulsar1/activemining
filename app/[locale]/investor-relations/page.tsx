"use client";

import { motion } from "framer-motion";
import { TrendingUp, PieChart, Lock, ArrowRight, Download } from "lucide-react";
import { Link } from "@/navigation";
import dynamic from 'next/dynamic';

const PortfolioChart = dynamic(() => import('@/components/charts/PortfolioChart'), { ssr: false });

export default function InvestorRelationsPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-[var(--sovereign-gold)]/5 rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Hero */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Investor <span className="text-[var(--sovereign-gold)]">Relations</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Sustainable returns from institutional-grade digital asset infrastructure.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--sovereign-gold)] text-black font-bold rounded-lg hover:bg-yellow-500 transition-colors">
                            Request Investor Deck <Lock className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* KPI Highlights (Placeholders) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {[
                        { label: "Assets Under Management", value: "$45M+" },
                        { label: "Total Hashrate Capacity", value: "2.4 EH/s" },
                        { label: "Uptime SLA", value: "99.9%" }
                    ].map((stat, i) => (
                        <div key={i} className="glass-panel p-8 rounded-2xl border border-white/10 text-center">
                            <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Investment Thesis */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">Investment Thesis</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="p-3 rounded-lg bg-white/5 h-fit">
                                    <TrendingUp className="w-6 h-6 text-[var(--sovereign-emerald)]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Asymmetric Upside</h3>
                                    <p className="text-gray-400">Direct exposure to Bitcoin production with downside protection through tangible infrastructure assets.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="p-3 rounded-lg bg-white/5 h-fit">
                                    <PieChart className="w-6 h-6 text-[var(--sovereign-emerald)]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Diversified Revenue</h3>
                                    <p className="text-gray-400">Multi-stream income from self-mining, hosting services, and equipment sales.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden glass-panel border border-white/10 flex items-center justify-center p-6">
                        <PortfolioChart />
                        <div className="absolute top-4 left-4 text-gray-500 text-xs font-mono border border-white/10 px-2 py-1 rounded">
                            Allocation Strategy
                        </div>
                    </div>
                </div>

                {/* Contact CTA */}
                <div className="text-center">
                    <p className="text-gray-400 mb-8">
                        Financial reports and due diligence materials are available to accredited investors upon request.
                    </p>
                    <Link href="/contact" className="text-white hover:text-[var(--sovereign-gold)] underline underline-offset-4 transition-colors">
                        Contact Investor Relations Department
                    </Link>
                </div>
            </div>
        </div>
    );
}
