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
    title: "Risk Factor Analysis",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=250&fit=crop",
    items: [
      "Oral sex as a 1.56× risk factor for IgG seropositivity",
      "Grilled ruminant meat as a 4.89× risk factor",
      "Cat feces exposure and soil contact frequency",
      "Personal hygiene behaviors and nail care",
      "Socioeconomic status and asset ownership",
    ],
  },
  {
    icon: BookOpen,
    title: "Dietary Transmission",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=250&fit=crop",
    items: [
      "Tissue cysts survive in meat cooked below 67°C",
      "Grilled, barbecued, and smoked meat (sate, steak)",
      "Raw ruminant and poultry consumption patterns",
      "Seafood and raw vegetable (lalapan) risk assessment",
      "Food handling and meat processing hygiene",
    ],
  },
  {
    icon: Stethoscope,
    title: "Clinical Impact on HIV Patients",
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=400&h=250&fit=crop",
    items: [
      "65.48% seroprevalence in HIV patients (Jakarta study)",
      "Bradyzoite reactivation when CD4 < 100 cells/μL",
      "Fatal encephalitis and neurological complications",
      "T. gondii as a leading opportunistic infection in HIV",
      "ARV therapy and co-management of toxoplasmosis",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Hygiene & Environment",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop",
    items: [
      "Handwashing behavior before/after meals and cooking",
      "Glove use during contact with soil and gardening",
      "Cat contact intensity and feces cleanup frequency",
      "Drinking water source and sanitation quality",
      "Oocyst contamination of livestock pastoral feed",
    ],
  },
  {
    icon: Pill,
    title: "ML-Based Screening",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    items: [
      "MLP neural network achieved highest F1-score of 0.80",
      "SMOTE oversampling for class-imbalanced datasets",
      "PCA dimensionality reduction retaining 95% variance",
      "GridSearchCV hyperparameter optimization",
      "Prediction model: 97.67% sensitivity, 87.35% accuracy",
    ],
  },
  {
    icon: Globe,
    title: "Research Methodology",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
    items: [
      "Cross-sectional study design with 197 HIV patients",
      "ELISA-based IgG serological measurement",
      "Validated questionnaire covering 80+ risk variables",
      "Multivariate analysis with adjusted prevalence ratios",
      "Four partner NGOs across Jakarta, Bogor, Depok, Bekasi",
    ],
  },
]

export function TopicsSection() {
  return (
    <section id="topics" className="border-t border-border bg-card py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <p className="mb-2 font-mono text-xs tracking-widest text-indigo-500 uppercase">
            Topics Library
          </p>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-card-foreground md:text-3xl">
            Explore Every Dimension of T. gondii
          </h2>
          <p className="mx-auto max-w-lg text-base leading-relaxed text-muted-foreground">
            From dietary risk factors to machine learning screening tools
            — go as deep as you want.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="group overflow-hidden rounded-xl border border-border bg-background transition-all duration-200 hover:border-indigo-200 hover:shadow-sm dark:hover:border-indigo-800"
            >
              <div className="relative h-32 overflow-hidden">
                <img
                  src={topic.image}
                  alt={topic.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-5 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
                      <topic.icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-sm font-bold text-foreground">
                      {topic.title}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="px-5 pb-5 pt-2">
                <ul className="flex flex-col gap-1.5">
                  {topic.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-400/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
