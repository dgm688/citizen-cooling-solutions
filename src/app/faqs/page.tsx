import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Faq from "@/components/Faq";
import CTABand from "@/components/CTABand";
import { faqs } from "@/lib/site";
import { pageMeta, breadcrumbSchema, faqSchema, JsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  keywords: [
    "radiator repair questions Kenya",
    "generator maintenance Kenya",
    "insulation supplier Kenya FAQ",
  ],
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about radiator repair, generator service, motor rewinding, insulation supply, coverage areas and getting a quote from Citizen Cooling Solutions.",
  path: "/faqs",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "FAQs", path: "/faqs" },
];

export default function FaqsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={faqSchema(faqs)} />
      <PageHeader
        eyebrow="Good to know"
        title="Frequently Asked Questions"
        intro="Everything you need to know about our repair services, material supply and how to get a quotation."
        crumbs={crumbs}
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Faq items={faqs} title="" eyebrow="" center withSection={false} />
        </div>
      </section>
      <CTABand />
    </>
  );
}
