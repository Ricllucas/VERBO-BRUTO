import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const prayers = [
  {
    title: 'Para quem precisa de direção',
    text: 'Senhor, em meio a tantos caminhos que se apresentam diante de mim, peço que seja a minha bússola. Não confio na minha própria compreensão, mas em Ti que conhece o fim desde o princípio. Ilumina os meus passos. Faz da minha vida uma estrada que leva até Ti. Em nome de Jesus.',
    verse: 'Provérbios 3:5-6',
  },
  {
    title: 'Para quem está cansado',
    text: 'Pai, o peso da jornada tem sido grande. As cicatrizes acumulam-se e o fôlego parece faltar. Mas eu lembro da Tua promessa: aqueles que esperam no Senhor renovam as suas forças. Sustenta-me agora. Carrega-me quando eu não puder mais caminhar. Tu és o meu descanso. Em nome de Jesus.',
    verse: 'Isaías 40:31',
  },
  {
    title: 'Para quem busca perdão',
    text: 'Deus de misericórdia, reconheço que errei. Que fui meu próprio caminho. Que ignorei a Tua voz. Mas hoje me volto para Ti. Não porque mereço, mas porque Tu és fiel e justo para perdoar os meus pecados. Lava-me. Refaz-me. Dá-me um novo começo. Em nome de Jesus.',
    verse: '1 João 1:9',
  },
  {
    title: 'Para quem sente solidão',
    text: 'Senhor, em meio à multidão, sinto-me só. Mas Tu prometeste nunca me deixar, nunca me abandonar. Tu és o meu companheiro de estrada, o meu amigo mais chegado. Enche este vazio com a Tua presença. Faz-me sentir em casa, mesmo quando estou longe. Em nome de Jesus.',
    verse: 'Mateus 28:20',
  },
  {
    title: 'Para quem precisa de esperança',
    text: 'Deus da minha esperança, quando tudo ao redor parece escuro, Tu és a minha luz. Quando a estrada parece sem fim, Tu és o meu destino. Não desanimo, porque sei que a minha história termina em vitória — não por minha força, mas pela Tua graça. Renova a minha esperança hoje. Em nome de Jesus.',
    verse: 'Romanos 15:13',
  },
  {
    title: 'Para quem precisa tomar uma decisão',
    text: 'Senhor, diante desta encruzilhada, não confio no meu próprio coração, pois ele me engana. Peço sabedoria — aquela que vem do alto, pura, pacífica, misericordiosa. Mostra-me o caminho. Confirma no meu espírito a direção certa. Eu escolho confiar em Ti acima de qualquer voz. Em nome de Jesus.',
    verse: 'Tiago 1:5',
  },
  {
    title: 'Para quem precisa voltar para casa',
    text: 'Pai, fui longe demais. Deixei a estrada que me levava a Ti para seguir os meus próprios caminhos. Mas hoje me lembro da Tua casa. Me lembro do Teu abraço. Não tenho medo de voltar, porque sei que Tu me receberás de braços abertos. Transforma o meu arrependimento em um novo começo. Em nome de Jesus.',
    verse: 'Lucas 15:20',
  },
]

export default function Oracao() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedPrayer, setSelectedPrayer] = useState(null)

  const openPrayer = (prayer) => {
    setSelectedPrayer(prayer)
    setIsOpen(true)
  }

  return (
    <>
      {/* Trigger button — minimal, bottom-right */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 group flex items-center gap-3"
        aria-label="Preciso de uma oração"
      >
        <span className="hidden md:block text-[#888888] text-[10px] tracking-[0.3em] uppercase group-hover:text-[#D4AF37] transition-colors duration-300">
          Preciso de uma oração
        </span>
        <div className="w-10 h-10 border border-[#D4AF37]/30 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all duration-300">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
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
              onClick={() => {
                setIsOpen(false)
                setSelectedPrayer(null)
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative max-w-2xl w-full max-h-[85vh] overflow-y-auto bg-[#111111] border border-[#D4AF37]/20"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#D4AF37]/40" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#D4AF37]/40" />

                <div className="p-8 md:p-12">
                  {!selectedPrayer ? (
                    <>
                      <p className="text-[#D4AF37]/60 text-[10px] tracking-[0.4em] uppercase mb-2">
                        Oração
                      </p>

                      <h3 className="font-['Oswald'] font-bold uppercase text-[#F5F5F5] text-xl tracking-wider mb-2">
                        Preciso de uma oração
                      </h3>

                      <p className="text-[#888888] text-sm leading-relaxed mb-10">
                        Escolha o que mais se aproxima do seu momento. Cada oração é uma ponte até a presença dEle.
                      </p>

                      <div className="space-y-3">
                        {prayers.map((prayer, i) => (
                          <button
                            key={i}
                            onClick={() => openPrayer(prayer)}
                            className="w-full text-left p-4 border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/5 transition-all duration-300 group"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[#CCCCCC] text-sm group-hover:text-[#D4AF37] transition-colors">
                                {prayer.title}
                              </span>
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                className="text-[#555555] group-hover:text-[#D4AF37] transition-colors shrink-0"
                              >
                                <path d="M9 18l6-6-6-6" />
                              </svg>
                            </div>
                          </button>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => setSelectedPrayer(null)}
                        className="flex items-center gap-2 text-[#555555] hover:text-[#D4AF37] text-xs tracking-wider uppercase mb-8 transition-colors"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M15 18l-6-6 6-6" />
                        </svg>
                        Voltar
                      </button>

                      <p className="text-[#D4AF37]/60 text-[10px] tracking-[0.4em] uppercase mb-6">
                        {selectedPrayer.title}
                      </p>

                      <div className="mb-8">
                        <p className="text-[#F5F5F5] text-base md:text-lg leading-relaxed font-light">
                          {selectedPrayer.text}
                        </p>
                      </div>

                      <div className="pt-6 border-t border-[#D4AF37]/10 flex items-center justify-between">
                        <p className="text-[#D4AF37] font-['Oswald'] text-sm tracking-wider">
                          {selectedPrayer.verse}
                        </p>

                        <button
                          onClick={() => {
                            navigator.clipboard?.writeText(selectedPrayer.text)
                          }}
                          className="text-[#555555] hover:text-[#D4AF37] text-xs tracking-wider uppercase transition-colors"
                        >
                          Copiar →
                        </button>
                      </div>
                    </>
                  )}
                </div>

                {/* Close */}
                <button
                  onClick={() => {
                    setIsOpen(false)
                    setSelectedPrayer(null)
                  }}
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
