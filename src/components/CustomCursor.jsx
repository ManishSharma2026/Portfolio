// components/CustomCursor.jsx
// Replaces the default browser cursor with a small neon green dot
// and a larger trailing ring. The ring follows with a slight delay
// via CSS transition, creating a smooth lag effect.

import { useEffect, useRef } from 'react'
import './CustomCursor.css'

export default function CustomCursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0, mouseY = 0
    let ringX  = 0, ringY  = 0
    let raf

    // Track real mouse position instantly for the dot
    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform  = `translate(${mouseX}px, ${mouseY}px)`
    }

    // Animate ring with lerp so it trails slightly behind
    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`
      raf = requestAnimationFrame(animate)
    }

    // Grow ring on hoverable elements
    const onMouseEnter = () => ring.classList.add('cursor-ring--hover')
    const onMouseLeave = () => ring.classList.remove('cursor-ring--hover')

    const hoverables = document.querySelectorAll('a, button, [data-hover]')
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnter)
      el.addEventListener('mouseleave', onMouseLeave)
    })

    window.addEventListener('mousemove', onMouseMove)
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(raf)
      hoverables.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnter)
        el.removeEventListener('mouseleave', onMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* The small dot — follows mouse exactly */}
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      {/* The ring  — lags slightly for stylish effect */}
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}
