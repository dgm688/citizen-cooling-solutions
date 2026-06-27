import Link from "next/link";
import Icon from "./Icon";
import { LogoMark } from "./Logo";
import { company, nav, services, phoneHref, waHref } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-steel-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <LogoMark className="h-10 w-10" />
              <span className="font-display text-lg font-bold uppercase tracking-wide text-white">
                Citizen Cooling Solutions
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-steel-400">
              Industrial cooling, power and thermal protection — radiator &amp; cooling
              repair, generator service and rewinding across Kenya, with insulation
              &amp; refractory materials supplied throughout East Africa.
            </p>
            <a
              href={waHref(
                "Hello Citizen Cooling Solutions, I would like to enquire about your services / products."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="transition-colors hover:text-cool-400">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/faqs" className="transition-colors hover:text-cool-400">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="transition-colors hover:text-cool-400"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-2.5">
                <Icon name="pin" className="h-5 w-5 shrink-0 text-cool-400" />
                <span>{company.location}</span>
              </li>
              {company.phones.map((p) => (
                <li key={p} className="flex gap-2.5">
                  <Icon name="phone" className="h-5 w-5 shrink-0 text-cool-400" />
                  <a href={phoneHref(p)} className="hover:text-white">
                    {p}
                  </a>
                </li>
              ))}
              <li className="flex gap-2.5">
                <Icon name="mail" className="h-5 w-5 shrink-0 text-cool-400" />
                <a href={`mailto:${company.email}`} className="hover:text-white">
                  {company.email}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Icon name="clock" className="h-5 w-5 shrink-0 text-cool-400" />
                <span>{company.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-steel-500 sm:flex-row">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-steel-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-steel-300">
              Terms
            </Link>
            <span>{company.domain}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
