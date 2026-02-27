import { Bug, Dna, FlaskConical, Microscope, Cat, Brain, Globe, ShieldAlert } from "lucide-react"

const quickFacts = [
  {
    icon: Microscope,
    title: "Phylum Apicomplexa",
    description:
      "T. gondii is an obligate intracellular protozoan parasite belonging to the phylum Apicomplexa, the same group as Plasmodium (malaria). It was first described in 1908 by Nicolle and Manceaux in the North African rodent Ctenodactylus gundi.",
  },
  {
    icon: Cat,
    title: "Definitive Host: Felids",
    description:
      "Cats and other felids are the only known definitive hosts where the sexual stage of the parasite occurs. When a cat ingests infected prey, T. gondii undergoes gametogony in the intestinal epithelium, producing millions of oocysts shed in feces for 1-2 weeks.",
  },
  {
    icon: Globe,
    title: "Global Distribution",
    description:
      "Seroprevalence varies dramatically worldwide: from under 10% in parts of East Asia to over 60% in parts of Latin America and tropical Africa. Factors include climate, dietary habits, cat populations, and water sanitation.",
  },
  {
    icon: Brain,
    title: "Neurotropism",
    description:
      "T. gondii has a remarkable affinity for the central nervous system. During chronic infection, tissue cysts (containing bradyzoites) preferentially form in the brain and skeletal muscle, where they can persist for the lifetime of the host.",
  },
  {
    icon: ShieldAlert,
    title: "Clinical Significance",
    description:
      "Most infections in immunocompetent individuals are asymptomatic. However, primary infection during pregnancy can cause severe congenital disease, and reactivation in immunocompromised patients (HIV/AIDS, organ transplant) can be life-threatening.",
  },
  {
    icon: Bug,
    title: "Three Infectious Stages",
    description:
      "The parasite exists in three infectious forms: tachyzoites (rapidly dividing, acute phase), bradyzoites (slowly dividing, within tissue cysts), and sporozoites (within oocysts shed by cats). Each stage plays a distinct role in transmission.",
  },
  {
    icon: Dna,
    title: "Genome & Strain Types",
    description:
      "T. gondii has a ~65 Mb genome across 14 chromosomes. Three major clonal lineages (Types I, II, III) dominate in North America and Europe. Type II is most common in clinical cases. Atypical strains are more diverse in South America.",
  },
  {
    icon: FlaskConical,
    title: "Immune Evasion Expert",
    description:
      "The parasite secretes effector proteins from specialized organelles (rhoptries, dense granules) that manipulate host cell signaling, block apoptosis, hijack the NF-kB pathway, and modulate the immune response to ensure its own survival.",
  },
]

export function OverviewSection() {
  return (
    <section id="overview" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">
            Overview
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            What is Toxoplasma gondii?
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            T. gondii is one of the most successful parasites in nature. It can
            infect virtually any warm-blooded animal, has evolved extraordinary
            strategies for immune evasion, and may even manipulate host behavior
            to enhance its own transmission.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {quickFacts.map((fact) => (
            <div
              key={fact.title}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <fact.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-card-foreground">
                  {fact.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {fact.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
