"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

interface Node {
  x: number
  y: number
  baseX: number
  baseY: number
  vx: number
  vy: number
  radius: number
}

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let width = 0
    let height = 0
    let mouseX = -9999
    let mouseY = -9999

    const NODE_COUNT = 90
    const CONNECT_DIST = 150
    const MOUSE_RADIUS = 200
    const nodes: Node[] = []

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      // Re-scatter nodes on resize
      if (nodes.length > 0) {
        for (const n of nodes) {
          n.baseX = Math.random() * width
          n.baseY = Math.random() * height
          n.x = n.baseX
          n.y = n.baseY
        }
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouseX = -9999
      mouseY = -9999
    }

    window.addEventListener("resize", handleResize)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    handleResize()

    // Initialize nodes
    for (let i = 0; i < NODE_COUNT; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      nodes.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: 1.5 + Math.random() * 2.5,
      })
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Update nodes
      for (const n of nodes) {
        // Gentle drift
        n.baseX += n.vx
        n.baseY += n.vy

        // Bounce off edges
        if (n.baseX < 0 || n.baseX > width) n.vx *= -1
        if (n.baseY < 0 || n.baseY > height) n.vy *= -1
        n.baseX = Math.max(0, Math.min(width, n.baseX))
        n.baseY = Math.max(0, Math.min(height, n.baseY))

        // Mouse repulsion — push nodes away from cursor
        const dx = n.baseX - mouseX
        const dy = n.baseY - mouseY
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS
          const pushX = (dx / dist) * force * 60
          const pushY = (dy / dist) * force * 60
          n.x += (n.baseX + pushX - n.x) * 0.15
          n.y += (n.baseY + pushY - n.y) * 0.15
        } else {
          // Spring back
          n.x += (n.baseX - n.x) * 0.08
          n.y += (n.baseY - n.y) * 0.08
        }
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.35
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`
            ctx.lineWidth = 0.7
            ctx.stroke()
          }
        }
      }

      // Draw mouse glow
      if (mouseX > -1000 && mouseY > -1000) {
        const glow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, MOUSE_RADIUS)
        glow.addColorStop(0, "rgba(139, 92, 246, 0.12)")
        glow.addColorStop(0.6, "rgba(99, 102, 241, 0.04)")
        glow.addColorStop(1, "rgba(59, 130, 246, 0)")
        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(mouseX, mouseY, MOUSE_RADIUS, 0, Math.PI * 2)
        ctx.fill()
      }

      // Draw nodes
      for (const n of nodes) {
        const dx = n.x - mouseX
        const dy = n.y - mouseY
        const dist = Math.sqrt(dx * dx + dy * dy)
        const nearMouse = dist < MOUSE_RADIUS

        // Glow effect for nodes near cursor
        if (nearMouse) {
          const glowSize = n.radius * 4
          const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowSize)
          glow.addColorStop(0, "rgba(139, 92, 246, 0.3)")
          glow.addColorStop(1, "rgba(139, 92, 246, 0)")
          ctx.fillStyle = glow
          ctx.beginPath()
          ctx.arc(n.x, n.y, glowSize, 0, Math.PI * 2)
          ctx.fill()
        }

        // Draw dot
        ctx.beginPath()
        ctx.arc(n.x, n.y, nearMouse ? n.radius * 1.5 : n.radius, 0, Math.PI * 2)
        ctx.fillStyle = nearMouse
          ? "rgba(139, 92, 246, 0.9)"
          : "rgba(139, 92, 246, 0.4)"
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener("resize", handleResize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background image with light overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/toxoplasma-microscopy.png"
          alt="Fluorescence microscopy of Toxoplasma gondii tachyzoites invading a host cell"
          fill
          className="object-cover opacity-15"
          priority
        />
      </div>

      {/* Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[1] h-full w-full"
        style={{ pointerEvents: "auto" }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-background/30 via-background/50 to-background pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-28 md:py-40 text-center flex flex-col items-center pointer-events-none">
        <p className="mb-4 font-mono text-sm tracking-widest text-primary uppercase">
          One Parasite. Billions of Hosts. Zero Symptoms.
        </p>
        <h1 className="mb-4 text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl text-balance">
          Meet the Parasite<br />That <span className="text-primary">Rewires Minds</span>
        </h1>
        <p className="mb-2 text-xl font-medium italic text-primary/80 md:text-2xl">
          Toxoplasma gondii
        </p>
        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          It lives in your brain. It changes how you think. And it has already
          infected one-third of humanity. Welcome to the world of the
          most successful parasite on Earth.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row justify-center pointer-events-auto">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2" asChild>
            <a href="#overview">
              Explore
              <ArrowDown className="w-4 h-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary bg-background/50 backdrop-blur-sm" asChild>
            <a href="#chat">
              Ask ToxoAI
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
