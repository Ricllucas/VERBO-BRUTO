import { useEffect, useRef, useState } from 'react'

export default function VideoPlayer({
  youtubeId,
  title = 'Vídeo',
  className = '',
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      className={`relative w-full bg-[#0A0A0A] border border-[#D4AF37]/10 overflow-hidden ${className}`}
      style={{ paddingBottom: '56.25%' }}
    >
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-2 border-[#D4AF37]/20 border-t-[#D4AF37] rounded-full animate-spin mx-auto mb-4" />
            <p className="text-[#888888] text-xs tracking-widest uppercase">Carregando vídeo...</p>
          </div>
        </div>
      )}
      {isVisible && (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setIsLoaded(true)}
          className="absolute inset-0 w-full h-full"
          style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s' }}
        />
      )}
    </div>
  )
}
