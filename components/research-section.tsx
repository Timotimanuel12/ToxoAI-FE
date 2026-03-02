import { ExternalLink } from "lucide-react"
import Image from "next/image"

const papers = [
  {
    title: "Sexual behavior and history of injecting narcotics use as predictors of Toxoplasma gondii infection in HIV patients",
    authors: "Meirawan, R.F. & Ramadhani, N.R.",
    journal: "Journal Health Sains",
    year: "2023",
    tag: "Risk Factors",
  },
  {
    title: "Machine learning-based prediction of seropositive Toxoplasma gondii from lifestyle factors",
    authors: "Ichwan, W.W., Tandra, P.A., Qomariyah, N.N., Meirawan, R.F. & Setiawan, F.",
    journal: "Bina Nusantara University",
    year: "2025",
    tag: "AI / ML",
  },
  {
    title: "Exposure to Toxoplasma gondii through consumption of raw or undercooked meat: A systematic review and meta-analysis",
    authors: "Ducrocq, J. et al.",
    journal: "Vector-Borne and Zoonotic Diseases",
    year: "2021",
    tag: "Foodborne",
  },
  {
    title: "Chronic toxoplasmosis infection in members of cat breeding organization in Surabaya",
    authors: "Marthalia, W. & Sulistyorini, L.",
    journal: "Jurnal Kesehatan Lingkungan",
    year: "2020",
    tag: "Epidemiology",
  },
  {
    title: "A comprehensive review of toxoplasmosis: Serious threat to human health",
    authors: "Khairullah, A.R. et al.",
    journal: "The Open Public Health Journal",
    year: "2024",
    tag: "Review",
  },
  {
    title: "Toxoplasma gondii infection and toxoplasmosis in farm animals: Risk factors and economic impact",
    authors: "Stelzer, S. et al.",
    journal: "Food and Waterborne Parasitology",
    year: "2019",
    tag: "Agriculture",
  },
  {
    title: "Prevalence of Toxoplasma gondii in Galapagos birds: Inference of risk factors associated with diet",
    authors: "Mosquera, J.D. et al.",
    journal: "PLOS ONE",
    year: "2023",
    tag: "Ecology",
  },
]

export function ResearchSection() {
  return (
    <section id="research" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Research lab image banner */}
        <div className="relative mb-16 overflow-hidden rounded-2xl">
          <div className="relative aspect-[21/9] w-full">
            <Image
              src="/images/research-lab.png"
              alt="Scientists working in a parasitology research laboratory"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <p className="font-mono text-xs tracking-widest text-primary-foreground/70 uppercase">
                Cutting-Edge Science
              </p>
              <h3 className="mt-1 max-w-md text-xl font-bold text-primary-foreground md:text-2xl">
                Where Discovery Meets Impact
              </h3>
            </div>
          </div>
        </div>

        <div className="mb-16 max-w-2xl">
          <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">
            Research Feed
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            From the Frontier of Parasitology
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            The latest breakthroughs from top journals — curated and
            summarized so you never miss a critical finding.
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
