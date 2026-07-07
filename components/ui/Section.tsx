import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  id?: string;
  /** Accessible label for the section landmark, e.g. "Experience" */
  label: string;
  className?: string;
  /** Draw the hairline divider above this section */
  divider?: boolean;
  /** Reduce vertical padding, e.g. for dense sections */
  compact?: boolean;
}

/**
 * Every top-level page section (Hero, About, Experience, Projects, etc.)
 * should be wrapped in this. Keeps vertical rhythm and the hairline
 * divider system consistent, and ensures each section is a labeled
 * landmark for screen reader navigation.
 */
export function Section({
  children,
  id,
  label,
  className,
  divider = true,
  compact = false,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={label}
      className={cn(
        divider && "border-t border-border",
        compact ? "py-section-sm" : "py-section",
        className,
      )}
    >
      {children}
    </section>
  );
}
