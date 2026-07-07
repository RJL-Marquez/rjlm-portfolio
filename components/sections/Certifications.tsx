import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const BADGES = [
  {
    src: "/images/badges/ccna-introduction-to-networks.png",
    title: "CCNA: Introduction to Networks",
    subtitle: "Foundations of networking, IP addressing & connectivity",
    href: "https://www.credly.com/badges/6ffaa1d0-9e6a-433c-b138-51fdc173c1ca",
  },
  {
    src: "/images/badges/ccna-switching-routing-wireless-essentials.png",
    title: "CCNA: Switching, Routing & Wireless Essentials",
    subtitle: "VLANs, routing protocols & wireless network design",
    href: "https://www.credly.com/badges/52e54dd0-d231-4cd6-8838-49d0edf1cf35/public_url",
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
          VERIFIED CREDENTIALS AND BADGES
        </h2>

        <div className="flex flex-wrap justify-center gap-12 sm:gap-16">
          {BADGES.map((badge) => (
            <a
              key={badge.title}
              href={badge.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-56 flex-col items-center text-center"
            >
              <div className="relative h-56 w-56 overflow-hidden rounded-lg">
                <Image
                  src={badge.src}
                  alt={badge.title}
                  fill
                  sizes="14rem"
                  className="object-contain"
                />

                {/* Hover overlay — signals the badge is clickable and where it leads */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-bg/85 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <ArrowUpRight className="h-5 w-5 text-accent" aria-hidden="true" />
                  <span className="font-mono text-xs uppercase tracking-wider text-text-primary">
                    View on Credly
                  </span>
                </div>
              </div>
              <p className="mt-4 text-sm font-medium text-text-primary">{badge.title}</p>
              <p className="mt-1 text-xs text-text-muted">{badge.subtitle}</p>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
