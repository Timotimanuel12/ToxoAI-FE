import { ArrowRight, Microscope, Cat, Globe, Brain, ShieldAlert, Bug, Dna, FlaskConical } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const sideCards = [
  {
    label: "HIV Seroprevalence",
    text: "65.48% of 197 HIV patients tested positive for IgG T. gondii in the Jakarta metropolitan area",
    icon: Microscope,
  },
  {
    label: "Dietary Risk",
    text: "Grilled ruminant meat consumption carries a 4.89× higher risk of T. gondii seropositivity",
    icon: Globe,
  },
  {
    label: "Brain Invasion",
    text: "Bradyzoites lodge in brain tissue for life and reactivate when CD4 drops below 100 cells/μL",
    icon: Brain,
  },
  {
    label: "Sexual Transmission",
    text: "T. gondii detected in semen — oral sex identified as a 1.56× risk factor in HIV patients",
    icon: Bug,
  },
]

const bottomFacts = [
  {
    icon: ShieldAlert,
    title: "Oocyst Resilience",
    description: "Survive in soil and water for over a year, resisting digestive enzymes and most disinfectants.",
  },
  {
    icon: Cat,
    title: "Food Chain Entry",
    description: "Livestock graze on oocyst-contaminated vegetation from cat feces, forming tissue cysts in their muscles.",
  },
  {
    icon: Dna,
    title: "ML Screening",
    description: "Prediction model achieves 97.67% sensitivity and 87.35% accuracy from lifestyle questionnaire data.",
  },
  {
    icon: FlaskConical,
    title: "Lifestyle Factors",
    description: "Dietary risk scores, economic factors, and hygiene habits predict infection with F1-scores up to 0.80.",
  },
]

export function OverviewSection() {
  return (
    <section id="overview" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Global prevalence map banner */}
        <div className="relative mb-12 overflow-hidden rounded-2xl">
          <div className="relative aspect-[21/9] w-full">
            <Image
              src="/images/global-map.png"
              alt="Global distribution of Toxoplasma gondii prevalence"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
            <div className="absolute bottom-0 left-0 top-0 flex flex-col justify-center p-8 md:p-12">
              <p className="mb-2 font-mono text-xs tracking-widest text-primary-foreground/70 uppercase">
                Global Reach
              </p>
              <h3 className="mb-2 max-w-md text-2xl font-bold text-primary-foreground md:text-3xl text-balance">
                Infecting Every Continent on Earth
              </h3>
              <p className="max-w-sm text-sm leading-relaxed text-primary-foreground/80">
                From the Arctic to the tropics, T. gondii has colonized every
                warm-blooded ecosystem — making it one of the most widespread
                parasites ever documented.
              </p>
            </div>
          </div>
        </div>

        {/* Reference-style layout: large card left + stacked cards right */}
        <div className="mb-12 grid gap-6 lg:grid-cols-5">
          {/* Left — large featured card */}
          <div className="lg:col-span-3 flex flex-col overflow-hidden rounded-2xl bg-indigo-50 dark:bg-indigo-950/30">
            <div className="flex flex-1 flex-col justify-center p-8 md:p-10">
              <p className="mb-3 font-mono text-xs tracking-widest text-indigo-500 uppercase">
                Overview
              </p>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
                The World{"'"}s Most Cunning Parasite
              </h2>
              <p className="mb-6 max-w-lg text-base leading-relaxed text-muted-foreground">
                It invades any warm-blooded animal. It rewires the brains of its
                hosts. It turns cats into biological weapons. And it may already
                be inside you — silently manipulating your behavior.
              </p>
              <div>
                <Button className="bg-indigo-600 text-white hover:bg-indigo-700 gap-2" asChild>
                  <a href="#lifecycle">
                    Explore the Lifecycle
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative h-56 md:h-64">
              <img
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&h=400&fit=crop"
                alt="Microscopic view of Toxoplasma gondii"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-50 dark:from-indigo-950/30 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right — stacked side cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {sideCards.map((card) => (
              <a
                key={card.label}
                href="#lifecycle"
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-indigo-300 hover:shadow-sm dark:hover:border-indigo-700"
              >
                <div className="flex-1">
                  <p className="mb-1 text-xs font-semibold tracking-wide text-indigo-500 uppercase">
                    {card.label}
                  </p>
                  <p className="text-sm font-medium leading-snug text-foreground">
                    {card.text}
                  </p>
                </div>
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-background transition-colors group-hover:border-indigo-300 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/30">
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-indigo-500" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom fact strip */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {bottomFacts.map((fact) => (
            <div
              key={fact.title}
              className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-indigo-200 dark:hover:border-indigo-800"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-500 dark:bg-indigo-950/40">
                <fact.icon className="h-4 w-4" />
              </div>
              <h3 className="mb-1 text-sm font-semibold text-foreground">
                {fact.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {fact.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
