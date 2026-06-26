import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import MediaFrame from "@/components/ui/MediaFrame";
import Reveal from "@/components/motion/Reveal";
import Icon from "@/components/Icon";
import Faq from "@/components/Faq";
import CTABand from "@/components/CTABand";
import ServiceCard from "@/components/cards/ServiceCard";
import { ButtonLink } from "@/components/ui/Button";
import { services, getService, getIndustry } from "@/lib/site";
import {
  pageMeta,
  breadcrumbSchema,
  serviceSchema,
  faqSchema,
  JsonLd,
} from "@/lib/seo";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) return {};
  return pageMeta({
    title: service.seoTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage(
  props: PageProps<"/services/[slug]">
) {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${service.slug}` },
  ];

  const relatedServices = service.related
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const relatedIndustries = service.industries
    .map((i) => getIndustry(i))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={serviceSchema(service)} />
      {service.faqs.length > 0 && <JsonLd data={faqSchema(service.faqs)} />}

      <PageHeader
        eyebrow="Service"
        title={service.title}
        intro={service.short}
        crumbs={crumbs}
      />

      <section className="bg-frost py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Main */}
            <div className="lg:col-span-7">
              <div className="prose-industrial space-y-5">
                {service.overview.map((p, i) => (
                  <p key={i} className="text-base leading-relaxed text-steel-700">
                    {p}
                  </p>
                ))}
              </div>

              {/* Image — swap-ready: set `image` on the service in site.ts */}
              <MediaFrame
                src={service.image}
                alt={`${service.title} — Citizen Cooling Solutions`}
                icon={service.icon}
                note={service.imageNote}
                className="mt-8"
                priority
              />

              {/* Process */}
              <h2 className="mt-12 font-display text-2xl font-bold uppercase tracking-tight text-steel-950">
                Our Process
              </h2>
              <ol className="mt-6 space-y-5">
                {service.process.map((step, i) => (
                  <li key={step.title} className="flex gap-5">
                    <span className="font-mono text-2xl font-bold text-heat-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="border-l border-steel-200 pl-5">
                      <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-steel-900">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-steel-600">
                        {step.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-5">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-steel-200 bg-white p-6">
                  <h2 className="font-display text-xl font-bold uppercase tracking-wide text-steel-950">
                    Key Benefits
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex gap-3 text-sm text-steel-700">
                        <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-cool-600" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {relatedIndustries.length > 0 && (
                  <div className="rounded-2xl border border-steel-200 bg-white p-6">
                    <h2 className="font-display text-xl font-bold uppercase tracking-wide text-steel-950">
                      Industries Served
                    </h2>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {relatedIndustries.map((ind) => (
                        <li key={ind.slug}>
                          <Link
                            href={`/industries/${ind.slug}`}
                            className="inline-flex items-center gap-1.5 rounded-full border border-steel-200 bg-frost px-3 py-1.5 text-sm text-steel-700 transition-colors hover:border-cool-400 hover:text-cool-700"
                          >
                            <Icon name={ind.icon} className="h-4 w-4 text-cool-600" />
                            {ind.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="rounded-2xl bg-ink p-6 text-white">
                  <h2 className="font-display text-xl font-bold uppercase tracking-wide">
                    Need this service?
                  </h2>
                  <p className="mt-2 text-sm text-steel-300">
                    Send the details and we&apos;ll respond with a clear, itemised quotation.
                  </p>
                  <ButtonLink
                    href="/request-quote"
                    arrow
                    className="mt-4 w-full"
                  >
                    Request a Quote
                  </ButtonLink>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      {service.faqs.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Faq
              items={service.faqs}
              eyebrow="Good to know"
              title={`${service.title} — FAQs`}
              center
              withSection={false}
            />
          </div>
        </section>
      )}

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="bg-frost py-16 sm:py-20">
          <Container>
            <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-steel-950">
              Related Services
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTABand />
    </>
  );
}
