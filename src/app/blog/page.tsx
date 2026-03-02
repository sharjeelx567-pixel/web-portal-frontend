"use client"

import { motion } from 'framer-motion'
import { DUMMY_BLOGS } from '@/lib/data'
import { BlogCard } from '@/components/ui-custom'
import { SectionContainer, ScrollReveal, RevealList, RevealItem } from '@/components/ui-base'
import { Search } from 'lucide-react'
import { useState } from 'react'

export default function BlogListingPage() {
    const [search, setSearch] = useState('')

    const filteredBlogs = DUMMY_BLOGS.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.short_description.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="min-h-screen pt-24 pb-16 overflow-x-hidden bg-white dark:bg-background">
            <SectionContainer>
                {/* Header */}
                <ScrollReveal direction="left" distance={40} className="max-w-4xl mb-12 md:mb-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[0.9] tracking-tight uppercase">
                        THE <span className="text-primary italic">JOURNAL</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl leading-relaxed">
                        Technical deep-dives, architectural patterns, and engineering insights from the lab.
                    </p>
                </ScrollReveal>

                {/* Search */}
                <ScrollReveal delay={0.1} className="mb-12">
                    <div className="relative max-w-xl group">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Explore articles..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-14 pr-5 py-4 bg-card border border-border/40 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary/40 outline-none font-medium placeholder:text-muted-foreground/50 transition-all"
                        />
                    </div>
                </ScrollReveal>

                {/* Grid */}
                {filteredBlogs.length > 0 ? (
                    <RevealList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredBlogs.map((post, i) => (
                                <RevealItem key={post.id} index={i}>
                                    <BlogCard post={post} />
                                </RevealItem>
                        ))}
                    </RevealList>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="py-24 text-center glass-darker rounded-2xl border-2 border-dashed border-border/40 font-semibold text-muted-foreground/60 uppercase text-xl"
                    >
                        No articles match your search
                    </motion.div>
                )}
            </SectionContainer>
        </div>
    )
}
