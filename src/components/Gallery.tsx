import Icon from "./Icon";
import SectionHeader from "./SectionHeader";
import Container from "./ui/Container";
import { ButtonLink } from "./ui/Button";

// Placeholder tiles until the client supplies real workshop & project photography.
const tiles = [
  { label: "Radiator re-coring", icon: "radiator" },
  { label: "Generator overhaul", icon: "generator" },
  { label: "Stator rewinding", icon: "stator" },
  { label: "Intercooler repair", icon: "turbo" },
  { label: "Refractory lining", icon: "flame" },
  { label: "Insulation supply", icon: "shield" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-frost py-20 sm:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Our work"
            title={<>Workshop & Projects</>}
            intro="A look at the jobs that pass through our workshop. Replace these tiles with real photos of your projects, team and completed work."
          />
          <ButtonLink href="/gallery" variant="outline" size="md" arrow className="shrink-0">
            View gallery
          </ButtonLink>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {tiles.map((t) => (
            <div
              key={t.label}
              className="group relative flex aspect-[4/3] flex-col items-center justify-center gap-3 overflow-hidden rounded-xl border border-dashed border-steel-300 bg-white text-steel-400"
            >
              <div className="absolute inset-0 bg-blueprint opacity-50" aria-hidden="true" />
              <Icon name={t.icon} className="relative h-10 w-10 text-steel-300 transition-colors group-hover:text-cool-500" />
              <span className="relative font-display text-sm font-semibold uppercase tracking-wide text-steel-500">
                {t.label}
              </span>
              <span className="relative text-[0.7rem] uppercase tracking-wider text-steel-400">
                Photo coming soon
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
