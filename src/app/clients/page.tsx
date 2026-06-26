import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import Icon from "@/components/Icon";
import CTABand from "@/components/CTABand";
import { clients, industries } from "@/lib/site";
import { pageMeta, breadcrumbSchema, JsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Our Clients",
  description:
    "Industrial operators across Kenya — including Del Monte, KTDA tea factories and major transport companies — trust Citizen Cooling Solutions for cooling, power and insulation.",
  path: "/clients",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Clients", path: "/clients" },
];

export default function ClientsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHeader
        eyebrow="Trusted by industry"
        title="The Companies We Serve"
        intro="We are proud to support leading industrial operators across Kenya — from multinational growers to tea factories and transport fleets."
        crumbs={crumbs}
      />

      <section className="bg-frost py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-3">
            {clients.map((c, i) => (
              <Reveal key={c} delay={i * 0.05}>
                {/* REPLACE: swap text plates for client logos once permission is confirmed. */}
                <div className="flex h-28 items-center justify-center rounded-xl border border-steel-200 bg-white px-6 text-center">
                  <span className="font-display text-xl font-semibold uppercase tracking-wide text-steel-700">
                    {c}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center font-mono text-xs uppercase tracking-wider text-steel-400">
            Client names shown with permission · logos to be added
          </p>

          {/* Sectors */}
          <h2 className="mt-16 text-center font-display text-2xl font-bold uppercase tracking-tight text-steel-950">
            Sectors We Work With
          </h2>
          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <span
                key={ind.slug}
                className="inline-flex items-center gap-2 rounded-full border border-steel-200 bg-white px-4 py-2 text-sm font-medium text-steel-700"
              >
                <Icon name={ind.icon} className="h-4 w-4 text-cool-600" />
                {ind.name}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        title="Join the operators who trust us"
        text="Become a Citizen Cooling Solutions client — talk to us about repairs, maintenance contracts or material supply."
      />
    </>
  );
}
