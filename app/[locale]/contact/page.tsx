"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('submitting');
        // Simulate submission
        setTimeout(() => setFormState('success'), 1500);
    };

    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--sovereign-emerald)]/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6 text-white"
                    >
                        Partner with <span className="text-[var(--sovereign-emerald)]">Active Mining</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400"
                    >
                        Institutional-grade infrastructure solutions for the digital economy.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="glass-panel p-8 rounded-2xl border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-[var(--sovereign-emerald)]/10 rounded-lg text-[var(--sovereign-emerald)]">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Email Us</h4>
                                        <p className="text-gray-400">inquiries@activemining.global</p>
                                        <p className="text-gray-400">support@activemining.global</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-[var(--sovereign-emerald)]/10 rounded-lg text-[var(--sovereign-emerald)]">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Global Headquarters</h4>
                                        <p className="text-gray-400">Dubai Silicon Oasis</p>
                                        <p className="text-gray-400">Dubai, United Arab Emirates</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-2xl bg-gradient-to-br from-[var(--sovereign-emerald)]/20 to-[var(--sovereign-emerald)]/5 border border-[var(--sovereign-emerald)]/20">
                            <h3 className="text-xl font-bold text-white mb-2">Hashrate Inquiry?</h3>
                            <p className="text-gray-300 mb-4">
                                Direct integration for institutional clients looking for &gt;10PH/s capacity.
                            </p>
                            <button
                                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                                className="flex items-center gap-2 text-[var(--sovereign-emerald)] font-semibold hover:gap-3 transition-all"
                            >
                                Schedule Briefing <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        id="contact-form"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="glass-panel p-8 rounded-2xl border border-white/10 relative overflow-hidden"
                    >
                        {formState === 'success' ? (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0B0C10] z-20">
                                <motion.div
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4"
                                >
                                    <Send className="w-8 h-8" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Sent</h3>
                                <p className="text-gray-400">We'll respond within 24 hours.</p>
                                <button
                                    onClick={() => setFormState('idle')}
                                    className="mt-6 text-[var(--sovereign-emerald)] hover:text-white transition-colors"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : null}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--sovereign-emerald)] focus:ring-1 focus:ring-[var(--sovereign-emerald)] transition-colors"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--sovereign-emerald)] focus:ring-1 focus:ring-[var(--sovereign-emerald)] transition-colors"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--sovereign-emerald)] focus:ring-1 focus:ring-[var(--sovereign-emerald)] transition-colors"
                                    placeholder="john@company.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Inquiry Type</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--sovereign-emerald)] focus:ring-1 focus:ring-[var(--sovereign-emerald)] transition-colors [&>option]:bg-black">
                                    <option>Cloud Mining Purchase</option>
                                    <option>ASIC Hosting</option>
                                    <option>Institutional Investment</option>
                                    <option>Technical Support</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--sovereign-emerald)] focus:ring-1 focus:ring-[var(--sovereign-emerald)] transition-colors"
                                    placeholder="Tell us about your requirements..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={formState === 'submitting'}
                                className="w-full bg-[var(--sovereign-emerald)] text-white font-bold py-4 rounded-lg hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-900/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
