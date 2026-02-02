"use client";

import { Link } from "@/navigation";
import { LEGAL, PARTNERS, PRODUCT_BRANCHES } from "@/lib/constants";
import LegalFooter from "@/components/global/LegalFooter";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald to-gold rounded-lg flex items-center justify-center font-mono font-bold text-lg">
                                AM
                            </div>
                            <span className="text-xl font-semibold">Active Mining</span>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Enterprise Bitcoin mining infrastructure powered by UAE-based institutional partnerships.
                        </p>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="font-semibold text-sm mb-4">Products</h3>
                        <ul className="space-y-2">
                            {PRODUCT_BRANCHES.map((product) => (
                                <li key={product.id}>
                                    <Link
                                        href={product.href}
                                        className="text-sm text-gray-400 hover:text-emerald transition-colors"
                                    >
                                        {product.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold text-sm mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-sm text-gray-400 hover:text-emerald transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/infrastructure" className="text-sm text-gray-400 hover:text-emerald transition-colors">
                                    Infrastructure
                                </Link>
                            </li>
                            <li>
                                <Link href="/partners" className="text-sm text-gray-400 hover:text-emerald transition-colors">
                                    Partners
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-gray-400 hover:text-emerald transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-semibold text-sm mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy" className="text-sm text-gray-400 hover:text-emerald transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-sm text-gray-400 hover:text-emerald transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/investor-relations" className="text-sm text-gray-400 hover:text-emerald transition-colors">
                                    Investor Relations
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Dynamic Legal Footer */}
                <LegalFooter />
            </div>
        </footer>
    );
}
