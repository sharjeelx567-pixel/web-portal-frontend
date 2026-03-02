"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui-base'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-background relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full" />

            <div className="max-w-xl w-full text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="animate-float"
                >
                    <h1 className="text-[15vw] font-black leading-[0.8] tracking-tighter text-primary/20 mb-10">
                        404
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
                        Lost in the <span className="text-primary italic">Architecture</span>
                    </h2>
                    <p className="text-xl text-muted-foreground font-medium mb-12">
                        The resource you are looking for has been moved, archived, or never existed in this primary reality.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/">
                            <Button variant="primary" size="lg" className="w-full sm:w-auto">
                                <Home className="w-5 h-5 mr-3" /> Back to Base
                            </Button>
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-all flex items-center gap-2"
                        >
                            <ArrowLeft className="w-4 h-4" /> Go back
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
