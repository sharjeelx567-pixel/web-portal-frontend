"use client"

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface LazySectionProps {
  children: ReactNode
  className?: string
  /** Root margin for Intersection Observer (e.g. "100px" to load slightly before in view) */
  rootMargin?: string
  /** Minimum fraction of element visible to trigger (0-1) */
  threshold?: number
  /** Optional placeholder while not yet in view (reduces CLS if height known) */
  placeholder?: ReactNode
}

/**
 * Renders children only when the section enters the viewport, with a smooth fade-up animation.
 * Use for below-the-fold content to improve initial load and LCP.
 */
export function LazySection({
  children,
  className,
  rootMargin = '100px',
  threshold = 0.01,
  placeholder = null,
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { rootMargin, threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin, threshold])

  return (
    <div ref={ref} className={cn('min-h-[1px]', className)}>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
          {children}
        </motion.div>
      ) : placeholder}
    </div>
  )
}
