import ScrollReveal from '../components/ScrollReveal'

const books = [
  {
    name: 'Mateus',
    desc: 'O Rei e Seu Reino. A genealogia da graça.',
    videos: 5,
    color: '#D4AF37',
  },
  {
    name: 'Marcos',
    desc: 'O Servo que veio para dar a vida.',
    videos: 3,
    color: '#C9A227',
  },
  {
    name: 'Lucas',
    desc: 'O Salvador de todos os povos.',
    videos: 4,
    color: '#BE9620',
  },
  {
    name: 'João',
    desc: 'O Verbo que se fez carne.',
    videos: 6,
    color: '#B38B1A',
  },
  {
    name: 'Apocalipse',
    desc: 'A revelação da vitória final.',
    videos: 2,
    color: '#A88015',
  },
]

export default function Tela07Palavra() {
  return (
    <section id="palavra" className="relative w-full bg-[#0A0A0A] py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="section-label mb-6">A Palavra Permanece</p>
            <h2
              className="font-['Oswald'] font-bold uppercase text-[#F5F5F5] leading-tight mb-6"
              style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
            >
              Não apenas
              <br />
              <span className="text-[#D4AF37]">músicas.</span>
              <br />
              A Bíblia.
            </h2>
            <p className="text-[#888888] text-base leading-relaxed max-w-lg mx-auto">
              Cada livro possui vídeos, leituras, reflexões e versículos que aprofundam
              a caminhada na Palavra.
            </p>
          </div>
        </ScrollReveal>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D4AF37]/10">
          {books.map((book, i) => (
            <ScrollReveal key={book.name} delay={i * 0.1}>
              <div className="group bg-[#0A0A0A] p-8 border-l-2 border-transparent hover:border-[#D4AF37] transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-['Oswald'] font-bold uppercase text-[#F5F5F5] text-xl tracking-wider group-hover:text-[#D4AF37] transition-colors">
                    {book.name}
                  </h3>
                  <span className="text-[#555555] text-xs tracking-wider">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <p className="text-[#888888] text-sm leading-relaxed mb-6">
                  {book.desc}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-[#555555] text-xs tracking-wider">
                    {book.videos} vídeos
                  </span>

                  <a
                    href={`https://www.youtube.com/@verbobruto/search?query=${book.name}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[#D4AF37]/60 hover:text-[#D4AF37] transition-colors text-xs tracking-wider uppercase"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1C4.5 20.4 12 20.4 12 20.4s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" />
                    </svg>
                    Assistir
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
