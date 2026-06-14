import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const ALBUM_URL = 'https://open.spotify.com/album/6sdxN3EJaYGQr1ATVKftAe'

const tracks = [
  {
    num: 1,
    title: 'Jesus, Fica Mais Um Pouco',
    verse: 'João 15:5',
    desc: 'O clamor de quem descobriu que sem Ele nada somos.',
    spotifyId: '04lPe0OM93Z4Lbw5YpfZyp',
    ytId: '_l7sSkTIEE0',
  },
  {
    num: 2,
    title: 'Eu Não Quero Sair Daqui',
    verse: 'Salmos 27:4',
    desc: 'A resolução de quem encontrou o lugar seguro.',
    spotifyId: '5NiafoUP4hl6wfCNpZmprB',
    ytId: 'W8r51eEfoCA',
  },
  {
    num: 3,
    title: 'Teus Olhos Sobre Mim',
    verse: 'Salmos 32:8',
    desc: 'O conforto de ser visto por quem nunca desvia o olhar.',
    spotifyId: null,
    ytId: 'w0qfKX0OLs8',
  },
  {
    num: 4,
    title: 'Santo Como Nunca Vi',
    verse: 'Isaías 6:3',
    desc: 'A contemplação que transforma a visão de tudo.',
    spotifyId: null,
    ytId: '2f2qTIO28as',
  },
  {
    num: 5,
    title: 'Carrega-me',
    verse: 'Salmos 55:22',
    desc: 'A entrega de quem cansou de carregar sozinho.',
    spotifyId: null,
    ytId: '-rCP946uTb8',
  },
  {
    num: 6,
    title: 'Só o Teu Nome',
    verse: 'Filipenses 2:9-10',
    desc: 'A adoração que reconhece a única autoridade.',
    spotifyId: null,
    ytId: 'HnNF5dUoyq8',
  },
  {
    num: 7,
    title: 'Até Te Encontrar',
    verse: 'Salmos 42:1',
    desc: 'A jornada que só termina na presença dEle.',
    spotifyId: '7mxBT7lOcehUacTpN6AJSA',
    ytId: 'yxGVXWlCxL8',
  },
]

function SpotifyIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  )
}

function YtIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1C4.5 20.4 12 20.4 12 20.4s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" />
    </svg>
  )
}

export default function Tela06Album() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="album" className="relative w-full bg-[#0D0D0D] py-28 md:py-40 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="section-label mb-6">O Primeiro Capítulo</p>
            <h2
              className="font-['Oswald'] font-bold uppercase text-[#F5F5F5] leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(32px, 5.5vw, 60px)' }}
            >
              Contemplai
              <br />
              <span className="text-[#D4AF37]">o Cordeiro</span>
            </h2>
            <p className="text-[#888888] text-sm md:text-base leading-relaxed max-w-lg mx-auto">
              Este álbum nasceu da contemplação. Cada música representa um momento da jornada
              de alguém que descobriu que tudo perde o valor diante da presença de Cristo.
            </p>
          </div>
        </ScrollReveal>

        {/* Album Cover */}
        <ScrollReveal delay={0.1} className="mb-20">
          <div className="relative max-w-sm mx-auto">
            <div className="absolute -inset-3 border border-[#D4AF37]/20" />
            <img
              src="/assets/album_cover.jpg"
              alt="Capa do álbum Contemplai o Cordeiro"
              className="w-full aspect-square object-cover"
              loading="lazy"
            />
          </div>
        </ScrollReveal>

        {/* Track Timeline */}
        <div className="space-y-0">
          {tracks.map((track, i) => (
            <ScrollReveal key={track.num} delay={i * 0.08}>
              <div className="group relative border-l-2 border-[#D4AF37]/20 hover:border-[#D4AF37] pl-8 py-8 transition-colors duration-500">
                {/* Timeline dot */}
                <div className="absolute left-0 top-10 w-3 h-3 bg-[#D4AF37]/30 group-hover:bg-[#D4AF37] -translate-x-[7px] rotate-45 transition-colors duration-500" />

                <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-8">
                  {/* Number */}
                  <div className="flex items-start">
                    <span className="font-['Oswald'] text-[#D4AF37] text-4xl font-bold opacity-30 group-hover:opacity-60 transition-opacity">
                      {String(track.num).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-['Oswald'] font-bold uppercase text-[#F5F5F5] text-lg tracking-wide mb-1 group-hover:text-[#D4AF37] transition-colors">
                      {track.title}
                    </h3>

                    <p className="text-[#D4AF37]/60 text-xs tracking-widest uppercase mb-3">
                      {track.verse}
                    </p>

                    <p className="text-[#888888] text-sm leading-relaxed mb-4">
                      {track.desc}
                    </p>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      {track.spotifyId && (
                        <a
                          href={`https://open.spotify.com/track/${track.spotifyId}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-[#1DB954] hover:text-[#F5F5F5] transition-colors text-xs tracking-wider uppercase"
                        >
                          <SpotifyIcon className="w-3.5 h-3.5" />
                          Spotify
                        </a>
                      )}
                      <a
                        href={`https://www.youtube.com/watch?v=${track.ytId}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-[#FF0000]/60 hover:text-[#FF0000] transition-colors text-xs tracking-wider uppercase"
                      >
                        <YtIcon className="w-3.5 h-3.5" />
                        YouTube
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Spotify Embed */}
        <ScrollReveal className="mt-16">
          <div className="bg-[#111111] border border-[#D4AF37]/10 p-1 overflow-hidden">
            <iframe
              title="Contemplai o Cordeiro no Spotify"
              src="https://open.spotify.com/embed/album/6sdxN3EJaYGQr1ATVKftAe?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="block"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
