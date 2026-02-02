
// Active Mining Service Catalog & Technical Constants
// Extracted from Segments Website (ProfitForecast.tsx, CloudMiningClient.tsx)

export interface CloudMiningPlan {
    id: string;
    name: string;
    efficiency: number; // J/TH
    costPerTh: number; // USD
    hostingRate: number; // USD/kWh
    contractDurationYears: number;
    features: string[];
}

export const CLOUD_MINING_PLANS: CloudMiningPlan[] = [
    {
        id: 'standard-efficiency',
        name: 'Standard Efficiency',
        efficiency: 15,
        costPerTh: 12,
        hostingRate: 0.08,
        contractDurationYears: 5,
        features: [
            '15 J/TH Efficiency',
            '$12 per Terahash',
            '5-Year Contract',
            '99.9% Uptime Guarantee',
            '$0.08/kWh Hosting Rate'
        ]
    },
    {
        id: 'high-efficiency',
        name: 'High Efficiency',
        efficiency: 12,
        costPerTh: 21,
        hostingRate: 0.08,
        contractDurationYears: 5,
        features: [
            '12 J/TH Efficiency',
            '$21 per Terahash',
            '5-Year Contract',
            '99.9% Uptime Guarantee',
            '$0.08/kWh Hosting Rate'
        ]
    }
];

export const HOSTING_TIERS = [
    {
        name: 'Standard Hosting',
        rate: 0.08,
        minUnits: 1,
        features: ['Air Cooling', 'Shared Support', 'Standard Insurance']
    },
    {
        name: 'Volume Hosting',
        rate: 0.07,
        minUnits: 10,
        features: ['Priority Support', 'Volume Discount', 'Custom Config']
    },
    {
        name: 'VIP / Institutional',
        rate: 0.06,
        minUnits: 100,
        features: ['Dedicated Account Mgr', 'Hydro Cooling Ready', 'Lowest Power Rate']
    }
];

// Mining Math Constants
export const MINING_CONSTANTS = {
    BLOCK_REWARD: 3.125,
    SECONDS_PER_DAY: 86400,
    DIFFICULTY_SCALE: 4294967296, // 2^32
    DEFAULT_BTC_PRICE: 95000,
    DEFAULT_DIFFICULTY: 100000000000000, // 100T fallback
};

export function calculateDailyRevenueBTC(hashrateTh: number, difficulty: number): number {
    const hashrateH = hashrateTh * 1e12;
    return (hashrateH * MINING_CONSTANTS.BLOCK_REWARD * MINING_CONSTANTS.SECONDS_PER_DAY) / (difficulty * MINING_CONSTANTS.DIFFICULTY_SCALE);
}

export function calculateDailyCostUSD(hashrateTh: number, efficiencyJTh: number, kwhRate: number): number {
    const powerWatts = hashrateTh * efficiencyJTh;
    const kwhPerDay = (powerWatts / 1000) * 24;
    return kwhPerDay * kwhRate;
}
