"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils' // I need to make sure I have this utility

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    children: React.ReactNode;
}

export function Button({
    variant = 'primary',
    size = 'md',
    className,
    children,
    ...props
}: ButtonProps) {
    const variants = {
        primary: 'bg-primary text-primary-foreground hover:bg-primary-hover shadow-md hover:shadow-lg',
        secondary: 'bg-accent text-accent-foreground hover:bg-accent-hover shadow-md',
        outline: 'bg-transparent border-2 border-border hover:border-primary text-foreground',
        ghost: 'bg-transparent hover:bg-muted text-muted-foreground hover:text-foreground',
        glass: 'glass hover:bg-card/90 text-foreground shadow-md'
    }

    const sizes = {
        sm: 'px-3 py-2 text-xs',
        md: 'px-5 py-2.5 text-sm',
        lg: 'px-8 py-3.5 text-base',
        xl: 'px-10 py-4 text-base'
    }

    return (
        <motion.button
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className={cn(
                'rounded-xl font-semibold uppercase tracking-wide transition-brand flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    )
}

export function SectionContainer({
    children,
    className,
    id
}: {
    children: React.ReactNode;
    className?: string;
    id?: string
}) {
    return (
        <section
            id={id}
            className={cn("py-12 md:py-20 px-4 sm:px-6 lg:px-8 xl:px-10 w-full max-w-[1520px] mx-auto", className)}
        >
            {children}
        </section>
    )
}

export function RichTextContainer({
    content,
    className
}: {
    content: string;
    className?: string
}) {
    return (
        <div
            className={cn("prose prose-p:text-lg md:prose-p:text-xl", className)}
            dangerouslySetInnerHTML={{ __html: content }}
        />
    )
}

/* ─── Scroll Triggered Animations ─── */

export function ScrollReveal({
    children,
    direction = 'up',
    delay = 0,
    distance = 40,
    duration = 0.8,
    className
}: {
    children: React.ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    delay?: number;
    distance?: number;
    duration?: number;
    className?: string;
}) {
    const fadeVariants = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
            x: direction === 'left' ? -distance : direction === 'right' ? distance : 0,
            filter: "blur(6px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            filter: "blur(0px)",
            transition: {
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={fadeVariants}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function RevealList({
    children,
    stagger = 0.1,
    delay = 0,
    className
}: {
    children: React.ReactNode;
    stagger?: number;
    delay?: number;
    className?: string;
}) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: stagger,
                        delayChildren: delay
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function RevealItem({
    children,
    direction = 'up',
    distance = 30,
    index,
    className
}: {
    children: React.ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right';
    distance?: number;
    /** When set, overrides direction: even index = from left, odd = from right (for card grids) */
    index?: number;
    className?: string;
}) {
    const resolvedDirection: 'up' | 'down' | 'left' | 'right' =
        index !== undefined ? (index % 2 === 0 ? 'left' : 'right') : direction
    const sideDistance = 72
    const moveDistance = resolvedDirection === 'left' || resolvedDirection === 'right' ? sideDistance : (distance || 30)

    return (
        <motion.div
            variants={{
                hidden: {
                    opacity: 0,
                    y: resolvedDirection === 'up' ? moveDistance : resolvedDirection === 'down' ? -moveDistance : 0,
                    x: resolvedDirection === 'left' ? -moveDistance : resolvedDirection === 'right' ? moveDistance : 0,
                    filter: "blur(4px)",
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    filter: "blur(0px)",
                    transition: {
                        duration: 0.55,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
export function Badge({
    children,
    className,
    variant = 'secondary'
}: {
    children: React.ReactNode;
    className?: string;
    variant?: 'primary' | 'secondary' | 'outline';
}) {
    const variants = {
        primary: 'bg-primary text-white border-transparent',
        secondary: 'bg-muted text-foreground border-transparent',
        outline: 'bg-transparent border-border text-foreground hover:border-primary/50'
    }

    return (
        <span className={cn(
            "inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all",
            variants[variant],
            className
        )}>
            {children}
        </span>
    )
}
