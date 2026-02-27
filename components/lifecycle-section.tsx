import Image from "next/image"

const stages = [
  {
    name: "Tachyzoite",
    subtitle: "The rapidly dividing form",
    description:
      "Crescent-shaped, 2-6 um long. Found during acute infection. Invades host cells by active penetration, forming a parasitophorous vacuole. Replicates every 6-8 hours by endodyogeny (internal budding). Responsible for tissue destruction and clinical disease.",
    details: [
      "Active invasion using the glideosome molecular motor",
      "Secretes rhoptry and dense granule proteins to remodel host cell",
      "Blocks host cell apoptosis to ensure survival",
      "Can infect virtually any nucleated cell",
      "Disseminates via bloodstream using a Trojan horse mechanism in immune cells",
    ],
  },
  {
    name: "Bradyzoite",
    subtitle: "The slow form within tissue cysts",
    description:
      "Morphologically similar to tachyzoites but metabolically distinct. Found within tissue cysts during chronic (latent) infection. Cysts are 10-100 um in diameter and can contain thousands of bradyzoites. Primarily located in the brain, skeletal muscle, and heart.",
    details: [
      "Resistant to digestive enzymes (pepsin, trypsin), enabling foodborne transmission",
      "Tissue cysts persist for the lifetime of the host",
      "Express stage-specific surface antigens (BAG1/SAG4 instead of SAG1)",
      "Reactivate to tachyzoites when host immunity declines",
      "Major target for future drug development (no current drug eliminates cysts)",
    ],
  },
  {
    name: "Oocyst & Sporozoite",
    subtitle: "The environmental form",
    description:
      "Oocysts are shed in cat feces (up to 100 million in a single infection). Unsporulated oocysts are non-infectious. After 1-5 days in the environment, they sporulate and become infectious. Each sporulated oocyst contains 2 sporocysts, each with 4 sporozoites.",
    details: [
      "Extremely resistant to environmental conditions",
      "Can survive in soil and water for over a year",
      "Resistant to most chemical disinfectants",
      "Responsible for waterborne outbreaks (e.g., Victoria, Canada 1995)",
      "Only produced during sexual reproduction in the feline intestinal epithelium",
    ],
  },
]

const transmissionRoutes = [
  {
    route: "Foodborne",
    detail: "Ingestion of undercooked or raw meat containing tissue cysts. Pork, lamb, and venison are most commonly implicated. Estimated to cause 50% of infections in some regions.",
  },
  {
    route: "Oocyst exposure",
    detail: "Contact with cat feces or contaminated soil, water, or unwashed vegetables. Gardening, sandboxes, and consuming unwashed produce are risk factors.",
  },
  {
    route: "Congenital",
    detail: "Transplacental transmission from mother to fetus during primary maternal infection. Risk increases with gestational age, but severity of fetal disease is inversely correlated.",
  },
  {
    route: "Organ transplant",
    detail: "Transmission via donated organs from seropositive donors to seronegative recipients. Heart transplants carry the highest risk due to tissue cyst tropism.",
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
            Three stages, countless strategies
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            T. gondii{"'"}s lifecycle involves definitive hosts (felids) and a
            vast range of intermediate hosts. Understanding each parasitic
            stage is critical for diagnosis, treatment, and prevention.
          </p>
        </div>

        {/* Image row */}
        <div className="mb-16 grid gap-6 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
            <Image
              src="/images/cat-host.jpg"
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
              src="/images/lifecycle.jpg"
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
