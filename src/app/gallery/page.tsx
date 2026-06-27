import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import CTABand from "@/components/CTABand";
import { pageMeta, breadcrumbSchema, imageGallerySchema, JsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Workshop & Project Gallery",
  description:
    "Photos from the Citizen Cooling Solutions workshop — radiator re-coring, custom cores, intercooler and oil-cooler repair, plus generator, motor and insulation work in Nairobi, Kenya.",
  path: "/gallery",
  keywords: [
    "industrial radiator repairs Nairobi",
    "radiator re-coring Kenya",
    "heat exchanger repairs Kenya",
    "workshop Nairobi",
  ],
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
];

// Real workshop photography.
const photos = [
  { src: "/images/gallery/g1.jpg", label: "Radiator re-coring" },
  { src: "/images/gallery/g2.jpg", label: "Fabricated radiator" },
  { src: "/images/gallery/g3.jpg", label: "Rebuilt radiator core" },
  { src: "/images/gallery/g4.jpg", label: "Intercooler repair" },
  { src: "/images/gallery/g5.jpg", label: "Industrial heat exchanger" },
  { src: "/images/gallery/g6.jpg", label: "Core close-up" },
  { src: "/images/gallery/g7.jpg", label: "Aluminium radiator core" },
  { src: "/images/gallery/g8.jpg", label: "Radiator with header tank" },
  { src: "/images/gallery/gen.jpg", label: "Diesel generator service" },
  { src: "/images/gallery/stator.jpg", label: "Alternator stator rewinding" },
  { src: "/images/gallery/motor.jpg", label: "Electric motor reconditioning" },
  { src: "/images/gallery/refractory.jpg", label: "Refractory fire bricks" },
  { src: "/images/gallery/insulation.jpg", label: "Ceramic-fibre insulation" },
];

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={imageGallerySchema(photos)} />
      <PageHeader
        eyebrow="Our work"
        title="Workshop & Project Gallery"
        intro="A look inside our workshop and across our capabilities — radiators, coolers, generators, rewinding and the materials we supply across Kenya."
        crumbs={crumbs}
      />
      <section className="bg-frost py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {photos.map((p, i) => (
              <Reveal key={p.src} delay={(i % 4) * 0.05}>
                <figure className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-steel-200">
                  <Image
                    src={p.src}
                    alt={`${p.label} — Citizen Cooling Solutions workshop`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-3 pt-9">
                    <span className="font-display text-xs font-semibold uppercase tracking-wide text-white">
                      {p.label}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CTABand />
    </>
  );
}
