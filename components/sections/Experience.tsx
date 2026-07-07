import { Container } from "@/components/ui/Container";
import { Panel } from "@/components/ui/Panel";
import { DataLabel } from "@/components/ui/DataLabel";

const TIMELINE = [
  {
    role: "Assistant Research Consultant",
    org: "SHS Immersion",
    focus: "Research methodology and thesis mentoring for senior high school students.",
    tag: "Academic",
  },
  {
    role: "Music Director",
    org: "Part-time",
    focus: "Team leadership and quality control across rehearsals and performances.",
    tag: "Leadership",
  },
];

const SCHOLARSHIPS = ["DOST-SEI Merit Scholarship", "iSKOLAR Local Stipend"];

export function Experience() {
  return (
    <section id="experience" aria-label="Work and Academics" className="border-t border-border py-section-sm md:py-section">
      <Container>
        <p className="data-label mb-3">03 / Experience</p>
        <h2 className="mb-12 max-w-prose text-2xl font-medium tracking-tight text-text-primary md:text-3xl">
          Work &amp; academics.
        </h2>

        <div className="grid gap-12 lg:grid-cols-3">
          <ol className="space-y-6 lg:col-span-2">
            {TIMELINE.map((entry) => (
              <li key={entry.role}>
                <Panel className="p-6">
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-medium text-text-primary">{entry.role}</h3>
                    <DataLabel variant="primary">{entry.tag}</DataLabel>
                  </div>
                  <p className="mb-3 text-sm text-text-muted">{entry.org}</p>
                  <p className="text-sm text-text-muted">{entry.focus}</p>
                </Panel>
              </li>
            ))}
          </ol>

          <div>
            <Panel className="p-6">
              <h3 className="mb-4 font-medium text-text-primary">Scholarships</h3>
              <ul className="space-y-3">
                {SCHOLARSHIPS.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary-600" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </Panel>
          </div>
        </div>
      </Container>
    </section>
  );
}
