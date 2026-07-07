"use client";

import { ArrowUp } from "lucide-react";

/**
 * Persistent scroll-to-top button. Fixed just below the navbar, centered
 * horizontally, and deliberately understated (low opacity, small size,
 * no label) so it doesn't compete with actual page content — it brightens
 * on hover to confirm it's interactive.
 */
export function ScrollToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed left-1/2 top-20 z-40 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-surface/80 text-text-muted opacity-50 backdrop-blur-sm transition-all duration-200 hover:border-accent hover:text-accent hover:opacity-100"
    >
      <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
    </button>
  );
}
