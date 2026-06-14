import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp, stagger } from '../lib/animations'

const journey = ['Desertos', 'Perdas', 'Silêncio', 'Tempestades']

export default function Mensageiro() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="mensageiro" className="relative py-28 px-6 overflow-hidden bg-[#0A0A0A]">
      {/* Banner background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/banner.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-top opacity-25"
          style={{ filter: 'grayscale(60%) contrast(1.1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/75 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]/80" />
      </div>

      <motion.div
        ref={ref}
        className="relative z-10 max-w-5xl mx-auto"
        variants={stagger}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Image side */}
          <motion.div variants={fadeUp} className="flex flex-col items-center md:items-start">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute -inset-3 border border-[#D4AF37]/30" />
              <div className="absolute -inset-1 border border-[#D4AF37]/10" />
              <img
                src="/assets/yt_profile.png?v=3"
                alt="O Mensageiro — Verbo Bruto"
                className="w-full h-full object-cover object-center grayscale contrast-125"
              />
              {/* Cross overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10" aria-hidden="true">
                <svg width="80" height="110" viewBox="0 0 80 110" fill="none">
                  <rect x="34" y="0" width="12" height="110" fill="#D4AF37" />
                  <rect x="0" y="35" width="80" height="12" fill="#D4AF37" />
                </svg>
              </div>
            </div>
            {/* Journey tags */}
            <div className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start">
              {journey.map((j) => (
                <span
                  key={j}
                  className="border border-[#D4AF37]/30 text-[#D4AF37] px-3 py-1 text-xs font-['Inter'] tracking-wider"
                >
                  {j}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Text side */}
          <div className="flex flex-col gap-6">
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <div className="gold-line" />
              <span className="section-label">O Personagem</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-['Oswald'] font-bold uppercase text-[#F5F5F5] leading-tight"
              style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}
            >
              O <span className="text-[#D4AF37]">Mensageiro</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-[#CCCCCC] text-base leading-relaxed">
              O Mensageiro não é herói, celebridade ou influenciador. É o rosto do projeto —
              mas mais do que símbolo visual, é testemunha de uma jornada real. Alguém que atravessou
              desertos, perdas, silêncio e tempestades, e continua caminhando.
            </motion.p>

            <motion.p variants={fadeUp} className="text-[#888888] text-base leading-relaxed">
              A proposta é que a audiência não olhe de longe. Que caminhe junto. Que se reconheça
              na jornada — e encontre, no caminho, a Palavra que sustenta. E quando a jornada toca
              fundo, a música é o que traduz o que as palavras não conseguem dizer.
            </motion.p>

            <motion.blockquote
              variants={fadeUp}
              className="border-l-2 border-[#D4AF37] pl-6"
            >
              <p className="text-[#D4AF37] font-['Oswald'] text-lg italic leading-relaxed">
                "A audiência não deve apenas olhar para ele.<br />
                Deve caminhar com ele."
              </p>
            </motion.blockquote>

            {/* CTA */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start gap-4 pt-2">
              <a
                href="https://open.spotify.com/album/6sdxN3EJaYGQr1ATVKftAe"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#1DB954] text-[#0A0A0A] font-['Oswald'] font-bold uppercase tracking-widest px-6 py-3 hover:bg-[#F5F5F5] transition-colors duration-200 text-xs"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
                Ouça a trilha sonora da jornada
              </a>
              <a
                href="https://www.youtube.com/@verbobruto?sub_confirmation=1"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-[#D4AF37] text-[#D4AF37] font-['Oswald'] uppercase tracking-widest px-6 py-3 hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-200 text-xs"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" aria-hidden="true">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1C4.5 20.4 12 20.4 12 20.4s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" />
                </svg>
                Acompanhe a jornada no YouTube
              </a>
            </motion.div>

            {/* Moto symbol */}
            <motion.div variants={fadeUp} className="flex items-start gap-5 p-6 bg-[#111111] border border-[#D4AF37]/10">
              <div className="text-[#D4AF37] text-3xl mt-1 shrink-0" aria-hidden="true">⊕</div>
              <div>
                <p className="font-['Oswald'] font-bold uppercase text-[#F5F5F5] text-base tracking-wider mb-2">
                  A Moto
                </p>
                <p className="text-[#888888] text-sm leading-relaxed">
                  Símbolo central da narrativa. Representa jornada, permanência, travessia,
                  perseverança e direção. Não é exibida como troféu — ela acompanha a história.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
