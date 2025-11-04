import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.6, // 더 빠르게 반응
      easing: (t) => t, // 직선 이징으로 즉각적 느낌
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1.2, // 휠 가속도 증가
    })

    let rafId
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return null
}


