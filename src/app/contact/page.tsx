import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Contact from "@/components/Contact";
import { pageMeta, breadcrumbSchema, JsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact Us",
  description:
    "Contact Citizen Cooling Solutions on Jogoo Road, Nairobi. Call, WhatsApp or email for radiator repair, generator service, rewinding and insulation supply across Kenya.",
  path: "/contact",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHeader
        eyebrow="Get in touch"
        title="Talk to Our Team"
        intro="Call a line, message us on WhatsApp or send a quote request — we respond fast with clear, itemised quotations."
        crumbs={crumbs}
      />
      <Contact />
    </>
  );
}
