"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { DataLabel } from "@/components/ui/DataLabel";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg">
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Primary">
          <div className="flex items-center gap-4">
            <span className="font-mono text-lg font-medium tracking-tight text-text-primary">
              RJLM
            </span>
            <span className="hidden h-4 w-px bg-border sm:block" aria-hidden="true" />
            <DataLabel variant="status" className="hidden sm:inline-flex">
              Available for Roles
            </DataLabel>
            <span className="hidden text-xs text-text-muted md:inline">
              · DOST-SEI Scholar
            </span>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-muted transition-colors hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-shadow hover:shadow-glow-primary"
            >
              Resume
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label="Toggle navigation menu"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-text-primary"
            >
              {mobileOpen ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div id="mobile-nav" className="flex flex-col gap-4 border-t border-border py-4 md:hidden">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-text-muted transition-colors hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-primary-600 px-4 py-2 text-center text-sm font-medium text-white"
            >
              Resume
            </a>
          </div>
        )}
      </Container>
    </header>
  );
}
