import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/animations'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative grain min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/yt_profile.png?v=3"
          alt=""
          fetchpriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/40 to-[#0A0A0A]" />
      </div>

      {/* Cross symbol */}
      <motion.div
        className="absolute top-28 left-1/2 -translate-x-1/2 z-10 opacity-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <svg width="48" height="64" viewBox="0 0 48 64" fill="none" aria-hidden="true">
          <rect x="20" y="0" width="8" height="64" fill="#D4AF37" />
          <rect x="0" y="20" width="48" height="8" fill="#D4AF37" />
        </svg>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="gold-line" />
          <span className="section-label">Proclamação Cristã Cinematográfica</span>
          <div className="gold-line" />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-['Oswald'] font-bold uppercase text-[#F5F5F5] leading-none tracking-tight mb-6"
          style={{ fontSize: 'clamp(56px, 12vw, 120px)' }}
        >
          Verbo<br />
          <span className="text-[#D4AF37]">Bruto</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-[#CCCCCC] text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Música, Palavra e presença.<br />
          Para quem sente que falta algo — e sabe que só Ele preenche.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://open.spotify.com/album/6sdxN3EJaYGQr1ATVKftAe"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#1DB954] text-[#0A0A0A] font-['Oswald'] font-bold uppercase tracking-widest px-8 py-4 hover:bg-[#F5F5F5] transition-colors duration-200 text-sm"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            Ouça no Spotify
          </a>
          <a
            href="https://www.youtube.com/@verbobruto?sub_confirmation=1"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-[#F5F5F5]/40 text-[#F5F5F5] font-['Oswald'] uppercase tracking-widest px-8 py-4 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-200 text-sm"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1C4.5 20.4 12 20.4 12 20.4s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" />
            </svg>
            Assista no YouTube
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <span className="section-label text-[#CCCCCC]" style={{ fontSize: '9px' }}>Role</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <path d="M8 0v18M1 11l7 7 7-7" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </motion.div>
    </section>
  )
}
