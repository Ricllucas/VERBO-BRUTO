import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp, stagger } from '../lib/animations'

export default function Sobre() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const pillars = [
    { title: 'Proclamação', desc: 'A Palavra decretada com autoridade, não apresentada como produto.' },
    { title: 'Contemplação', desc: 'Um convite ao silêncio e à presença — onde a verdade pode ser vivida.' },
    { title: 'Confronto', desc: 'O conteúdo não conforta primeiro. Ele interrompe. Depois conduz.' },
  ]

  const steps = [
    'As pessoas chegam pela Palavra',
    'Param pela dor humana',
    'Permanecem pela esperança',
    'Reconhecem pela estética',
  ]

  return (
    <section id="sobre" className="bg-[#0A0A0A] py-28 px-6">
      <motion.div
        ref={ref}
        className="max-w-5xl mx-auto"
        variants={stagger}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Label */}
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
          <div className="gold-line" />
          <span className="section-label">O Projeto</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          className="font-['Oswald'] font-bold uppercase text-[#F5F5F5] leading-tight mb-8"
          style={{ fontSize: 'clamp(36px, 6vw, 64px)' }}
        >
          Não nasceu para<br />
          disputar atenção.<br />
          <span className="text-[#D4AF37]">Nasceu para interromper.</span>
        </motion.h2>

        <motion.div variants={fadeUp} className="w-full h-px bg-[#D4AF37]/20 mb-10" />

        <motion.p
          variants={fadeUp}
          className="text-[#CCCCCC] text-lg leading-relaxed max-w-3xl mb-6"
        >
          Enquanto grande parte do conteúdo cristão busca entretenimento, consumo rápido ou mensagens
          suavizadas, o Verbo Bruto foi construído para proclamar. A Palavra não é apresentada como
          produto — ela é anunciada como verdade.
        </motion.p>

        <motion.p variants={fadeUp} className="text-[#888888] text-base leading-relaxed max-w-3xl mb-16">
          O Verbo Bruto não é autoajuda cristã, coaching espiritual, conteúdo motivacional ou
          entretenimento gospel. É uma experiência de proclamação, contemplação e confronto.
          Comunica peso com propósito.
        </motion.p>

        {/* Pillars */}
        <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#D4AF37]/10 mb-20">
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className="bg-[#0A0A0A] p-8 border-l-2 border-[#D4AF37]/0 hover:border-[#D4AF37] transition-all duration-300 group"
            >
              <h3 className="font-['Oswald'] font-bold uppercase text-[#D4AF37] text-xl tracking-wider mb-3 group-hover:text-[#F5F5F5] transition-colors">
                {p.title}
              </h3>
              <p className="text-[#888888] text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Discovery order */}
        <motion.div variants={fadeUp} className="bg-[#111111] border border-[#D4AF37]/10 p-8 md:p-10">
          <p className="section-label mb-8 text-center">A ordem da descoberta</p>

          {/* Desktop: horizontal flow */}
          <div className="hidden md:flex items-center justify-center">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center">
                <div className="flex flex-col items-center gap-3 px-4">
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#0A0A0A] font-['Oswald'] font-bold text-sm shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-[#CCCCCC] text-xs text-center max-w-[110px] leading-relaxed">{step}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="text-[#D4AF37]/30 text-xl mx-1 mb-6">→</div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile: vertical flow */}
          <div className="flex md:hidden flex-col items-start gap-0 pl-4">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#0A0A0A] font-['Oswald'] font-bold text-sm shrink-0">
                    {i + 1}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px h-8 bg-[#D4AF37]/30 mt-1" />
                  )}
                </div>
                <p className="text-[#CCCCCC] text-sm leading-relaxed pt-1.5 pb-6">{step}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
