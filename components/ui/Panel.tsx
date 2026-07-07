import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PanelProps {
  children: ReactNode;
  className?: string;
  /** Slightly lighter fill, for nesting a panel inside a panel */
  raised?: boolean;
}

/**
 * The base hairline-bordered surface. Used for project cards, spec sheets,
 * timeline entries — anywhere content needs a defined edge without a shadow
 * or heavy fill. This is the primary structural device of the system.
 */
export function Panel({ children, className, raised = false }: PanelProps) {
  return (
    <div
      className={cn(
        "border border-border rounded-lg bg-surface",
        raised && "bg-opacity-80",
        className,
      )}
    >
      {children}
    </div>
  );
}
