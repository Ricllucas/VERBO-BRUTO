import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_SECTIONS = ['sobre', 'album', 'mensageiro', 'redes']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [scrollProgress, setScrollProgress] = useState(0)

  // Scroll detection + progress bar
  useEffect(() => {
    const onScroll = () => {
      const sy = window.scrollY
      setScrolled(sy > 40)
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(total > 0 ? (sy / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section via IntersectionObserver
  useEffect(() => {
    const observers = []
    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.3 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const links = [
    { label: 'Sobre', href: '#sobre', id: 'sobre' },
    { label: 'Álbum', href: '#album', id: 'album' },
    { label: 'Mensageiro', href: '#mensageiro', id: 'mensageiro' },
    { label: 'Redes', href: '#redes', id: 'redes' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[#D4AF37]/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <img
            src="/assets/logo.png?v=2"
            alt="Verbo Bruto"
            className="w-9 h-9 object-contain rounded-sm"
          />
          <span className="font-['Oswald'] text-lg font-bold tracking-[0.15em] text-[#F5F5F5] uppercase group-hover:text-[#D4AF37] transition-colors duration-200">
            Verbo Bruto
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`section-label transition-colors duration-200 relative pb-1 ${
                activeSection === l.id
                  ? 'text-[#D4AF37]'
                  : 'text-[#CCCCCC] hover:text-[#D4AF37]'
              }`}
            >
              {l.label}
              {activeSection === l.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-px bg-[#D4AF37]"
                />
              )}
            </a>
          ))}
          <a
            href="https://www.youtube.com/@verbobruto?sub_confirmation=1"
            target="_blank"
            rel="noreferrer"
            className="border border-[#D4AF37] text-[#D4AF37] px-4 py-2 text-xs font-['Oswald'] tracking-widest uppercase hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-200"
          >
            YouTube
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#F5F5F5] focus:outline-none p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-[#D4AF37]"
        style={{ width: `${scrollProgress}%`, opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.1 }}
        aria-hidden="true"
      />

      {/* Mobile menu — animated */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#0A0A0A]/98 border-t border-[#D4AF37]/20"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className={`section-label transition-colors ${
                    activeSection === l.id ? 'text-[#D4AF37]' : 'text-[#CCCCCC]'
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://www.youtube.com/@verbobruto?sub_confirmation=1"
                target="_blank"
                rel="noreferrer"
                className="border border-[#D4AF37] text-[#D4AF37] px-4 py-3 text-xs font-['Oswald'] tracking-widest uppercase text-center hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all"
              >
                YouTube
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
