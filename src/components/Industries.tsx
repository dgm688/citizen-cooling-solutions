import Link from "next/link";
import Icon from "./Icon";
import SectionHeader from "./SectionHeader";
import Container from "./ui/Container";
import { ButtonLink } from "./ui/Button";
import Reveal from "./motion/Reveal";
import { industries } from "@/lib/site";

export default function Industries() {
  return (
    <section id="industries" className="bg-frost py-20 sm:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Who we serve"
            title={<>Industries We Support</>}
            intro="Wherever engines run hot and equipment must keep working, we keep cooling systems, generators and high-heat installations in service."
          />
          <ButtonLink href="/industries" variant="outline" size="md" arrow className="shrink-0">
            All industries
          </ButtonLink>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={i * 0.05}>
              <Link
                href={`/industries/${ind.slug}`}
                className="group flex h-full flex-col gap-4 rounded-xl border border-steel-200 bg-white p-6 transition-all duration-200 hover:border-cool-400 hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-cool-500/10 text-cool-600 transition-colors group-hover:bg-cool-600 group-hover:text-white">
                  <Icon name={ind.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold uppercase leading-tight tracking-wide text-steel-900">
                    {ind.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-600">
                    {ind.short}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
