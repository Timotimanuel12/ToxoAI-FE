import {
  Beaker,
  BookOpen,
  Stethoscope,
  Globe,
  ShieldAlert,
  Pill,
} from "lucide-react"

const topics = [
  {
    icon: Beaker,
    title: "Basic Biology",
    items: [
      "Apicomplexan cell biology",
      "Invasion mechanisms & moving junction",
      "Parasitophorous vacuole formation",
      "Stage conversion (tachy to brady)",
      "Rhoptry & microneme secretion",
    ],
  },
  {
    icon: BookOpen,
    title: "Epidemiology",
    items: [
      "Global prevalence & seroprevalence",
      "Waterborne & foodborne outbreaks",
      "Genotype distribution by geography",
      "Risk factors for infection",
      "One Health approach",
    ],
  },
  {
    icon: Stethoscope,
    title: "Clinical Disease",
    items: [
      "Congenital toxoplasmosis",
      "Ocular toxoplasmosis",
      "Cerebral toxoplasmosis in HIV",
      "Reactivation in transplant recipients",
      "Lymphadenopathic form",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Immune Response",
    items: [
      "IL-12/IFN-gamma axis",
      "CD8+ T cell control",
      "Parasite immune evasion",
      "Inflammasome activation",
      "Immune reconstitution inflammatory syndrome",
    ],
  },
  {
    icon: Pill,
    title: "Therapeutics",
    items: [
      "Pyrimethamine-sulfadiazine",
      "TMP-SMX prophylaxis",
      "Novel drug targets",
      "Anti-bradyzoite strategies",
      "Vaccine development pipeline",
    ],
  },
  {
    icon: Globe,
    title: "Ecology & Evolution",
    items: [
      "Population genetics & clonal lineages",
      "Wildlife reservoir dynamics",
      "Environmental oocyst persistence",
      "Marine mammal infections",
      "Climate change implications",
    ],
  },
]

export function TopicsSection() {
  return (
    <section id="topics" className="border-t border-border bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">
            Topics Library
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-card-foreground md:text-4xl text-balance">
            Deep expertise across every domain
          </h2>
          <p className="mx-auto max-w-lg text-lg leading-relaxed text-muted-foreground">
            ToxoAI covers the full spectrum of Toxoplasma research, from molecular
            biology to global health.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="rounded-xl border border-border bg-background p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <topic.icon className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {topic.title}
                </h3>
              </div>
              <ul className="flex flex-col gap-2">
                {topic.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
