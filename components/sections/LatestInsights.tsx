
import React from 'react';
import Image from 'next/image';
import { Link } from '@/navigation';
import { BLOG_POSTS } from '@/lib/blog-data';
import { ArrowRight, Clock } from 'lucide-react';

export default function LatestInsights() {
    const latestPosts = BLOG_POSTS.slice(0, 3);

    return (
        <section className="py-24 bg-black border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Market Intelligence
                        </h2>
                        <p className="text-gray-400 max-w-xl">
                            Analysis on digital asset infrastructure, energy markets, and institutional investment strategies.
                        </p>
                    </div>
                    <Link
                        href="/blog"
                        className="hidden md:flex items-center text-[var(--sovereign-emerald)] font-semibold hover:text-emerald-400 transition-colors mt-4 md:mt-0"
                    >
                        View All Insights <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {latestPosts.map((post) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.slug}`}
                            className="group block bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-[var(--sovereign-emerald)]/30 hover:bg-white/10 transition-all duration-500"
                        >
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3 font-mono">
                                    <span className="text-[var(--sovereign-emerald)]">{post.tags[0]}</span>
                                    <span className="w-1 h-1 bg-gray-600 rounded-full" />
                                    <span>{post.date}</span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--sovereign-emerald)] transition-colors line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-sm text-gray-400 line-clamp-3 leading-relaxed mb-4">
                                    {post.summary}
                                </p>

                                <span className="inline-flex items-center text-xs font-bold text-white uppercase tracking-wider group-hover:underline decoration-[var(--sovereign-emerald)] underline-offset-4">
                                    Read Analysis
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-8 md:hidden text-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-[var(--sovereign-emerald)] font-semibold hover:text-emerald-400 transition-colors"
                    >
                        View All Insights <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
