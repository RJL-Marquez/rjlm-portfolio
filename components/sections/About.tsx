import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function About() {
  return (
    <section id="about" aria-label="Profile" className="border-t border-border py-section-sm md:py-section">
      <Container>
        <p className="data-label mb-3">01 / Profile</p>

        <div className="grid gap-8 lg:grid-cols-[14rem_1fr] lg:gap-12">
          {/* Photo, same instrument-frame language as the rest of the site */}
          <div className="mx-auto w-full max-w-[14rem] lg:mx-0">
            <div className="relative overflow-hidden rounded-lg border border-border bg-surface">
              <CornerTicks />
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/profile.jpg"
                  alt="Rence Joseph L. Marquez"
                  fill
                  sizes="14rem"
                  className="object-cover grayscale-[15%]"
                />
              </div>
              <div className="flex items-center justify-between border-t border-border px-3 py-2">
                <span className="data-label text-[10px]">Operator</span>
                <span className="font-mono text-[10px] text-text-muted">RJLM-01</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium tracking-tight text-text-primary md:text-3xl">
              How I work.
            </h2>

            <blockquote className="mt-6 border-l-2 border-primary-600 pl-6">
              <p className="text-lg leading-relaxed text-text-muted md:text-xl">
                As a current Electronics Engineering student with a solid background in
                software development and network configuration, I&apos;d describe myself
                as introverted — but articulate when it comes to expressing an opinion.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-text-muted md:text-xl">
                With the experience and skills I&apos;ve built so far, I aim to contribute
                effectively wherever I&apos;m placed, and I always welcome criticism as a
                way to grow, both personally and professionally.
              </p>
            </blockquote>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CornerTicks() {
  const base = "absolute h-3 w-3 border-primary-600";
  return (
    <div aria-hidden="true">
      <span className={`${base} left-0 top-0 border-l-2 border-t-2`} />
      <span className={`${base} right-0 top-0 border-r-2 border-t-2`} />
      <span className={`${base} bottom-0 left-0 border-b-2 border-l-2`} />
      <span className={`${base} bottom-0 right-0 border-b-2 border-r-2`} />
    </div>
  );
}
