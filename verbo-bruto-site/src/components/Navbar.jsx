import { useState, useEffect } from 'react'

export default function Navbar() {
  const [visible, setVisible] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar after scrolling past hero (approx 100vh)
      setVisible(window.scrollY > window.innerHeight * 0.8)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const navItems = [
    { label: 'Manifesto', id: 'manifesto' },
    { label: 'Mensageiro', id: 'mensageiro' },
    { label: 'Álbum', id: 'album' },
    { label: 'Palavra', id: 'palavra' },
    { label: 'Caminhe', id: 'caminhe' },
  ]

  return (
    <>
      {/* Minimal trigger dot */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={`fixed top-6 right-6 z-50 w-3 h-3 rounded-full transition-all duration-500 ${
          visible
            ? 'bg-[#D4AF37] opacity-100'
            : 'bg-transparent opacity-0 pointer-events-none'
        } ${menuOpen ? 'scale-150' : 'scale-100'}`}
        aria-label="Menu"
      />

      {/* Full screen menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0A0A0A]/98 backdrop-blur-sm transition-all duration-700 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <nav className="space-y-8 text-center">
            {navItems.map((item, i) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block font-['Oswald'] uppercase text-[#F5F5F5] text-2xl md:text-4xl tracking-[0.2em] hover:text-[#D4AF37] transition-colors duration-300"
                style={{
                  transitionDelay: menuOpen ? `${i * 50}ms` : '0ms',
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.5s, transform 0.5s, color 0.3s',
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div
            className="mt-16 flex items-center gap-6"
            style={{
              opacity: menuOpen ? 1 : 0,
              transition: 'opacity 0.5s 0.3s',
            }}
          >
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
          </div>
        </div>
      </div>
    </>
  )
}
