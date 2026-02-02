"use client";

import { useEffect, useState } from "react";
import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

interface HashRateData {
    x: number; // timestamp
    y: number; // hash rate in TH/s
}

export default function BitcoinHashRateChart() {
    const [data, setData] = useState<HashRateData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentHashRate, setCurrentHashRate] = useState<number | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/hashrate");
                if (!response.ok) {
                    throw new Error("Failed to fetch hash rate data");
                }
                const result = await response.json();
                const values = result.values;

                // Process data: Convert TH/s to EH/s (1 EH/s = 1,000,000 TH/s)
                const processedData = values.map((item: HashRateData) => ({
                    ...item,
                    y: item.y / 1000000, // Convert to EH/s
                }));

                setData(processedData);
                if (processedData.length > 0) {
                    setCurrentHashRate(processedData[processedData.length - 1].y);
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : "An error occurred");
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return (
            <div className="h-[400px] w-full flex items-center justify-center bg-white/5 rounded-xl border border-white/10 animate-pulse">
                <div className="text-gray-400">Loading Network Data...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="h-[400px] w-full flex items-center justify-center bg-white/5 rounded-xl border border-red-500/20 text-red-400">
                Unable to load network data
            </div>
        );
    }

    return (
        <div className="w-full bg-black/40 backdrop-blur-sm rounded-xl border border-white/10 p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
                <div>
                    <h3 className="text-xl text-gray-400 mb-2">Network Hash Rate</h3>
                    <div className="text-4xl md:text-5xl font-bold text-white font-mono tracking-tighter">
                        {currentHashRate ? currentHashRate.toFixed(1) : "---"}
                        <span className="text-2xl text-[var(--sovereign-emerald)] ml-2">EH/s</span>
                    </div>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                    <div className="text-sm text-gray-500">Source: Blockchain.com</div>
                    <div className="text-xs text-gray-600 mt-1">1 Year • 24h Average</div>
                </div>
            </div>

            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorHashRate" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                            stroke="rgba(255, 255, 255, 0.1)"
                        />
                        <XAxis
                            dataKey="x"
                            tickFormatter={(unixTime) =>
                                new Date(unixTime * 1000).toLocaleDateString("en-US", {
                                    month: "short",
                                })
                            }
                            stroke="#6B7280"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            minTickGap={50}
                        />
                        <YAxis
                            dataKey="y"
                            stroke="#6B7280"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `${value}`}
                            domain={['auto', 'auto']}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#000",
                                borderColor: "rgba(255, 255, 255, 0.1)",
                                borderRadius: "8px",
                                color: "#fff",
                            }}
                            formatter={(value: any) => [
                                value ? `${value.toFixed(2)} EH/s` : "--- EH/s",
                                "Hash Rate",
                            ]}
                            labelFormatter={(label) =>
                                new Date(label * 1000).toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                })
                            }
                        />
                        <Area
                            type="monotone"
                            dataKey="y"
                            stroke="#10B981"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorHashRate)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
