import "server-only";
import { company } from "./site";

/**
 * Lead delivery.
 *
 * Every quote request is sent to the business by email (Resend) and, if a
 * webhook is configured, posted there too so leads can land in a CRM or sheet.
 * Nothing here throws on missing configuration — the caller reports an honest
 * status so the form can fall back to WhatsApp instead of silently losing a lead.
 */

export type Lead = {
  name: string;
  phone: string;
  email?: string;
  subject: string;
  quantity?: string;
  location?: string;
  details?: string;
};

export type DeliveryResult = {
  delivered: boolean;
  channels: string[];
  /** True when no delivery channel is configured at all (deploy-time mistake). */
  unconfigured: boolean;
  error?: string;
};

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const TURNSTILE_ENDPOINT =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export function leadFields(lead: Lead): [string, string][] {
  return [
    ["Name", lead.name],
    ["Phone", lead.phone],
    ["Email", lead.email || "—"],
    ["Needs", lead.subject],
    ["Quantity / size", lead.quantity || "—"],
    ["Site location", lead.location || "—"],
    ["Details", lead.details || "—"],
  ];
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function emailBody(lead: Lead) {
  const rows = leadFields(lead)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 14px 6px 0;color:#64748b;font:600 13px system-ui">${k}</td><td style="padding:6px 0;font:400 14px system-ui;color:#0f172a">${escapeHtml(
          v
        )}</td></tr>`
    )
    .join("");
  return {
    html: `<div style="font-family:system-ui,sans-serif"><h2 style="font:700 18px system-ui;color:#0f172a">New quote request</h2><table>${rows}</table><p style="font:400 12px system-ui;color:#64748b">Sent from ${company.url}</p></div>`,
    text: leadFields(lead)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n"),
  };
}

/** Verifies a Cloudflare Turnstile token. Returns true when not configured. */
export async function verifyTurnstile(token: string | null): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // not configured — don't block real leads
  if (!token) return false;
  try {
    const res = await fetch(TURNSTILE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, response: token }),
    });
    const data = (await res.json()) as { success?: boolean };
    return Boolean(data.success);
  } catch {
    return false;
  }
}

export async function deliverLead(lead: Lead): Promise<DeliveryResult> {
  const channels: string[] = [];
  const errors: string[] = [];

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL || company.email;
  const from = process.env.LEAD_FROM_EMAIL;
  const webhook = process.env.LEAD_WEBHOOK_URL;

  if (apiKey && from) {
    try {
      const { html, text } = emailBody(lead);
      const res = await fetch(RESEND_ENDPOINT, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          subject: `Quote request — ${lead.subject} — ${lead.name}`,
          html,
          text,
          ...(lead.email ? { reply_to: lead.email } : {}),
        }),
      });
      if (res.ok) channels.push("email");
      else errors.push(`email ${res.status}`);
    } catch {
      errors.push("email failed");
    }
  }

  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...lead, receivedAt: new Date().toISOString() }),
      });
      if (res.ok) channels.push("webhook");
      else errors.push(`webhook ${res.status}`);
    } catch {
      errors.push("webhook failed");
    }
  }

  const unconfigured = !(apiKey && from) && !webhook;
  if (unconfigured) {
    // Loud in the server log so a misconfigured deploy is obvious.
    console.error(
      "[leads] No delivery channel configured — set RESEND_API_KEY + LEAD_FROM_EMAIL, or LEAD_WEBHOOK_URL."
    );
  }

  return {
    delivered: channels.length > 0,
    channels,
    unconfigured,
    ...(errors.length ? { error: errors.join(", ") } : {}),
  };
}
