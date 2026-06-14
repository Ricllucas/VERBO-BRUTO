import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const phrases = [
  'Isto não é entretenimento.',
  'É testemunho.',
  'Não cantamos emoções.',
  'Proclamamos a Palavra.',
  'Não seguimos tendências.',
  'Seguimos Cristo.',
  'Cada música é uma oração.',
  'Cada vídeo é um chamado.',
  'Cada silêncio também fala.',
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
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              end: 'top 50%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      // Cross at the end
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
      <div className="max-w-3xl mx-auto text-center">
        {phrases.map((phrase, i) => (
          <div
            key={i}
            ref={(el) => (phrasesRef.current[i] = el)}
            className="mb-16 md:mb-24"
          >
            <p
              className={`font-['Oswald'] uppercase tracking-wider leading-tight ${
                i % 2 === 0
                  ? 'text-[#F5F5F5] font-bold'
                  : 'text-[#D4AF37] font-light italic'
              }`}
              style={{ fontSize: 'clamp(20px, 4vw, 48px)' }}
            >
              {phrase}
            </p>
          </div>
        ))}

        {/* Cross */}
        <div className="manifesto-cross mt-16">
          <svg width="48" height="64" viewBox="0 0 48 64" fill="none" className="mx-auto">
            <rect x="20" y="0" width="8" height="64" fill="#D4AF37" opacity="0.3" />
            <rect x="0" y="20" width="48" height="8" fill="#D4AF37" opacity="0.3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
