"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Panel } from "@/components/ui/Panel";
import { DataLabel } from "@/components/ui/DataLabel";
import { Network, Code2, CircuitBoard, Palette, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const SKILL_GROUPS = [
  {
    title: "Networking",
    icon: Network,
    items: ["CCNA", "Packet Tracer", "IP Connectivity", "Security Fundamentals"],
  },
  {
    title: "Programming",
    icon: Code2,
    items: ["C++", "Python", "MATLAB", "HTML/CSS"],
  },
  {
    title: "Hardware",
    icon: CircuitBoard,
    items: ["LTSpice", "TinkerCAD", "Circuit Construction", "PCB Design"],
  },
  {
    title: "Tools",
    icon: Palette,
    items: ["Adobe Photoshop", "Canva"],
  },
];

export function Skills() {
  // Two separate signals combine into "open": a hover state (desktop,
  // closes when the pointer leaves) and a pinned/click state (works for
  // touch, and lets keyboard users toggle it without needing hover at all).
  const [hoveredTitle, setHoveredTitle] = useState<string | null>(null);
  const [pinnedTitle, setPinnedTitle] = useState<string | null>(null);

  return (
    <section id="skills" aria-label="Technical Skills" className="border-t border-border py-section-sm md:py-section">
      <Container>
        <p className="data-label mb-3">02 / Technical Skills</p>
        <h2 className="mb-12 max-w-prose text-2xl font-medium tracking-tight text-text-primary md:text-3xl">
          A working knowledge of both the circuit and the code.
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {SKILL_GROUPS.map(({ title, icon: Icon, items }) => {
            const isOpen = hoveredTitle === title || pinnedTitle === title;

            return (
              <Panel
                key={title}
                className={cn(
                  "overflow-hidden p-0 transition-colors duration-300",
                  isOpen && "border-accent bg-accent/[0.06]",
                )}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`skills-panel-${title}`}
                  onMouseEnter={() => setHoveredTitle(title)}
                  onMouseLeave={() => setHoveredTitle(null)}
                  onClick={() => setPinnedTitle((current) => (current === title ? null : title))}
                  className="flex w-full items-center justify-between gap-3 p-6 text-left"
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-md border bg-bg transition-colors duration-300",
                        isOpen ? "border-accent" : "border-border",
                      )}
                    >
                      <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                    </span>
                    <span
                      className={cn(
                        "font-medium transition-colors duration-300",
                        isOpen ? "text-accent" : "text-text-primary",
                      )}
                    >
                      {title}
                    </span>
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-text-muted transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>

                <motion.div
                  id={`skills-panel-${title}`}
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap content-start gap-2 px-6 pb-6">
                    {items.map((skill) => (
                      <DataLabel
                        key={skill}
                        className="rounded border border-border bg-bg px-2.5 py-1 transition-colors duration-200 hover:border-accent hover:text-accent"
                      >
                        {skill}
                      </DataLabel>
                    ))}
                  </div>
                </motion.div>
              </Panel>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
