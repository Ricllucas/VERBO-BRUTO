import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp, stagger } from '../lib/animations'

const redes = [
  {
    name: 'Spotify',
    handle: 'Verbo Bruto',
    desc: 'Ouça o álbum Contemplai o Cordeiro e todas as músicas diretamente no Spotify.',
    url: 'https://open.spotify.com/artist/4xQCF6jOUihlDqmTNumi1L?si=ANE_SXZNTHutUPY0kMhEfw',
    color: '#1DB954',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    handle: '@verbobruto',
    desc: 'Músicas completas, leituras bíblicas, visualizers e séries narrativas. A casa do projeto.',
    url: 'https://www.youtube.com/@verbobruto',
    color: '#FF0000',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor" aria-hidden="true">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1C4.5 20.4 12 20.4 12 20.4s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    handle: '@verbobruto',
    desc: 'Reels, testemunhos, Palavra explícita e perguntas abertas para a audiência.',
    url: 'https://www.instagram.com/verbobruto',
    color: '#E1306C',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    handle: '@verbobruto',
    desc: 'Verdades curtas. 15 a 30 segundos de impacto imediato. Frases que confrontam.',
    url: 'https://www.tiktok.com/@verbobruto',
    color: '#69C9D0',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
      </svg>
    ),
  },
]

export default function Redes() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="redes" className="bg-[#0D0D0D] py-28 px-6">
      <motion.div
        ref={ref}
        className="max-w-5xl mx-auto"
        variants={stagger}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
          <div className="gold-line" />
          <span className="section-label">Plataformas</span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="font-['Oswald'] font-bold uppercase text-[#F5F5F5] leading-tight mb-4"
          style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
        >
          O Verbo em<br />
          <span className="text-[#D4AF37]">todas as redes</span>
        </motion.h2>

        <motion.p variants={fadeUp} className="text-[#888888] text-base leading-relaxed max-w-lg mb-14">
          Cada plataforma tem um propósito distinto na jornada do ouvinte.
          Descubra onde e como o Verbo Bruto proclama.
        </motion.p>

        <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {redes.map((r) => (
            <motion.a
              key={r.name}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${r.name} — ${r.handle}`}
              variants={fadeUp}
              whileHover={{ boxShadow: `0 0 24px ${r.color}25, 0 0 48px ${r.color}10` }}
              className="group bg-[#111111] border border-[#D4AF37]/10 hover:border-[#D4AF37]/50 p-6 flex flex-col gap-4 transition-colors duration-300 hover:bg-[#161616]"
              style={{ borderColor: undefined }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center transition-colors duration-300"
                style={{ color: r.color }}
              >
                {r.icon}
              </div>
              <div className="flex-1">
                <p className="font-['Oswald'] font-bold uppercase text-[#F5F5F5] text-base tracking-wider mb-1 group-hover:text-[#D4AF37] transition-colors">
                  {r.name}
                </p>
                <p className="section-label text-[#888888] mb-3">{r.handle}</p>
                <p className="text-[#888888] text-sm leading-relaxed">{r.desc}</p>
              </div>
              {/* CTA — always visible, more prominent on hover */}
              <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-['Oswald'] uppercase tracking-wider border-t border-[#D4AF37]/10 pt-4 group-hover:border-[#D4AF37]/30 transition-colors">
                <span className="group-hover:text-[#F5F5F5] transition-colors">Acessar</span>
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
