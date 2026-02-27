import { ParasiteIcon } from "@/components/parasite-icon"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <ParasiteIcon className="w-6 h-6 text-primary" />
              <span className="text-base font-semibold text-card-foreground">ToxoAI</span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              AI-powered research assistant for Toxoplasma gondii parasitology.
              Built for students, researchers, and clinicians.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-card-foreground">Topics</h4>
            <ul className="flex flex-col gap-2.5">
              {["Lifecycle", "Pathogenesis", "Diagnosis", "Treatment", "Genomics"].map((item) => (
                <li key={item}>
                  <Link href="#topics" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-card-foreground">Resources</h4>
            <ul className="flex flex-col gap-2.5">
              {["Research Papers", "Clinical Guidelines", "Strain Database", "Teaching Materials", "Glossary"].map(
                (item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-card-foreground">Community</h4>
            <ul className="flex flex-col gap-2.5">
              {["About Us", "Contact", "Contribute", "API Access", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            ToxoAI is not a substitute for professional medical advice. Always consult healthcare providers for clinical decisions.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with science in mind.
          </p>
        </div>
      </div>
    </footer>
  )
}
