"use client";

import { useState } from "react";
import {
    calculateDailyRevenueBTC,
    calculateDailyCostUSD,
    MINING_CONSTANTS
} from "@/lib/services";
import { Info } from "lucide-react";

export default function Calculator() {
    const [hashrate, setHashrate] = useState<number>(100); // TH/s
    const [btcPrice, setBtcPrice] = useState<number>(MINING_CONSTANTS.DEFAULT_BTC_PRICE);
    const [difficulty] = useState<number>(MINING_CONSTANTS.DEFAULT_DIFFICULTY);

    // Derived state
    const dailyRevenueBTC = calculateDailyRevenueBTC(hashrate, difficulty);
    const dailyRevenueUSD = dailyRevenueBTC * btcPrice;

    // Standard Plan (15 J/TH, $0.08/kWh)
    const dailyCostStandard = calculateDailyCostUSD(hashrate, 15, 0.08);
    const dailyProfitStandard = dailyRevenueUSD - dailyCostStandard;

    // High Efficiency Plan (12 J/TH, $0.08/kWh)
    const dailyCostHighEff = calculateDailyCostUSD(hashrate, 12, 0.08);
    const dailyProfitHighEff = dailyRevenueUSD - dailyCostHighEff;

    return (
        <section id="calculator" className="py-24 relative">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-[var(--sovereign-emerald)]">Real-time Simulation</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl text-gradient">
                        Estimate Your Mining Profits
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-400">
                        Based on current network difficulty ({(difficulty / 1e12).toFixed(1)}T) and BTC price.
                    </p>
                </div>

                {/* Glassmorphism Container with Bento-style Grid */}
                <div className="mx-auto max-w-5xl glass-panel rounded-3xl p-8 shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Left Column: Interactive Controls */}
                        <div className="space-y-10">

                            {/* Hashrate Slider */}
                            <div>
                                <label className="flex justify-between text-sm font-medium leading-6 text-gray-300 mb-4">
                                    <span>Hashrate Amount</span>
                                    <span className="text-[var(--sovereign-emerald)] font-mono">{hashrate} TH/s</span>
                                </label>
                                <input
                                    type="range"
                                    min="10"
                                    max="1000"
                                    step="10"
                                    value={hashrate}
                                    onChange={(e) => setHashrate(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[var(--sovereign-emerald)]"
                                />
                                <div className="flex justify-between text-xs text-gray-600 mt-2 font-mono">
                                    <span>10 TH/s</span>
                                    <span>1000 TH/s</span>
                                </div>
                            </div>

                            {/* BTC Price Slider */}
                            <div>
                                <label className="flex justify-between text-sm font-medium leading-6 text-gray-300 mb-4">
                                    <span>Bitcoin Price Projection</span>
                                    <span className="text-emerald-400 font-mono">${btcPrice.toLocaleString()}</span>
                                </label>
                                <input
                                    type="range"
                                    min="50000"
                                    max="200000"
                                    step="1000"
                                    value={btcPrice}
                                    onChange={(e) => setBtcPrice(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                                />
                            </div>

                            {/* Info Box */}
                            <div className="bg-[var(--sovereign-emerald)]/10 rounded-xl p-4 border border-[var(--sovereign-emerald)]/20">
                                <div className="flex items-start gap-3">
                                    <Info className="h-5 w-5 text-[var(--sovereign-emerald)] mt-0.5" />
                                    <p className="text-sm text-gray-400">
                                        Calculations assume a standard $0.08/kWh hosting rate.
                                        Standard Plan uses 15 J/TH efficiency, whilst High Efficiency uses 12 J/TH.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Result Cards (Bento Style) */}
                        <div className="flex flex-col gap-6">

                            {/* Standard Card */}
                            <div className="bg-[#0f1014] rounded-2xl p-6 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-400">Standard Efficiency Plan</h3>
                                        <p className="text-xs text-gray-600 mt-1 font-mono">15 J/TH • $12/TH Cost</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-bold text-white font-mono tracking-tight">
                                            ${dailyProfitStandard.toFixed(2)}
                                        </p>
                                        <p className="text-xs text-emerald-500/80 uppercase tracking-widest font-semibold mt-1">Daily Profit</p>
                                    </div>
                                </div>

                                <div className="space-y-2 pt-4 border-t border-white/5">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Gross Revenue</span>
                                        <span className="text-gray-400 font-mono">${dailyRevenueUSD.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Electricity Cost</span>
                                        <span className="text-red-900/80 font-mono">-${dailyCostStandard.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>

                            {/* High Efficiency Card */}
                            <div className="bg-gradient-to-br from-[#0f1014] to-[#046E47]/20 rounded-2xl p-6 border border-[var(--sovereign-emerald)]/30 relative overflow-hidden group hover:border-[var(--sovereign-emerald)] transition-colors shadow-lg shadow-[var(--sovereign-emerald)]/5">
                                <div className="absolute top-0 right-0 px-3 py-1 bg-[var(--sovereign-emerald)] text-[10px] font-bold text-white rounded-bl-xl uppercase tracking-wider">
                                    Recommended
                                </div>
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-sm font-medium text-emerald-100">High Efficiency Plan</h3>
                                        <p className="text-xs text-emerald-500/60 mt-1 font-mono">12 J/TH • $21/TH Cost</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-3xl font-bold text-white font-mono tracking-tight">
                                            ${dailyProfitHighEff.toFixed(2)}
                                        </p>
                                        <p className="text-xs text-emerald-400 uppercase tracking-widest font-semibold mt-1">Daily Profit</p>
                                    </div>
                                </div>

                                <div className="space-y-2 pt-4 border-t border-[var(--sovereign-emerald)]/10">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-emerald-500/60">Gross Revenue</span>
                                        <span className="text-emerald-100 font-mono">${dailyRevenueUSD.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-emerald-500/60">Electricity Cost</span>
                                        <span className="text-red-400/60 font-mono">-${dailyCostHighEff.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm pt-2">
                                        <span className="text-emerald-400 font-medium">Efficiency Savings</span>
                                        <span className="text-emerald-400 font-mono">+${(dailyCostStandard - dailyCostHighEff).toFixed(2)}/day</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
