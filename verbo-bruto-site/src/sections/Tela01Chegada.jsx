import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Tela01Chegada() {
  const [showTagline, setShowTagline] = useState(false)
  const [showButtons, setShowButtons] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setShowTagline(true), 3000)
    const t2 = setTimeout(() => setShowButtons(true), 5000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  const scrollToManifesto = () => {
    document.getElementById('manifesto')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero_caminhada.png"
          alt="Mensageiro caminhando na estrada"
          className="w-full h-full object-cover object-center opacity-50"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/40 to-[#0A0A0A]" />
      </div>

      {/* Grain overlay */}
      <div className="absolute inset-0 grain z-[1]" />

      {/* Star */}
      <div className="absolute top-[15%] right-[20%] z-[2]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="animate-pulse">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#D4AF37" opacity="0.6"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-['Oswald'] font-bold uppercase text-[#F5F5F5] leading-[1.05] tracking-wider mb-6"
          style={{ fontSize: 'clamp(32px, 7vw, 80px)' }}
        >
          O Verbo não explica.
          <br />
          <span className="text-[#D4AF37]">Ele decreta.</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
          className="w-24 h-px bg-[#D4AF37]/40 mx-auto mb-8 origin-center"
        />

        {showTagline && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="mb-12"
          >
            <p className="text-[#CCCCCC] text-sm md:text-base tracking-[0.3em] uppercase font-light">
              Música. Palavra. Silêncio.
            </p>
            <p className="text-[#888888] text-xs md:text-sm tracking-widest uppercase mt-2">
              Tudo aponta para Cristo.
            </p>
          </motion.div>
        )}

        {showButtons && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={scrollToManifesto}
              className="group inline-flex items-center gap-3 bg-[#D4AF37] text-[#0A0A0A] font-['Oswald'] font-bold uppercase tracking-[0.2em] px-8 py-4 hover:bg-[#F5F5F5] transition-colors duration-300 text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              Entrar na Caminhada
            </button>

            <a
              href="https://open.spotify.com/album/6sdxN3EJaYGQr1ATVKftAe"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-[#F5F5F5]/30 text-[#F5F5F5] font-['Oswald'] uppercase tracking-[0.2em] px-8 py-4 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 text-sm"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              Ouvir o Álbum
            </a>
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[#888888] text-[10px] tracking-[0.3em] uppercase">Role para continuar</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#D4AF37]/40 to-transparent" />
      </motion.div>
    </section>
  )
}
