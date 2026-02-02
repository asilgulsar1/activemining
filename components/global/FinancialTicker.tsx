'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight, Activity } from 'lucide-react';

interface MarketData {
    symbol: string;
    name: string;
    price: string;
    change: number;
    changePercent: number;
    currency: string;
}

export default function FinancialTicker() {
    const [data, setData] = useState<MarketData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('/api/financial-data', { next: { revalidate: 60 } });
                if (res.ok) {
                    const json = await res.json();
                    setData(json.data);
                }
            } catch (error) {
                console.error('Failed to fetch ticker data', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
        // Refresh every 60 seconds
        const interval = setInterval(fetchData, 60000);
        return () => clearInterval(interval);
    }, []);

    if (loading || data.length === 0) return null;

    // Duplicate data for seamless loop
    const tickerItems = [...data, ...data, ...data];

    return (
        <div className="w-full bg-[#050505] border-b border-white/5 overflow-hidden h-10 flex items-center relative z-50">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: [0, -1000] }} // Approximate width, will adjust with duration
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30, // Adjust speed here
                        ease: "linear",
                    },
                }}
            >
                {tickerItems.map((item, index) => (
                    <div key={`${item.symbol}-${index}`} className="flex items-center mx-6 space-x-2 text-xs font-mono tracking-wider">
                        <span className="font-bold text-[var(--cloud-dancer)]">{item.name}</span>
                        <span className="text-gray-400">{item.price}</span>
                        <div className={`flex items-center ${item.change >= 0 ? 'text-[var(--sovereign-emerald)]' : 'text-red-500'}`}>
                            {item.change >= 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                            <span>{Math.abs(item.changePercent).toFixed(2)}%</span>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
