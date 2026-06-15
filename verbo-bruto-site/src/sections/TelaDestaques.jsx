import ScrollReveal from '../components/ScrollReveal'

const posts = [
  {
    image: '/assets/grid1_perfil_deserto.png',
    caption: 'Carrega poeira. Carrega cicatrizes. Caminha.',
    likes: '2.4k',
  },
  {
    image: '/assets/grid2_estrada_luz.png',
    caption: 'Nenhuma estrada é maior do que o caminho para Deus.',
    likes: '3.1k',
  },
  {
    image: '/assets/grid3_mensageiro_luz.png',
    caption: 'Enquanto ainda há tempo.',
    likes: '4.8k',
  },
  {
    image: '/assets/grid1_moto_estrada.png',
    caption: 'O Verbo não explica. Ele decreta.',
    likes: '1.9k',
  },
  {
    image: '/assets/grid2_moto_parada.png',
    caption: 'Cada silêncio também fala.',
    likes: '2.7k',
  },
  {
    image: '/assets/grid3_estrada_sol.png',
    caption: 'A estrada continua... até que Ele venha.',
    likes: '3.5k',
  },
]

export default function TelaDestaques() {
  return (
    <section id="instagram" className="relative w-full bg-[#0A0A0A] py-28 md:py-40 px-8 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="section-label mb-6">Destaques</p>
            <h2
              className="font-['Oswald'] font-bold uppercase text-[#F5F5F5] leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(28px, 5vw, 52px)' }}
            >
              A Estrada
              <br />
              <span className="text-[#D4AF37]">no Feed</span>
            </h2>
            <p className="text-[#888888] text-sm md:text-base leading-relaxed max-w-lg mx-auto text-block">
              Os conteúdos que mais conectaram. Palavra, estética e propósito em cada postagem.
              Acompanhe cada novo passo da caminhada.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid de destaques */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-16">
          {posts.map((post, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <a
                href="https://instagram.com/verbobruto"
                target="_blank"
                rel="noreferrer"
                className="group relative block aspect-[4/5] overflow-hidden bg-[#111111]"
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-[#F5F5F5] text-xs leading-relaxed mb-2 line-clamp-2">
                      {post.caption}
                    </p>
                    <div className="flex items-center gap-2">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                      <span className="text-[#D4AF37] text-xs tracking-wider">{post.likes}</span>
                    </div>
                  </div>
                </div>
                {/* Corner accent */}
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#D4AF37]/0 group-hover:border-[#D4AF37]/50 transition-colors duration-500" />
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* CTAs */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://instagram.com/verbobruto"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#E4405F] text-[#F5F5F5] font-['Oswald'] font-bold uppercase tracking-[0.2em] px-8 py-4 hover:bg-[#D32F6B] transition-colors duration-300 text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              Seguir @verbobruto
            </a>

            <a
              href="https://linktr.ee/VerboBruto"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-[#D4AF37] text-[#D4AF37] font-['Oswald'] font-bold uppercase tracking-[0.2em] px-8 py-4 hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-300 text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              Linktree — Todas as Redes
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
