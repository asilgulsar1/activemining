"use client";

import { motion } from "framer-motion";
import { Users, Target, Shield, Globe, Award, Zap } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--sovereign-emerald)]/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Hero Section */}
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6 text-white"
                    >
                        Powering the Future of <span className="text-[var(--sovereign-emerald)]">Digital Finance</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 leading-relaxed"
                    >
                        Active Mining Group is a premier institutional infrastructure provider, bridging the gap between traditional energy markets and the Bitcoin network.
                    </motion.p>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {[
                        {
                            icon: <Shield className="w-8 h-8" />,
                            title: "Institutional Trust",
                            description: "Regulated infrastructure with enterprise-grade security and transparency."
                        },
                        {
                            icon: <Zap className="w-8 h-8" />,
                            title: "Energy Efficiency",
                            description: "Sustainable mining operations utilizing renewable and stranded energy sources."
                        },
                        {
                            icon: <Globe className="w-8 h-8" />,
                            title: "Global Reach",
                            description: "Strategically located facilities across politically stable jurisdictions."
                        }
                    ].map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-[var(--sovereign-emerald)]/30 transition-colors"
                        >
                            <div className="w-16 h-16 bg-[var(--sovereign-emerald)]/10 rounded-xl flex items-center justify-center text-[var(--sovereign-emerald)] mb-6">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                            <p className="text-gray-400">{value.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Mission Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Our Mission
                        </h2>
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                Founded in 2024, Active Mining Group was established to introduce professional standards to the cryptocurrency mining industry. We believe that Bitcoin is not just a digital asset, but a fundamental transformation of the global financial system.
                            </p>
                            <p>
                                Our mission is to secure the Bitcoin network by deploying efficient, sustainable hashrate at scale. We partner with energy producers to monetize wasted resources and provide investors with direct exposure to mining infrastructure without the operational complexity.
                            </p>
                            <ul className="space-y-4 mt-8">
                                {[
                                    "100 MW+ Under Management",
                                    "Carbon-Neutral Initiatives",
                                    "99.9% Uptime SLA",
                                    "Audited Financials"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white">
                                        <div className="w-2 h-2 rounded-full bg-[var(--sovereign-emerald)]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[500px] rounded-2xl overflow-hidden glass-panel border border-white/10"
                    >
                        <Image
                            src="/about/mission.png"
                            alt="Futuristic Bitcoin Mining Data Center"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </motion.div>
                </div>

                {/* Stats Section */}
                <div className="border-t border-b border-white/10 py-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { label: "Total Hashrate", value: "2.5 EH/s" },
                            { label: "Data Centers", value: "5" },
                            { label: "Team Members", value: "45+" },
                            { label: "Uptime", value: "99.95%" }
                        ].map((stat, index) => (
                            <div key={index}>
                                <div className="text-3xl md:text-5xl font-bold text-white mb-2 font-mono">{stat.value}</div>
                                <div className="text-sm text-[var(--sovereign-emerald)] uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
