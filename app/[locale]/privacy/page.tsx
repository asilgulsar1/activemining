"use client";

import { Link } from "@/navigation";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-6 relative z-10 max-w-3xl">
                <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
                <p className="text-gray-400 mb-8">Last updated: February 2026</p>

                <div className="prose prose-invert max-w-none text-gray-300">
                    <p>
                        Active Mining Group ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Information We Collect</h2>
                    <p>
                        We may collect several types of information from and about users of our Website, including information:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>By which you may be personally identified, such as name, postal address, e-mail address, telephone number ("personal information").</li>
                        <li>That is about you but individually does not identify you.</li>
                        <li>About your internet connection, the equipment you use to access our Website, and usage details.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. How We Use Your Information</h2>
                    <p>
                        We use information that we collect about you or that you provide to us, including any personal information:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>To present our Website and its contents to you.</li>
                        <li>To provide you with information, products, or services that you request from us.</li>
                        <li>To fulfill any other purpose for which you provide it.</li>
                        <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Disclosure of Your Information</h2>
                    <p>
                        We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information that we collect or you provide as described in this privacy policy with our subsidiaries and affiliates.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Contact Information</h2>
                    <p>
                        To ask questions or comment about this privacy policy and our privacy practices, contact us at: <a href="mailto:legal@activemining.com" className="text-[var(--sovereign-emerald)] hover:underline">legal@activemining.com</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
