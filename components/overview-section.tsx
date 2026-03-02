import { Bug, Dna, FlaskConical, Microscope, Cat, Brain, Globe, ShieldAlert } from "lucide-react"
import Image from "next/image"

const quickFacts = [
  {
    icon: Microscope,
    title: "65% of HIV Patients Infected",
    description:
      "A study of 197 HIV patients in Jakarta, Bogor, Depok, and Bekasi found that 65.48% tested seropositive for IgG Toxoplasma gondii — revealing alarmingly high chronic infection rates in immunocompromised populations.",
  },
  {
    icon: Cat,
    title: "Cat Feces Contaminate the Food Chain",
    description:
      "Ruminant livestock (cattle, goats, sheep) become infected by grazing on grass and vegetation contaminated with oocysts from cat feces. The parasites then form tissue cysts in the animals' muscles — entering the human food chain.",
  },
  {
    icon: Globe,
    title: "Grilled Meat: A 4.89× Risk Factor",
    description:
      "HIV patients who consumed grilled or barbecued ruminant meat (sate, steak, smoked meat) had a 4.89 times higher risk of T. gondii seropositivity. Cooking methods like grilling fail to reach 67°C throughout the meat, leaving tissue cysts intact.",
  },
  {
    icon: Brain,
    title: "Bradyzoites Invade the Brain",
    description:
      "After infection, tachyzoites spread through the body and transform into bradyzoites under immune pressure. These dormant forms lodge in brain tissue, muscles, and eyes — persisting for a lifetime. When CD4 drops below 100 cells/μL in HIV patients, they reactivate with fatal consequences.",
  },
  {
    icon: ShieldAlert,
    title: "Oocysts Resist Digestive Enzymes",
    description:
      "T. gondii oocysts are extraordinarily resilient — surviving in soil and water for over a year and resisting digestive enzymes. Once ingested, oocysts rupture in the gut, releasing sporozoites that penetrate the intestinal mucosa and spread systemically.",
  },
  {
    icon: Bug,
    title: "T. gondii Found in Human Semen",
    description:
      "Research has detected Toxoplasma gondii in semen and ejaculate, damaging sperm DNA structure. This finding supports sexual transmission as an infection route, with oral sex identified as a 1.56× risk factor for seropositivity among HIV patients.",
  },
  {
    icon: Dna,
    title: "ML Screening Achieves 87% Accuracy",
    description:
      "A prediction model using lifestyle questionnaire data (sexual behavior, diet, hygiene, environment) achieved 97.67% sensitivity and 87.35% accuracy for screening T. gondii seropositivity — offering a cost-effective alternative to laboratory testing.",
  },
  {
    icon: FlaskConical,
    title: "Lifestyle Predicts Infection Risk",
    description:
      "Machine learning models trained on dietary risk scores and economic factors achieved F1-scores up to 0.80. Key predictive features include consumption of undercooked meat, cat feces exposure, soil contact frequency, and personal hygiene habits.",
  },
]

export function OverviewSection() {
  return (
    <section id="overview" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Global prevalence map banner */}
        <div className="relative mb-16 overflow-hidden rounded-2xl">
          <div className="relative aspect-[21/9] w-full">
            <Image
              src="/images/global-map.png"
              alt="Global distribution of Toxoplasma gondii prevalence"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
            <div className="absolute bottom-0 left-0 top-0 flex flex-col justify-center p-8 md:p-12">
              <p className="mb-2 font-mono text-xs tracking-widest text-primary-foreground/70 uppercase">
                Global Reach
              </p>
              <h3 className="mb-2 max-w-md text-2xl font-bold text-primary-foreground md:text-3xl text-balance">
                Infecting Every Continent on Earth
              </h3>
              <p className="max-w-sm text-sm leading-relaxed text-primary-foreground/80">
                From the Arctic to the tropics, T. gondii has colonized every
                warm-blooded ecosystem — making it one of the most widespread
                parasites ever documented.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16 max-w-2xl">
          <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">
            Overview
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            The World{"'"}s Most Cunning Parasite
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            It invades any warm-blooded animal. It rewires the brains of its
            hosts. It turns cats into biological weapons. And it may already
            be inside you — silently manipulating your behavior.
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
