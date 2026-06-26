import SectionHeader from "./SectionHeader";
import Container from "./ui/Container";
import Reveal from "./motion/Reveal";
import { testimonials } from "@/lib/site";
import { reviewSchema, JsonLd } from "@/lib/seo";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`h-4 w-4 ${i < rating ? "text-heat-500" : "text-steel-300"}`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials({ dark = false }: { dark?: boolean }) {
  return (
    <section className={dark ? "bg-steel-950 py-20 text-white sm:py-24" : "bg-frost py-20 sm:py-24"}>
      <JsonLd data={reviewSchema(testimonials)} />
      <Container>
        <SectionHeader
          eyebrow="In their words"
          title={<>What Our Clients Say</>}
          intro="Representative feedback from the operators we serve across Kenya."
          light={dark}
          center
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name + i} delay={i * 0.06}>
              <figure
                className={`flex h-full flex-col rounded-2xl border p-7 ${
                  dark
                    ? "border-white/10 bg-white/5"
                    : "border-steel-200 bg-white"
                }`}
              >
                <Stars rating={t.rating} />
                <blockquote
                  className={`mt-4 flex-1 text-base leading-relaxed ${
                    dark ? "text-steel-200" : "text-steel-700"
                  }`}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-current/10 pt-4">
                  <span
                    className={`block font-display text-base font-semibold uppercase tracking-wide ${
                      dark ? "text-white" : "text-steel-950"
                    }`}
                  >
                    {t.name}
                  </span>
                  <span className={`text-sm ${dark ? "text-cool-300" : "text-cool-600"}`}>
                    {t.role}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className={`mt-6 text-center font-mono text-xs uppercase tracking-wider ${dark ? "text-steel-500" : "text-steel-400"}`}>
          Placeholder testimonials · to be replaced with attributed client quotes
        </p>
      </Container>
    </section>
  );
}
