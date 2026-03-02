"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Github, Globe, Video, Calendar, Tag, ChevronDown, Check, Search, ExternalLink, Link as LinkIcon } from 'lucide-react'
import Link from 'next/link'
import { Project, BlogPost, PortalLink } from '@/lib/data'
import { cn } from '@/lib/utils'
import { SectionContainer, Badge } from './ui-base'

/* ─── TechBadge ─── */
export function TechBadge({ name, className }: { name: string; className?: string }) {
    return (
        <span className={cn(
            "px-3 py-1 bg-primary/5 border border-primary/20 text-primary text-[10px] font-semibold uppercase tracking-wider rounded-lg whitespace-nowrap",
            className
        )}>
            {name}
        </span>
    )
}

/* ─── ProjectCard ─── */
export function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="group bento-card card-bg-1 flex flex-col h-full hover:shadow-xl hover:shadow-primary/10 border-border/50 backdrop-blur-sm"
        >
            <Link href={`/projects/${project.slug}`} className="flex flex-col h-full">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-5 bg-muted/20 border border-border/40">
                    <div
                        className={cn(
                            "absolute inset-0 bg-gradient-to-br opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-700 ease-out",
                            project.thumbnail_image
                        )}
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />

                    <div className="absolute top-6 right-6 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                        <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-2xl">
                            <ArrowUpRight className="w-6 h-6" />
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex flex-col p-5 pt-0">
                    <div className="flex items-center gap-2 mb-3">
                        <TechBadge name={project.project_category} />
                        <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">• {project.project_type}</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-brand tracking-tight">
                        {project.title}
                    </h3>

                    <p className="text-sm text-muted-foreground font-medium mb-5 line-clamp-2 leading-relaxed">
                        {project.short_description}
                    </p>

                    <div className="mt-auto flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-[10px] font-medium text-muted-foreground/60 uppercase tracking-wider">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}

/* ─── ProjectFilter (Advanced) ─── */
export function ProjectFilter({
    options,
    active,
    onChange,
    label
}: {
    options: string[];
    active: string;
    onChange: (val: string) => void;
    label: string;
}) {
    const [open, setOpen] = useState(false)

    return (
        <div className={cn("relative", open ? "z-[100]" : "z-10")}>
            <button
                onClick={() => setOpen(!open)}
                className={cn(
                    "flex items-center gap-3 px-6 py-3.5 rounded-2xl border border-border/40 bg-card/50 backdrop-blur-md transition-all text-xs font-black uppercase tracking-widest",
                    active !== 'All' ? "border-primary/40 text-primary ring-4 ring-primary/5" : "text-muted-foreground hover:text-foreground"
                )}
            >
                {label}: <span className={active !== 'All' ? "text-primary" : "text-foreground"}>{active}</span>
                <ChevronDown className={cn("w-4 h-4 transition-transform", open && "rotate-180")} />
            </button>

            <AnimatePresence>
                {open && (
                    <>
                        <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute top-full left-0 mt-2 w-64 bg-card/95 backdrop-blur-2xl border border-border/60 z-50 rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <div className="p-2 flex flex-col max-h-[400px] overflow-y-auto custom-scrollbar">
                                {['All', ...options].map(opt => (
                                    <button
                                        key={opt}
                                        onClick={() => { onChange(opt); setOpen(false); }}
                                        className={cn(
                                            "flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all",
                                            active === opt ? "bg-primary text-white" : "hover:bg-muted text-muted-foreground hover:text-foreground"
                                        )}
                                    >
                                        {opt}
                                        {active === opt && <Check className="w-4 h-4" />}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}

/* ─── MetricCard ─── */
export function MetricCard({ label, value }: { label: string; value: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="p-5 rounded-xl card-bg-7 border border-border/50 text-center shadow-md hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group backdrop-blur-sm"
        >
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{value}</div>
            <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">{label}</div>
        </motion.div>
    )
}

/* ─── ProjectSection (Structured Layout UI) ─── */
export function ProjectUISection({ title, children, icon: Icon }: { title: string; children: React.ReactNode; icon: any }) {
    return (
        <section className="py-10 md:py-14 border-b border-border/40 last:border-none">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                <div className="md:w-1/3">
                    <div className="sticky top-24">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center border border-primary/10">
                                <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-xl font-bold uppercase tracking-tight text-foreground">{title}</h2>
                        </div>
                        <div className="w-10 h-0.5 bg-primary/20 rounded-full" />
                    </div>
                </div>
                <div className="md:w-2/3 flex flex-col justify-center">
                    {children}
                </div>
            </div>
        </section>
    )
}

/* ─── ProjectGallery ─── */
export function ProjectGallery({ images }: { images: string[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {images.map((img, i) => (
                <motion.div
                    key={i}
                    whileHover={{ scale: 0.99 }}
                    className={cn(
                        "aspect-video rounded-xl bg-gradient-to-br border border-border/40 shadow-md relative overflow-hidden group",
                        img,
                        i === 0 && "md:col-span-2 aspect-[21/9]"
                    )}
                >
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
                </motion.div>
            ))}
        </div>
    )
}

/* ─── BlogCard ─── */

export function BlogCard({ post }: { post: BlogPost }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.08)" }}
            className="group card-bg-2 rounded-xl overflow-hidden border border-border/50 hover:border-primary/40 transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-lg backdrop-blur-sm"
        >
            <div className="relative aspect-video overflow-hidden">
                <div
                    className={cn("absolute inset-0 bg-gradient-to-br group-hover:scale-105 transition-transform duration-700 ease-out", post.thumbnail_image)}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-brand" />
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 glass rounded-lg text-[10px] font-semibold uppercase tracking-wider text-white border border-white/20">
                        {post.category}
                    </span>
                </div>
            </div>
            <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{post.publishDate}</span>
                    <span className="text-muted-foreground/30 text-[10px]">•</span>
                    <span className="text-[10px] font-medium uppercase tracking-wider text-primary">{post.author}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-brand tracking-tight line-clamp-2">
                    {post.title}
                </h3>
                <p className="text-sm text-muted-foreground font-medium mb-5 line-clamp-2">
                    {post.short_description}
                </p>
                <div className="mt-auto pt-4 border-t border-border/10 flex items-center justify-between">
                    <div className="flex gap-2">
                        {post.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="text-[9px] font-medium text-muted-foreground/60 uppercase tracking-wider">#{tag}</span>
                        ))}
                    </div>
                    <Link href={`/blog/${post.slug}`} className="w-9 h-9 rounded-lg glass flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

/* ─── ResourceCard ─── */

export function ResourceCard({ link }: { link: PortalLink }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -4, boxShadow: "0 16px 32px -8px rgba(0,0,0,0.06)" }}
            className="group card-bg-5 p-5 rounded-xl border border-border/50 hover:border-primary/40 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg backdrop-blur-sm"
        >
            <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-brand">
                    <LinkIcon className="w-6 h-6" />
                </div>
                <Badge className="bg-primary/10 text-primary border-none text-[10px] font-semibold uppercase tracking-wider px-3 py-1">
                    {link.category}
                </Badge>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2 tracking-tight group-hover:text-primary transition-brand">
                {link.name}
            </h3>
            <p className="text-sm text-muted-foreground font-medium mb-5 line-clamp-2">
                Managed resource accessible via the administrative portal. Link leads to {link.url.replace('https://', '')}.
            </p>
            <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-all"
            >
                Visit Resource <ExternalLink className="w-3 h-3" />
            </a>
        </motion.div>
    )
}
