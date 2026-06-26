import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import Icon from "@/components/Icon";
import CTABand from "@/components/CTABand";
import { ButtonLink } from "@/components/ui/Button";
import { productCategories } from "@/lib/site";
import { pageMeta, breadcrumbSchema, JsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Insulation & Refractory Products Catalogue",
  description:
    "Thermal insulation, refractory, sealing and industrial safety materials — Rockwool, ceramic fibre, fire bricks, castables, Armaflex, gaskets and more. Supplied across Kenya.",
  path: "/products",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
];

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHeader
        eyebrow="Materials store"
        title="Insulation & Refractory Products"
        intro="A trusted single source for industrial thermal insulation, refractory, sealing and safety materials — supplied in retail packs and bulk orders, delivered across Kenya."
        crumbs={crumbs}
      />

      {/* Category quick-nav */}
      <div className="sticky top-20 z-20 border-b border-steel-200 bg-white/90 backdrop-blur">
        <Container className="flex flex-wrap gap-2 py-4">
          {productCategories.map((c) => (
            <a
              key={c.slug}
              href={`#${c.slug}`}
              className="rounded-full border border-steel-200 px-4 py-1.5 text-sm font-medium text-steel-700 transition-colors hover:border-cool-400 hover:text-cool-700"
            >
              {c.group}
            </a>
          ))}
        </Container>
      </div>

      {productCategories.map((cat, idx) => (
        <section
          key={cat.slug}
          id={cat.slug}
          className={`scroll-mt-36 py-16 sm:py-20 ${idx % 2 === 0 ? "bg-frost" : "bg-white"}`}
        >
          <Container>
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-steel-950 text-cool-400">
                <Icon name={cat.icon} className="h-6 w-6" />
              </span>
              <div>
                <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-steel-950 sm:text-3xl">
                  {cat.group}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-steel-600">
                  {cat.blurb}
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {cat.items.map((p, i) => (
                <Reveal key={p.name} delay={(i % 3) * 0.05}>
                  <article className="flex h-full flex-col rounded-xl border border-steel-200 bg-white p-5">
                    <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-steel-900">
                      {p.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-600">
                      {p.desc}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {p.useCases.map((u) => (
                        <li
                          key={u}
                          className="rounded-full bg-steel-100 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-steel-600"
                        >
                          {u}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      ))}

      <section className="bg-white pb-16">
        <Container>
          <div className="flex flex-col items-start gap-4 rounded-xl border border-heat-500/30 bg-heat-500/5 p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-base text-steel-700">
              Need a material that isn&apos;t listed, or a bulk quotation for a project?
            </p>
            <ButtonLink href="/request-quote" size="md" arrow className="shrink-0">
              Request a product quote
            </ButtonLink>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
