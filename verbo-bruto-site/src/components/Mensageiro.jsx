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
                src="/assets/yt_profile.png?v=2"
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
              na jornada — e encontre, no caminho, a Palavra que sustenta.
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
