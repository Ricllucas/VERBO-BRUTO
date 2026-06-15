import ScrollReveal from '../components/ScrollReveal'

export default function Tela08Universo() {
  return (
    <section id="universo" className="relative w-full bg-[#0D0D0D] py-28 md:py-40 px-8 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="section-label mb-6">O Universo</p>
            <h2
              className="font-['Oswald'] font-bold uppercase text-[#F5F5F5] leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(32px, 5.5vw, 60px)' }}
            >
              Tudo começou
              <br />
              <span className="text-[#D4AF37]">com uma estrada.</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <ScrollReveal>
            <div className="relative">
              <img
                src="/assets/bastidores_filme.png"
                alt="Bastidores das filmagens"
                className="w-full h-[40vh] md:h-[50vh] object-cover object-center opacity-60"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-transparent to-[#0D0D0D]" />
            </div>
          </ScrollReveal>

          <div className="space-y-6 text-center md:text-left">
            <ScrollReveal delay={0.1}>
              <p className="text-[#CCCCCC] text-base md:text-lg leading-relaxed">
                Depois vieram as canções. As imagens. As leituras bíblicas. Os filmes.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-[#888888] text-sm md:text-base leading-relaxed">
                Mas o propósito continua o mesmo. Levar pessoas até Cristo.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="pt-4">
                <p className="text-[#555555] text-xs tracking-widest uppercase mb-4">
                  O que você encontrará por aqui:
                </p>
                <ul className="space-y-3">
                  {['Making of das canções', 'Fotografias da estrada', 'A moto e as filmagens', 'O estilo Gospel Noir', 'O processo criativo', 'Os desertos e as referências'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[#888888] text-sm justify-center md:justify-start">
                      <span className="w-1.5 h-1.5 bg-[#D4AF37]/40 rotate-45 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center">
            <a
              href="https://www.youtube.com/@verbobruto"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-[#D4AF37] text-[#D4AF37] font-['Oswald'] font-bold uppercase tracking-[0.2em] px-8 py-4 hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-300 text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1C4.5 20.4 12 20.4 12 20.4s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" />
              </svg>
              Ver bastidores no YouTube
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
