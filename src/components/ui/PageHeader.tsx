import Breadcrumbs from "./Breadcrumbs";
import Container from "./Container";

export default function PageHeader({
  eyebrow,
  title,
  intro,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  crumbs: { name: string; path: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 bg-blueprint" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-heat-500/15 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative py-12 sm:py-16">
        <Breadcrumbs items={crumbs} />
        <p className="mt-6 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-cool-300">
          <span className="h-px w-8 bg-heat-500" />
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold uppercase leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-steel-300 sm:text-lg">
            {intro}
          </p>
        )}
      </Container>
    </section>
  );
}
