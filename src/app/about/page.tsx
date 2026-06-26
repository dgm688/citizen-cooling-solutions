import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import Icon from "@/components/Icon";
import StatBar from "@/components/StatBar";
import CTABand from "@/components/CTABand";
import { company, values, whyUs } from "@/lib/site";
import { pageMeta, breadcrumbSchema, JsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About Citizen Cooling Solutions",
  description:
    "Citizen Cooling Solutions Limited is a Nairobi-based industrial engineering workshop and materials supplier — radiator repair, generator service, rewinding, insulation and refractory supply across Kenya.",
  path: "/about",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHeader
        eyebrow="Who we are"
        title="Engineering That Keeps Industry Running"
        intro="Citizen Cooling Solutions Limited is a Nairobi-based industrial engineering workshop and materials supplier, trusted by factories, fleets and facilities across Kenya."
        crumbs={crumbs}
      />

      {/* Story */}
      <section className="bg-frost py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-cool-600">
                <span className="h-px w-8 bg-heat-500" />
                Our story
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-steel-950">
                A specialist workshop, built around uptime
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-steel-700">
                <p>
                  From our workshop on Jogoo Road, Nairobi, Citizen Cooling Solutions
                  specialises in the cooling and power equipment that industry cannot
                  run without — radiators, oil coolers, intercoolers, generators,
                  motors and alternator stators.
                </p>
                <p>
                  We re-core and fabricate radiators, overhaul and maintain generators,
                  and rewind motors and stators in-house — then test every unit before
                  it returns to service. Alongside the workshop, we supply a deep range
                  of thermal insulation, refractory and sealing materials, so our
                  clients have a single trusted source for both repair and supply.
                </p>
                <p>
                  Industrial operators across Kenya — including names such as Del Monte,
                  KTDA tea factories and major transport companies — rely on us to keep
                  their equipment performing and their downtime short.
                </p>
                {/* REPLACE: confirm founding year, team size and any certifications. */}
              </div>
            </div>

            {/* Highlights */}
            <div className="lg:col-span-5">
              <div className="grid gap-4 sm:grid-cols-2">
                {whyUs.map((w) => (
                  <div key={w.title} className="rounded-xl border border-steel-200 bg-white p-5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-cool-600 text-white">
                      <Icon name={w.icon} className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-display text-base font-semibold uppercase tracking-wide text-steel-900">
                      {w.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-steel-600">
                      {w.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <StatBar dark />

      {/* Mission / Vision */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-steel-200 bg-frost p-8">
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-steel-950">
                Our Mission
              </h2>
              <p className="mt-3 text-base leading-relaxed text-steel-700">
                To keep Kenyan industry running by delivering precise, dependable
                repair, fabrication and supply — restoring equipment to full
                performance and minimising the cost of downtime.
              </p>
            </div>
            <div className="rounded-2xl border border-steel-200 bg-frost p-8">
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-steel-950">
                Our Vision
              </h2>
              <p className="mt-3 text-base leading-relaxed text-steel-700">
                To be Kenya&apos;s most trusted partner for industrial cooling, power
                and thermal protection — the single source engineers call first.
              </p>
            </div>
          </div>

          {/* Values */}
          <h2 className="mt-14 font-display text-2xl font-bold uppercase tracking-tight text-steel-950">
            What We Stand For
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="flex h-full flex-col rounded-xl border border-steel-200 bg-white p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-steel-950 text-cool-400">
                    <Icon name={v.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold uppercase tracking-wide text-steel-900">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-600">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        title={`Work with ${company.shortName}`}
        text="Talk to our team about a repair, a maintenance plan or a materials order. We respond fast with clear, honest advice."
      />
    </>
  );
}
