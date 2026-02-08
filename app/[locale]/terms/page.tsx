"use client";

import { Link } from "@/navigation";

export default function TermsPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-6 relative z-10 max-w-3xl">
                <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
                <p className="text-gray-400 mb-8">Last updated: February 2026</p>

                <div className="prose prose-invert max-w-none text-gray-300">
                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
                    <p>
                        By accessing or using the Active Mining Group website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Use License</h2>
                    <p>
                        Permission is granted to temporarily download one copy of the materials (information or software) on Active Mining Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Disclaimer</h2>
                    <p>
                        The materials on Active Mining Group's website are provided on an 'as is' basis. Active Mining Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Limitations</h2>
                    <p>
                        In no event shall Active Mining Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Active Mining Group's website.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Governing Law</h2>
                    <p>
                        These terms and conditions are governed by and construed in accordance with the laws of the United Arab Emirates and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                    </p>
                </div>
            </div>
        </div>
    );
}
