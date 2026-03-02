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
    <section id="topics" className="border-t border-border bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">
            Topics Library
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-card-foreground md:text-4xl text-balance">
            Explore Every Dimension of T. gondii
          </h2>
          <p className="mx-auto max-w-lg text-lg leading-relaxed text-muted-foreground">
            From the molecular machinery of invasion to the global politics
            of pandemic preparedness — go as deep as you want.
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
