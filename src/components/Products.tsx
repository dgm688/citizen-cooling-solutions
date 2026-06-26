import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import SectionHeader from "./SectionHeader";
import Container from "./ui/Container";
import { ButtonLink } from "./ui/Button";
import Reveal from "./motion/Reveal";
import { productCategories } from "@/lib/site";

export default function Products() {
  return (
    <section id="products" className="relative overflow-hidden bg-steel-950 py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-blueprint opacity-40" aria-hidden="true" />
      <Container className="relative">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Materials store"
            title={<>Insulation & Refractory Products</>}
            intro="A trusted single source for industrial thermal insulation, refractory and sealing materials — available in retail packs and bulk orders, delivered across Kenya."
            light
          />
          <ButtonLink href="/products" variant="white" size="md" arrow className="shrink-0">
            Browse catalogue
          </ButtonLink>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((g, i) => (
            <Reveal key={g.slug} delay={i * 0.05}>
              <Link
                href="/products"
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur transition-colors hover:border-cool-500/40"
              >
                {g.image && (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={g.image}
                      alt={`${g.group} — Citizen Cooling Solutions`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-steel-950/70 to-transparent" aria-hidden="true" />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-cool-500/15 text-cool-300 transition-colors group-hover:bg-cool-500/25">
                    <Icon name={g.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold uppercase tracking-wide">
                    {g.group}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-300">
                    {g.blurb}
                  </p>
                  <span className="mt-4 font-mono text-xs uppercase tracking-wider text-cool-300">
                    {g.items.length} products →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 rounded-xl border border-heat-500/30 bg-heat-500/10 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base text-steel-100">
            Need a material that isn&apos;t listed, or a bulk quotation for a project?
          </p>
          <ButtonLink href="/request-quote" size="md" arrow className="shrink-0">
            Request a product quote
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
