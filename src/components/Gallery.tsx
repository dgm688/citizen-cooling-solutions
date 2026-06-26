import Image from "next/image";
import SectionHeader from "./SectionHeader";
import Container from "./ui/Container";
import { ButtonLink } from "./ui/Button";
import Reveal from "./motion/Reveal";

// Real workshop photography (radiator re-cores, cores, intercoolers).
const tiles = [
  { src: "/images/gallery/g1.jpg", label: "Radiator re-coring" },
  { src: "/images/gallery/g3.jpg", label: "Rebuilt radiator core" },
  { src: "/images/gallery/g4.jpg", label: "Intercooler repair" },
  { src: "/images/gallery/g5.jpg", label: "Industrial heat exchanger" },
  { src: "/images/gallery/g6.jpg", label: "Core close-up" },
  { src: "/images/gallery/g2.jpg", label: "Fabricated radiator" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-frost py-20 sm:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Our work"
            title={<>Workshop & Projects</>}
            intro="Real radiators, cores and coolers rebuilt and tested in our Jogoo Road workshop."
          />
          <ButtonLink href="/gallery" variant="outline" size="md" arrow className="shrink-0">
            View gallery
          </ButtonLink>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {tiles.map((t, i) => (
            <Reveal key={t.src} delay={(i % 3) * 0.05}>
              <figure className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-steel-200">
                <Image
                  src={t.src}
                  alt={`${t.label} — Citizen Cooling Solutions workshop`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 30vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-4 pt-10">
                  <span className="font-display text-sm font-semibold uppercase tracking-wide text-white">
                    {t.label}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
