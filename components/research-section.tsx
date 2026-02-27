import { ExternalLink } from "lucide-react"

const papers = [
  {
    title: "Toxoplasma gondii: from animals to humans",
    authors: "Dubey, J.P.",
    journal: "Clinical Microbiology and Infection",
    year: "2024",
    tag: "Review",
  },
  {
    title: "Mechanisms of Toxoplasma gondii persistence and latency",
    authors: "Watts, E. et al.",
    journal: "FEMS Microbiology Reviews",
    year: "2024",
    tag: "Persistence",
  },
  {
    title: "CRISPR-Cas9 reveals essential and non-essential genes in T. gondii",
    authors: "Sidik, S.M. et al.",
    journal: "Cell",
    year: "2023",
    tag: "Genomics",
  },
  {
    title: "Behavioral manipulation by Toxoplasma gondii: does dopamine play a role?",
    authors: "McConkey, G.A. et al.",
    journal: "Trends in Parasitology",
    year: "2024",
    tag: "Behavior",
  },
  {
    title: "Novel therapeutic targets for chronic toxoplasmosis",
    authors: "Alday, P.H. & Doggett, J.S.",
    journal: "Antimicrobial Agents and Chemotherapy",
    year: "2025",
    tag: "Therapeutics",
  },
]

export function ResearchSection() {
  return (
    <section id="research" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">
            Research Feed
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Stay current with the latest in Toxoplasma research
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            ToxoAI is continuously updated with new publications from top parasitology
            and infectious disease journals.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {papers.map((paper, i) => (
            <div
              key={i}
              className="group flex flex-col justify-between gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40 sm:flex-row sm:items-center"
            >
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] font-medium tracking-wider text-primary uppercase">
                    {paper.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">{paper.year}</span>
                </div>
                <h3 className="mb-1 text-sm font-semibold text-card-foreground group-hover:text-primary transition-colors">
                  {paper.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {paper.authors} &mdash; <span className="italic">{paper.journal}</span>
                </p>
              </div>
              <button className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary shrink-0">
                View
                <ExternalLink className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
