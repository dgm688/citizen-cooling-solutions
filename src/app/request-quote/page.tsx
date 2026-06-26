import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import QuoteForm from "@/components/QuoteForm";
import Icon from "@/components/Icon";
import { company, phoneHref, waHref, steps } from "@/lib/site";
import { pageMeta, breadcrumbSchema, JsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Request a Free Quote",
  description:
    "Request a free, itemised quote for radiator repair, generator service, motor rewinding or insulation & refractory supply. Fast response by WhatsApp, phone or email — Kenya-wide.",
  path: "/request-quote",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Request a Quote", path: "/request-quote" },
];

export default function RequestQuotePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHeader
        eyebrow="Request a quote"
        title="Get a Free, Itemised Quote"
        intro="Tell us the unit, machine, fault or material you need. We respond fast with a clear, no-surprises quotation."
        crumbs={crumbs}
      />
      <section className="bg-steel-100 py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-steel-950">
                  Your details
                </h2>
                <p className="mt-2 text-sm text-steel-600">
                  The form opens WhatsApp pre-filled with your request — or call us
                  directly using the lines opposite.
                </p>
                <div className="mt-8">
                  <QuoteForm />
                </div>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-2xl bg-ink p-6 text-white sm:p-8">
                <h2 className="font-display text-xl font-bold uppercase tracking-wide">
                  Prefer to talk?
                </h2>
                <div className="mt-5 grid gap-2">
                  {company.phones.map((p) => (
                    <a
                      key={p}
                      href={phoneHref(p)}
                      className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-base font-semibold transition-colors hover:border-cool-500/50 hover:bg-cool-500/10 cursor-pointer"
                    >
                      <Icon name="phone" className="h-5 w-5 text-cool-400" />
                      {p}
                    </a>
                  ))}
                </div>
                <a
                  href={waHref(
                    "Hello Citizen Cooling Solutions, I would like to request a quote."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  <Icon name="whatsapp" className="h-5 w-5" />
                  WhatsApp Us
                </a>
                <div className="mt-5 flex items-center gap-2 text-sm text-steel-300">
                  <Icon name="clock" className="h-4 w-4 text-heat-400" />
                  {company.hours}
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-steel-200 bg-white p-6">
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-steel-950">
                  What happens next
                </h3>
                <ol className="mt-4 space-y-4">
                  {steps.map((s) => (
                    <li key={s.n} className="flex gap-4">
                      <span className="font-mono text-lg font-bold text-heat-500">
                        {s.n}
                      </span>
                      <div>
                        <p className="font-display text-sm font-semibold uppercase tracking-wide text-steel-900">
                          {s.title}
                        </p>
                        <p className="mt-0.5 text-sm leading-relaxed text-steel-600">
                          {s.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
