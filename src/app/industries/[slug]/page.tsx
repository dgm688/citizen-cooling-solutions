import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import Icon from "@/components/Icon";
import CTABand from "@/components/CTABand";
import ServiceCard from "@/components/cards/ServiceCard";
import { industries, getIndustry, getService } from "@/lib/site";
import { pageMeta, breadcrumbSchema, webPageSchema, JsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata(
  props: PageProps<"/industries/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return pageMeta({
    title: `${industry.name} — Cooling, Power & Insulation`,
    description: `${industry.intro} Repair, fabrication and material supply for ${industry.name.toLowerCase()} across Kenya.`,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryDetailPage(
  props: PageProps<"/industries/[slug]">
) {
  const { slug } = await props.params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: industry.name, path: `/industries/${industry.slug}` },
  ];

  const relatedServices = industry.services
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={webPageSchema({
          title: `${industry.name} — Cooling, Power & Insulation`,
          description: industry.intro,
          path: `/industries/${industry.slug}`,
        })}
      />
      <PageHeader
        eyebrow="Industry"
        title={industry.name}
        intro={industry.intro}
        crumbs={crumbs}
      />

      <section className="bg-frost py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-steel-200 bg-white p-7">
              <h2 className="flex items-center gap-3 font-display text-xl font-bold uppercase tracking-wide text-steel-950">
                <Icon name="flame" className="h-6 w-6 text-heat-500" />
                Challenges We Solve
              </h2>
              <ul className="mt-5 space-y-3">
                {industry.challenges.map((c) => (
                  <li key={c} className="flex gap-3 text-sm text-steel-700">
                    <Icon name="arrow" className="mt-0.5 h-5 w-5 shrink-0 text-heat-500" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-steel-200 bg-white p-7">
              <h2 className="flex items-center gap-3 font-display text-xl font-bold uppercase tracking-wide text-steel-950">
                <Icon name="check" className="h-6 w-6 text-cool-600" />
                How We Help
              </h2>
              <ul className="mt-5 space-y-3">
                {industry.solutions.map((s) => (
                  <li key={s} className="flex gap-3 text-sm text-steel-700">
                    <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-cool-600" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {relatedServices.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <Container>
            <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-steel-950">
              Recommended Services
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
