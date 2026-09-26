"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { GA_ID, pageview, track } from "@/lib/analytics";

/**
 * GA4 + lead-intent events.
 *
 * Renders nothing unless NEXT_PUBLIC_GA_ID is set. Phone, WhatsApp and email
 * clicks are captured with one delegated listener, so no link in the codebase
 * needs an onClick handler to be measured.
 */
export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!GA_ID) return;
    pageview(pathname);
  }, [pathname]);

  useEffect(() => {
    if (!GA_ID) return;
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const link = target?.closest?.("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      if (href.startsWith("tel:")) track("call_click", { number: href.slice(4), page: pathname });
      else if (/wa\.me|api\.whatsapp\.com/.test(href)) track("whatsapp_click", { page: pathname });
      else if (href.startsWith("mailto:")) track("email_click", { page: pathname });
    }
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, [pathname]);

  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GA_ID}', { send_page_view: false });`}
      </Script>
    </>
  );
}
