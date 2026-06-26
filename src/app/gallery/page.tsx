import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import Icon from "@/components/Icon";
import CTABand from "@/components/CTABand";
import { pageMeta, breadcrumbSchema, JsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Workshop & Project Gallery",
  description:
    "Photos from the Citizen Cooling Solutions workshop — radiator re-coring, generator overhauls, motor and stator rewinding, refractory and insulation work in Nairobi, Kenya.",
  path: "/gallery",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
];

// REPLACE every tile with a real workshop / project photograph.
const tiles = [
  { label: "Radiator re-coring", icon: "radiator" },
  { label: "Custom radiator fabrication", icon: "radiator" },
  { label: "Oil cooler repair", icon: "droplet" },
  { label: "Intercooler repair", icon: "turbo" },
  { label: "Generator overhaul", icon: "generator" },
  { label: "On-site generator service", icon: "generator" },
  { label: "Motor rewinding", icon: "coil" },
  { label: "Stator rewinding", icon: "stator" },
  { label: "Tea dryer radiator", icon: "flame" },
  { label: "Refractory lining", icon: "flame" },
  { label: "Insulation supply", icon: "shield" },
  { label: "Workshop & team", icon: "wrench" },
];

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHeader
        eyebrow="Our work"
        title="Workshop & Project Gallery"
        intro="A look inside our workshop and the jobs we handle. These placeholders are ready to be replaced with real photos of your projects, team and completed work."
        crumbs={crumbs}
      />
      <section className="bg-frost py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {tiles.map((t, i) => (
              <Reveal key={t.label} delay={(i % 4) * 0.05}>
                <div className="group relative flex aspect-[4/3] flex-col items-center justify-center gap-3 overflow-hidden rounded-xl border border-dashed border-steel-300 bg-white text-steel-400">
                  <div className="absolute inset-0 bg-blueprint opacity-50" aria-hidden="true" />
                  <Icon name={t.icon} className="relative h-10 w-10 text-steel-300 transition-colors group-hover:text-cool-500" />
                  <span className="relative px-3 text-center font-display text-sm font-semibold uppercase tracking-wide text-steel-500">
                    {t.label}
                  </span>
                  <span className="relative font-mono text-[0.65rem] uppercase tracking-wider text-steel-400">
                    Photo coming soon
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CTABand />
    </>
  );
}
