export default function Tela10Rodape() {
  return (
    <footer className="relative w-full bg-[#0A0A0A] py-20 px-6 border-t border-[#D4AF37]/10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="/assets/logo.png"
            alt="Verbo Bruto"
            className="w-16 h-16 mx-auto opacity-60"
            loading="lazy"
          />
        </div>

        {/* Tagline */}
        <p className="font-['Oswald'] font-bold uppercase text-[#F5F5F5] text-sm tracking-[0.3em] mb-2">
          O Verbo não explica.
        </p>
        <p className="font-['Oswald'] font-bold uppercase text-[#D4AF37] text-sm tracking-[0.3em] mb-10">
          Ele decreta.
        </p>

        {/* Divider */}
        <div className="w-16 h-px bg-[#D4AF37]/20 mx-auto mb-10" />

        {/* Closing phrase */}
        <p className="text-[#888888] text-xs tracking-[0.4em] uppercase mb-10">
          Até que Ele venha.
        </p>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6 mb-10">
          <a
            href="https://open.spotify.com/album/6sdxN3EJaYGQr1ATVKftAe"
            target="_blank"
            rel="noreferrer"
            className="text-[#555555] hover:text-[#1DB954] transition-colors"
            aria-label="Spotify"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
          </a>

          <a
            href="https://www.youtube.com/@verbobruto"
            target="_blank"
            rel="noreferrer"
            className="text-[#555555] hover:text-[#FF0000] transition-colors"
            aria-label="YouTube"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1C4.5 20.4 12 20.4 12 20.4s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" />
            </svg>
          </a>

          <a
            href="https://instagram.com/verbobruto"
            target="_blank"
            rel="noreferrer"
            className="text-[#555555] hover:text-[#E4405F] transition-colors"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          <a
            href="https://tiktok.com/@verbobruto"
            target="_blank"
            rel="noreferrer"
            className="text-[#555555] hover:text-[#F5F5F5] transition-colors"
            aria-label="TikTok"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[#333333] text-xs tracking-wider">
          © {new Date().getFullYear()} Verbo Bruto. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
