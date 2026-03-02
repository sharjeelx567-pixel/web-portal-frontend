"use client"

import { motion } from "framer-motion"
import { SectionContainer, Button, ScrollReveal, RevealList, RevealItem } from "@/components/ui-base"
import { Mail, MessageSquare, Phone, MapPin, Send, Zap } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-24 pb-20 bg-white dark:bg-background overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
            <SectionContainer>
                <ScrollReveal className="max-w-4xl mb-12 md:mb-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[0.9] tracking-tight uppercase">
                        LET'S <span className="text-primary italic">PROTO-TYPE</span> <br />
                        YOUR IDEAS
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl leading-relaxed">
                        Currently reviewing new strategic partnerships for 2024. Reach out to start a high-stakes engineering collaboration.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
                    <ScrollReveal delay={0.1}>
                        <div className="space-y-8">
                            <div className="flex gap-6 group">
                                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-base font-bold uppercase tracking-wide mb-1">Direct Mail</h4>
                                    <p className="text-lg text-muted-foreground font-medium">engineering@arch-lab.tech</p>
                                </div>
                            </div>
                            <div className="flex gap-6 group">
                                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                                    <MessageSquare className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-base font-bold uppercase tracking-wide mb-1">Social Channels</h4>
                                    <p className="text-lg text-muted-foreground font-medium">@archlab_hq across all platforms</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-8 rounded-2xl card-bg-3 border border-primary/20 backdrop-blur-sm">
                            <h4 className="text-xl font-bold uppercase tracking-tight mb-4">HQ ARCHITECTURE</h4>
                            <p className="text-muted-foreground font-medium leading-relaxed mb-6">
                                Distributed globally. Managed from our technical hub in San Francisco.
                            </p>
                            <div className="flex items-center gap-3 text-primary font-semibold uppercase tracking-wide text-xs">
                                <Zap className="w-5 h-5" /> Sub-100ms Response Time Expected
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <motion.form
                            initial={{ opacity: 0, x: 16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="card-bg-2 p-6 md:p-8 rounded-2xl border border-border/50 space-y-6 backdrop-blur-sm shadow-sm"
                        >
                            <div className="space-y-2">
                                <label className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground ml-1">Full Identity</label>
                                <input
                                    type="text"
                                    placeholder="Jared Pied Piper"
                                    className="w-full bg-background/50 border border-border/40 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all font-medium"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground ml-1">Electronic Mail</label>
                                <input
                                    type="email"
                                    placeholder="jared@piedpiper.com"
                                    className="w-full bg-background/50 border border-border/40 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all font-medium"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground ml-1">Technical Brief</label>
                                <textarea
                                    rows={5}
                                    placeholder="Tell us about the problem you are solving..."
                                    className="w-full bg-background/50 border border-border/40 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all font-medium resize-none"
                                />
                            </div>
                            <Button size="xl" variant="primary" className="w-full group">
                                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                Initiate Transmission
                            </Button>
                        </motion.form>
                    </ScrollReveal>
                </div>
            </SectionContainer>
        </div>
    )
}
