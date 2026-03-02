import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "65.48%", label: "seroprevalence in HIV patients studied" },
  { value: "4.89×", label: "higher risk from grilled ruminant meat" },
  { value: "87.35%", label: "accuracy of the prediction model" },
  { value: "197", label: "HIV patients in the dissertation study" },
]

export function StatsSection() {
  return (
    <section className="border-t border-border bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="mb-2 text-3xl font-bold text-primary md:text-4xl">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-primary/20 bg-primary/5 p-8 text-center md:p-12">
          <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl text-balance">
            Ready to Decode the World{"'"}s Stealthiest Pathogen?
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-base text-muted-foreground leading-relaxed">
            Whether you{"'"}re a student cramming for exams, a researcher
            chasing a breakthrough, or a clinician treating patients —
            everything you need is right here.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2" asChild>
            <a href="#chat">
              Start Exploring with ToxoAI
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
