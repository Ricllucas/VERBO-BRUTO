import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const phrases = [
  { text: 'Isto não é entretenimento.', accent: false },
  { text: 'É testemunho.', accent: true },
  { text: 'Não cantamos emoções.', accent: false },
  { text: 'Proclamamos a Palavra.', accent: true },
  { text: 'Não seguimos tendências.', accent: false },
  { text: 'Seguimos Cristo.', accent: true },
  { text: 'Cada música é uma oração.', accent: false },
  { text: 'Cada vídeo é um chamado.', accent: true },
  { text: 'Cada silêncio também fala.', accent: false },
]

export default function Tela02Manifesto() {
  const sectionRef = useRef(null)
  const phrasesRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      phrasesRef.current.forEach((el, i) => {
        if (!el) return

        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'top 55%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      const cross = sectionRef.current?.querySelector('.manifesto-cross')
      if (cross) {
        gsap.fromTo(
          cross,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cross,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      className="relative min-h-[200vh] w-full bg-[#0A0A0A] flex flex-col items-center justify-center py-32 px-6"
    >
      <div className="max-w-4xl mx-auto text-center w-full">
        {phrases.map((phrase, i) => (
          <div
            key={i}
            ref={(el) => (phrasesRef.current[i] = el)}
            className="mb-20 md:mb-28 flex justify-center"
          >
            <p
              className={`font-['Oswald'] uppercase tracking-wider leading-[1.1] max-w-[90vw] ${
                phrase.accent
                  ? 'text-[#D4AF37] font-light italic'
                  : 'text-[#F5F5F5] font-bold'
              }`}
              style={{ fontSize: 'clamp(22px, 4.5vw, 52px)' }}
            >
              {phrase.text}
            </p>
          </div>
        ))}

        {/* Cross */}
        <div className="manifesto-cross mt-20 flex justify-center">
          <svg width="48" height="64" viewBox="0 0 48 64" fill="none">
            <rect x="20" y="0" width="8" height="64" fill="#D4AF37" opacity="0.3" />
            <rect x="0" y="20" width="48" height="8" fill="#D4AF37" opacity="0.3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
