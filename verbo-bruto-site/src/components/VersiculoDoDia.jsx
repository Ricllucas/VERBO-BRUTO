import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const verses = [
  {
    text: 'Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.',
    ref: 'João 3:16',
    connection: 'Só o Teu Nome',
  },
  {
    text: 'E conhecereis a verdade, e a verdade vos libertará.',
    ref: 'João 8:32',
    connection: 'Jesus, Fica Mais Um Pouco',
  },
  {
    text: 'O Senhor é o meu pastor; nada me faltará.',
    ref: 'Salmos 23:1',
    connection: 'Eu Não Quero Sair Daqui',
  },
  {
    text: 'Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.',
    ref: 'Mateus 11:28',
    connection: 'Carrega-me',
  },
  {
    text: 'Eis que estou à porta e bato. Se alguém ouvir a minha voz e abrir a porta, entrarei em sua casa e cearei com ele, e ele comigo.',
    ref: 'Apocalipse 3:20',
    connection: 'Até Te Encontrar',
  },
  {
    text: 'No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus.',
    ref: 'João 1:1',
    connection: 'Santo Como Nunca Vi',
  },
  {
    text: 'Ensina-nos a contar os nossos dias para que o nosso coração alcance sabedoria.',
    ref: 'Salmos 90:12',
    connection: 'Enquanto Ainda Há Tempo',
  },
]

export default function VersiculoDoDia() {
  const [isOpen, setIsOpen] = useState(false)
  const [todayVerse, setTodayVerse] = useState(null)

  useEffect(() => {
    // Deterministic daily verse based on date
    const today = new Date()
    const dayOfYear = Math.floor(
      (today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
    )
    const index = dayOfYear % verses.length
    setTodayVerse(verses[index])
  }, [])

  if (!todayVerse) return null

  return (
    <>
      {/* Trigger button — bottom-left with tooltip */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-6 md:left-8 z-40 group"
        aria-label="Versículo do Dia"
      >
        {/* Tooltip */}
        <div className="absolute bottom-full left-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-[#111111] border border-[#D4AF37]/30 px-4 py-2 whitespace-nowrap">
            <p className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase">Versículo do Dia</p>
          </div>
          <div className="w-2 h-2 bg-[#111111] border-r border-b border-[#D4AF37]/30 rotate-45 absolute -bottom-1 left-5" />
        </div>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 md:w-10 md:h-10 border border-[#D4AF37]/30 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all duration-300 bg-[#0A0A0A]/80 backdrop-blur-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5">
              <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <span className="hidden md:block text-[#888888] text-[10px] tracking-[0.3em] uppercase group-hover:text-[#D4AF37] transition-colors duration-300">
            Versículo do Dia
          </span>
        </div>
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-sm flex items-center justify-center p-6"
              onClick={() => setIsOpen(false)}
            >
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative max-w-xl w-full bg-[#111111] border border-[#D4AF37]/20 p-8 md:p-12"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Decorative corner */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#D4AF37]/40" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#D4AF37]/40" />

                <p className="text-[#D4AF37]/60 text-[10px] tracking-[0.4em] uppercase mb-8">
                  Versículo do Dia
                </p>

                <blockquote className="mb-8">
                  <p className="text-[#F5F5F5] text-lg md:text-xl leading-relaxed font-light">
                    "{todayVerse.text}"
                  </p>
                </blockquote>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#D4AF37] font-['Oswald'] text-sm tracking-wider">
                      {todayVerse.ref}
                    </p>
                    <p className="text-[#555555] text-xs mt-1">
                      Conectado a: {todayVerse.connection}
                    </p>
                  </div>

                  <a
                    href={`https://www.bible.com/pt/search?q=${encodeURIComponent(todayVerse.ref)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#888888] hover:text-[#D4AF37] text-xs tracking-wider uppercase transition-colors"
                  >
                    Ler mais →
                  </a>
                </div>

                {/* Close */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-[#555555] hover:text-[#F5F5F5] transition-colors"
                  aria-label="Fechar"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
