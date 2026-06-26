"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import Icon from "./Icon";
import { nav, company, phoneHref, services, industries } from "@/lib/site";

const dropdowns: Record<string, { label: string; href: string }[]> = {
  "/services": services.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
  "/industries": industries.map((i) => ({ label: i.name, href: `/industries/${i.slug}` })),
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80"
          : "bg-white"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const sub = dropdowns[item.href];
            return (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 py-2 text-sm font-medium transition-colors hover:text-cool-600 ${
                    isActive(item.href) ? "text-cool-600" : "text-steel-700"
                  }`}
                >
                  {item.label}
                  {sub && (
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </Link>
                {sub && (
                  <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="overflow-hidden rounded-xl border border-steel-200 bg-white p-2 shadow-xl shadow-steel-900/10">
                      {sub.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block rounded-lg px-3 py-2.5 text-sm font-medium text-steel-700 transition-colors hover:bg-steel-100 hover:text-cool-700"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={phoneHref(company.phones[0])}
            className="flex items-center gap-2 text-sm font-semibold text-steel-800 transition-colors hover:text-cool-600"
          >
            <Icon name="phone" className="h-4 w-4 text-cool-600" />
            {company.phones[0]}
          </a>
          <Link
            href="/request-quote"
            className="heat-glow inline-flex items-center gap-2 rounded-md bg-heat-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-heat-600 cursor-pointer"
          >
            Request a Quote
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-steel-800 hover:bg-steel-100 lg:hidden cursor-pointer"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <Icon name="plus" className="h-6 w-6 rotate-45" />
          ) : (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-steel-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6" aria-label="Mobile">
            <Link
              href="/"
              className="rounded-md px-3 py-3 text-base font-medium text-steel-800 hover:bg-steel-100"
            >
              Home
            </Link>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-base font-medium text-steel-800 hover:bg-steel-100"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/request-quote"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-heat-500 px-5 py-3 text-base font-semibold text-white hover:bg-heat-600"
            >
              Request a Quote
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <a
              href={phoneHref(company.phones[0])}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md border border-steel-300 px-5 py-3 text-base font-semibold text-steel-800 hover:bg-steel-100"
            >
              <Icon name="phone" className="h-4 w-4 text-cool-600" />
              Call {company.phones[0]}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
