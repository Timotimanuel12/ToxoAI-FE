import Image from "next/image"

const stages = [
  {
    name: "Tachyzoite",
    subtitle: "The Speed Demon",
    description:
      "Crescent-shaped, 2–6 μm long. During acute infection, sporozoites penetrate the intestinal mucosa, undergo cell division, and transform into tachyzoites. These rapidly-dividing forms spread throughout the body — invading muscles, nerves, eyes, the brain, and meninges.",
    details: [
      "Actively invades host cells using the glideosome molecular motor",
      "Replicates every 6–8 hours by endodyogeny (internal budding)",
      "Spreads systemically via bloodstream using immune cells as Trojan horses",
      "Transforms into bradyzoites under immune pressure from the host",
      "Responsible for tissue destruction and clinical disease symptoms",
    ],
  },
  {
    name: "Bradyzoite",
    subtitle: "The Sleeper Agent",
    description:
      "Metabolically distinct from tachyzoites, bradyzoites reside within tissue cysts (10–100 μm) primarily in brain, skeletal muscle, and heart. Protected by a cyst wall containing glycans and proteins that provide energy for survival. They persist for a lifetime — and are the hallmark of chronic T. gondii infection.",
    details: [
      "Resistant to digestive enzymes, enabling foodborne transmission through undercooked meat",
      "Tissue cysts in livestock survive until the animal is slaughtered for consumption",
      "Reactivate to tachyzoites when CD4 drops below 100 cells/μL in HIV patients",
      "Found in ruminant meat: cattle, goats, sheep, and buffalo — a major infection source",
      "No currently available drug can eliminate bradyzoite tissue cysts",
    ],
  },
  {
    name: "Oocyst & Sporozoite",
    subtitle: "Nature's Time Bomb",
    description:
      "Oocysts are shed in cat feces — up to 100 million in a single infection. After 1–5 days in the environment, they sporulate and become infectious. Oocysts contaminate grass and vegetation, which is then consumed by grazing livestock, completing the transmission cycle.",
    details: [
      "Extremely resistant: survive in soil and water for over a year",
      "Resist most chemical disinfectants and digestive enzymes",
      "Livestock become infected by grazing on oocyst-contaminated vegetation",
      "Inside the gut, oocysts rupture and release sporozoites that penetrate the intestinal mucosa",
      "Only produced during sexual reproduction in the feline intestinal epithelium",
    ],
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
    detail: "Contact with cat feces or oocyst-contaminated soil, water, or unwashed vegetables. Gardening, farming, and consuming unwashed raw vegetables (lalapan) are notable risk factors identified in the research questionnaire.",
  },
  {
    route: "Congenital & Immunocompromised",
    detail: "Transplacental transmission during primary maternal infection poses severe risk to fetuses. In HIV patients with CD4 below 100 cells/μL, dormant bradyzoites reactivate into tachyzoites, causing fatal encephalitis and neurological damage.",
  },
]

export function LifecycleSection() {
  return (
    <section id="lifecycle" className="border-t border-border bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">
            Biology & Lifecycle
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-card-foreground md:text-4xl text-balance">
            A Masterclass in Survival
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            From the gut of a house cat to the neurons of a human brain,
            T. gondii cycles through three radically different forms —
            each one a feat of evolutionary engineering.
          </p>
        </div>

        {/* Image row */}
        <div className="mb-16 grid gap-6 md:grid-cols-2">
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

        {/* Stage detail cards */}
        <div className="mb-16 flex flex-col gap-8">
          {stages.map((stage, i) => (
            <div
              key={stage.name}
              className="rounded-xl border border-border bg-background p-6 md:p-8"
            >
              <div className="mb-1 flex items-baseline gap-3">
                <span className="font-mono text-xs text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-bold text-foreground">
                  {stage.name}
                </h3>
              </div>
              <p className="mb-4 text-sm font-medium text-primary">
                {stage.subtitle}
              </p>
              <p className="mb-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                {stage.description}
              </p>
              <ul className="grid gap-2 md:grid-cols-2">
                {stage.details.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Transmission routes */}
        <div>
          <h3 className="mb-6 text-xl font-bold text-card-foreground">
            Transmission Routes
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {transmissionRoutes.map((t) => (
              <div
                key={t.route}
                className="rounded-xl border border-border bg-background p-5"
              >
                <h4 className="mb-2 text-sm font-semibold text-primary">
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
