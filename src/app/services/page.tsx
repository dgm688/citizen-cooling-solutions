import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import ServiceCard from "@/components/cards/ServiceCard";
import Reveal from "@/components/motion/Reveal";
import CTABand from "@/components/CTABand";
import { services } from "@/lib/site";
import { pageMeta, breadcrumbSchema, JsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Industrial Cooling & Power Services",
  description:
    "Radiator repair & fabrication, oil cooler & intercooler repair, generator maintenance, and motor & stator rewinding in Nairobi. Workshop-grade service across Kenya.",
  path: "/services",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHeader
        eyebrow="What we do"
        title="Engineering Services Built for Uptime"
        intro="Our Jogoo Road workshop repairs, fabricates and rewinds the cooling and power equipment that keeps Kenyan industry moving — every job tested before it leaves."
        crumbs={crumbs}
      />
      <section className="bg-frost py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CTABand />
    </>
  );
}
