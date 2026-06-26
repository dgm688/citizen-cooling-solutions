import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import Icon from "@/components/Icon";
import CTABand from "@/components/CTABand";
import { industries } from "@/lib/site";
import { pageMeta, breadcrumbSchema, JsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Industries We Serve",
  description:
    "Industrial cooling, generator and insulation solutions for tea factories, food processing, hospitals, power generation, transport and manufacturing across Kenya.",
  path: "/industries",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries" },
];

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHeader
        eyebrow="Who we serve"
        title="Industries We Support"
        intro="We understand the equipment, the pressures and the downtime costs of the sectors we serve — and tailor our repair, fabrication and supply to each."
        crumbs={crumbs}
      />
      <section className="bg-frost py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 0.05}>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-steel-200 bg-white p-6 transition-all duration-200 hover:border-cool-400 hover:shadow-lg hover:shadow-cool-500/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-steel-950 text-cool-400 transition-colors group-hover:bg-cool-600 group-hover:text-white">
                    <Icon name={ind.icon} className="h-6 w-6" />
                  </span>
                  <h2 className="mt-5 font-display text-xl font-semibold uppercase tracking-wide text-steel-950">
                    {ind.name}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-600">
                    {ind.intro}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cool-600 transition-colors group-hover:text-heat-600">
                    Explore solutions
                    <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CTABand />
    </>
  );
}
