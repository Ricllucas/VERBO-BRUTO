import ScrollReveal from '../components/ScrollReveal'

export default function Tela04Proposito() {
  return (
    <section
      id="proposito"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-28 px-6"
    >
      {/* Background — infinite road effect */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full"
          style={{
            background: 'linear-gradient(to bottom, #0A0A0A 0%, #111111 30%, #0A0A0A 70%, #0A0A0A 100%)',
          }}
        />
        {/* Road lines */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-px h-full bg-gradient-to-b from-transparent via-[#D4AF37]/10 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[1px] bg-[#D4AF37]/5" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <p className="section-label mb-8">Por que existe?</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            className="font-['Oswald'] font-bold uppercase text-[#F5F5F5] leading-tight mb-12"
            style={{ fontSize: 'clamp(28px, 5vw, 56px)' }}
          >
            O mundo está cheio
            <br />
            <span className="text-[#D4AF37]">de músicas.</span>
            <br />
            Mas cada vez mais
            <br />
            vazio de esperança.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="w-16 h-px bg-[#D4AF37]/30 mx-auto mb-12" />
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-[#CCCCCC] text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
            O Verbo Bruto nasceu para lembrar aquilo que nunca deveria ser esquecido.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="text-[#888888] text-base leading-relaxed mb-12 max-w-xl mx-auto">
            Cristo continua chamando. Enquanto houver fôlego… a estrada continua aberta.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <div className="flex items-center justify-center gap-4">
            <div className="w-2 h-2 bg-[#D4AF37]/30 rotate-45" />
            <div className="w-2 h-2 bg-[#D4AF37]/50 rotate-45" />
            <div className="w-2 h-2 bg-[#D4AF37] rotate-45" />
            <div className="w-2 h-2 bg-[#D4AF37]/50 rotate-45" />
            <div className="w-2 h-2 bg-[#D4AF37]/30 rotate-45" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
