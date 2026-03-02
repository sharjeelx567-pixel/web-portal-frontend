"use client"

import { motion } from 'framer-motion'
import { DUMMY_PORTALS } from '@/lib/data'
import { ResourceCard } from '@/components/ui-custom'
import { SectionContainer, ScrollReveal, RevealList, RevealItem } from '@/components/ui-base'
import { Link as LinkIcon } from 'lucide-react'

export default function ResourcesPage() {
    return (
        <div className="min-h-screen pt-24 pb-16 overflow-x-hidden bg-white dark:bg-background">
            <SectionContainer>
                {/* Header */}
                <ScrollReveal direction="left" distance={40} className="max-w-4xl mb-12 md:mb-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[0.9] tracking-tight uppercase">
                        THE <span className="text-primary italic">PORTALS</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl leading-relaxed">
                        A curated selection of external resources, developer consoles, and engineering hubs managed via the admin system.
                    </p>
                </ScrollReveal>

                {/* Grid */}
                <RevealList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {DUMMY_PORTALS.map((link, i) => (
                        <RevealItem key={link.id} index={i}>
                            <ResourceCard link={link} />
                        </RevealItem>
                    ))}
                </RevealList>

                {/* Info Section */}
                <ScrollReveal delay={0.4} className="mt-16 p-8 md:p-10 card-bg-8 rounded-2xl border border-border/50 relative overflow-hidden backdrop-blur-sm shadow-sm">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                        <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center shrink-0">
                            <LinkIcon className="w-10 h-10 text-white" />
                        </div>
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-foreground mb-3">Request a Portal Addition</h2>
                            <p className="text-muted-foreground font-medium max-w-xl">
                                If you are a collaborator and need access to a specific engineering console or project dashboard, please request it via the contact hub.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </SectionContainer>
        </div>
    )
}
