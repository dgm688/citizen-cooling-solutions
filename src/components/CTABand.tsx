import Container from "./ui/Container";
import { ButtonLink } from "./ui/Button";
import Icon from "./Icon";
import { company, phoneHref, waHref } from "@/lib/site";

export default function CTABand({
  title = "Got downtime? Let's fix it fast.",
  text = "Tell us the unit, machine or material you need. We'll respond with a clear, itemised quotation — by WhatsApp, phone or email.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 bg-blueprint" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-cool-500/15 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative py-14 sm:py-16">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-steel-300">
              {text}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <ButtonLink href="/request-quote" arrow>
              Request a Free Quote
            </ButtonLink>
            <a
              href={waHref(
                "Hello Citizen Cooling Solutions, I would like to request a quote."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-7 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90 cursor-pointer"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              WhatsApp Us
            </a>
            <a
              href={phoneHref(company.phones[0])}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10 cursor-pointer"
            >
              <Icon name="phone" className="h-5 w-5 text-cool-400" />
              {company.phones[0]}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
