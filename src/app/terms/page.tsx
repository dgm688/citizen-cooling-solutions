import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import { company } from "@/lib/site";
import { pageMeta, breadcrumbSchema, JsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Terms of Service",
  description: `The terms governing the use of the ${company.name} website and the services and products we provide.`,
  path: "/terms",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Terms", path: "/terms" },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHeader eyebrow="Legal" title="Terms of Service" crumbs={crumbs} />
      <section className="bg-white py-16 sm:py-20">
        <Container>
          {/* REPLACE: have these terms reviewed by a qualified legal professional. */}
          <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-steel-700">
            <p className="font-mono text-xs uppercase tracking-wider text-steel-400">
              Last updated: {new Date().getFullYear()}
            </p>
            <p>
              These terms govern your use of the {company.name} website. By using this
              site you agree to them.
            </p>

            <h2 className="font-display text-xl font-bold uppercase tracking-wide text-steel-950">
              Website content
            </h2>
            <p>
              Information on this site is provided for general guidance. Product
              specifications, availability and pricing may change, and quotations are
              confirmed in writing on request.
            </p>

            <h2 className="font-display text-xl font-bold uppercase tracking-wide text-steel-950">
              Quotations &amp; services
            </h2>
            <p>
              A request submitted through this site is an enquiry, not a binding order.
              All work is carried out under a separate, agreed quotation and scope.
              Workmanship and any warranties are as stated in that quotation.
            </p>

            <h2 className="font-display text-xl font-bold uppercase tracking-wide text-steel-950">
              Intellectual property
            </h2>
            <p>
              The content, branding and design of this website are the property of
              {" "}
              {company.name} unless otherwise stated, and may not be reproduced without
              permission.
            </p>

            <h2 className="font-display text-xl font-bold uppercase tracking-wide text-steel-950">
              Limitation of liability
            </h2>
            <p>
              We are not liable for any indirect or consequential loss arising from
              the use of this website. Nothing in these terms limits liability that
              cannot be limited under Kenyan law.
            </p>

            <h2 className="font-display text-xl font-bold uppercase tracking-wide text-steel-950">
              Contact
            </h2>
            <p>
              Questions about these terms? Email{" "}
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
