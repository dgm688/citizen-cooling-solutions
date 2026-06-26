"use client";

import { useState } from "react";
import Icon from "./Icon";
import { company, services, productGroups } from "@/lib/site";

const subjects = [
  ...services.map((s) => s.title),
  ...productGroups.map((g) => `Products — ${g.group}`),
  "Other / Not sure",
];

export default function QuoteForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const subject = String(data.get("subject") || "");
    const details = String(data.get("details") || "");

    const lines = [
      "*Quote Request — Citizen Cooling Solutions*",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service / Product: ${subject}`,
      `Details: ${details}`,
    ];
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${company.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
    setSent(true);
    form.reset();
  }

  const field =
    "w-full rounded-md border border-steel-300 bg-white px-4 py-3 text-base text-steel-900 placeholder:text-steel-400 transition-colors focus:border-cool-500 focus:outline-none focus:ring-2 focus:ring-cool-500/30";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-steel-800">
            Your name
          </label>
          <input id="name" name="name" required autoComplete="name" placeholder="e.g. John Mwangi" className={field} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-steel-800">
            Phone number
          </label>
          <input id="phone" name="phone" required inputMode="tel" autoComplete="tel" placeholder="07xx xxx xxx" className={field} />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-semibold text-steel-800">
          What do you need?
        </label>
        <select id="subject" name="subject" required defaultValue="" className={field}>
          <option value="" disabled>
            Select a service or product…
          </option>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="details" className="mb-1.5 block text-sm font-semibold text-steel-800">
          Details
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          placeholder="Describe the unit, machine, fault or material and quantity…"
          className={field}
        />
      </div>

      <button
        type="submit"
        className="heat-glow inline-flex w-full items-center justify-center gap-2 rounded-md bg-heat-500 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-heat-600 cursor-pointer sm:w-auto"
      >
        <Icon name="whatsapp" className="h-5 w-5" />
        Send via WhatsApp
      </button>

      {sent && (
        <p className="flex items-center gap-2 rounded-md bg-cool-500/10 px-4 py-3 text-sm font-medium text-cool-700">
          <Icon name="check" className="h-5 w-5" />
          Opening WhatsApp with your details. If it didn&apos;t open, call us on {company.phones[0]}.
        </p>
      )}
      <p className="text-xs text-steel-500">
        Prefer email? Write to{" "}
        <a href={`mailto:${company.email}`} className="font-semibold text-cool-600 hover:underline">
          {company.email}
        </a>
        .
      </p>
    </form>
  );
}
