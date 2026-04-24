"use client"

import { useState } from "react"
import Image from "next/image"

const stages = [
  {
    name: "Tachyzoite",
    subtitle: "The Speed Demon",
    // CDC/Wikimedia public domain microscopy of tachyzoites
    image: "/images/toxoplasma-microscopy.png",
    description:
      "Crescent-shaped, 2–6 μm long. During acute infection, sporozoites penetrate the intestinal mucosa, undergo cell division, and transform into tachyzoites. These rapidly-dividing forms spread throughout the body — invading muscles, nerves, eyes, the brain, and meninges.",
    details: [
      "Actively invades host cells using the glideosome molecular motor",
      "Replicates every 6–8 hours by endodyogeny (internal budding)",
      "Spreads systemically via bloodstream using immune cells as Trojan horses",
      "Transforms into bradyzoites under immune pressure from the host",
      "Responsible for tissue destruction and clinical disease symptoms",
    ],
    color: "#6366f1",
  },
  {
    name: "Bradyzoite",
    subtitle: "The Sleeper Agent",
    // Tissue cyst microscopy
    image: "/images/brain-tissue.png",
    description:
      "Metabolically distinct from tachyzoites, bradyzoites reside within tissue cysts (10–100 μm) primarily in brain, skeletal muscle, and heart. Protected by a cyst wall containing glycans and proteins. They persist for a lifetime — the hallmark of chronic T. gondii infection.",
    details: [
      "Resistant to digestive enzymes, enabling foodborne transmission through undercooked meat",
      "Tissue cysts in livestock survive until the animal is slaughtered for consumption",
      "Reactivate to tachyzoites when CD4 drops below 100 cells/μL in HIV patients",
      "Found in ruminant meat: cattle, goats, sheep, and buffalo — a major infection source",
      "No currently available drug can eliminate bradyzoite tissue cysts",
    ],
    color: "#818cf8",
  },
  {
    name: "Oocyst & Sporozoite",
    subtitle: "Nature's Time Bomb",
    // Oocyst microscopy
    image: "/images/lifecycle.jpg",
    description:
      "Oocysts are shed in cat feces — up to 100 million in a single infection. After 1–5 days in the environment, they sporulate and become infectious. Oocysts contaminate grass and vegetation, consumed by grazing livestock, completing the transmission cycle.",
    details: [
      "Extremely resistant: survive in soil and water for over a year",
      "Resist most chemical disinfectants and digestive enzymes",
      "Livestock become infected by grazing on oocyst-contaminated vegetation",
      "Inside the gut, oocysts rupture and release sporozoites that penetrate the intestinal mucosa",
      "Only produced during sexual reproduction in the feline intestinal epithelium",
    ],
    color: "#a5b4fc",
  },
]

const transmissionRoutes = [
  {
    route: "Grilled/Barbecued Meat",
    detail: "Consuming grilled ruminant meat (sate, steak, smoked meat) is a major risk — with a 4.89× higher chance of T. gondii seropositivity. Cooking methods that fail to reach 67°C throughout leave tissue cysts intact and infectious.",
  },
  {
    route: "Raw/Undercooked Meat",
    detail: "Meat from cattle, goats, sheep, and poultry can harbor T. gondii tissue cysts. Ducrocq et al.'s meta-analysis confirmed that consuming raw or undercooked meat significantly increases infection risk worldwide.",
  },
  {
    route: "Contaminated Produce & Soil",
    detail: "Contact with cat feces or oocyst-contaminated soil, water, or unwashed vegetables. Gardening, farming, and consuming unwashed raw vegetables (lalapan) are notable risk factors.",
  },
  {
    route: "Congenital & Immunocompromised",
    detail: "Transplacental transmission during primary maternal infection poses severe risk to fetuses. In HIV patients with CD4 below 100 cells/μL, dormant bradyzoites reactivate, causing fatal encephalitis.",
  },
]

function GlassCard({ stage, index }: { stage: typeof stages[0]; index: number }) {
  const [revealed, setRevealed] = useState(false)

  return (
    <div className="flex flex-col items-center gap-0 md:flex-row md:gap-10">
      {/* Timeline node */}
      <div className="relative flex flex-col items-center">
        {/* Connector line above (not for first) */}
        {index > 0 && (
          <div className="h-8 w-px bg-gradient-to-b from-transparent to-indigo-300 dark:to-indigo-700 md:hidden" />
        )}
        {/* Node circle */}
        <div
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 dark:border-indigo-600 font-mono text-sm font-bold text-indigo-600 dark:text-indigo-400 shrink-0"
        >
          {String(index + 1).padStart(2, "0")}
        </div>
        {/* Connector line below (not for last) */}
        {index < stages.length - 1 && (
          <div className="h-8 w-px bg-gradient-to-b from-indigo-300 to-transparent dark:from-indigo-700 md:hidden" />
        )}
      </div>

      {/* Card with glass reveal */}
      <div className="flex-1 w-full grid gap-5 md:grid-cols-5 items-start">
        {/* Glass image card */}
        <div className="md:col-span-2">
          <div
            className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl border border-white/20 select-none"
            onMouseDown={() => setRevealed(true)}
            onMouseUp={() => setRevealed(false)}
            onMouseLeave={() => setRevealed(false)}
            onTouchStart={() => setRevealed(true)}
            onTouchEnd={() => setRevealed(false)}
          >
            {/* Actual microscopy image */}
            <img
              src={stage.image}
              alt={`Microscopy of ${stage.name}`}
              className="h-full w-full object-cover"
              draggable={false}
            />

            {/* Glass overlay — fades out on hold */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300"
              style={{
                opacity: revealed ? 0 : 1,
                backdropFilter: revealed ? "blur(0px)" : "blur(18px)",
                WebkitBackdropFilter: revealed ? "blur(0px)" : "blur(18px)",
                background: revealed
                  ? "transparent"
                  : "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 100%)",
              }}
            >
              <div className="rounded-xl border border-white/30 bg-white/10 px-6 py-4 text-center backdrop-blur-sm">
                <p className="font-mono text-xs tracking-widest text-foreground/60 uppercase mb-1">
                  Hold to reveal
                </p>
                <p className="text-lg font-bold text-foreground/80">
                  {stage.name}
                </p>
              </div>
            </div>

            {/* Revealed label */}
            <div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 pt-12 transition-opacity duration-300"
              style={{ opacity: revealed ? 1 : 0 }}
            >
              <p className="text-sm font-bold text-white drop-shadow-md">{stage.name} — microscopy</p>
              <p className="text-[10px] font-medium text-white/80 mt-1 drop-shadow-sm">Source: Wikimedia Commons / CDC PHIL</p>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="md:col-span-3">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-bold text-foreground">{stage.name}</h3>
          </div>
          <p className="text-sm font-medium text-indigo-500 mb-3">{stage.subtitle}</p>
          <p className="text-sm leading-relaxed text-muted-foreground mb-4">
            {stage.description}
          </p>
          <ul className="flex flex-col gap-1.5">
            {stage.details.map((d) => (
              <li
                key={d}
                className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-400/50" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export function LifecycleSection() {
  return (
    <section id="lifecycle" className="border-t border-border bg-card py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 font-mono text-xs tracking-widest text-indigo-500 uppercase">
            Biology & Lifecycle
          </p>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-card-foreground md:text-3xl text-balance">
            A Masterclass in Survival
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            From the gut of a house cat to the neurons of a human brain,
            T. gondii cycles through three radically different forms —
            each one a feat of evolutionary engineering.
          </p>
        </div>

        {/* Image row */}
        <div className="mb-12 grid gap-5 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
            <Image
              src="/images/cat-host-photo.png"
              alt="Cat - the definitive host of Toxoplasma gondii"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-mono text-xs tracking-widest text-primary-foreground/80 uppercase">
                Definitive Host
              </p>
              <p className="mt-1 text-lg font-semibold text-primary-foreground">
                The Feline Connection
              </p>
              <p className="mt-1 text-sm text-primary-foreground/70">
                Cats are the only known definitive host where sexual reproduction
                of T. gondii occurs, producing environmentally resistant oocysts.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
            <Image
              src="/images/lifecycle-diagram.png"
              alt="Toxoplasma gondii lifecycle stages illustration"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-mono text-xs tracking-widest text-primary-foreground/80 uppercase">
                Complex Lifecycle
              </p>
              <p className="mt-1 text-lg font-semibold text-primary-foreground">
                From Oocyst to Tissue Cyst
              </p>
              <p className="mt-1 text-sm text-primary-foreground/70">
                Three infectious stages ensure transmission through diverse
                environmental and dietary routes worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline heading */}
        <div className="mb-8 flex items-center gap-3">
          <h3 className="text-lg font-bold text-card-foreground">
            Three Forms of T. gondii
          </h3>
          <span className="rounded-full bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1 text-[10px] font-semibold tracking-wider text-indigo-500 uppercase">
            Hold to reveal
          </span>
        </div>

        {/* Desktop horizontal timeline line */}
        <div className="hidden md:block relative mb-12">
          {/* Horizontal timeline connector */}
          <div className="absolute left-5 top-5 bottom-5 w-px bg-gradient-to-b from-indigo-200 via-indigo-300 to-indigo-200 dark:from-indigo-800 dark:via-indigo-700 dark:to-indigo-800" />

          <div className="flex flex-col gap-12 pl-16">
            {stages.map((stage, i) => (
              <div key={stage.name} className="relative">
                {/* Timeline dot on the line */}
                <div className="absolute -left-[calc(2.75rem+1px)] top-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 dark:border-indigo-600 font-mono text-sm font-bold text-indigo-600 dark:text-indigo-400">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Card content */}
                <div className="grid gap-5 md:grid-cols-5 items-start">
                  {/* Glass image card */}
                  <GlassImageCard stage={stage} />

                  {/* Text content */}
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-foreground">{stage.name}</h3>
                    </div>
                    <p className="text-sm font-medium text-indigo-500 mb-3">{stage.subtitle}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                      {stage.description}
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {stage.details.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-400/50" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex flex-col gap-6 mb-12">
          {stages.map((stage, i) => (
            <GlassCard key={stage.name} stage={stage} index={i} />
          ))}
        </div>

        {/* Transmission routes */}
        <div>
          <h3 className="mb-5 text-lg font-bold text-card-foreground">
            Transmission Routes
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {transmissionRoutes.map((t) => (
              <div
                key={t.route}
                className="rounded-xl border border-border bg-background p-5"
              >
                <h4 className="mb-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                  {t.route}
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function GlassImageCard({ stage }: { stage: typeof stages[0] }) {
  const [revealed, setRevealed] = useState(false)

  return (
    <div className="md:col-span-2">
      <div
        className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl border border-white/20 select-none"
        onMouseDown={() => setRevealed(true)}
        onMouseUp={() => setRevealed(false)}
        onMouseLeave={() => setRevealed(false)}
        onTouchStart={() => setRevealed(true)}
        onTouchEnd={() => setRevealed(false)}
      >
        {/* Actual microscopy image */}
        <img
          src={stage.image}
          alt={`Microscopy of ${stage.name}`}
          className="h-full w-full object-cover"
          draggable={false}
        />

        {/* Glass overlay — fades out on hold */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300"
          style={{
            opacity: revealed ? 0 : 1,
            backdropFilter: revealed ? "blur(0px)" : "blur(18px)",
            WebkitBackdropFilter: revealed ? "blur(0px)" : "blur(18px)",
            background: revealed
              ? "transparent"
              : "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 100%)",
          }}
        >
          <div className="rounded-xl border border-white/30 bg-white/10 px-5 py-3.5 text-center backdrop-blur-sm">
            <p className="font-mono text-[10px] tracking-widest text-foreground/50 uppercase mb-1">
              Hold to reveal
            </p>
            <p className="text-base font-bold text-foreground/80">
              {stage.name}
            </p>
          </div>
        </div>

        {/* Revealed label */}
        <div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 pt-12 transition-opacity duration-300"
          style={{ opacity: revealed ? 1 : 0 }}
        >
          <p className="text-sm font-bold text-white drop-shadow-md">{stage.name} — microscopy</p>
          <p className="text-[10px] font-medium text-white/80 mt-1 drop-shadow-sm">Source: Wikimedia Commons / CDC PHIL</p>
        </div>
      </div>
    </div>
  )
}
