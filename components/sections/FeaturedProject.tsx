"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Panel } from "@/components/ui/Panel";
import { DataLabel } from "@/components/ui/DataLabel";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  tabLabel: string;
  title: string;
  image: string;
  description: string;
  skills: string[];
}

const PROJECTS: Project[] = [
  {
    id: "power-amp",
    tabLabel: "Power Amp",
    title: "Audio Power Amplifier",
    image: "/images/projects/power-amp-schematic.jpg",
    description:
      "Designed and simulated a discrete audio power amplifier circuit, covering component selection, gain staging, and thermal considerations — validated through LTSpice simulation before physical construction.",
    skills: ["LTSpice", "Circuit Design", "PCB", "Amplifier"],
  },
  {
    id: "pid",
    tabLabel: "PID Ball & Beam",
    title: "Ball and Beam Balance System Using PID Control",
    image: "/images/projects/PID.png",
    description:
      "Implemented a physical mechatronic system utilizing an Arduino Uno and a closed-loop PID controller to dynamically balance a free-rolling ball on an 18-inch beam. Real-time position feedback from an ultrasonic sensor was stabilized using a five-sample median filter and exponential moving average to overcome noise and ensure smooth servo motor actuation.",
    skills: [
      "PID Tuning",
      "Embedded Systems (Arduino)",
      "Digital Signal Filtering (Median/EMA)",
      "Mechatronics",
      "System Modeling & Prototyping",
    ],
  },
  {
    id: "digicomms",
    tabLabel: "Digital Comms",
    title: "End-to-End Digital Communication System Simulation",
    image: "/images/projects/Digicomms.png",
    description:
      "Built a complete end-to-end digital communication pipeline in MATLAB featuring source coding (Huffman and Shannon-Fano), channel coding (7,4 Hamming code), and 16-QAM modulation. The system evaluated transmission integrity under a simulated AWGN channel by sweeping SNR values from 0 dB to 20 dB and measuring Character Error Rates.",
    skills: [
      "Communication Systems Simulation (MATLAB)",
      "Information Theory & Source Coding",
      "Forward Error Correction (Hamming Codes)",
      "Digital Modulation (16-QAM)",
      "Error Performance Analysis",
    ],
  },
  {
    id: "fdas",
    tabLabel: "FDAS Design",
    title: "6-Zone Conventional Fire Detection and Alarm System (FDAS) Design",
    image: "/images/projects/FDAS.png",
    description:
      "Developed a comprehensive engineering design, layout, and bidding proposal for a 6-zone conventional FDAS for a proposed four-story commercial building. The design incorporates building layout integration, detector placement, and technical specifications adhering strictly to the Philippine Electronics Code, Fire Code of the Philippines, and NFPA 72 standards.",
    skills: [
      "Fire Protection Engineering",
      "Electrical Layout Design",
      "Regulatory Codes & Compliance (NFPA 72, PEC)",
      "Technical Bid & Cost Estimation",
      "System Commissioning Planning",
    ],
  },
  {
    id: "mpu",
    tabLabel: "Microprocessor",
    title: "16-Bit Microprocessor Architecture and RTL Design",
    image: "/images/projects/MPU.png",
    description:
      "Designed and modeled a custom 16-bit microprocessor architecture featuring a dedicated control unit, program counter, instruction register, and a tri-state bus system. The hardware functionality, timing controls, and logic matrix operations were successfully implemented and simulated using Verilog HDL.",
    skills: [
      "Computer Architecture",
      "RTL Design (Verilog HDL)",
      "Digital Logic & Circuit Design",
      "Processor Control Unit Logic",
      "Hardware Simulation & Verification",
    ],
  },
];

const AUTO_ADVANCE_MS = 18000;

export function FeaturedProject() {
  const [activeId, setActiveId] = useState(PROJECTS[0].id);
  const [isPaused, setIsPaused] = useState(false);
  const active = PROJECTS.find((p) => p.id === activeId) ?? PROJECTS[0];

  // Auto-advances to the next project tab on a timer. Pauses while the
  // pointer is over the section (so reading isn't interrupted), and the
  // timer restarts fresh any time the active tab changes — whether that
  // change came from this timer or from someone clicking a tab manually.
  useEffect(() => {
    if (isPaused) return;
    const timer = setTimeout(() => {
      const currentIndex = PROJECTS.findIndex((p) => p.id === activeId);
      const next = PROJECTS[(currentIndex + 1) % PROJECTS.length];
      setActiveId(next.id);
    }, AUTO_ADVANCE_MS);
    return () => clearTimeout(timer);
  }, [activeId, isPaused]);

  const activeIndex = PROJECTS.findIndex((p) => p.id === activeId);

  function goToNext() {
    setActiveId(PROJECTS[(activeIndex + 1) % PROJECTS.length].id);
  }

  function goToPrev() {
    setActiveId(PROJECTS[(activeIndex - 1 + PROJECTS.length) % PROJECTS.length].id);
  }

  return (
    <section
      id="projects"
      aria-label="Projects"
      className="border-t border-border py-section-sm md:py-section"
    >
      <Container>
        <p className="data-label mb-3">04 / Projects</p>
        <h2 className="mb-8 max-w-prose text-2xl font-medium tracking-tight text-text-primary md:text-3xl">
          SELECTED PROJECTS
        </h2>

        {/* Pausing on hover keeps the auto-advance from interrupting
            someone actively reading a project's details. */}
        <div onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <div className="relative">
            <Panel
              id={`project-panel-${active.id}`}
              role="group"
              aria-label={`${activeIndex + 1} of ${PROJECTS.length}: ${active.title}`}
              className="grid gap-8 px-14 py-6 md:px-16 md:py-8 lg:grid-cols-2 lg:gap-12"
            >
              <motion.div
                key={active.image}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-border bg-bg"
              >
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  sizes="(min-width: 1024px) 40rem, 90vw"
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                key={active.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col justify-center"
              >
                <h3 className="text-xl font-medium text-text-primary">{active.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-text-muted">{active.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {active.skills.map((skill) => (
                    <DataLabel key={skill} className="rounded border border-border bg-bg px-2.5 py-1">
                      {skill}
                    </DataLabel>
                  ))}
                </div>
              </motion.div>
            </Panel>

            {/* Transparent arrow controls, overlaid on the panel edges */}
            <button
              type="button"
              onClick={goToPrev}
              aria-label="Previous project"
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-bg/40 text-text-primary/70 backdrop-blur-sm transition-all duration-200 hover:bg-bg/70 hover:text-accent"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next project"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-bg/40 text-text-primary/70 backdrop-blur-sm transition-all duration-200 hover:bg-bg/70 hover:text-accent"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* Dot indicators — click any dot to jump straight to that project */}
          <div className="mt-6 flex items-center justify-center gap-2" role="tablist" aria-label="Select project">
            {PROJECTS.map((project) => {
              const isActive = project.id === activeId;
              return (
                <button
                  key={project.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={project.title}
                  onClick={() => setActiveId(project.id)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    isActive ? "w-6 bg-accent" : "w-2 bg-border hover:bg-text-muted",
                  )}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
