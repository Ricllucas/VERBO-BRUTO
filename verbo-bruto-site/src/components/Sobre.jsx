import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp, stagger } from '../lib/animations'

export default function Sobre() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const pillars = [
    {
      title: 'A Palavra',
      desc: 'Não é interpretada. É decretada. Cada conteúdo, cada música, cada palavra carrega autoridade para transformar quem ouve.',
    },
    {
      title: 'A Presença',
      desc: 'Mais do que informação, oferecemos encontro. Um espaço onde o silêncio fala mais alto que o ruído do mundo.',
    },
    {
      title: 'A Jornada',
      desc: 'Ninguém caminha sozinho. Cada faixa, cada vídeo, cada palavra é um passo na direção de quem Ele é.',
    },
  ]

  const steps = [
    'Ouça o álbum no Spotify',
    'Assista aos vídeos no YouTube',
    'Siga nas redes para não perder nada',
    'Compartilhe com quem precisa ouvir',
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
          Não é sobre<br />
          entretenimento.<br />
          <span className="text-[#D4AF37]">É sobre encontro.</span>
        </motion.h2>

        <motion.div variants={fadeUp} className="w-full h-px bg-[#D4AF37]/20 mb-10" />

        <motion.p
          variants={fadeUp}
          className="text-[#CCCCCC] text-lg leading-relaxed max-w-3xl mb-6"
        >
          O Verbo Bruto nasceu de uma convicção: a Palavra de Deus não precisa ser
          adaptada para agradar. Ela precisa ser proclamada com fogo. Cada música,
          cada vídeo, cada palavra compartilhada tem um único propósito — levar você
          a uma conexão mais profunda com quem Ele é.
        </motion.p>

        <motion.p variants={fadeUp} className="text-[#888888] text-base leading-relaxed max-w-3xl mb-16">
          Não criamos conteúdo para preencher tempo. Criamos para preencher o vazio.
          Para aqueles que sentem que falta algo — e sabem que esse algo só pode ser
          encontrado na presença de Deus. Se você está aqui, talvez seja porque está
          pronto para mais.
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

        {/* CTA Block */}
        <motion.div variants={fadeUp} className="bg-[#111111] border border-[#D4AF37]/10 p-8 md:p-10">
          <p className="section-label mb-8 text-center">A jornada começa agora</p>

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

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 pt-8 border-t border-[#D4AF37]/10">
            <a
              href="https://open.spotify.com/album/6sdxN3EJaYGQr1ATVKftAe"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#0A0A0A] font-['Oswald'] font-bold uppercase tracking-widest px-8 py-4 hover:bg-[#F5F5F5] transition-colors duration-200 text-sm"
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
              className="inline-flex items-center gap-2 border border-[#D4AF37] text-[#D4AF37] font-['Oswald'] font-bold uppercase tracking-widest px-8 py-4 hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-200 text-sm"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1C4.5 20.4 12 20.4 12 20.4s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" />
              </svg>
              Assista no YouTube
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
