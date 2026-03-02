"use client";

import { motion } from "framer-motion";
import { User, Cpu, ShieldCheck, Award, Target, Rocket, Heart, Zap } from "lucide-react";
import { SectionContainer, Button, ScrollReveal, RevealList, RevealItem } from "@/components/ui-base";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            <SectionContainer>
                {/* Hero */}
                <ScrollReveal
                    direction="up"
                    distance={32}
                    className="max-w-5xl mb-12 md:mb-16"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.9] uppercase mb-8">
                        WE ARE THE <br />
                        <span className="text-primary italic">ARCHITECTS</span> <br />
                        OF DIGITAL SPEED
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed max-w-3xl">
                        A boutique digital laboratory specialized in building complex <span className="text-foreground font-bold">cloud-native applications</span> and immersive experiences. We don't just ship code; we engineer competitive advantages.
                    </p>
                </ScrollReveal>

                {/* Values / Bento */}
                <RevealList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 md:mb-20">
                    <RevealItem className="bento-card card-bg-1 lg:col-span-2 flex flex-col justify-center p-6 rounded-xl border border-border/50 backdrop-blur-sm">
                        <Target className="w-14 h-14 md:w-16 md:h-16 text-primary mb-8 bg-primary/10 p-4 rounded-2xl" />
                        <h3 className="text-3xl md:text-4xl mb-6 uppercase tracking-tight font-black">The Mission</h3>
                        <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
                            To empower enterprises with future-ready digital platforms that drive measurable growth and user delight. We believe software should be as beautiful as it is functional.
                        </p>
                    </RevealItem>
                    <RevealItem className="bento-card card-bg-5 flex flex-col justify-center p-6 rounded-xl border border-border/50 backdrop-blur-sm">
                        <ShieldCheck className="w-14 h-14 md:w-16 md:h-16 text-primary mb-8 bg-primary/10 p-4 rounded-2xl" />
                        <h3 className="text-3xl md:text-4xl mb-6 uppercase tracking-tight font-black">Quality</h3>
                        <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
                            Every line of code is peer-reviewed and stress-tested. We engineer for longevity.
                        </p>
                    </RevealItem>
                </RevealList>

                {/* Milestones */}
                <div className="py-12 md:py-16 border-y border-border/40 mb-16 md:mb-20 overflow-hidden relative">
                    <div className="absolute inset-0 bg-primary/[0.02] -skew-y-3" />
                    <RevealList className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {[
                            { label: 'Platform Launched', val: '250+' },
                            { label: 'Lines of Code', val: '2.5M' },
                            { label: 'Global Clients', val: '40+' },
                            { label: 'Years of XP', val: '12+' }
                        ].map((item, i) => (
                            <RevealItem key={i}>
                                <div className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-2 tracking-tight">{item.val}</div>
                                <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary">{item.label}</div>
                            </RevealItem>
                        ))}
                    </RevealList>
                </div>

                {/* Team / Expertise */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
                    <div>
                        <ScrollReveal>
                            <h2 className="text-4xl md:text-5xl mb-8 uppercase font-bold tracking-tight">Our <span className="text-primary italic">DNA</span></h2>
                        </ScrollReveal>
                        <RevealList className="space-y-8">
                            {[
                                { title: 'Scalability First', icon: Zap, text: 'We build systems that grow with your user base, maintaining sub-100ms response times.' },
                                { title: 'User-Centric Visuals', icon: Heart, text: 'Design is not just how it looks; it is how it works and feels to your customers.' },
                                { title: 'Cloud-Native Spirit', icon: Rocket, text: 'Optimized for modern infrastructure like AWS, Kubernetes, and Edge networks.' }
                            ].map((item, i) => (
                                <RevealItem key={i} className="flex gap-8 group">
                                    <div className="w-12 h-12 rounded-xl glass flex items-center justify-center shrink-0 transition-all group-hover:bg-primary group-hover:text-white">
                                        <item.icon className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold uppercase tracking-tight mb-1">{item.title}</h4>
                                        <p className="text-lg text-muted-foreground font-medium">{item.text}</p>
                                    </div>
                                </RevealItem>
                            ))}
                        </RevealList>
                    </div>
                    <ScrollReveal className="relative aspect-square rounded-[3rem] glass-darker p-4">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-[80px]" />
                        <div className="w-full h-full rounded-[2.5rem] border-2 border-dashed border-primary/20 flex items-center justify-center">
                            <Cpu className="w-32 h-32 text-primary opacity-20" />
                        </div>
                    </ScrollReveal>
                </div>

                {/* Final CTA */}
                <ScrollReveal className="mt-20 text-center">
                    <h2 className="text-3xl md:text-5xl mb-8 font-bold uppercase tracking-tight">Ready to explore <span className="text-primary italic">work?</span></h2>
                    <Link href="/">
                        <Button size="xl" variant="primary">View Technical Archive</Button>
                    </Link>
                </ScrollReveal>
            </SectionContainer>
        </div>
    );
}



