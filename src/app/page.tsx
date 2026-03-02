"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, SlidersHorizontal, LayoutGrid, List, ArrowUpRight, Layers, Blocks, BrainCircuit, Palette, Link as LinkIcon, Sparkles } from 'lucide-react'
import { DUMMY_PROJECTS, DUMMY_BLOGS } from '@/lib/data'
import { ProjectCard, ProjectFilter, BlogCard } from '@/components/ui-custom'
import { SectionContainer, ScrollReveal, RevealList, RevealItem, Button } from '@/components/ui-base'
import { cn } from '@/lib/utils'
import { HeroVideo } from '@/components/hero-video'
import { LazySection } from '@/components/lazy-section'
import Link from 'next/link'

export default function HomePage() {
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
    <div className="min-h-screen pb-16 overflow-x-hidden bg-background">
      {/* Hero: video as background, content on top */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative min-h-[85vh] md:min-h-[90vh] flex flex-col justify-center overflow-hidden"
      >
        {/* Video layer – behind everything */}
        <HeroVideo
          src="https://youtube.com/shorts/axfzO0a7YQA?si=2HGO29azN0yOm_TP"
          variant="dark"
          asBackground
          showOverlay={false}
        />
        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0 z-[1] bg-hero-bg/70 pointer-events-none"
          aria-hidden
        />
        <div className="absolute inset-0 z-[1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] pointer-events-none" aria-hidden />

        {/* Content on top of video */}
        <div className="relative z-10 w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 text-center py-28 md:py-32">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="heading-label text-white/90 mb-6"
          >
            Focus Expertise
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] text-white mb-6 max-w-4xl mx-auto"
          >
            Empower your business to{' '}
            <span className="text-primary border-b-2 border-primary pb-1">grow</span>,{' '}
            <span className="text-primary border-b-2 border-primary pb-1">automate</span>, and{' '}
            <span className="text-primary border-b-2 border-primary pb-1">lead</span>.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/contact">
              <motion.span
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground text-sm font-bold uppercase tracking-wider shadow-lg"
                whileHover={{ scale: 1.03, boxShadow: "0 12px 28px -4px oklch(0.59 0.13 75 / 0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch <ArrowUpRight className="w-4 h-4" />
              </motion.span>
            </Link>
            <Link href="/projects">
              <motion.span
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-white/40 text-white text-sm font-bold uppercase tracking-wider hover:bg-white/10 transition-colors duration-300"
                whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.7)" }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Archive
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <SectionContainer>
        {/* Hero / Header Section */}
        <div className="relative mb-12 md:mb-16">
          <motion.div
          className="absolute top-[-100px] left-[-100px] w-64 h-64 bg-primary/5 blur-[120px] rounded-full z-0"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

            <ScrollReveal direction="left" distance={56} className="relative z-10">
            <motion.div
              className="flex justify-start mb-6"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="px-4 py-1.5 rounded-lg glass-darker text-[10px] font-bold uppercase tracking-wider text-primary border border-primary/20 flex items-center gap-2">
                <Sparkles className="w-3 h-3" /> Engineering Premium SaaS Experiences
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[0.9] tracking-tight overflow-hidden">
              <motion.span
                className="block text-accent uppercase"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Our Core <br />
              </motion.span>
              <motion.span
                className="text-primary italic uppercase inline-block relative"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Capabilities.
                <span className="absolute -bottom-1 left-0 w-16 h-0.5 bg-primary rounded-full" />
              </motion.span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl leading-relaxed">
              A historical record of solved problems, built systems, and polished digital experiences managed via our
              <Link href="/resources" className="text-primary hover:underline ml-2">portal architecture</Link>.
            </p>
          </ScrollReveal>
        </div>

        {/* Services Highlight - content from left and right */}
        <div className="py-12 md:py-16 border-y border-border/10 mb-16 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10" />
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
            <ScrollReveal direction="left" distance={64} delay={0.1} className="max-w-xl">
              <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight mb-3 leading-tight">
                <span className="text-accent">High-Stakes</span> <br /><span className="text-primary">Engineering</span>
              </h2>
              <p className="text-muted-foreground font-medium text-base leading-relaxed">
                We specialize in systems that require absolute precision, cloud-native scalability, and high-end aesthetics.
                Our lab handles everything from SaaS architecture to decentralized protocols.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" distance={64} delay={0.15} className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3 w-full lg:w-auto">
              {[
                { label: 'SaaS Architecture', icon: Layers },
                { label: 'Web3 / Protocols', icon: Blocks },
                { label: 'AI Intelligence', icon: BrainCircuit },
                { label: 'Design Systems', icon: Palette }
              ].map((s, i) => (
                <div key={i} className={cn(
                  'p-4 rounded-xl border border-border/50 hover:border-primary/40 transition-brand flex flex-col gap-3 group backdrop-blur-sm shadow-sm',
                  ['card-bg-1', 'card-bg-3', 'card-bg-5', 'card-bg-6'][i]
                )}>
                  <s.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-brand" />
                  <span className="text-[10px] font-black uppercase tracking-widest leading-none">{s.label}</span>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </div>

        {/* Discovery & Search Hub */}
        <ScrollReveal delay={0.1} direction="left" distance={56} className="flex flex-col gap-6 mb-12 relative !z-[100]">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative w-full md:w-[500px] group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Search projects or technologies..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-14 pr-5 py-4 bg-card border border-border/40 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary/40 focus:bg-white dark:focus:bg-card transition-brand outline-none font-medium placeholder:text-muted-foreground/50"
              />
            </div>
            <div className="hidden lg:flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
              <LayoutGrid className="w-4 h-4 text-primary" /> Multi-View Archive
            </div>
          </div>

          <div className="flex flex-wrap gap-3 items-center">
            <div className="p-2.5 glass rounded-xl flex flex-wrap gap-2 items-center relative z-[110]">
              <div className="pl-5 pr-3 py-2 flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 border-r border-border/40 mr-2">
                <SlidersHorizontal className="w-4 h-4" /> Filter By
              </div>
              <ProjectFilter label="Category" active={activeCategory} options={categories} onChange={setActiveCategory} />
              <ProjectFilter label="Stack" active={activeStack} options={stacks} onChange={setActiveStack} />
              <ProjectFilter label="Tag" active={activeTag} options={tags} onChange={setActiveTag} />

              {(activeCategory !== 'All' || activeStack !== 'All' || activeTag !== 'All' || search) && (
                <button
                  onClick={() => { setSearch(''); setActiveCategory('All'); setActiveStack('All'); setActiveTag('All'); }}
                  className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-red-500 hover:bg-red-500/5 transition-all rounded-2xl md:ml-4"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Interactive Results Grid */}
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            <RevealList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-0 mb-20">
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
              className="py-24 text-center bg-muted/5 rounded-2xl border-2 border-dashed border-border/40 mb-20"
            >
              <h3 className="text-4xl font-black text-muted-foreground/20 uppercase tracking-tighter mb-6">No matching architectures found</h3>
              <button
                onClick={() => { setSearch(''); setActiveCategory('All'); setActiveStack('All'); setActiveTag('All'); }}
                className="px-10 py-5 bg-foreground text-background rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform"
              >
                Reset Discovery Search
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Latest from Journal - lazy loaded when in view */}
        <LazySection className="mt-20 mb-12">
          <ScrollReveal className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary block mb-4">The Engineering Lab</span>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">Latest from <br /><span className="text-primary italic">The Journal</span></h2>
              </div>
              <Link href="/blog">
                <Button variant="outline" size="lg" className="rounded-2xl border-border/60">Explore All Insights</Button>
              </Link>
            </div>
            <RevealList className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {DUMMY_BLOGS.slice(0, 2).map((post, i) => (
                <RevealItem key={post.id} index={i}>
                  <BlogCard post={post} />
                </RevealItem>
              ))}
            </RevealList>
          </ScrollReveal>
        </LazySection>

        {/* Final CTA */}
        <ScrollReveal direction="up" distance={40} className="mt-20 p-10 md:p-16 rounded-2xl card-bg-2 border border-primary/20 text-center overflow-hidden relative shadow-lg backdrop-blur-sm">
          <div className="absolute top-0 left-0 w-full h-full bg-primary/[0.03] -z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full -z-10" />
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-8 leading-[0.9]">
            Ready to <span className="text-primary italic">Architect</span> <br /> your next vision?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="xl" variant="primary" className="px-12">Start a Collaboration</Button>
            </Link>
            <Link href="/resources">
              <Button size="xl" variant="outline" className="px-12">Access Portals</Button>
            </Link>
          </div>
        </ScrollReveal>
      </SectionContainer>
    </div>
  )
}
