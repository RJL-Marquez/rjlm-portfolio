"use client";

import { useState } from "react";
import Image from "next/image";
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
    image: "/images/projects/power-amp-schematic.png",
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

export function FeaturedProject() {
  const [activeId, setActiveId] = useState(PROJECTS[0].id);
  const active = PROJECTS.find((p) => p.id === activeId) ?? PROJECTS[0];

  return (
    <section
      id="projects"
      aria-label="Projects"
      className="border-t border-border py-section-sm md:py-section"
    >
      <Container>
        <p className="data-label mb-3">04 / Projects</p>
        <h2 className="mb-8 max-w-prose text-2xl font-medium tracking-tight text-text-primary md:text-3xl">
          Selected work.
        </h2>

        {/* Folder-style tabs — the active tab visually merges into the
            panel below it (shared border color, no bottom border, and a
            negative margin on the panel closes the seam between them). */}
        <div className="flex flex-wrap gap-1" role="tablist" aria-label="Projects">
          {PROJECTS.map((project) => {
            const isActive = project.id === activeId;
            return (
              <button
                key={project.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`project-panel-${project.id}`}
                onClick={() => setActiveId(project.id)}
                className={cn(
                  "rounded-t-lg border border-b-0 px-4 py-2.5 text-sm font-medium transition-colors duration-200",
                  isActive
                    ? "border-border bg-surface text-accent"
                    : "border-transparent text-text-muted hover:text-text-primary",
                )}
              >
                {project.tabLabel}
              </button>
            );
          })}
        </div>

        <Panel
          id={`project-panel-${active.id}`}
          role="tabpanel"
          className="-mt-px grid gap-8 rounded-tl-none p-6 md:p-8 lg:grid-cols-2 lg:gap-12"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-border bg-bg">
            <Image
              key={active.image}
              src={active.image}
              alt={active.title}
              fill
              sizes="(min-width: 1024px) 40rem, 90vw"
              className="object-contain p-4"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-medium text-text-primary">{active.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">{active.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {active.skills.map((skill) => (
                <DataLabel key={skill} className="rounded border border-border bg-bg px-2.5 py-1">
                  {skill}
                </DataLabel>
              ))}
            </div>
          </div>
        </Panel>
      </Container>
    </section>
  );
}
