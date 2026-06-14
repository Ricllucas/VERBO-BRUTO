import ScrollReveal from '../components/ScrollReveal'

export default function Tela03Mensageiro() {
  return (
    <section id="mensageiro" className="relative min-h-screen w-full bg-[#0A0A0A] py-28 md:py-40 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Large image */}
        <ScrollReveal className="mb-16 md:mb-24">
          <div className="relative overflow-hidden max-w-4xl mx-auto">
            <img
              src="/assets/yt_profile.png"
              alt="O Mensageiro"
              className="w-full h-[50vh] md:h-[70vh] object-cover object-top opacity-80"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/30" />
          </div>
        </ScrollReveal>

        {/* Text */}
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <p className="section-label mb-8">O Mensageiro</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2
              className="font-['Oswald'] font-bold uppercase text-[#F5F5F5] leading-[1.05] mb-10"
              style={{ fontSize: 'clamp(26px, 4.5vw, 52px)' }}
            >
              Quem é o
              <br />
              <span className="text-[#D4AF37]">Mensageiro?</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-[#CCCCCC] text-base md:text-lg leading-relaxed mb-6 text-block">
              Ele não representa um artista. Representa cada homem que descobriu que
              nenhuma estrada deste mundo é maior do que o caminho de volta para Deus.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-[#888888] text-sm md:text-base leading-relaxed mb-6 text-block">
              Carrega poeira. Carrega cicatrizes. Carrega silêncio.
              Mas continua caminhando. Porque sabe que ainda existe uma Casa esperando por ele.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="mt-12">
              <a
                href="#proposito"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('proposito')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-3 bg-[#D4AF37] text-[#0A0A0A] font-['Oswald'] font-bold uppercase tracking-[0.2em] px-8 py-4 hover:bg-[#F5F5F5] transition-colors duration-300 text-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
                Conheça a caminhada
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
