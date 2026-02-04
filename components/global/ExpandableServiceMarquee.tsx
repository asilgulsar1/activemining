"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/navigation";
import { KineticTypography } from "@/components/ui/KineticTypography";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Cloud, Server, Zap, Globe, ShoppingCart } from "lucide-react";
import Image from "next/image";

const SERVICES = [
    {
        id: "cloud",
        title: "Cloud Mining",
        subtitle: "Institutional Hashrate Ownership",
        description: "Direct ownership of fractionated hashrate with daily BTC payouts. Zero hardware management required.",
        href: "/cloud-mining",
        icon: <Cloud className="w-8 h-8" />,
        metric: { value: 45, suffix: " PH/s", label: "Active Pool Capacity" },
        // Use generated asset
        image: "/assets/cloud-mining.png",
        cta: "Start Hashing"
    },
    {
        id: "hosting",
        title: "Global Hosting",
        subtitle: "Tier-3 Colocation Facilities",
        description: "Sovereign hosting in UAE & UK facilities. 99.9% uptime SLA with on-site technician support.",
        href: "/asic-hosting",
        icon: <Server className="w-8 h-8" />,
        metric: { value: 120, suffix: " MW", label: "Power Under Management" },
        image: "/assets/hosting.png",
        cta: "Book Rack Space"
    },
    {
        id: "power",
        title: "Energy & PPA",
        subtitle: "Industrial Power Strategy",
        description: "Bulk energy contracts and renewable mix strategies for large-scale industrial mining operations.",
        href: "/purchase-power",
        icon: <Zap className="w-8 h-8" />,
        metric: { value: 98, suffix: "%", label: "Renewable Mix Available" },
        image: "/assets/energy.png",
        cta: "Request Quote"
    },
    {
        id: "marketplace",
        title: "ASIC Marketplace",
        subtitle: "Global Hardware Procurement",
        description: "Direct logistics from Bitmain/MicroBT. Customs clearance and delivery to your facility.",
        href: "/asic-sales",
        icon: <ShoppingCart className="w-8 h-8" />,
        metric: { value: 24, suffix: "h", label: "Quote Turnaround" },
        image: "/assets/marketplace.png",
        cta: "Buy Miners"
    },
    {
        id: "infra",
        title: "Global Infrastructure",
        subtitle: "Follow The Power",
        description: "Explore our decentralized network of operational mining sites across 3 continents.",
        href: "/infrastructure",
        icon: <Globe className="w-8 h-8" />,
        metric: { value: 8, suffix: " Sites", label: "Operational Nodes" },
        image: "/assets/infrastructure.png",
        cta: "View Node Map"
    },
];

export function ExpandableServiceMarquee() {
    const [activeId, setActiveId] = useState<string | null>("cloud");

    return (
        <section className="py-24 bg-[var(--midnight-obsidian)]">
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <h2 className="text-3xl font-heading font-bold text-[var(--cloud-dancer)] mb-4">
                    Vertically Integrated <span className="text-[var(--sovereign-emerald)]">Mining</span>
                </h2>
                <p className="text-[var(--titanium-silver)] max-w-2xl text-lg">
                    From hardware procurement and PPA structuring to turnkey site delivery.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-2">
                {SERVICES.map((service) => (
                    <Link
                        key={service.id}
                        href={service.href}
                        onMouseEnter={() => setActiveId(service.id)}
                        className="relative group block"
                    >
                        <motion.div
                            layout
                            initial={false}
                            animate={{
                                height: activeId === service.id ? 320 : 100, // Slightly taller for CTA
                                opacity: activeId === service.id ? 1 : 0.7
                            }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className={cn(
                                "rounded-2xl border border-white/5 overflow-hidden relative transition-colors duration-700",
                                activeId === service.id
                                    ? "bg-white/[0.03] border-[var(--sovereign-emerald)]/30 shadow-[0_0_30px_-10px_rgba(16,185,129,0.2)]"
                                    : "bg-transparent hover:bg-white/[0.02]"
                            )}
                        >
                            {/* Background Image with Overlay */}
                            <div className="absolute inset-0">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className={cn(
                                        "object-cover transition-transform duration-1000",
                                        activeId === service.id ? "scale-105 opacity-50" : "scale-100 opacity-20 filter grayscale"
                                    )}
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                            </div>

                            <div className="relative h-full flex flex-col justify-center px-8 md:px-12 z-10">
                                {/* Header Row */}
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-6">
                                        <div className={cn(
                                            "p-3 rounded-lg transition-colors duration-300",
                                            activeId === service.id ? "text-[var(--sovereign-emerald)] bg-[var(--sovereign-emerald)]/10" : "text-[var(--titanium-silver)] bg-white/5"
                                        )}>
                                            {service.icon}
                                        </div>
                                        <div>
                                            <h3 className={cn(
                                                "font-heading font-bold text-2xl transition-colors duration-300",
                                                activeId === service.id ? "text-[var(--cloud-dancer)]" : "text-[var(--titanium-silver)]"
                                            )}>
                                                {service.title}
                                            </h3>
                                            <p className="text-sm text-[var(--titanium-silver)]/60 font-mono uppercase tracking-wider hidden md:block">
                                                {service.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Action Icon at Top Right when collapsed */}
                                    <ArrowUpRight className={cn(
                                        "w-6 h-6 transition-transform duration-300",
                                        activeId === service.id ? "text-[var(--sovereign-emerald)] rotate-45" : "text-[var(--titanium-silver)] opacity-50"
                                    )} />
                                </div>

                                {/* Expanded Content */}
                                <AnimatePresence>
                                    {activeId === service.id && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.3, delay: 0.1 }}
                                            className="mt-8 grid md:grid-cols-2 gap-12 items-end"
                                        >
                                            <div className="flex flex-col gap-6">
                                                <p className="text-[var(--titanium-silver)] text-lg leading-relaxed max-w-xl">
                                                    {service.description}
                                                </p>
                                                {/* Transactional CTA */}
                                                <div>
                                                    <span className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--sovereign-emerald)] text-white font-heading font-bold rounded-lg border border-white/10 shadow-[0_0_15px_-3px_rgba(16,185,129,0.4)] hover:bg-[var(--sovereign-emerald-hover)] transition-all">
                                                        {service.cta}
                                                        <ArrowUpRight className="w-4 h-4" />
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Kinetic Metric */}
                                            <div className="flex items-end justify-end md:justify-start gap-4">
                                                <div className="text-right md:text-left">
                                                    <div className="text-5xl font-mono font-bold text-[var(--cloud-dancer)] tracking-tighter">
                                                        <KineticTypography type="count" text={service.metric.value} />
                                                        <span className="text-2xl text-[var(--sovereign-emerald)] ml-1">{service.metric.suffix}</span>
                                                    </div>
                                                    <div className="text-xs uppercase tracking-[0.2em] text-[var(--titanium-silver)] mt-2">
                                                        {service.metric.label}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
