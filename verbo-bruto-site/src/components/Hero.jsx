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
          src="/assets/yt_profile.png"
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
          A Palavra não é apresentada como produto.<br />
          Ela é anunciada como verdade.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://www.youtube.com/@verbobruto?sub_confirmation=1"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#0A0A0A] font-['Oswald'] font-bold uppercase tracking-widest px-8 py-4 hover:bg-[#F5F5F5] transition-colors duration-200 text-sm"
          >
            <svg viewBox="0 0 16 16" className="w-4 h-4" fill="currentColor" aria-hidden="true">
              <path d="M3 2l10 6-10 6V2z" />
            </svg>
            Ouça Agora
          </a>
          <a
            href="#sobre"
            className="border border-[#F5F5F5]/40 text-[#F5F5F5] font-['Oswald'] uppercase tracking-widest px-8 py-4 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-200 text-sm"
          >
            Conheça o Projeto
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
