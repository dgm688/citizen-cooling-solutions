"use client";

import { useState } from "react";
import Icon from "./Icon";
import SectionHeader from "./SectionHeader";
import { faqs as defaultFaqs } from "@/lib/site";

export default function Faq({
  items = defaultFaqs,
  eyebrow = "Good to know",
  title = "Frequently Asked Questions",
  center = true,
  withSection = true,
}: {
  items?: { q: string; a: string }[];
  eyebrow?: string;
  title?: string;
  center?: boolean;
  withSection?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);

  const list = (
    <div className="mt-10 divide-y divide-steel-200 rounded-xl border border-steel-200">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg font-semibold uppercase tracking-wide text-steel-900">
                {f.q}
              </span>
              <Icon
                name="plus"
                className={`h-5 w-5 shrink-0 text-cool-600 transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-200 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-steel-600">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  if (!withSection) {
    return (
      <>
        {title && <SectionHeader eyebrow={eyebrow} title={title} center={center} />}
        {list}
      </>
    );
  }

  return (
    <section id="faqs" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={eyebrow} title={title} center={center} />
        {list}
      </div>
    </section>
  );
}
