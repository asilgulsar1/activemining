"use client";

import { motion } from "framer-motion";
import { Handshake, Globe, Shield, ArrowRight } from "lucide-react";
import { Link } from "@/navigation";

export default function PartnersPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--sovereign-emerald)]/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Hero */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Stratergic <span className="text-[var(--sovereign-emerald)]">Partnerships</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Collaborating with industry leaders in energy, infrastructure, and technology to build the future of digital finance.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--sovereign-emerald)] text-white font-bold rounded-lg hover:bg-emerald-600 transition-colors">
                        Become a Partner <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Partnership Types */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {[
                        {
                            icon: <Globe className="w-8 h-8 text-blue-500" />,
                            title: "Energy Providers",
                            desc: "Sovereign and private energy generation partners supplying renewable and surplus power."
                        },
                        {
                            icon: <Shield className="w-8 h-8 text-[var(--sovereign-emerald)]" />,
                            title: "Infrastructure",
                            desc: "Data center facility operators and construction partners ensuring 99.9% uptime."
                        },
                        {
                            icon: <Handshake className="w-8 h-8 text-yellow-500" />,
                            title: "Institutional Capital",
                            desc: "Financial institutions and family offices deploying capital into digital asset infrastructure."
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-panel p-8 rounded-2xl border border-white/10"
                        >
                            <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Partners Grid (Placeholders) */}
                <div className="mb-24">
                    <h2 className="text-2xl font-bold text-white mb-12 text-center">Trusted By Industry Leaders</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Bitmain */}
                        <div className="flex items-center justify-center h-24 border border-white/5 rounded-xl bg-white/5 font-bold text-xl text-white">
                            BITMAIN
                        </div>
                        {/* MicroBT */}
                        <div className="flex items-center justify-center h-24 border border-white/5 rounded-xl bg-white/5 font-bold text-xl text-white">
                            MicroBT
                        </div>
                        {/* Canaan */}
                        <div className="flex items-center justify-center h-24 border border-white/5 rounded-xl bg-white/5 font-bold text-xl text-white">
                            Canaan
                        </div>
                        {/* Other */}
                        <div className="flex items-center justify-center h-24 border border-white/5 rounded-xl bg-white/5 font-bold text-xl text-white">
                            Cooling Inc.
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center bg-gradient-to-br from-blue-900/20 to-transparent rounded-3xl p-12 border border-blue-500/20">
                    <h2 className="text-3xl font-bold text-white mb-4">Join Our Network</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        We are strictly invite-only for new infrastructure partners. Contact our business development team to initiate a dialogue.
                    </p>
                    <Link href="/contact" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors">
                        Contact Business Development
                    </Link>
                </div>
            </div>
        </div>
    );
}
