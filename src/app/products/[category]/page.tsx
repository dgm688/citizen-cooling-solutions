import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import Icon from "@/components/Icon";
import CTABand from "@/components/CTABand";
import { ButtonLink } from "@/components/ui/Button";
import {
  productCategories,
  getProductCategory,
  productSlug,
} from "@/lib/site";
import {
  pageMeta,
  breadcrumbSchema,
  collectionPageSchema,
  productCollectionSchema,
  JsonLd,
} from "@/lib/seo";

export function generateStaticParams() {
  return productCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata(
  props: PageProps<"/products/[category]">
): Promise<Metadata> {
  const { category } = await props.params;
  const cat = getProductCategory(category);
  if (!cat) return {};
  return pageMeta({
    title: `${cat.group} in Nairobi, Kenya`,
    description: cat.blurb,
    path: `/products/${cat.slug}`,
    keywords: [
      `${cat.group} Kenya`,
      `${cat.group} Nairobi`,
      `${cat.group} suppliers Kenya`,
      ...cat.items.slice(0, 6).map((p) => `${p.name} Kenya`),
    ],
  });
}

export default async function ProductCategoryPage(
  props: PageProps<"/products/[category]">
) {
  const { category } = await props.params;
  const cat = getProductCategory(category);
  if (!cat) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: cat.group, path: `/products/${cat.slug}` },
  ];

  const others = productCategories.filter((c) => c.slug !== cat.slug);

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={collectionPageSchema({
          title: `${cat.group} in Nairobi, Kenya`,
          description: cat.blurb,
          path: `/products/${cat.slug}`,
          items: cat.items.map((p) => ({
            name: p.name,
            path: `/products/${cat.slug}/${productSlug(p.name)}`,
          })),
        })}
      />
      <JsonLd data={productCollectionSchema([cat])} />

      <PageHeader
        eyebrow="Materials store"
        title={cat.group}
        intro={cat.blurb}
        crumbs={crumbs}
      />

      <section className="bg-frost py-16 sm:py-20">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-12">
            {cat.image && (
              <div className="lg:col-span-5">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-steel-200">
                  <Image
                    src={cat.image}
                    alt={`${cat.group} — Citizen Cooling Solutions`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            )}
            <div className={cat.image ? "lg:col-span-7" : "lg:col-span-12"}>
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-steel-950 text-cool-400">
                  <Icon name={cat.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-steel-950">
                    {cat.items.length} materials in this range
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-steel-600">
                    Supplied in retail packs and bulk, from the Jogoo Road store in
                    Nairobi and delivered across Kenya and the wider East Africa
                    region. Tell us the temperature, thickness and quantity you need
                    and we&apos;ll quote from stock.
                  </p>
                  <ButtonLink href="/request-quote" arrow className="mt-5">
                    Request a quote
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cat.items.map((p, i) => {
              const slug = productSlug(p.name);
              return (
                <Reveal key={p.name} delay={(i % 3) * 0.05}>
                  <article className="flex h-full flex-col overflow-hidden rounded-xl border border-steel-200 bg-white transition-colors hover:border-cool-400">
                    {p.image && (
                      <Link
                        href={`/products/${cat.slug}/${slug}`}
                        className="relative block aspect-[4/3] overflow-hidden border-b border-steel-100 bg-steel-100"
                      >
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </Link>
                    )}
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-steel-900">
                        <Link
                          href={`/products/${cat.slug}/${slug}`}
                          className="transition-colors hover:text-cool-700"
                        >
                          {p.name}
                        </Link>
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-600">
                        {p.desc}
                      </p>
                      {p.specs && p.specs.length > 0 && (
                        <dl className="mt-3 space-y-1 border-t border-steel-100 pt-3">
                          {p.specs.map((s) => (
                            <dd
                              key={s}
                              className="flex items-start gap-2 font-mono text-xs text-steel-700"
                            >
                              <span
                                className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-heat-500"
                                aria-hidden="true"
                              />
                              {s}
                            </dd>
                          ))}
                        </dl>
                      )}
                      <Link
                        href={`/products/${cat.slug}/${slug}`}
                        className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-cool-700 hover:underline"
                      >
                        Specs &amp; uses
                        <Icon name="arrow" className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-steel-950">
            Other material ranges
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {others.map((c) => (
              <Link
                key={c.slug}
                href={`/products/${c.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-steel-200 bg-frost px-4 py-2 text-sm text-steel-700 transition-colors hover:border-cool-400 hover:text-cool-700"
              >
                <Icon name={c.icon} className="h-4 w-4 text-cool-600" />
                {c.group}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
