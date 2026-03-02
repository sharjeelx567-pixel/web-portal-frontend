"use client"

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface HeroVideoProps {
  /** Video source - YouTube URL (youtube.com/shorts/..., youtube.com/watch?v=...) or local path (/video/hero.mp4) */
  src?: string
  /** Optional poster image shown before video loads (local video only) */
  poster?: string
  /** Optional overlay gradient for text readability */
  showOverlay?: boolean
  /** Use dark background so video sits inline below a dark hero (no visual break) */
  variant?: 'default' | 'dark'
  /** Render as full-bleed background behind content (absolute inset-0, fills parent) */
  asBackground?: boolean
}

function getYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/shorts\/|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/)([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
  ]
  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }
  return null
}

export function HeroVideo({
  src = '/video/hero.mp4',
  poster,
  showOverlay = true,
  variant = 'default',
  asBackground = false,
}: HeroVideoProps) {
  const isDark = variant === 'dark'
  const sectionBg = isDark ? 'bg-hero-bg' : 'bg-muted/30'
  const overlayFrom = isDark ? 'from-hero-bg/80' : 'from-background/60'
  const wrapperClass = asBackground
    ? 'absolute inset-0 z-0 w-full h-full overflow-hidden'
    : 'relative w-full aspect-video md:aspect-[21/9] overflow-hidden'
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasError, setHasError] = useState(false)

  const youtubeId = src && getYouTubeVideoId(src)
  const isYouTube = !!youtubeId

  useEffect(() => {
    if (!isYouTube) {
      const video = videoRef.current
      if (!video || hasError) return

      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => { })
      }
    }
  }, [hasError, isYouTube])

  if (isYouTube && youtubeId) {
    const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1`
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        className={`${wrapperClass} ${!asBackground ? sectionBg : ''}`}
      >
        <motion.div
          initial={asBackground ? {} : { scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: asBackground ? 0 : 1.2, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="absolute inset-0"
        >
          <iframe
            src={embedUrl}
            title="Hero video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
        </motion.div>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className={`absolute inset-0 bg-gradient-to-t ${overlayFrom} via-transparent to-transparent pointer-events-none`}
          />
        )}
      </motion.section>
    )
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      className={`${wrapperClass} ${!asBackground ? sectionBg : ''}`}
    >
      {!hasError ? (
        <motion.video
          initial={{ scale: 1.03 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster={poster}
          src={src}
          onError={() => setHasError(true)}
        >
          Your browser does not support the video tag.
        </motion.video>
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-primary/20 via-muted/50 to-primary/10 flex items-center justify-center">
          <p className="text-sm text-muted-foreground">Add your video to public/video/hero.mp4</p>
        </div>
      )}
      {showOverlay && !hasError && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className={`absolute inset-0 bg-gradient-to-t ${overlayFrom} via-transparent to-transparent pointer-events-none`}
        />
      )}
    </motion.section>
  )
}
