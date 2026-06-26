import Link from "next/link";
import Icon from "./Icon";
import { company, phoneHref } from "@/lib/site";

const quickFacts = [
  { icon: "radiator", label: "Radiator & cooling repair" },
  { icon: "generator", label: "Generator service & spares" },
  { icon: "coil", label: "Motor & stator rewinding" },
  { icon: "flame", label: "Insulation & refractory supply" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 bg-blueprint" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-32 top-10 h-[28rem] w-[28rem] rounded-full bg-heat-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-[24rem] w-[24rem] rounded-full bg-cool-500/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-24">
        <div className="lg:col-span-7">
          <p className="animate-rise inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cool-300">
            <span className="h-1.5 w-1.5 rounded-full bg-heat-500" />
            Jogoo Road, Nairobi · Serving all of Kenya
          </p>

          <h1 className="animate-rise mt-6 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            We keep industry
            <span className="block text-cool-400">running cool</span>
            <span className="block text-heat-500">& powered up.</span>
          </h1>

          <p className="animate-rise mt-6 max-w-xl text-base leading-relaxed text-steel-300 sm:text-lg">
            {company.blurb}
          </p>

          <div className="animate-rise mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/request-quote"
              className="heat-glow inline-flex items-center justify-center gap-2 rounded-md bg-heat-500 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-heat-600 cursor-pointer"
            >
              Request a Free Quote
              <Icon name="arrow" className="h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10 cursor-pointer"
            >
              Explore Services
            </Link>
          </div>

          <dl className="animate-rise mt-10 grid grid-cols-2 gap-x-6 gap-y-4 sm:max-w-lg">
            {quickFacts.map((f) => (
              <div key={f.label} className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-cool-500/15 text-cool-400">
                  <Icon name={f.icon} className="h-5 w-5" />
                </span>
                <dt className="text-sm font-medium text-steel-200">{f.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        {/* Quick contact card */}
        <div className="lg:col-span-5">
          <div className="animate-rise rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-white">
              Talk to a technician
            </h2>
            <p className="mt-2 text-sm text-steel-300">
              Downtime costs money. Call any of our lines and describe the unit,
              machine or material you need.
            </p>
            <ul className="mt-6 space-y-2.5">
              {company.phones.map((p) => (
                <li key={p}>
                  <a
                    href={phoneHref(p)}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-ink/40 px-4 py-3 text-base font-semibold text-white transition-colors hover:border-cool-500/50 hover:bg-cool-500/10 cursor-pointer"
                  >
                    <Icon name="phone" className="h-5 w-5 text-cool-400" />
                    {p}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center gap-2 text-sm text-steel-300">
              <Icon name="clock" className="h-4 w-4 text-heat-400" />
              {company.hours}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
