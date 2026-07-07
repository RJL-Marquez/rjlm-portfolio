import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Base horizontal rhythm wrapper. Every section's content sits inside this
 * so max-width and side padding stay consistent across the whole page.
 */
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-content px-6 md:px-10", className)}>
      {children}
    </div>
  );
}
