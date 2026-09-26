"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import Script from "next/script";
import Icon from "./Icon";
import { company, services, productGroups } from "@/lib/site";
import { submitQuote, type QuoteState } from "@/app/actions/submit-quote";
import { track } from "@/lib/analytics";

const subjects = [
  ...services.map((s) => s.title),
  ...productGroups.map((g) => `Products — ${g.group}`),
  "Other / Not sure",
];

const TURNSTILE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const field =
  "w-full rounded-md border border-steel-300 bg-white px-4 py-3 text-base text-steel-900 placeholder:text-steel-400 transition-colors focus:border-cool-500 focus:outline-none focus:ring-2 focus:ring-cool-500/30";
const labelCls = "mb-1.5 block text-sm font-semibold text-steel-800";

function whatsappHref(state: QuoteState) {
  const l = state.lead;
  const lines = l
    ? [
        "*Quote Request — Citizen Cooling Solutions*",
        `Name: ${l.name}`,
        `Phone: ${l.phone}`,
        `Needs: ${l.subject}`,
        ...(l.quantity ? [`Quantity: ${l.quantity}`] : []),
        ...(l.location ? [`Location: ${l.location}`] : []),
        ...(l.details ? [`Details: ${l.details}`] : []),
      ]
    : ["Hello, I'd like to request a quote."];
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="heat-glow inline-flex w-full items-center justify-center gap-2 rounded-md bg-heat-500 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-heat-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto cursor-pointer"
    >
      {pending ? (
        <>
          <span
            className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
            aria-hidden="true"
          />
          Sending…
        </>
      ) : (
        <>
          <Icon name="mail" className="h-5 w-5" />
          Send quote request
        </>
      )}
    </button>
  );
}

export default function QuoteForm() {
  const [state, formAction] = useActionState<QuoteState, FormData>(submitQuote, {
    status: "idle",
  });
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "ok") {
      track("quote_submit", { subject: state.lead?.subject || "unknown" });
      formRef.current?.reset();
    } else if (state.status === "error") {
      track("quote_failed", { subject: state.lead?.subject || "unknown" });
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="space-y-4">
      {/* Honeypot — hidden from people, tempting to bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">Company website</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            Your name
          </label>
          <input id="name" name="name" required autoComplete="name" placeholder="e.g. John Mwangi" className={field} />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            required
            inputMode="tel"
            autoComplete="tel"
            placeholder="0721 670960"
            className={field}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelCls}>
            Email <span className="font-normal text-steel-500">(optional)</span>
          </label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="you@company.co.ke" className={field} />
        </div>
        <div>
          <label htmlFor="subject" className={labelCls}>
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
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="quantity" className={labelCls}>
            Quantity / size <span className="font-normal text-steel-500">(optional)</span>
          </label>
          <input id="quantity" name="quantity" placeholder="e.g. 20 rolls, 50mm" className={field} />
        </div>
        <div>
          <label htmlFor="location" className={labelCls}>
            Site location <span className="font-normal text-steel-500">(optional)</span>
          </label>
          <input id="location" name="location" placeholder="e.g. Kericho, Nairobi Industrial Area" className={field} />
        </div>
      </div>

      <div>
        <label htmlFor="details" className={labelCls}>
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

      {TURNSTILE_KEY && (
        <>
          <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="lazyOnload" />
          <div className="cf-turnstile" data-sitekey={TURNSTILE_KEY} />
        </>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <SubmitButton />
        <a
          href={whatsappHref(state)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-steel-300 px-5 py-3.5 text-base font-semibold text-steel-800 transition-colors hover:border-cool-400 hover:text-cool-700"
        >
          <Icon name="whatsapp" className="h-5 w-5" />
          Send on WhatsApp instead
        </a>
      </div>

      {state.status === "ok" && (
        <p
          role="status"
          aria-live="polite"
          className="flex items-start gap-2 rounded-md bg-cool-500/10 px-4 py-3 text-sm font-medium text-cool-700"
        >
          <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0" />
          {state.message}
        </p>
      )}

      {state.status === "error" && (
        <div
          role="alert"
          aria-live="assertive"
          className="rounded-md bg-heat-500/10 px-4 py-3 text-sm text-heat-700"
        >
          <p className="font-medium">{state.message}</p>
          <a
            href={whatsappHref(state)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 font-semibold underline underline-offset-2"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            Send these details on WhatsApp
          </a>
        </div>
      )}

      <p className="text-xs text-steel-500">
        Prefer email? Write to{" "}
        <a href={`mailto:${company.email}`} className="font-semibold text-cool-600 hover:underline">
          {company.email}
        </a>
        , or call{" "}
        <a href={`tel:+254${company.phones[0].replace(/\D/g, "").replace(/^0/, "")}`} className="font-semibold text-cool-600 hover:underline">
          {company.phones[0]}
        </a>
        .
      </p>
    </form>
  );
}
