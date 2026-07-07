import Image from "next/image";
import { Container } from "@/components/ui/Container";

const BADGES = [
  {
    src: "/images/badges/ccna-introduction-to-networks.png",
    title: "CCNA: Introduction to Networks",
    subtitle: "Foundations of networking, IP addressing & connectivity",
  },
  {
    src: "/images/badges/ccna-switching-routing-wireless-essentials.png",
    title: "CCNA: Switching, Routing & Wireless Essentials",
    subtitle: "VLANs, routing protocols & wireless network design",
  },
];

export function Certifications() {
  return (
    <section
      id="certifications"
      aria-label="Certifications"
      className="border-t border-border py-section-sm md:py-section"
    >
      <Container>
        <p className="data-label mb-3">05 / Certifications</p>
        <h2 className="mb-12 max-w-prose text-2xl font-medium tracking-tight text-text-primary md:text-3xl">
          Verified credentials.
        </h2>

        <div className="flex flex-wrap justify-center gap-12 sm:gap-16">
          {BADGES.map((badge) => (
            <div key={badge.title} className="flex w-56 flex-col items-center text-center">
              <div className="relative h-56 w-56">
                <Image
                  src={badge.src}
                  alt={badge.title}
                  fill
                  sizes="14rem"
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-sm font-medium text-text-primary">{badge.title}</p>
              <p className="mt-1 text-xs text-text-muted">{badge.subtitle}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
