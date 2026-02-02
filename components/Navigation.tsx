"use client";

import { Link } from "@/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, PRODUCT_BRANCHES } from "@/lib/constants";
import { BrandLogo } from "@/components/global/BrandLogo";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 glass border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="relative z-50 flex items-center gap-3">
                        {/* <div className="w-10 h-10 bg-gradient-to-br from-[var(--sovereign-emerald)] to-black rounded-lg flex items-center justify-center border border-[var(--sovereign-emerald)]/20 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                            <span className="font-mono font-bold text-white">AM</span>
                        </div> */}
                        <BrandLogo />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-gray-300 hover:text-emerald transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Products Mega Menu */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsProductsOpen(true)}
                            onMouseLeave={() => setIsProductsOpen(false)}
                        >
                            <button className="text-sm font-medium text-gray-300 hover:text-emerald transition-colors flex items-center space-x-1">
                                <span>Products</span>
                                <svg
                                    className={`w-4 h-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <AnimatePresence>
                                {isProductsOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 mt-2 w-80 glass rounded-lg p-4 shadow-2xl"
                                    >
                                        <div className="grid gap-2">
                                            {PRODUCT_BRANCHES.map((product) => (
                                                <Link
                                                    key={product.id}
                                                    href={product.href}
                                                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                                                >
                                                    <span className="text-2xl">{product.icon}</span>
                                                    <div>
                                                        <h3 className="font-semibold text-sm group-hover:text-emerald transition-colors">
                                                            {product.name}
                                                        </h3>
                                                        <p className="text-xs text-gray-400 mt-1">{product.description}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link
                            href="/contact"
                            className="px-6 py-2 bg-gradient-to-r from-emerald to-emerald-dark rounded-lg text-sm font-semibold border border-white/10 hover:shadow-lg hover:shadow-emerald/20 transition-all"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden mt-4 pt-4 border-t border-white/10"
                        >
                            <div className="flex flex-col space-y-3">
                                {NAV_LINKS.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-sm font-medium text-gray-300 hover:text-emerald transition-colors py-2"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}

                                <div className="pt-2 border-t border-white/10">
                                    <p className="text-xs font-semibold text-gray-400 mb-2">Products</p>
                                    {PRODUCT_BRANCHES.map((product) => (
                                        <Link
                                            key={product.id}
                                            href={product.href}
                                            className="flex items-center space-x-2 py-2 text-sm text-gray-300 hover:text-emerald transition-colors"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <span>{product.icon}</span>
                                            <span>{product.name}</span>
                                        </Link>
                                    ))}
                                </div>

                                <Link
                                    href="/contact"
                                    className="mt-4 px-6 py-2 bg-gradient-to-r from-emerald to-emerald-dark rounded-lg text-sm font-semibold text-center border border-white/10"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Get Started
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
