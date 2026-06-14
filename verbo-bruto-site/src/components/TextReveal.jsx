import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function TextReveal({
  children,
  className = '',
  tag: Tag = 'p',
  stagger = 0.08,
  duration = 0.6,
}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    // Split text into words
    const text = el.textContent
    el.innerHTML = text
      .split(/(\s+)/)
      .map((word) =>
        word.trim() === ''
          ? ' '
          : `<span class="inline-block overflow-hidden"><span class="inline-block word-inner">${word}</span></span>`
      )
      .join('')

    const words = el.querySelectorAll('.word-inner')

    gsap.set(words, { y: '100%', opacity: 0 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        end: 'top 40%',
        scrub: 1,
      },
    })

    tl.to(words, {
      y: '0%',
      opacity: 1,
      duration,
      stagger,
      ease: 'power2.out',
    })

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill()
      })
    }
  }, [stagger, duration])

  return (
    <Tag ref={containerRef} className={className}>
      {children}
    </Tag>
  )
}
