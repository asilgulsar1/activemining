"use client";

import { useLocale } from "next-intl";
import { Link } from "@/navigation";
import { LEGAL } from "@/lib/constants";

export default function LegalFooter() {
    const locale = useLocale();
    const currentYear = new Date().getFullYear();

    // Dynamic Entity Logic
    const isUK = locale === 'en-gb'; // Example logic, can be refined based on strict path
    const legalEntity = isUK ? "Alpha Energy Group PLC" : "LC Group International";
    const jurisdiction = isUK ? "United Kingdom" : LEGAL.JURISDICTION;

    return (
        <div className="border-t border-[var(--titanium-silver)]/10 pt-8 space-y-4">
            {/* Regulatory Disclaimers */}
            <div className="flex flex-wrap gap-6 text-xs font-mono text-gray-500">
                <div>
                    <span className="text-gray-400">Trading Name:</span>{" "}
                    <span className="text-[var(--sovereign-emerald)] font-semibold">{legalEntity}</span>
                </div>
                {!isUK && (
                    <>
                        <div>
                            <span className="text-gray-400">Segments Lic:</span>{" "}
                            <span className="text-gray-300">{LEGAL.UAE_LICENSES.SEGMENTS}</span>
                        </div>
                        <div>
                            <span className="text-gray-400">LC Group Lic:</span>{" "}
                            <span className="text-gray-300">{LEGAL.UAE_LICENSES.LC_GROUP}</span>
                        </div>
                    </>
                )}
                <div>
                    <span className="text-gray-400">Jurisdiction:</span>{" "}
                    <span>{jurisdiction}</span>
                </div>
            </div>

            {/* Heads of Terms / Risk Warning */}
            <div className="bg-[var(--gold)]/5 border border-[var(--gold)]/10 rounded-lg p-4">
                <p className="text-xs text-gray-400 leading-relaxed">
                    <span className="font-semibold text-[var(--gold)]">Risk Warning:</span> Cryptocurrency mining involves significant risk and potential loss of capital.
                    {LEGAL.HOT_DISCLAIMER}
                </p>
            </div>

            {/* Copyright & Links */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 pt-4">
                <p>
                    © {currentYear} {LEGAL.COMPANY_NAME}. All rights reserved.
                </p>
                <div className="flex gap-4">
                    <Link href="/privacy" className="hover:text-[var(--sovereign-emerald)] transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-[var(--sovereign-emerald)] transition-colors">Terms of Service</Link>
                </div>
            </div>
        </div>
    );
}
