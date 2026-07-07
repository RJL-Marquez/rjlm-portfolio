import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DataLabelProps {
  children: ReactNode;
  variant?: "neutral" | "primary" | "status";
  className?: string;
}

/**
 * Small mono, uppercase, letter-spaced label used for section eyebrows,
 * tech-stack tags, and metrics. `status` variant adds a pulsing dot,
 * for things like availability indicators.
 */
export function DataLabel({ children, variant = "neutral", className }: DataLabelProps) {
  const dotColor = {
    neutral: "bg-text-muted",
    primary: "bg-primary-600",
    status: "bg-signal-green",
  }[variant];

  const textColor = {
    neutral: "text-text-muted",
    primary: "text-accent",
    status: "text-signal-green",
  }[variant];

  return (
    <span className={cn("inline-flex items-center gap-2 data-label", textColor, className)}>
      <span className="relative flex h-1.5 w-1.5">
        {variant === "status" && (
          <span
            className={cn("absolute inline-flex h-full w-full rounded-full opacity-75 animate-pulse-dot", dotColor)}
            aria-hidden="true"
          />
        )}
        <span className={cn("relative inline-flex h-1.5 w-1.5 rounded-full", dotColor)} aria-hidden="true" />
      </span>
      {children}
    </span>
  );
}
