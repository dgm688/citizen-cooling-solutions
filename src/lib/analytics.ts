/**
 * Thin GA4 wrapper. Every call is a no-op when NEXT_PUBLIC_GA_ID isn't set,
 * so local development and preview deploys stay out of the reporting.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export type LeadEvent =
  | "call_click"
  | "whatsapp_click"
  | "email_click"
  | "quote_submit"
  | "quote_failed";

export function track(event: LeadEvent, params: Record<string, string> = {}) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", event, params);
}

export function pageview(url: string) {
  if (typeof window === "undefined" || !window.gtag || !GA_ID) return;
  window.gtag("event", "page_view", { page_path: url });
}
