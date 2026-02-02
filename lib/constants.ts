// Active Mining Group - Legal & Brand Constants

export const LEGAL = {
    UAE_LICENSES: {
        SEGMENTS: "47015129",
        LC_GROUP: "10790",
    },
    HOT_DISCLAIMER: "The Heads of Terms is non-binding except for confidentiality and governing law provisions.",
    COMPANY_NAME: "Active Mining Group",
    JURISDICTION: "United Arab Emirates",
} as const;

export interface Partner {
    name: string;
    role: string;
    description: string;
    logo: string;
    license?: string;
}

export const PARTNERS: Partner[] = [
    {
        name: "Active Energy Group",
        role: "Infrastructure Partner",
        description: "Provides UAE-based data center infrastructure with institutional-grade power and cooling.",
        logo: "/partners/aeg-logo.svg",
    },
    {
        name: "Segments",
        role: "Technology Partner",
        description: "Digital infrastructure and mining operations management platform.",
        license: LEGAL.UAE_LICENSES.SEGMENTS,
        logo: "/partners/segments-logo.svg",
    },
    {
        name: "LC Group",
        role: "Financial Partner",
        description: "Investment and capital structuring for large-scale mining deployments.",
        license: LEGAL.UAE_LICENSES.LC_GROUP,
        logo: "/partners/lc-group-logo.svg",
    },
];

export const PRODUCT_BRANCHES = [
    {
        id: "cloud-mining",
        name: "Cloud Mining",
        description: "Fractional hashrate ownership without hardware management",
        icon: "☁️",
        href: "/cloud-mining",
    },
    {
        id: "asic-hosting",
        name: "ASIC Hosting",
        description: "Colocation services for miner owners in UAE facilities",
        icon: "🏢",
        href: "/asic-hosting",
    },
    {
        id: "purchase-power",
        name: "Purchase Power",
        description: "Bulk energy contracts for industrial-scale operations",
        icon: "⚡",
        href: "/purchase-power",
    },
    {
        id: "global-infrastructure",
        name: "Global Infrastructure",
        description: "Decentralized network of operational mining sites",
        icon: "🌍",
        href: "/infrastructure",
    },
    {
        id: "asic-sales",
        name: "ASIC Sales",
        description: "Hardware sales with integrated UAE hosting options",
        icon: "🖥️",
        href: "/asic-sales",
    },
] as const;

export const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "Infrastructure", href: "/infrastructure" },
    { name: "Insights", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
] as const;
