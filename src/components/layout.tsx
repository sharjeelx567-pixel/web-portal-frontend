"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Archive", href: "/projects" },
        { name: "Journal", href: "/blog" },
        { name: "Portals", href: "/resources" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
            scrolled ? "py-2 shadow-md" : "py-4"
        )}>
            <div className="w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
                <div className={cn(
                    "bg-white dark:bg-card border-b border-border/60 px-5 py-3 flex items-center justify-between rounded-none transition-all duration-300",
                    scrolled && "rounded-xl border border-border/40 shadow-lg shadow-black/5"
                )}>
                    <Link href="/" className="flex items-center gap-2.5 md:gap-3 group">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300 shrink-0"
                        >
                            <span className="text-primary-foreground font-bold text-lg md:text-xl">K</span>
                        </motion.div>
                        <div className="flex flex-col min-w-0">
                            <span className="font-bold text-base md:text-lg tracking-tight text-foreground leading-none truncate uppercase">ARCH-LAB</span>
                            <span className="text-[9px] font-semibold text-primary uppercase tracking-[0.15em] leading-none mt-0.5 truncate">Quality with Excellence</span>
                        </div>
                    </Link>

                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "relative px-4 py-3 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 group/link",
                                        isActive ? "text-primary" : "text-foreground/80 hover:text-primary"
                                    )}
                                >
                                    {link.name}
                                    <span className={cn(
                                        "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300 ease-out",
                                        isActive ? "w-3/4" : "w-0 group-hover/link:w-3/4"
                                    )} />
                                </Link>
                            );
                        })}
                    </div>

                    <div className="hidden md:block">
                        <Link href="/contact">
                            <motion.span
                                className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300"
                                whileHover={{ scale: 1.02, boxShadow: "0 8px 20px -4px oklch(0.59 0.13 75 / 0.4)" }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Contact Us
                            </motion.span>
                        </Link>
                    </div>

                    <button
                        className="md:hidden w-12 h-12 bg-muted/80 flex items-center justify-center rounded-xl text-foreground border border-border/40"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -12, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -12, scale: 0.98 }}
                            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="md:hidden bg-white dark:bg-card border border-border/40 rounded-2xl mt-4 p-8 overflow-hidden shadow-xl"
                        >
                            <div className="flex flex-col gap-1 text-center">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -8 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.05 * i, duration: 0.2 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="block font-bold uppercase tracking-wider text-sm py-4 rounded-xl border-b border-border/20 last:border-none hover:bg-primary/10 hover:text-primary transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                <Link href="/contact" onClick={() => setIsOpen(false)} className="mt-4 block w-full">
                                    <motion.span className="inline-flex items-center justify-center w-full py-4 rounded-xl bg-primary text-primary-foreground text-sm font-bold uppercase tracking-wider" whileTap={{ scale: 0.98 }}>
                                        Contact Us
                                    </motion.span>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}

export function Footer() {
    return (
        <footer className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 xl:px-10 bg-footer-bg relative overflow-hidden scrollbar-thin">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 blur-[140px] rounded-full animate-glow-pulse pointer-events-none" />

            <div className="w-full max-w-[1520px] mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-16">
                    <div className="max-w-3xl">
                        <span className="heading-label text-primary-foreground/90 block mb-4">Strategic Partnership</span>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[0.9] uppercase text-white">
                            Architecture <br className="hidden sm:block" />
                            <span className="text-primary">Meets</span> Growth
                        </h2>
                        <p className="text-lg md:text-xl text-white/85 font-medium max-w-2xl">
                            Currently accepting high-stakes enterprise projects for 2024. Let's build the infrastructure of your success.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10 border-t border-white/20">
                    <div className="flex items-center gap-6">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center cursor-pointer"
                        >
                            <span className="text-primary-foreground font-bold text-xl">K</span>
                        </motion.div>
                        <div className="flex flex-col">
                            <p className="text-sm font-semibold uppercase tracking-wider text-white">© 2024 ARCH-LAB</p>
                            <p className="text-[10px] font-semibold text-white/70 uppercase tracking-widest">Quality with Excellence</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        {[Twitter, Linkedin, Github].map((Icon, i) => (
                            <motion.a
                                key={i}
                                href="#"
                                aria-label={`Social link ${i + 1}`}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.96 }}
                                className="w-10 h-10 rounded-lg border border-white/30 flex items-center justify-center text-white/90 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
                            >
                                <Icon className="w-5 h-5" />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
