import { ArrowRight } from "lucide-react"

const news = [
    {
        image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=600&h=400&fit=crop",
        date: "February 2026",
        tag: "Research",
        title: "New ML Model Screens for Toxoplasma in HIV Patients Using Lifestyle Data",
        description:
            "A Bina Nusantara University study achieves 87.35% accuracy predicting T. gondii seropositivity from questionnaire responses — no blood test needed.",
    },
    {
        image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&h=400&fit=crop",
        date: "January 2025",
        tag: "Dissertation",
        title: "Dissertation Identifies Grilled Meat and Oral Sex as Key Risk Factors",
        description:
            "Rizky Fajar Meirawan's doctoral study of 197 HIV patients reveals grilled ruminant meat carries a 4.89× higher risk of T. gondii infection.",
    },
    {
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop",
        date: "2024",
        tag: "Review",
        title: "Comprehensive Review: Toxoplasmosis as a Serious Threat to Human Health",
        description:
            "Khairullah et al. outline key transmission routes including cat feces, contaminated food and water, and congenital infection across populations.",
    },
    {
        image: "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=600&h=400&fit=crop",
        date: "2023",
        tag: "Epidemiology",
        title: "Cat Breeders Show High Prevalence of Chronic Toxoplasmosis in Indonesia",
        description:
            "A Surabaya study finds alarming infection rates among cat breeding organization members, with poor hygiene identified as the primary risk factor.",
    },
]

export function NewsSection() {
    return (
        <section className="border-t border-border py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-10 flex items-end justify-between">
                    <div>
                        <p className="mb-2 font-mono text-xs tracking-widest text-indigo-500 uppercase">
                            Latest News
                        </p>
                        <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                            Breaking Research & Findings
                        </h2>
                    </div>
                    <a
                        href="#research"
                        className="hidden items-center gap-1.5 text-sm font-medium text-indigo-500 transition-colors hover:text-indigo-400 md:flex"
                    >
                        View all research
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {news.map((item, i) => (
                        <article
                            key={i}
                            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:border-indigo-200 hover:shadow-sm dark:hover:border-indigo-800"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <span className="absolute left-3 top-3 rounded-full bg-indigo-600/90 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-white uppercase backdrop-blur-sm">
                                    {item.tag}
                                </span>
                            </div>
                            <div className="flex flex-1 flex-col p-4">
                                <p className="mb-1.5 text-[11px] text-muted-foreground">{item.date}</p>
                                <h3 className="mb-1.5 text-sm font-semibold leading-snug text-card-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-3">
                                    {item.title}
                                </h3>
                                <p className="mt-auto text-xs leading-relaxed text-muted-foreground line-clamp-2">
                                    {item.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
