import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Panel } from "@/components/ui/Panel";
import { DataLabel } from "@/components/ui/DataLabel";

const SPECS = ["Design Specification", "PCB Construction", "Hardware Testing"];
const TECH_STACK = ["LTSpice", "PCB Design", "Circuit Construction"];

export function FeaturedProject() {
  return (
    <section id="projects" aria-label="Featured Project" className="border-t border-border py-section-sm md:py-section">
      <Container>
        <p className="data-label mb-3">04 / Featured Project</p>
        <h2 className="mb-12 max-w-prose text-2xl font-medium tracking-tight text-text-primary md:text-3xl">
          From schematic to signal.
        </h2>

        <article>
          <Panel className="overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-bg lg:aspect-auto lg:border-b-0 lg:border-r">
                <Image
                  src="/images/projects/power-amp-schematic.jpg"
                  alt="High-Fidelity Power Amplifier PCB routing layout"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <h3 className="mb-3 text-xl font-medium text-text-primary">
                  High-Fidelity Power Amplifier
                </h3>
                <p className="mb-6 text-sm text-text-muted">
                  A discrete power amplifier design taken from specification through
                  simulation to a fully constructed and tested PCB.
                </p>

                <ul className="mb-6 space-y-2">
                  {SPECS.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-sm text-text-muted">
                      <span className="h-1 w-1 rounded-full bg-primary-600" aria-hidden="true" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 border-t border-border bg-bg px-8 py-4">
              {TECH_STACK.map((tech) => (
                <DataLabel key={tech} className="rounded border border-border px-2.5 py-1">
                  {tech}
                </DataLabel>
              ))}
            </div>
          </Panel>
        </article>
      </Container>
    </section>
  );
}
