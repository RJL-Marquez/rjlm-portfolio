"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { GraduationCap, ShieldCheck, Cpu } from "lucide-react";

const CREDENTIALS = [
  { label: "DOST-SEI Merit Scholar", icon: GraduationCap },
  { label: "CCNA Certified", icon: ShieldCheck },
  { label: "BS Electronics Engineering @ UST", icon: Cpu },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export function Hero() {
  return (
    <section aria-label="Introduction" className="relative overflow-hidden bg-ambient">
      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-start gap-12 py-12 md:py-16 lg:grid-cols-2 lg:gap-8"
        >
          <div>
            <motion.p variants={item} className="mb-4 font-mono text-sm uppercase tracking-widest text-text-primary/80 md:text-base">
              Rence Joseph L. Marquez
            </motion.p>

            <motion.h1
              variants={item}
              className="text-4xl font-medium tracking-tight text-text-primary md:text-5xl lg:text-6xl"
            >
              Systems Engineer &amp; Software Developer
            </motion.h1>

            <motion.p variants={item} className="mt-6 max-w-prose text-lg text-text-muted">
              Building at the intersection of hardware and software. Specialized in
              network infrastructure, embedded systems, and software logic.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              {CREDENTIALS.map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 text-xs text-text-muted"
                >
                  <Icon className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                  {label}
                </span>
              ))}
            </motion.div>

            <motion.div variants={item} className="mt-10 flex gap-4">
              <a
                href="#projects"
                className="rounded-md bg-primary-600 px-5 py-2.5 text-sm font-medium text-white transition-shadow hover:shadow-glow-primary"
              >
                View Projects
              </a>
              <a
                href="#experience"
                className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-primary-600"
              >
                Experience
              </a>
            </motion.div>
          </div>

          {/* Circuit-trace graphic — unframed, thick rounded strokes fading
              into the layout, echoing a PCB trace rather than a UI panel. */}
          <motion.div
            variants={item}
            className="relative mx-auto -mt-4 w-full max-w-lg lg:mt-0 lg:max-w-xl"
          >
            <CircuitArt />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

/**
 * Organic PCB-trace motif: thick rounded strokes that bend at right angles
 * (round linejoin softens the corners) and terminate in ringed nodes.
 * No border, no panel — it's meant to sit directly in the layout and
 * fade at the edges rather than read as a bounded UI element.
 *
 * Coordinates are laid out as a non-crossing "staircase": each line's
 * bend point steps further right, and its rise stays entirely above the
 * line before it, so none of the traces intersect.
 */
function CircuitArt() {
  const pathTransition = { duration: 1.6, ease: [0.16, 1, 0.3, 1] as const };

  const traces = [
    { d: "M-20,50 H130 V18 H250", nodeX: 250, nodeY: 18, delay: 0.3 },
    { d: "M-20,105 H170 V65 H300", nodeX: 300, nodeY: 65, delay: 0.42 },
    { d: "M-20,160 H210 V120 H350", nodeX: 350, nodeY: 120, delay: 0.54 },
    { d: "M-20,215 H250 V175 H390", nodeX: 390, nodeY: 175, delay: 0.42 },
    { d: "M-20,270 H290 V230 H420", nodeX: 420, nodeY: 230, delay: 0.3 },
  ];

  return (
    <div
      className="aspect-[3/2] w-full"
      style={{
        WebkitMaskImage:
          "linear-gradient(to left, black 65%, transparent 100%)",
        maskImage: "linear-gradient(to left, black 65%, transparent 100%)",
      }}
    >
      <svg viewBox="0 0 440 300" className="h-full w-full" role="presentation" aria-hidden="true">
        <defs>
          <linearGradient id="trace-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-primary-700)" />
            <stop offset="100%" stopColor="var(--color-accent)" />
          </linearGradient>
        </defs>

        <g fill="none" stroke="url(#trace-gradient)" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round">
          {traces.map((trace) => (
            <motion.path
              key={trace.d}
              d={trace.d}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ ...pathTransition, delay: trace.delay }}
            />
          ))}
        </g>

        {traces.map((trace, i) => (
          <motion.circle
            key={`node-${trace.nodeX}-${trace.nodeY}`}
            cx={trace.nodeX}
            cy={trace.nodeY}
            r={9}
            fill="var(--color-bg)"
            stroke="url(#trace-gradient)"
            strokeWidth="4"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: trace.delay + 1.1 + i * 0.08 }}
          />
        ))}
      </svg>
    </div>
  );
}
