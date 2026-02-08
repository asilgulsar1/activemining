
import React from 'react';
import Image from 'next/image';
import { Link } from '@/navigation';
import { BLOG_POSTS } from '@/lib/blog-data';
import { ArrowRight, Clock, User } from 'lucide-react';

export default function BlogIndexPage() {
    // Sort by date mostly, but here just taking them as is
    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-20">
            {/* Blog Hero */}
            <div className="container mx-auto px-6 mb-16">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
                    Market Intelligence <span className="text-[var(--sovereign-emerald)]">.</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                    Deep dives into Bitcoin consensus mechanism, energy infrastructure, and institutional finance strategies.
                </p>
            </div>

            {/* Blog Grid */}
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                {BLOG_POSTS.map((post) => (
                    <Link
                        href={`/blog/${post.slug}`}
                        key={post.id}
                        className="group relative block rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-[var(--sovereign-emerald)]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
                    >
                        {/* Image Container */}
                        <div className="relative h-64 w-full overflow-hidden">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                            {/* Category Tag */}
                            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-mono text-[var(--sovereign-emerald)] uppercase tracking-wider">
                                {post.tags[0]}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-mono">
                                <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> {post.readTime}
                                </span>
                                <span className="w-1 h-1 bg-gray-600 rounded-full" />
                                <span>{post.date}</span>
                            </div>

                            <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-[var(--sovereign-emerald)] transition-colors line-clamp-2 leading-tight">
                                {post.title}
                            </h2>

                            <p className="text-gray-400 mb-6 line-clamp-2 leading-relaxed">
                                {post.summary}
                            </p>

                            <div className="flex items-center text-[var(--sovereign-emerald)] font-semibold group/link">
                                Read Article
                                <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
