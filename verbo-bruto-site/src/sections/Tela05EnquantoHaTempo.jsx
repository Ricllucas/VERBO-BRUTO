import ScrollReveal from '../components/ScrollReveal'
import VideoPlayer from '../components/VideoPlayer'

export default function Tela05EnquantoHaTempo() {
  const VIDEO_ID = 'jkLADL0fmk0'

  return (
    <section
      id="enquanto-ha-tempo"
      className="relative w-full bg-[#0A0A0A] py-28 md:py-40 px-6"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <p className="section-label mb-6">Testemunho</p>
            <h2
              className="font-['Oswald'] font-bold uppercase text-[#F5F5F5] leading-[1.05]"
              style={{ fontSize: 'clamp(32px, 6vw, 64px)' }}
            >
              Enquanto
              <br />
              <span className="text-[#D4AF37]">Ainda Há Tempo</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Main text */}
        <ScrollReveal delay={0.1}>
          <div className="space-y-6 mb-16 md:mb-20">
            <p className="text-[#CCCCCC] text-base md:text-lg leading-relaxed text-block">
              A maioria das pessoas acredita que ainda terá tempo. Tempo para pedir perdão.
              Tempo para abraçar. Tempo para voltar. Tempo para dizer: "Eu te amo."
              Tempo para dizer: "Me perdoe." Tempo para começar novamente.
            </p>

            <p className="text-[#888888] text-sm md:text-base leading-relaxed text-block">
              Mas ninguém recebeu a promessa do amanhã. Cada amanhecer é um presente.
              Cada encontro pode ser o último. Cada palavra pode ser a última oportunidade de amar.
            </p>

            <p className="text-[#CCCCCC] text-base md:text-lg leading-relaxed text-block">
              O Verbo Bruto existe para lembrar que a eternidade não começa quando a vida termina.
              Ela já está sendo construída agora. Enquanto você ainda respira. Enquanto ainda existe tempo.
            </p>
          </div>
        </ScrollReveal>

        {/* Photo of João Vitor */}
        <ScrollReveal delay={0.2} className="mb-12">
          <div className="relative max-w-sm mx-auto">
            <div className="absolute -inset-2 border border-[#D4AF37]/10" />
            <img
              src="/assets/mensageiro_perfil.jpg"
              alt="João Vitor"
              className="w-full aspect-[4/5] object-cover object-top opacity-60 grayscale"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
          </div>
        </ScrollReveal>

        {/* Song story */}
        <ScrollReveal delay={0.3}>
          <div className="max-w-xl mx-auto text-center mb-16">
            <p className="text-[#888888] text-sm leading-relaxed mb-2">
              Esta canção nasceu depois de uma despedida que ninguém esperava.
            </p>
            <p className="text-[#888888] text-sm leading-relaxed">
              Não fala apenas sobre perda. Fala sobre aquilo que ainda podemos fazer enquanto estamos vivos.
              Perdoar. Abraçar. Voltar para Deus. Voltar para casa.
            </p>
          </div>
        </ScrollReveal>

        {/* Video Player */}
        <ScrollReveal delay={0.4} className="mb-16">
          <div className="max-w-3xl mx-auto">
            <VideoPlayer
              youtubeId={VIDEO_ID}
              title="Enquanto Ainda Há Tempo"
            />
          </div>
        </ScrollReveal>

        {/* CTA after video */}
        <ScrollReveal delay={0.5}>
          <div className="text-center mb-16">
            <a
              href="https://open.spotify.com/album/6sdxN3EJaYGQr1ATVKftAe"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#1DB954] text-[#0A0A0A] font-['Oswald'] font-bold uppercase tracking-[0.2em] px-8 py-4 hover:bg-[#F5F5F5] transition-colors duration-300 text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              Ouvir esta canção
            </a>
          </div>
        </ScrollReveal>

        {/* Questions */}
        <ScrollReveal delay={0.6}>
          <div className="max-w-xl mx-auto text-center py-16 border-t border-[#D4AF37]/10">
            <p className="text-[#CCCCCC] text-base md:text-lg leading-relaxed mb-8">
              Existe alguém que você precisa abraçar?
              <br />
              Existe alguém que precisa ouvir seu perdão?
              <br />
              Existe alguém esperando sua ligação?
            </p>

            <p className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase font-['Oswald'] mb-10">
              Não espere. Faça hoje.
            </p>

            <button
              onClick={() =>
                document.getElementById('album')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="inline-flex items-center gap-3 bg-[#D4AF37] text-[#0A0A0A] font-['Oswald'] font-bold uppercase tracking-[0.2em] px-8 py-4 hover:bg-[#F5F5F5] transition-colors duration-300 text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              Continue a caminhada
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
