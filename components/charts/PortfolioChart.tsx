"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const data = [
    { name: "Mining Hardware", value: 45, color: "#10B981" }, // Sovereign Emerald
    { name: "Infrastructure", value: 30, color: "#3B82F6" }, // Blue
    { name: "Energy Contracts", value: 15, color: "#F59E0B" }, // Gold
    { name: "Operations", value: 10, color: "#9CA3AF" }, // Silver
];

export default function PortfolioChart() {
    return (
        <div className="w-full h-full min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                        stroke="none"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "rgba(11, 12, 16, 0.9)",
                            borderColor: "rgba(255, 255, 255, 0.1)",
                            borderRadius: "8px",
                            color: "#fff",
                        }}
                        itemStyle={{ color: "#fff" }}
                    />
                    <Legend
                        verticalAlign="bottom"
                        height={36}
                        formatter={(value) => <span style={{ color: "#9CA3AF" }}>{value}</span>}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
