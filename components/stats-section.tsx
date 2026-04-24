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
    <section className="border-t border-border py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <p className="mb-2 text-3xl font-bold text-indigo-600 dark:text-indigo-400 md:text-4xl">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-0 overflow-hidden rounded-2xl border border-border md:grid-cols-5">
          <div className="md:col-span-3 bg-indigo-50 dark:bg-indigo-950/30 p-8 md:p-10 flex flex-col justify-center">
            <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl text-balance">
              Ready to Decode the World{"'"}s Stealthiest Pathogen?
            </h2>
            <p className="mb-6 max-w-lg text-base text-muted-foreground leading-relaxed">
              Whether you{"'"}re a student cramming for exams, a researcher
              chasing a breakthrough, or a clinician treating patients —
              everything you need is right here.
            </p>
            <div>
              <Button size="lg" className="bg-indigo-600 text-white hover:bg-indigo-700 gap-2" asChild>
                <a href="#chat">
                  Start Exploring with ToxoAI
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="md:col-span-2 relative min-h-[200px]">
            <img
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop"
              alt="Medical research laboratory"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
