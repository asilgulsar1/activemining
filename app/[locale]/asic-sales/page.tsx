"use client";

import { motion } from "framer-motion";
import { Cpu, ShoppingCart, Truck, CheckCircle, ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { Link } from "@/navigation";

const INVENTORY = [
    {
        id: "s21-hyd",
        model: "Antminer S21 Hydro",
        hashrate: "335 TH/s",
        efficiency: "16 J/TH",
        price: "$4,150",
        type: "Hydro",
        available: true,
        image: "/asic-sales/inventory/s21-hydro.png"
    },
    {
        id: "s21-air",
        model: "Antminer S21",
        hashrate: "200 TH/s",
        efficiency: "17.5 J/TH",
        price: "$2,850",
        type: "Air Cooled",
        available: true,
        image: "/asic-sales/inventory/s21-air.png"
    },
    {
        id: "t21",
        model: "Antminer T21",
        hashrate: "190 TH/s",
        efficiency: "19 J/TH",
        price: "$2,100",
        type: "Air Cooled",
        available: true,
        image: "/asic-sales/inventory/t21.png"
    },
    {
        id: "s21-xp",
        model: "Antminer S21 XP",
        hashrate: "270 TH/s",
        efficiency: "13.5 J/TH",
        price: "Inquire",
        type: "Air Cooled",
        available: false,
        badge: "Pre-Order",
        image: "/asic-sales/inventory/s21-xp.png"
    }
];

export default function AsicSalesPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Hero */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Hardware <span className="text-blue-500">Sales</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        High-performance ASICs sourced directly from manufacturers. Competitive pricing with optional hosting integration.
                    </p>

                    <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-300">
                        <div className="flex items-center gap-2">
                            <Truck className="w-5 h-5 text-[var(--sovereign-emerald)]" />
                            Global Shipping
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-[var(--sovereign-emerald)]" />
                            Manufacturer Warranty
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-[var(--sovereign-emerald)]" />
                            MOQ: 1 Unit
                        </div>
                    </div>
                </div>

                {/* Inventory Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {INVENTORY.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all hover:translate-y-[-4px]"
                        >
                            <div className="relative aspect-square mb-6 bg-black/40 rounded-xl flex items-center justify-center border border-white/5 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.model}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                />
                                {item.badge && (
                                    <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                                        {item.badge}
                                    </div>
                                )}
                            </div>

                            <h3 className="text-lg font-bold text-white mb-1">{item.model}</h3>
                            <div className="text-sm text-gray-400 mb-4">{item.type}</div>

                            <div className="space-y-2 mb-6 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Hashrate</span>
                                    <span className="text-white font-medium">{item.hashrate}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Efficiency</span>
                                    <span className="text-white font-medium">{item.efficiency}</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-auto">
                                <div className="text-xl font-bold text-white">{item.price}</div>
                                <Link
                                    href="/contact"
                                    className="p-2 rounded-lg bg-white/10 text-white hover:bg-[var(--sovereign-emerald)] transition-colors"
                                >
                                    <ShoppingCart className="w-5 h-5" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Logistics Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white/5 rounded-3xl p-8 md:p-12 border border-white/5">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-4">Logistics & Customs</h2>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Navigating international customs can be complex. Active Mining Group handles all logistics from factory floor to facility shelf. We offer DDP (Delivered Duty Paid) shipping to most major regions including USA, UAE, and Europe.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-3 text-gray-300">
                                <CheckCircle className="w-5 h-5 text-green-500" />
                                Full insurance coverage during transit
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <CheckCircle className="w-5 h-5 text-green-500" />
                                Customs broker management
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <CheckCircle className="w-5 h-5 text-green-500" />
                                Real-time tracking portal
                            </li>
                        </ul>
                        <Link href="/contact" className="text-[var(--sovereign-emerald)] font-bold hover:text-white transition-colors inline-flex items-center gap-2">
                            Shipping Rates Calculator <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="relative h-[300px] rounded-xl overflow-hidden glass-panel border border-white/10 flex items-center justify-center">
                        <Image
                            src="/asic-sales/logistics.png"
                            alt="Global Logistics & Customs"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                    </div>
                </div>
            </div>
        </div>
    );
}
