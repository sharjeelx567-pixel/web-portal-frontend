"use client"

import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import {
    Puzzle,
    Lightbulb,
    Cpu,
    Zap,
    AlertTriangle,
    TrendingUp,
    Link2,
    CalendarDays,
    Github,
    Globe,
    ChevronLeft,
    Layers,
    Server,
    Boxes,
    Video
} from 'lucide-react'
import Link from 'next/link'
import { DUMMY_PROJECTS } from '@/lib/data'
import { TechBadge, MetricCard, ProjectUISection, ProjectGallery } from '@/components/ui-custom'
import { Button, RichTextContainer, ScrollReveal, RevealList, RevealItem } from '@/components/ui-base'

export default function ProjectDetailsPage() {
    const { slug } = useParams()
    const router = useRouter()
    const project = DUMMY_PROJECTS.find(p => p.slug === slug)

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-4xl font-black uppercase">Project Not Found</h1>
            </div>
        )
    }

    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">

                {/* 1. Navigation & Header */}
                <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-12"
                >
                    <motion.button
                        onClick={() => router.back()}
                        whileHover={{ x: -4 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-semibold uppercase tracking-wider text-xs mb-8 group"
                    >
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                        Back to Archive
                    </motion.button>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="max-w-4xl">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <TechBadge name={project.project_category} className="bg-primary text-white border-none" />
                                <span className="text-[10px] md:text-xs font-semibold text-muted-foreground uppercase tracking-wider">{project.project_type}</span>
                                <span className="text-[10px] md:text-xs font-medium text-muted-foreground/60 uppercase tracking-wider md:block hidden">• {project.industry_domain}</span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.9] tracking-tight uppercase mb-6">
                                {project.title}
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
                                {project.short_description}
                            </p>
                        </div>

                        <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
                            <div className="flex items-center gap-3 bg-muted/20 px-4 py-2.5 rounded-xl border border-border/40 text-xs font-semibold uppercase tracking-wider">
                                <CalendarDays className="w-5 h-5 text-primary" />
                                {project.start_date} — {project.end_date}
                            </div>
                            <div className="flex gap-2 flex-wrap justify-end">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50">#{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 2. Banner Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`w-full aspect-video md:aspect-[21/9] rounded-2xl bg-gradient-to-br ${project.thumbnail_image} border border-border/40 shadow-lg mb-16 relative overflow-hidden group`}
                >
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-700" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                    <div className="absolute bottom-12 left-12">
                        <span className="glass px-4 py-2 rounded-xl text-[10px] font-semibold uppercase tracking-wider">Master Identity Visual</span>
                    </div>
                </motion.div>

                {/* 3-9 Structured Sections */}
                <div className="space-y-8">

                    <ScrollReveal>
                        <ProjectUISection title="The Problem" icon={Puzzle}>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium max-w-3xl">
                                {project.problem_statement}
                            </p>
                        </ProjectUISection>
                    </ScrollReveal>

                    <ScrollReveal>
                        <ProjectUISection title="Our Solution" icon={Lightbulb}>
                            <div className="max-w-3xl">
                                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium mb-8">
                                    {project.solution_overview}
                                </p>
                                <div className="p-6 rounded-xl bg-primary/5 border border-primary/10 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] group-hover:bg-primary/20 transition-all" />
                                    <h4 className="text-base font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                                        <Zap className="w-6 h-6 text-primary" /> My Primary Contribution
                                    </h4>
                                    <p className="text-base text-foreground font-medium relative z-10 leading-relaxed">
                                        "{project.your_role}"
                                    </p>
                                </div>
                            </div>
                        </ProjectUISection>
                    </ScrollReveal>

                    <ScrollReveal>
                        <ProjectUISection title="Stack & Pattern" icon={Cpu}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="p-5 rounded-xl glass-darker border-l-4 border-l-primary">
                                    <span className="text-[10px] font-semibold uppercase tracking-wider text-primary block mb-2">Core Pattern</span>
                                    <span className="text-lg font-bold uppercase tracking-tight">{project.architecture_type}</span>
                                </div>
                                <div className="p-5 rounded-xl glass-darker border-l-4 border-l-accent">
                                    <span className="text-[10px] font-semibold uppercase tracking-wider text-accent block mb-2">Infrastructure</span>
                                    <span className="text-lg font-bold uppercase tracking-tight">{project.deployment_method}</span>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.tech_stack.map(tech => (
                                    <div key={tech} className="px-4 py-3 rounded-xl glass-darker border border-border/40 flex items-center gap-3 hover:border-primary/40 transition-all group">
                                        <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform" />
                                        <span className="text-sm font-semibold uppercase tracking-wider">{tech}</span>
                                    </div>
                                ))}
                            </div>
                        </ProjectUISection>
                    </ScrollReveal>

                    <ProjectUISection title="Key Features" icon={Zap}>
                        <RevealList className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.core_features.map((feature, i) => (
                                <RevealItem key={i} className="flex gap-4 p-5 rounded-xl glass-darker border border-border/20 group hover:border-primary/20 transition-all">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 font-bold text-sm text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        {String(i + 1).padStart(2, '0')}
                                    </div>
                                    <p className="text-base font-semibold text-foreground leading-tight flex items-center">{feature}</p>
                                </RevealItem>
                            ))}
                        </RevealList>
                    </ProjectUISection>

                    <ProjectUISection title="The Hurdles" icon={AlertTriangle}>
                        <RevealList className="space-y-8">
                            {project.technical_challenges.map((challenge, i) => (
                                <RevealItem key={i} className="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors">
                                    <div className="absolute top-0 left-[-5px] w-2 h-2 rounded-full bg-primary" />
                                    <h4 className="text-lg font-bold text-foreground mb-3 uppercase tracking-tight">{challenge}</h4>
                                    <div className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                                        <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                                            <span className="text-emerald-500 font-semibold uppercase text-[10px] tracking-wider mr-2 border border-emerald-500/20 px-2 py-0.5 rounded">Resolution</span>
                                            {project.how_challenges_were_solved[i]}
                                        </p>
                                    </div>
                                </RevealItem>
                            ))}
                        </RevealList>
                    </ProjectUISection>

                    <ProjectUISection title="Measurable Results" icon={TrendingUp}>
                        <RevealList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            {project.measurable_results.map((res, i) => (
                                <RevealItem key={i}>
                                    <MetricCard label="verified outcome" value={res.split(' ')[0]} />
                                </RevealItem>
                            ))}
                        </RevealList>
                        <RevealList className="grid grid-cols-1 gap-4">
                            {project.measurable_results.map((res, i) => (
                                <RevealItem key={i} className="p-4 rounded-xl glass-darker border-l-4 border-primary/40 pl-6">
                                    <p className="text-sm font-semibold text-foreground">{res}</p>
                                </RevealItem>
                            ))}
                        </RevealList>
                    </ProjectUISection>

                    {/* Full Narrative Section */}
                    <ScrollReveal>
                        <ProjectUISection title="Full Narrative" icon={Layers}>
                            <RichTextContainer content={project.description} />
                        </ProjectUISection>
                    </ScrollReveal>

                    {/* Gallery Section */}
                    {project.gallery_images && (
                        <ScrollReveal>
                            <ProjectUISection title="Visual Gallery" icon={Boxes}>
                                <ProjectGallery images={project.gallery_images} />
                            </ProjectUISection>
                        </ScrollReveal>
                    )}

                </div>

                {/* 10. Links Buttons */}
                <div className="mt-16 pt-12 border-t border-border/40">
                    <div className="flex flex-wrap items-center justify-between gap-8">
                        <div>
                            <h3 className="text-2xl font-bold uppercase mb-2">Project <span className="text-primary italic">Resources</span></h3>
                            <p className="text-muted-foreground font-medium">Explore the live deployment, source files, or video demos of this project.</p>
                        </div>
                        <div className="flex flex-wrap gap-6">
                            {project.github_link && (
                                <Link href={project.github_link}>
                                    <Button size="lg" variant="outline">
                                        <Github className="w-6 h-6" /> Repository
                                    </Button>
                                </Link>
                            )}
                            {project.video_demo_link && (
                                <Link href={project.video_demo_link}>
                                    <Button size="lg" variant="outline">
                                        <Video className="w-6 h-6" /> Case Study Video
                                    </Button>
                                </Link>
                            )}
                            {project.live_demo_link && (
                                <Link href={project.live_demo_link}>
                                    <Button size="lg" variant="secondary" className="px-16">
                                        <Globe className="w-6 h-6" /> Launch Platform
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="mt-16 p-8 md:p-12 rounded-2xl card-bg-4 text-center border border-primary/20 backdrop-blur-sm shadow-sm">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-primary block mb-4">Inspired by this project?</span>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl mb-8 font-bold uppercase tracking-tight">Ready to architect <br /> your next big <span className="text-primary italic">vision?</span></h2>
                    <Link href="/contact">
                        <Button size="xl" variant="primary">Start a Collaboration</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
