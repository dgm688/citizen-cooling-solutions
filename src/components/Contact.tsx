import Icon from "./Icon";
import SectionHeader from "./SectionHeader";
import QuoteForm from "./QuoteForm";
import { company, phoneHref } from "@/lib/site";

const mapsQuery = encodeURIComponent("Jogoo Road, Nairobi, Kenya");

export default function Contact() {
  return (
    <section id="contact" className="bg-steel-100 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Quote form */}
          <div id="quote" className="lg:col-span-7">
            <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
              <SectionHeader
                eyebrow="Request a quote"
                title={<>Tell us what you need</>}
                intro="Fill in the form and we'll get back to you with a clear, itemised quotation."
              />
              <div className="mt-8">
                <QuoteForm />
              </div>
            </div>
          </div>

          {/* Contact details + map */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-ink p-6 text-white sm:p-8">
              <h3 className="font-display text-2xl font-bold uppercase tracking-wide">
                Visit or call us
              </h3>

              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex gap-3">
                  <Icon name="pin" className="h-5 w-5 shrink-0 text-cool-400" />
                  <span className="text-steel-200">{company.location}</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="clock" className="h-5 w-5 shrink-0 text-heat-400" />
                  <span className="text-steel-200">{company.hours}</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="mail" className="h-5 w-5 shrink-0 text-cool-400" />
                  <a href={`mailto:${company.email}`} className="text-steel-200 hover:text-white">
                    {company.email}
                  </a>
                </li>
              </ul>

              <div className="mt-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cool-300">
                  Call our lines
                </p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {company.phones.map((p) => (
                    <a
                      key={p}
                      href={phoneHref(p)}
                      className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm font-semibold transition-colors hover:border-cool-500/50 hover:bg-cool-500/10 cursor-pointer"
                    >
                      <Icon name="phone" className="h-4 w-4 text-cool-400" />
                      {p}
                    </a>
                  ))}
                </div>
              </div>

              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 cursor-pointer"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                Message us on WhatsApp
              </a>
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl border border-steel-200">
              <iframe
                title="Citizen Cooling Solutions location — Jogoo Road, Nairobi"
                src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
