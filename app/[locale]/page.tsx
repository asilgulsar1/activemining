"use client";

import { Link } from "@/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { PARTNERS } from "@/lib/constants";
import { ExpandableServiceMarquee } from "@/components/global/ExpandableServiceMarquee";
import LatestInsights from "@/components/sections/LatestInsights";
import BitcoinHashRateChart from "@/components/charts/BitcoinHashRateChart";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 1.1]);
  const heroY = useTransform(scrollY, [0, 600], [0, 200]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Cinematic Hero Background with Parallax */}
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/assets/hero-command.png"
            alt="Global Command Center"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[var(--midnight-obsidian)]" />
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 opacity-20 bg-[url('/grid-pattern.svg')] mix-blend-overlay" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              {t("hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto drop-shadow-md font-medium">
              {t.rich("hero.subtitle", {
                br: () => <br className="hidden md:block" />
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[var(--sovereign-emerald)] text-white rounded-lg text-lg font-bold border border-emerald-400/20 shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:bg-[var(--sovereign-emerald-hover)] transition-all hover:scale-105"
              >
                {t("hero.startMining")}
              </Link>
              <Link
                href="/infrastructure"
                className="px-8 py-4 bg-transparent border-2 border-white/20 text-white rounded-lg text-lg font-semibold hover:bg-white/10 hover:border-white/40 transition-all hover:scale-105"
              >
                {t("hero.viewInfrastructure")}
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto"
          >
            {[
              { label: t("stats.uptime"), value: "99.9%" },
              { label: t("stats.activeHashrate"), value: "1 EH/s" },
              { label: t("stats.capacityPipeline"), value: "100 MW+" },
            ].map((stat, i) => (
              <div key={i} className="glass-panel rounded-lg p-6 bg-black/60 backdrop-blur-md border border-white/10">
                <div className="text-3xl font-bold text-[var(--sovereign-emerald)] font-mono">{stat.value}</div>
                <div className="text-sm text-gray-300 mt-1 uppercase tracking-wider font-semibold">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Narrative Indicator */}
        <motion.div
          style={{ opacity: heroOpacity }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-emerald/60 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.3em]">{t("hero.scrollExplore")}</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-emerald/0 via-emerald to-emerald/0" />
        </motion.div>
      </section>

      {/* Global Product Marquee */}
      <ExpandableServiceMarquee />

      {/* Latest Insights Section */}
      <LatestInsights />

      {/* Network Security Section */}
      <section className="py-24 bg-gradient-to-b from-black to-[var(--midnight-obsidian)] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {t("networkSecurity.title")}
              </h2>
              <p className="text-gray-400 max-w-xl">
                {t("networkSecurity.description")}
              </p>
            </div>
            <div className="text-right hidden md:block">
              <div className="text-sm text-gray-500 font-mono mb-1">{t("networkSecurity.liveDataFeed")}</div>
              <div className="text-[var(--sovereign-emerald)] font-bold">{t("networkSecurity.apiSource")}</div>
            </div>
          </div>

          <div className="w-full glass-panel p-1 rounded-2xl border border-white/10 bg-black/40 shadow-2xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none" />
            <BitcoinHashRateChart />
          </div>
        </div>
      </section>

      {/* Partners Section - Kept for Trust */}
      <section className="py-20 border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {t.rich("partners.title", {
                    emerald: (chunks) => <span className="text-emerald">{chunks}</span>
                })}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {t("partners.description")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PARTNERS.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass rounded-xl p-8 hover:bg-white/10 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-emerald transition-colors">
                    {partner.name}
                  </h3>
                  {partner.license && (
                    <span className="text-xs font-mono text-gray-500 bg-gray-800 px-2 py-1 rounded">
                      {partner.license}
                    </span>
                  )}
                </div>
                <div className="text-sm font-semibold text-gold mb-3">{partner.role}</div>
                <p className="text-sm text-gray-400 leading-relaxed">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-emerald/10 via-gold/10 to-emerald/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              {t("cta.description")}
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-gradient-to-r from-emerald to-gold rounded-lg text-lg font-semibold border border-white/10 hover:shadow-2xl hover:shadow-emerald/30 transition-all"
            >
              {t("cta.button")}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
