import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import Icon from "@/components/Icon";
import CTABand from "@/components/CTABand";
import { projects } from "@/lib/site";
import { pageMeta, breadcrumbSchema, JsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Projects & Case Studies",
  description:
    "Representative industrial cooling, generator and refractory projects delivered by Citizen Cooling Solutions for tea factories, transport fleets, hospitals and manufacturers in Kenya.",
  path: "/projects",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
];

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHeader
        eyebrow="Our work"
        title="Projects & Case Studies"
        intro="A selection of representative jobs from our workshop and on-site work. Replace these with your own documented projects and photos to maximise credibility."
        crumbs={crumbs}
      />
      <section className="bg-frost py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.05}>
                <article className="flex h-full flex-col overflow-hidden rounded-xl border border-steel-200 bg-white">
                  {/* Image placeholder */}
                  <div className="relative flex aspect-[16/10] items-center justify-center border-b border-dashed border-steel-300 bg-steel-100 text-steel-400">
                    <div className="absolute inset-0 bg-blueprint opacity-40" aria-hidden="true" />
                    <span className="relative px-6 text-center font-mono text-[0.65rem] uppercase tracking-wider">
                      {p.imageNote}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="font-mono text-xs uppercase tracking-wider text-cool-600">
                      {p.industry}
                    </span>
                    <h2 className="mt-2 font-display text-lg font-semibold uppercase tracking-wide text-steel-950">
                      {p.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-steel-600">
                      {p.scope}
                    </p>
                    <p className="mt-3 flex items-start gap-2 border-t border-steel-100 pt-3 text-sm font-medium text-steel-800">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-cool-600" />
                      {p.result}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CTABand />
    </>
  );
}
