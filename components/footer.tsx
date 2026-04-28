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
              {[
                { label: "Lifecycle", href: "#lifecycle" },
                { label: "Pathogenesis", href: "#topics" },
                { label: "Diagnosis", href: "#topics" },
                { label: "Treatment", href: "#topics" },
                { label: "Genomics", href: "#topics" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-card-foreground">Resources</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Research Papers", href: "https://pubmed.ncbi.nlm.nih.gov/?term=Toxoplasma+gondii" },
                { label: "Clinical Guidelines", href: "https://www.cdc.gov/parasites/toxoplasmosis/health_professionals/" },
                { label: "Strain Database", href: "https://toxodb.org" },
                { label: "Teaching Materials", href: "https://www.cdc.gov/parasites/toxoplasmosis/" },
                { label: "Glossary", href: "#overview" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-card-foreground">Community</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "About Us", href: "#overview" },
                { label: "Contact", href: "mailto:timotimanuel12@gmail.com" },
                { label: "Contribute", href: "https://github.com/Timotimanuel12/ToxoAI-FE" },
                { label: "API Access", href: "#chat" },
                { label: "Privacy Policy", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
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
