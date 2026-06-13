import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp, stagger } from '../lib/animations'

const ALBUM_URL = 'https://open.spotify.com/album/6sdxN3EJaYGQr1ATVKftAe'

const tracks = [
  { num: 1, title: 'JESUS, FICA MAIS UM POUCO', spotifyId: '04lPe0OM93Z4Lbw5YpfZyp', ytId: '_l7sSkTIEE0' },
  { num: 2, title: 'EU NÃO QUERO SAIR DAQUI',   spotifyId: '5NiafoUP4hl6wfCNpZmprB', ytId: 'W8r51eEfoCA' },
  { num: 3, title: 'TEUS OLHOS SOBRE MIM',       spotifyId: null,                    ytId: 'w0qfKX0OLs8' },
  { num: 4, title: 'SANTO COMO NUNCA VI',        spotifyId: null,                    ytId: '2f2qTIO28as' },
  { num: 5, title: 'CARREGA-ME',                 spotifyId: null,                    ytId: '-rCP946uTb8' },
  { num: 6, title: 'SÓ O TEU NOME',              spotifyId: null,                    ytId: 'HnNF5dUoyq8' },
  { num: 7, title: 'ATÉ TE ENCONTRAR',           spotifyId: '7mxBT7lOcehUacTpN6AJSA', ytId: 'yxGVXWlCxL8' },
]

function SpotifyIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  )
}

function YtIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1C4.5 20.4 12 20.4 12 20.4s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" />
    </svg>
  )
}

export default function Album() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="album" className="bg-[#0D0D0D] py-28 px-6">
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
          <span className="section-label">Álbum · 2026 · 7 Faixas</span>
        </motion.div>

        {/* Headline */}
        <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <h2
            className="font-['Oswald'] font-bold uppercase text-[#F5F5F5] leading-tight"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
          >
            Contemplai<br />
            <span className="text-[#D4AF37]">o Cordeiro</span>
          </h2>
          <p className="text-[#888888] text-sm leading-relaxed max-w-xs md:text-right">
            O álbum é uma jornada narrativa.<br />
            Cada música — uma semana de conteúdo.<br />
            Cada semana — um universo.
          </p>
        </motion.div>

        {/* Cover + Tracklist */}
        <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 mb-16">
          {/* Album cover */}
          <div className="flex flex-col gap-4">
            <div className="relative group">
              <div className="absolute -inset-1 border border-[#D4AF37]/20" />
              <img
                src="/assets/album_cover.jpg"
                alt="Capa do álbum Contemplai o Cordeiro"
                className="w-full aspect-square object-cover"
              />
              <a
                href={ALBUM_URL}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-[#0A0A0A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="flex items-center gap-2 bg-[#1DB954] text-[#0A0A0A] font-['Oswald'] uppercase tracking-widest px-4 py-2 text-xs">
                  <SpotifyIcon />
                  Ouvir no Spotify
                </div>
              </a>
            </div>
            <div>
              <p className="font-['Oswald'] font-bold uppercase text-[#F5F5F5] text-sm tracking-wider">Verbo Bruto</p>
              <p className="section-label text-[#888888] mt-1">2026 · 7 faixas</p>
            </div>
          </div>

          {/* Tracklist */}
          <div className="flex flex-col divide-y divide-[#D4AF37]/10">
            {tracks.map((t) => {
              const spotifyHref = t.spotifyId
                ? `https://open.spotify.com/track/${t.spotifyId}`
                : ALBUM_URL
              const hasDirectSpotify = Boolean(t.spotifyId)
              return (
                <motion.div
                  key={t.num}
                  variants={fadeUp}
                  className="group flex items-center gap-4 py-3.5 px-3 hover:bg-[#161616] transition-colors duration-200"
                >
                  {/* Number / play */}
                  <span className="font-['Oswald'] text-[#555555] text-sm w-5 text-right shrink-0 group-hover:hidden">
                    {t.num}
                  </span>
                  <span className="hidden group-hover:block text-[#1DB954] w-5 shrink-0">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>

                  {/* Title */}
                  <span className="font-['Oswald'] font-bold uppercase text-[#CCCCCC] text-sm tracking-wide group-hover:text-[#F5F5F5] transition-colors flex-1 leading-snug">
                    {t.title}
                  </span>

                  {/* Action icons */}
                  <div className="flex items-center gap-3 shrink-0">
                    <a
                      href={`https://www.youtube.com/watch?v=${t.ytId}`}
                      target="_blank"
                      rel="noreferrer"
                      title="Assistir no YouTube"
                      aria-label={`Assistir ${t.title} no YouTube`}
                      className="text-[#888888] hover:text-[#FF0000] transition-colors p-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <YtIcon />
                    </a>
                    <a
                      href={spotifyHref}
                      target="_blank"
                      rel="noreferrer"
                      title={hasDirectSpotify ? 'Ouvir faixa no Spotify' : 'Ouvir álbum no Spotify'}
                      aria-label={`${t.title} no Spotify`}
                      className={`transition-colors p-1 ${hasDirectSpotify ? 'text-[#888888] hover:text-[#1DB954]' : 'text-[#555555] hover:text-[#888888]'}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <SpotifyIcon />
                    </a>
                  </div>
                </motion.div>
              )
            })}
            {/* Legend */}
            <div className="pt-3 px-3 flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-[#1DB954] text-[10px] tracking-wider font-['Inter']">
                <SpotifyIcon className="w-3 h-3" />
                <span>Link direto para a faixa</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#555555] text-[10px] tracking-wider font-['Inter']">
                <SpotifyIcon className="w-3 h-3" />
                <span>Abre o álbum</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Video Grid */}
        <motion.div variants={fadeUp} className="mb-14">
          <div className="flex items-center gap-3 mb-8">
            <div className="gold-line" />
            <span className="section-label">Vídeos no YouTube</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {tracks.map((t) => (
              <motion.a
                key={t.num}
                href={`https://www.youtube.com/watch?v=${t.ytId}`}
                target="_blank"
                rel="noreferrer"
                aria-label={`Assistir ${t.title} no YouTube`}
                variants={fadeUp}
                className="group relative overflow-hidden bg-[#111111] border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all duration-300 flex flex-col"
              >
                <div className="relative overflow-hidden aspect-video bg-[#0A0A0A]">
                  <img
                    src={`https://img.youtube.com/vi/${t.ytId}/hqdefault.jpg`}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0A0A0A]/55 group-hover:bg-[#0A0A0A]/20 transition-all duration-300" />
                  <div className="absolute top-2 left-2 w-6 h-6 bg-[#0A0A0A]/80 flex items-center justify-center">
                    <span className="font-['Oswald'] text-[#D4AF37] text-xs font-bold">{t.num}</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-[#FF0000] flex items-center justify-center shadow-lg">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="none" aria-hidden="true">
                        <path d="M1 1l12 7L1 15V1z" fill="white" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <p className="font-['Oswald'] font-bold uppercase text-[#CCCCCC] text-xs tracking-wide leading-snug group-hover:text-[#F5F5F5] transition-colors line-clamp-2">
                    {t.title}
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-[#FF0000]/50 group-hover:text-[#FF0000] transition-colors">
                    <YtIcon className="w-3 h-3" />
                    <span className="text-[10px] font-['Inter'] tracking-wider uppercase">YouTube</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Spotify Embed */}
        <motion.div variants={fadeUp}>
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-line" />
            <span className="section-label">Ouça o álbum completo</span>
          </div>
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
          {/* Fallback se embed for bloqueado */}
          <p className="text-[#555555] text-xs text-center mt-3 tracking-wider">
            Não consegue ouvir?{' '}
            <a
              href={ALBUM_URL}
              target="_blank"
              rel="noreferrer"
              className="text-[#1DB954] hover:underline"
            >
              Abra diretamente no Spotify
            </a>
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.youtube.com/@verbobruto?sub_confirmation=1"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-[#D4AF37] text-[#D4AF37] font-['Oswald'] uppercase tracking-widest px-8 py-4 text-sm hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-200"
          >
            <YtIcon />
            Canal no YouTube
          </a>
          <a
            href={ALBUM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-[#1DB954]/50 text-[#1DB954] font-['Oswald'] uppercase tracking-widest px-8 py-4 text-sm hover:bg-[#1DB954] hover:text-[#0A0A0A] transition-all duration-200"
          >
            <SpotifyIcon />
            Álbum no Spotify
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
