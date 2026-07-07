import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface PanelProps extends ComponentPropsWithoutRef<"div"> {
  /** Slightly lighter fill, for nesting a panel inside a panel */
  raised?: boolean;
}

/**
 * The base hairline-bordered surface. Used for project cards, spec sheets,
 * timeline entries — anywhere content needs a defined edge without a shadow
 * or heavy fill. This is the primary structural device of the system.
 *
 * Forwards any standard div attributes (id, role, aria-*, etc.) so it can
 * also be used as e.g. a tab panel target.
 */
export function Panel({ children, className, raised = false, ...rest }: PanelProps) {
  return (
    <div
      className={cn(
        "border border-border rounded-lg bg-surface",
        raised && "bg-opacity-80",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
