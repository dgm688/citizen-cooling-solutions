import SectionHeader from "./SectionHeader";
import Container from "./ui/Container";
import { ButtonLink } from "./ui/Button";
import ServiceCard from "./cards/ServiceCard";
import Reveal from "./motion/Reveal";
import { services } from "@/lib/site";

export default function Services() {
  return (
    <section id="services" className="bg-frost py-20 sm:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="What we do"
            title={<>Core Services</>}
            intro="From a leaking radiator to a failed alternator stator, our Jogoo Road workshop repairs, fabricates and rewinds the cooling and power equipment that keeps your operation moving."
          />
          <ButtonLink href="/services" variant="outline" size="md" arrow className="shrink-0">
            All services
          </ButtonLink>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
