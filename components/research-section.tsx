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
    <section id="research" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Research lab image banner */}
        <div className="relative mb-10 overflow-hidden rounded-xl">
          <div className="relative aspect-[21/9] w-full">
            <Image
              src="/images/research-lab.png"
              alt="Scientists working in a parasitology research laboratory"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
              <p className="font-mono text-xs tracking-widest text-primary-foreground/70 uppercase">
                Cutting-Edge Science
              </p>
              <h3 className="mt-1 max-w-md text-lg font-bold text-primary-foreground md:text-xl">
                Where Discovery Meets Impact
              </h3>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 font-mono text-xs tracking-widest text-indigo-500 uppercase">
            Research Feed
          </p>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl text-balance">
            From the Frontier of Parasitology
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            The latest breakthroughs from top journals — curated and
            summarized so you never miss a critical finding.
          </p>
        </div>

        {/* Featured paper */}
        <div className="mb-5 grid gap-5 md:grid-cols-5">
          <div className="md:col-span-3 group rounded-xl border border-border bg-indigo-50 dark:bg-indigo-950/30 p-6 md:p-8">
            <div className="mb-3 flex items-center gap-2">
              <span className="rounded-full bg-indigo-100 dark:bg-indigo-900/50 px-2.5 py-0.5 font-mono text-[10px] font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
                {papers[1].tag}
              </span>
              <span className="text-xs text-muted-foreground">{papers[1].year}</span>
              <span className="rounded-full bg-amber-100 dark:bg-amber-900/30 px-2.5 py-0.5 text-[10px] font-semibold text-amber-700 dark:text-amber-400">
                Featured
              </span>
            </div>
            <h3 className="mb-2 text-base font-bold text-foreground">
              {papers[1].title}
            </h3>
            <p className="mb-3 text-sm text-muted-foreground">
              {papers[1].authors} — <span className="italic">{papers[1].journal}</span>
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              This groundbreaking study demonstrates that machine learning models can predict T. gondii infection from questionnaire-based lifestyle factors alone, achieving up to 87.35% accuracy — potentially transforming screening in resource-limited settings.
            </p>
          </div>
          <div className="md:col-span-2 relative overflow-hidden rounded-xl border border-border min-h-[220px]">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=500&fit=crop&q=80"
              alt="Scientific data analysis"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-sm font-semibold text-white">Data-Driven Parasitology</p>
              <p className="text-xs text-white/70 mt-1">Where AI meets infectious disease prediction</p>
            </div>
          </div>
        </div>

        {/* Paper list */}
        <div className="flex flex-col gap-3">
          {papers.filter((_, i) => i !== 1).map((paper, i) => (
            <div
              key={i}
              className="group flex flex-col justify-between gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-indigo-200 dark:hover:border-indigo-800 sm:flex-row sm:items-center"
            >
              <div className="flex-1">
                <div className="mb-1.5 flex items-center gap-2 flex-wrap">
                  <span className="rounded-full bg-indigo-50 dark:bg-indigo-950/40 px-2.5 py-0.5 font-mono text-[10px] font-medium tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
                    {paper.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">{paper.year}</span>
                </div>
                <h3 className="mb-1 text-sm font-semibold text-card-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {paper.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {paper.authors} &mdash; <span className="italic">{paper.journal}</span>
                </p>
              </div>
              <button className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-indigo-500 shrink-0">
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
