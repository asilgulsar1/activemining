
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '@/lib/blog-data';
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Twitter } from 'lucide-react';

// Note: Since I didn't install react-markdown, I'll build a simple renderer or just inject HTML for now safely since it's internal data.
// Actually, let's keep it simple and just display text with standard paragraph spacing for this sprint.

interface BlogPostPageProps {
    params: Promise<{
        locale: string;
        slug: string;
    }>;
}

export default async function BlogPostPage(props: BlogPostPageProps) {
    const params = await props.params;
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-black text-white pt-24 pb-20">
            {/* Article Header */}
            <div className="container mx-auto px-6 max-w-4xl">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-gray-400 hover:text-[var(--sovereign-emerald)] mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Intelligence
                </Link>

                <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-[var(--sovereign-emerald)]">
                            {tag}
                        </span>
                    ))}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                    {post.title}
                </h1>

                <div className="flex items-center justify-between border-b border-white/10 pb-8 mb-8">
                    <div className="flex items-center gap-6 text-sm text-gray-300">
                        <div className="font-semibold">{post.author}</div>
                        <div className="flex items-center gap-2 text-gray-500">
                            <Calendar className="w-4 h-4" /> {post.date}
                        </div>
                        <div className="flex items-center gap-2 text-gray-500">
                            <Clock className="w-4 h-4" /> {post.readTime}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></button>
                        <button className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></button>
                        <button className="text-gray-400 hover:text-white transition-colors"><Share2 className="w-5 h-5" /></button>
                    </div>
                </div>
            </div>

            {/* Featured Image */}
            <div className="container mx-auto px-0 md:px-6 max-w-5xl mb-12">
                <div className="relative aspect-video w-full md:rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            {/* Article Content */}
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="prose prose-invert prose-lg max-w-none">
                    <div className="font-serif text-lg leading-relaxed text-gray-300 space-y-6 whitespace-pre-line">
                        {post.content}
                    </div>
                </div>

                {/* Footer / CTA */}
                <div className="mt-16 p-8 bg-[var(--sovereign-emerald)]/10 border border-[var(--sovereign-emerald)]/20 rounded-xl text-center">
                    <h3 className="text-xl font-bold mb-2">Interested in Mining Infrastructure?</h3>
                    <p className="text-gray-400 mb-6">Contact our team to discuss hosting capacity or energy partnerships.</p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-3 bg-[var(--sovereign-emerald)] text-white font-bold rounded-lg hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-900/20"
                    >
                        Get in Touch
                    </Link>
                </div>
            </div>
        </article>
    );
}
