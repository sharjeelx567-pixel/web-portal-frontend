"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, SlidersHorizontal, LayoutGrid, List } from 'lucide-react'
import { DUMMY_PROJECTS } from '@/lib/data'
import { ProjectCard, ProjectFilter } from '@/components/ui-custom'
import { SectionContainer, ScrollReveal, RevealList, RevealItem } from '@/components/ui-base'

export default function ProjectsListingPage() {
    const [search, setSearch] = useState('')
    const [activeCategory, setActiveCategory] = useState('All')
    const [activeStack, setActiveStack] = useState('All')
    const [activeTag, setActiveTag] = useState('All')

    // Extract unique options
    const categories = Array.from(new Set(DUMMY_PROJECTS.map(p => p.project_category)))
    const stacks = Array.from(new Set(DUMMY_PROJECTS.flatMap(p => p.tech_stack))).sort()
    const tags = Array.from(new Set(DUMMY_PROJECTS.flatMap(p => p.tags))).sort()

    const filteredProjects = DUMMY_PROJECTS.filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
            p.short_description.toLowerCase().includes(search.toLowerCase())
        const matchesCategory = activeCategory === 'All' || p.project_category === activeCategory
        const matchesStack = activeStack === 'All' || p.tech_stack.includes(activeStack)
        const matchesTag = activeTag === 'All' || p.tags.includes(activeTag)
        return matchesSearch && matchesCategory && matchesStack && matchesTag
    })

    return (
        <div className="min-h-screen pt-24 pb-16 overflow-x-hidden">
            <SectionContainer>
                {/* Header */}
                <ScrollReveal direction="left" distance={40} className="max-w-4xl mb-12 md:mb-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[0.9] tracking-tight uppercase">
                        THE <span className="text-primary italic">ARCHIVE</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl leading-relaxed">
                        A historical record of solved problems, built systems, and polished digital experiences.
                    </p>
                </ScrollReveal>

                {/* Filters / Search Bar */}
                <ScrollReveal delay={0.1} className="flex flex-col gap-6 mb-12 relative !z-[100]">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="relative w-full md:w-[450px] group">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <input
                                type="text"
                                placeholder="Search by project name or description..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-14 pr-5 py-4 bg-card border border-border/40 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all outline-none font-medium placeholder:text-muted-foreground/50"
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <button className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all">
                                <LayoutGrid className="w-5 h-5" />
                            </button>
                            <button className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-muted-foreground/30 transition-all">
                                <List className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 items-center">
                        <div className="p-2 glass rounded-[2rem] flex flex-wrap gap-2 items-center relative z-[110]">
                            <div className="pl-4 pr-2 py-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 border-r border-border/40 mr-2">
                                <SlidersHorizontal className="w-3.5 h-3.5" /> Filter By
                            </div>
                            <ProjectFilter
                                label="Category"
                                active={activeCategory}
                                options={categories}
                                onChange={setActiveCategory}
                            />
                            <ProjectFilter
                                label="Stack"
                                active={activeStack}
                                options={stacks}
                                onChange={setActiveStack}
                            />
                            <ProjectFilter
                                label="Tag"
                                active={activeTag}
                                options={tags}
                                onChange={setActiveTag}
                            />

                            {(activeCategory !== 'All' || activeStack !== 'All' || activeTag !== 'All' || search) && (
                                <button
                                    onClick={() => { setSearch(''); setActiveCategory('All'); setActiveStack('All'); setActiveTag('All'); }}
                                    className="px-6 py-3.5 text-[10px] font-black uppercase tracking-widest text-red-500 hover:bg-red-500/5 transition-all rounded-xl"
                                >
                                    Clear all
                                </button>
                            )}
                        </div>
                    </div>
                </ScrollReveal>

                {/* Grid */}
                <AnimatePresence mode="popLayout">
                    {filteredProjects.length > 0 ? (
                        <RevealList
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-0"
                        >
                            {filteredProjects.map((project, i) => (
                                <RevealItem key={project.id} index={i}>
                                    <ProjectCard project={project} />
                                </RevealItem>
                            ))}
                        </RevealList>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="py-40 text-center"
                        >
                            <h3 className="text-4xl font-black text-muted-foreground/20 uppercase tracking-tighter mb-4">No Matches Found</h3>
                            <button
                                onClick={() => { setSearch(''); setActiveCategory('All'); setActiveStack('All'); setActiveTag('All'); }}
                                className="text-primary font-black uppercase tracking-widest text-sm underline underline-offset-8"
                            >
                                Reset all filters
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </SectionContainer>
        </div>
    )
}
