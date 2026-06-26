import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import { company } from "@/lib/site";
import { pageMeta, breadcrumbSchema, JsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description: `How ${company.name} collects, uses and protects the personal information you share with us.`,
  path: "/privacy-policy",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Privacy Policy", path: "/privacy-policy" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHeader eyebrow="Legal" title="Privacy Policy" crumbs={crumbs} />
      <section className="bg-white py-16 sm:py-20">
        <Container>
          {/* REPLACE: have this reviewed against Kenya's Data Protection Act, 2019. */}
          <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-steel-700">
            <p className="font-mono text-xs uppercase tracking-wider text-steel-400">
              Last updated: {new Date().getFullYear()}
            </p>
            <p>
              {company.name} (&quot;we&quot;, &quot;us&quot;) respects your privacy.
              This policy explains what information we collect through this website
              and how we use it.
            </p>

            <h2 className="font-display text-xl font-bold uppercase tracking-wide text-steel-950">
              Information we collect
            </h2>
            <p>
              When you submit a quote request or contact us, we collect the details
              you provide — such as your name, phone number, email and a description
              of your enquiry. We may also collect standard, anonymised analytics
              about how visitors use the site.
            </p>

            <h2 className="font-display text-xl font-bold uppercase tracking-wide text-steel-950">
              How we use your information
            </h2>
            <p>
              We use your information solely to respond to your enquiry, prepare
              quotations, deliver our services and maintain our business records. We
              do not sell your personal information.
            </p>

            <h2 className="font-display text-xl font-bold uppercase tracking-wide text-steel-950">
              WhatsApp &amp; third-party services
            </h2>
            <p>
              Our quote form can open WhatsApp to send your message; this is subject
              to WhatsApp&apos;s own privacy terms. Embedded maps are provided by
              Google and subject to Google&apos;s privacy policy.
            </p>

            <h2 className="font-display text-xl font-bold uppercase tracking-wide text-steel-950">
              Your rights
            </h2>
            <p>
              You may request access to, correction of, or deletion of the personal
              information we hold about you, in line with Kenya&apos;s Data Protection
              Act, 2019.
            </p>

            <h2 className="font-display text-xl font-bold uppercase tracking-wide text-steel-950">
              Contact us
            </h2>
            <p>
              For any privacy questions, email{" "}
              <a href={`mailto:${company.email}`} className="font-semibold text-cool-600 hover:underline">
                {company.email}
              </a>{" "}
              or call {company.phones[0]}.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
