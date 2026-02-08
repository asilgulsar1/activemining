import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter, JetBrains_Mono, Manrope } from "next/font/google";
import "../globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FinancialTicker from "@/components/global/FinancialTicker";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
    display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains",
    display: "swap",
});

export const metadata = {
    title: "Active Mining Group | Global Infrastructure",
    description: "Institutional cryptocurrency mining infrastructure. Cloud Mining, Hosting, and Hardware Sales across UK, UAE, and Americas.",
};

// ... existing imports

// ... existing imports

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const messages = await getMessages();

    return (
        <html lang={locale} className="dark">
            <body className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable} antialiased bg-[var(--midnight-obsidian)] text-[var(--cloud-dancer)] selection:bg-[var(--sovereign-emerald)] selection:text-white transition-colors duration-300`}>
                <NextIntlClientProvider messages={messages}>
                    <FinancialTicker />
                    <Navigation />
                    <main className="min-h-screen">
                        {children}
                    </main>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
