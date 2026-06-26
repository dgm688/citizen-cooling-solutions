import Icon from "./Icon";
import SectionHeader from "./SectionHeader";
import { whyUs, steps } from "@/lib/site";

export default function WhyUs() {
  return (
    <section id="why" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Why Citizen Cooling"
              title={<>Built for uptime, trusted for quality</>}
              intro="We are an engineering workshop first — repairs, fabrication and rewinding handled in-house on Jogoo Road, backed by a stocked materials store."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {whyUs.map((w) => (
                <div key={w.title} className="rounded-xl border border-steel-200 bg-frost p-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-cool-600 text-white">
                    <Icon name={w.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold uppercase tracking-wide text-steel-900">
                    {w.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-steel-600">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl bg-ink p-8 text-white sm:p-10">
              <div className="absolute inset-0 bg-blueprint opacity-50" aria-hidden="true" />
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-heat-500/20 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cool-300">
                  How it works
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold uppercase tracking-wide sm:text-3xl">
                  From breakdown to back-in-service
                </h3>
                <ol className="mt-8 space-y-6">
                  {steps.map((s) => (
                    <li key={s.n} className="flex gap-5">
                      <span className="font-display text-3xl font-bold text-heat-500">{s.n}</span>
                      <div className="border-l border-white/10 pl-5">
                        <h4 className="font-display text-lg font-semibold uppercase tracking-wide">
                          {s.title}
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed text-steel-300">{s.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
