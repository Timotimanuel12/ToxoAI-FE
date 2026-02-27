"use client"

import Link from "next/link"
import { ParasiteIcon } from "@/components/parasite-icon"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Lifecycle", href: "#lifecycle" },
  { label: "Chat", href: "#chat" },
  { label: "Topics", href: "#topics" },
  { label: "Research", href: "#research" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <ParasiteIcon className="w-7 h-7 text-primary" />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            ToxoAI
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="text-muted-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/50 bg-background px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

          </nav>
        </div>
      )}
    </header>
  )
}
