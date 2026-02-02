import Hero from "@/components/cloud-mining/Hero";
import Calculator from "@/components/cloud-mining/Calculator";
import PlansGrid from "@/components/cloud-mining/PlansGrid";

export const metadata = {
    title: "Cloud Mining | Active Mining Group",
    description: "Start mining Bitcoin instantly with our institutional-grade infrastructure. Fractional hashrate ownership with daily payouts.",
};

export default function CloudMiningPage() {
    return (
        <main className="bg-slate-950">
            <Hero />
            <Calculator />
            <PlansGrid />
        </main>
    );
}
