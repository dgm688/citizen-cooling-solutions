import SectionHeader from "./SectionHeader";
import Container from "./ui/Container";
import Reveal from "./motion/Reveal";
import { clients } from "@/lib/site";

export default function Clients() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="Trusted by industry"
          title={<>Companies that rely on us</>}
          intro="From multinational growers to tea factories and transport fleets, industrial operators across Kenya trust Citizen Cooling Solutions to keep their equipment running."
          center
        />
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {clients.map((c, i) => (
            <Reveal key={c} delay={i * 0.05}>
              {/* REPLACE: swap text plates for client logos once permission is confirmed. */}
              <div className="flex h-24 items-center justify-center rounded-xl border border-steel-200 bg-frost px-6 text-center">
                <span className="font-display text-lg font-semibold uppercase tracking-wide text-steel-700">
                  {c}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center font-mono text-xs uppercase tracking-wider text-steel-400">
          Client names shown with permission · logos to be added
        </p>
      </Container>
    </section>
  );
}
