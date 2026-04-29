"use client"

import { useState } from "react"
import { ArrowRight, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"

const news = [
    {
        image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=600&h=400&fit=crop",
        date: "February 2026",
        tag: "Research",
        title: "New ML Model Screens for Toxoplasma in HIV Patients Using Lifestyle Data",
        summary:
            "A Bina Nusantara University study achieves 87.35% accuracy predicting T. gondii seropositivity from questionnaire responses — no blood test needed.",
        full: "Researchers at Bina Nusantara University developed a machine learning pipeline trained entirely on lifestyle questionnaire data — dietary habits, hygiene practices, and socioeconomic factors — to predict Toxoplasma gondii seropositivity in HIV patients. The model achieved 87.35% overall accuracy and 97.67% sensitivity, suggesting it could serve as a low-cost, non-invasive screening tool for resource-limited settings in Indonesia and beyond. The study included 197 HIV-positive patients from the Jakarta metropolitan area.",
        url: "https://scholar.google.com/scholar?q=Machine+learning+prediction+Toxoplasma+gondii+lifestyle+Bina+Nusantara",
    },
    {
        image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&h=400&fit=crop",
        date: "January 2025",
        tag: "Dissertation",
        title: "Dissertation Identifies Grilled Meat and Oral Sex as Key Risk Factors",
        summary:
            "Rizky Fajar Meirawan's doctoral study of 197 HIV patients reveals grilled ruminant meat carries a 4.89× higher risk of T. gondii infection.",
        full: "A doctoral dissertation by Rizky Fajar Meirawan examined 197 HIV-positive patients to identify behavioral and dietary predictors of Toxoplasma gondii infection. Consumption of grilled or barbecued ruminant meat (sate, smoked beef) was found to carry a 4.89× higher odds ratio compared to non-consumers — likely due to cooking methods that fail to reach the 67°C threshold needed to destroy tissue cysts. Oral sexual behavior was also identified as a 1.56× risk factor, consistent with reports of T. gondii detection in seminal fluid.",
        url: "https://scholar.google.com/scholar?q=Meirawan+Toxoplasma+gondii+HIV+risk+factors+dissertation",
    },
    {
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop",
        date: "2024",
        tag: "Review",
        title: "Comprehensive Review: Toxoplasmosis as a Serious Threat to Human Health",
        summary:
            "Khairullah et al. outline key transmission routes including cat feces, contaminated food and water, and congenital infection across populations.",
        full: "A comprehensive review by Khairullah et al. published in The Open Public Health Journal synthesizes current knowledge on Toxoplasma gondii's global burden. The review covers the parasite's three-stage lifecycle (tachyzoite, bradyzoite, oocyst), its unique ability to cross the blood-brain and placental barriers, and the severe consequences of reactivation in immunocompromised individuals. The authors call for expanded screening programs in high-risk populations, particularly pregnant women and HIV/AIDS patients.",
        url: "https://scholar.google.com/scholar?q=Khairullah+toxoplasmosis+serious+threat+human+health+2024",
    },
    {
        image: "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=600&h=400&fit=crop",
        date: "2023",
        tag: "Epidemiology",
        title: "Cat Breeders Show High Prevalence of Chronic Toxoplasmosis in Indonesia",
        summary:
            "A Surabaya study finds alarming infection rates among cat breeding organization members, with poor hygiene identified as the primary risk factor.",
        full: "A study conducted in Surabaya among members of a formal cat breeding organization found significantly elevated rates of chronic Toxoplasma gondii infection compared to the general population. Researchers identified litter box handling without gloves, not washing hands after cat contact, and allowing cats to roam outdoor areas as the primary behavioral risk factors. The findings highlight the importance of hygiene education for cat owners even in organized, semi-professional settings.",
        url: "https://scholar.google.com/scholar?q=toxoplasmosis+cat+breeders+Surabaya+Indonesia+chronic",
    },
]

function NewsCard({ item }: { item: typeof news[0] }) {
    const [expanded, setExpanded] = useState(false)

    return (
        <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:border-indigo-200 hover:shadow-sm dark:hover:border-indigo-800">
            {/* Image */}
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

            {/* Content */}
            <div className="flex flex-1 flex-col p-4">
                <p className="mb-1.5 text-[11px] text-muted-foreground">{item.date}</p>
                <h3 className="mb-2 text-sm font-semibold leading-snug text-card-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {item.title}
                </h3>

                {/* Summary always visible */}
                <p className="text-xs leading-relaxed text-muted-foreground">
                    {item.summary}
                </p>

                {/* Expanded full text */}
                {expanded && (
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground border-t border-border pt-3">
                        {item.full}
                    </p>
                )}

                {/* Actions */}
                <div className="mt-4 flex items-center gap-2 flex-wrap">
                    <button
                        onClick={() => setExpanded((v) => !v)}
                        className="flex items-center gap-1 text-xs font-medium text-indigo-500 hover:text-indigo-400 transition-colors"
                    >
                        {expanded ? (
                            <>Show less <ChevronUp className="h-3.5 w-3.5" /></>
                        ) : (
                            <>Read more <ChevronDown className="h-3.5 w-3.5" /></>
                        )}
                    </button>

                    {expanded && (
                        <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-auto flex items-center gap-1 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-700 transition-colors"
                        >
                            Visit site
                            <ExternalLink className="h-3 w-3" />
                        </a>
                    )}
                </div>
            </div>
        </article>
    )
}

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
                            Breaking Research &amp; Findings
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
                        <NewsCard key={i} item={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}
