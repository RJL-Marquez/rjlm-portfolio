"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

// Roughly the point where the Hero section ends — the button fades in
// once you've scrolled past it, rather than sitting there from the top.
const SHOW_AFTER_PX = 350;

/**
 * Persistent scroll-to-top button. Fixed just below the navbar, centered
 * horizontally, and deliberately understated (low opacity, small size,
 * no label) so it doesn't compete with actual page content. It fades in
 * smoothly once the page has been scrolled past the Hero section, and
 * fades back out when scrolled back near the top.
 */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > SHOW_AFTER_PX);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`fixed left-1/2 top-20 z-40 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-surface/80 text-text-muted backdrop-blur-sm transition-opacity duration-700 ease-out hover:border-accent hover:text-accent ${
        visible ? "opacity-50 hover:opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
    </button>
  );
}
