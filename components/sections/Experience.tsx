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
        <p className="data-label mb-3 text-center">03 / Experience</p>
        <h2 className="mx-auto mb-12 max-w-2xl text-center text-3xl font-medium tracking-tight text-text-primary md:text-4xl">
          WORK EXPERIENCES &amp; ACADEMIC BACKGROUND
        </h2>

        <div className="mx-auto max-w-2xl space-y-6">
          <ol className="space-y-6">
            {TIMELINE.map((entry) => (
              <li key={entry.role}>
                <Panel className="p-8">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-medium text-text-primary">{entry.role}</h3>
                    <DataLabel variant="primary">{entry.tag}</DataLabel>
                  </div>
                  <p className="mb-3 text-base text-text-muted">{entry.org}</p>
                  <p className="text-base text-text-muted">{entry.focus}</p>
                </Panel>
              </li>
            ))}
          </ol>

          <Panel className="p-8">
            <h3 className="mb-4 text-lg font-medium text-text-primary">Scholarships</h3>
            <ul className="space-y-3">
              {SCHOLARSHIPS.map((s) => (
                <li key={s} className="flex items-start gap-2 text-base text-text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </Container>
    </section>
  );
}
