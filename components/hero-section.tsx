import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-card">
      {/* Background image with light overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/toxoplasma-hero.jpg"
          alt="Microscopy view of Toxoplasma gondii parasites"
          fill
          className="object-cover opacity-15"
          priority
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40 lg:py-48">
        <div className="max-w-3xl">
          <p className="mb-4 font-mono text-sm tracking-widest text-primary uppercase">
            The World{"'"}s Most Successful Parasite
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
            <span className="italic text-primary">Toxoplasma gondii</span>
          </h1>
          <p className="mb-4 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            An obligate intracellular apicomplexan parasite that infects
            approximately one-third of the global human population. It is one
            of the most widespread parasites on Earth.
          </p>
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Explore its biology, lifecycle, host interactions, clinical
            significance, and the latest research all in one place, with an
            AI-powered assistant to answer your questions.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2" asChild>
              <a href="#overview">
                Explore
                <ArrowDown className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary" asChild>
              <a href="#chat">
                Ask ToxoAI
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
