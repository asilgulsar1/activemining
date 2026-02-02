"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function InfrastructurePage() {
    const facilities = [
        {
            name: "AEG Data Center - Abu Dhabi",
            capacity: "50 MW",
            pue: "1.2",
            cooling: "Immersion + Air Cooling",
            uptime: "99.95%",
            features: [
                "Tier III+ Certified",
                "24/7 Security & Monitoring",
                "Redundant Power Supply",
                "Direct Grid Connection",
            ],
        },
    ];

    const specs = [
        { label: "Total Capacity", value: "50 MW", icon: "⚡" },
        { label: "Power Usage Effectiveness", value: "1.2 PUE", icon: "📊" },
        { label: "Uptime SLA", value: "99.95%", icon: "🔒" },
        { label: "Cooling Technology", value: "Hybrid", icon: "❄️" },
        { label: "Security Level", value: "Tier III+", icon: "🛡️" },
        { label: "Operational Since", value: "2024", icon: "📅" },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald/5 via-background to-background" />

                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            UAE-Based <span className="text-emerald">Mining Infrastructure</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Institutional-grade data center facilities powered by Abu Dhabi Energy Group (AEG),
                            delivering enterprise reliability and efficiency for Bitcoin mining operations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Technical Specifications */}
            <section className="py-16 px-6 bg-gray-900/30">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Specifications</h2>
                        <p className="text-gray-400">Enterprise-grade infrastructure metrics</p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {specs.map((spec, i) => (
                            <motion.div
                                key={spec.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className="glass rounded-xl p-6 text-center hover:bg-white/10 transition-all"
                            >
                                <div className="text-3xl mb-3">{spec.icon}</div>
                                <div className="text-2xl font-bold text-emerald font-mono mb-2">{spec.value}</div>
                                <div className="text-xs text-gray-400">{spec.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Facility Details */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Facility Overview</h2>
                        <p className="text-gray-400">World-class mining infrastructure in the UAE</p>
                    </motion.div>

                    {facilities.map((facility, i) => (
                        <motion.div
                            key={facility.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="glass rounded-2xl p-8 md:p-12"
                        >
                            <div className="grid md:grid-cols-2 gap-12">
                                <div>
                                    <h3 className="text-2xl font-bold mb-4 text-emerald">{facility.name}</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between py-3 border-b border-white/10">
                                            <span className="text-gray-400">Total Capacity</span>
                                            <span className="font-mono font-semibold text-lg">{facility.capacity}</span>
                                        </div>
                                        <div className="flex items-center justify-between py-3 border-b border-white/10">
                                            <span className="text-gray-400">PUE Rating</span>
                                            <span className="font-mono font-semibold text-lg text-emerald">{facility.pue}</span>
                                        </div>
                                        <div className="flex items-center justify-between py-3 border-b border-white/10">
                                            <span className="text-gray-400">Cooling System</span>
                                            <span className="font-semibold">{facility.cooling}</span>
                                        </div>
                                        <div className="flex items-center justify-between py-3 border-b border-white/10">
                                            <span className="text-gray-400">Uptime SLA</span>
                                            <span className="font-mono font-semibold text-lg text-gold">{facility.uptime}</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold mb-4 text-gold">Key Features</h4>
                                    <ul className="space-y-3">
                                        {facility.features.map((feature, j) => (
                                            <li key={j} className="flex items-start space-x-3">
                                                <svg className="w-5 h-5 text-emerald mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-gray-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-8 p-6 bg-emerald/10 border border-emerald/20 rounded-lg">
                                        <h5 className="font-semibold text-emerald mb-2">Available Capacity</h5>
                                        <p className="text-sm text-gray-300 mb-4">
                                            Current spare capacity available for immediate deployment
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-2xl font-bold font-mono">15 MW</span>
                                            <span className="text-sm text-gray-400">30% Available</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Why UAE Section */}
            <section className="py-24 px-6 bg-gray-900/30">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why UAE Infrastructure?</h2>
                        <p className="text-gray-400">Strategic advantages of Middle East mining operations</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Competitive Energy Costs",
                                description: "Access to low-cost, reliable power through direct grid connections and PPAs",
                                icon: "💰",
                            },
                            {
                                title: "Political Stability",
                                description: "Secure jurisdiction with pro-business regulatory environment",
                                icon: "🏛️",
                            },
                            {
                                title: "Tax Optimization",
                                description: "Favorable tax structure for mining operations and capital deployment",
                                icon: "📈",
                            },
                            {
                                title: "Strategic Location",
                                description: "Central timezone bridging Asian and European markets",
                                icon: "🌍",
                            },
                        ].map((advantage, i) => (
                            <motion.div
                                key={advantage.title}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="glass rounded-xl p-8 hover:bg-white/10 transition-all"
                            >
                                <div className="text-4xl mb-4">{advantage.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{advantage.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold mb-6">Ready to Deploy?</h2>
                        <p className="text-lg text-gray-400 mb-8">
                            Contact our infrastructure team to discuss capacity allocation and deployment timelines.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-10 py-4 bg-gradient-to-r from-emerald to-emerald-dark rounded-lg text-lg font-semibold hover:shadow-2xl hover:shadow-emerald/30 transition-all"
                        >
                            Schedule Site Visit
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
