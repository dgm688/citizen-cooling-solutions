import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import MediaFrame from "@/components/ui/MediaFrame";
import Icon from "@/components/Icon";
import CTABand from "@/components/CTABand";
import { ButtonLink } from "@/components/ui/Button";
import { allProducts, getProduct, waHref } from "@/lib/site";
import {
  pageMeta,
  breadcrumbSchema,
  productSchema,
  webPageSchema,
  JsonLd,
} from "@/lib/seo";

export function generateStaticParams() {
  return allProducts.map((p) => ({
    category: p.category.slug,
    slug: p.slug,
  }));
}

export async function generateMetadata(
  props: PageProps<"/products/[category]/[slug]">
): Promise<Metadata> {
  const { category, slug } = await props.params;
  const product = getProduct(category, slug);
  if (!product) return {};
  const specs = product.specs?.join(" · ");
  return pageMeta({
    title: `${product.name} in Nairobi, Kenya`,
    description: specs
      ? `${product.desc} ${specs}. Supplied across Kenya and East Africa by Citizen Cooling Solutions.`.slice(
          0,
          158
        )
      : product.desc,
    path: `/products/${product.category.slug}/${product.slug}`,
    keywords: [
      `${product.name} Kenya`,
      `${product.name} Nairobi`,
      `${product.name} price Kenya`,
      `${product.name} suppliers Kenya`,
      `${product.category.group} Kenya`,
    ],
  });
}

export default async function ProductDetailPage(
  props: PageProps<"/products/[category]/[slug]">
) {
  const { category, slug } = await props.params;
  const product = getProduct(category, slug);
  if (!product) notFound();

  const cat = product.category;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: cat.group, path: `/products/${cat.slug}` },
    { name: product.name, path: `/products/${cat.slug}/${product.slug}` },
  ];

  const related = allProducts
    .filter((p) => p.category.slug === cat.slug && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={productSchema(product)} />
      <JsonLd
        data={webPageSchema({
          title: `${product.name} in Nairobi, Kenya`,
          description: product.desc,
          path: `/products/${cat.slug}/${product.slug}`,
          primaryImage: product.image,
        })}
      />

      <PageHeader
        eyebrow={cat.group}
        title={product.name}
        intro={product.desc}
        crumbs={crumbs}
      />

      <section className="bg-frost py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <MediaFrame
                src={product.image}
                alt={`${product.name} — supplied by Citizen Cooling Solutions, Nairobi`}
                icon={cat.icon}
                note={`${product.name} — photo from our Nairobi store`}
                ratio="aspect-[4/3]"
                priority
              />

              {product.specs && product.specs.length > 0 && (
                <>
                  <h2 className="mt-12 font-display text-2xl font-bold uppercase tracking-tight text-steel-950">
                    Specifications
                  </h2>
                  <dl className="mt-5 overflow-hidden rounded-xl border border-steel-200 bg-white">
                    {product.specs.map((s, i) => (
                      <div
                        key={s}
                        className={`flex gap-4 px-5 py-3 font-mono text-sm text-steel-800 ${
                          i > 0 ? "border-t border-steel-100" : ""
                        }`}
                      >
                        <Icon
                          name="check"
                          className="mt-0.5 h-4 w-4 shrink-0 text-cool-600"
                        />
                        <dd>{s}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-3 text-xs text-steel-500">
                    Other sizes, densities and temperature grades are available to
                    order — ask for what your job needs.
                  </p>
                </>
              )}

              <h2 className="mt-12 font-display text-2xl font-bold uppercase tracking-tight text-steel-950">
                Typical applications
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {product.useCases.map((u) => (
                  <li
                    key={u}
                    className="flex items-start gap-3 rounded-lg border border-steel-200 bg-white px-4 py-3 text-sm text-steel-700"
                  >
                    <Icon
                      name="check"
                      className="mt-0.5 h-4 w-4 shrink-0 text-cool-600"
                    />
                    {u}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="lg:col-span-5">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl bg-ink p-6 text-white">
                  <h2 className="font-display text-xl font-bold uppercase tracking-wide">
                    Price &amp; availability
                  </h2>
                  <p className="mt-2 text-sm text-steel-300">
                    Tell us the size, thickness and quantity and we&apos;ll come back
                    with a written quotation — retail packs or bulk, collected from
                    Jogoo Road or delivered.
                  </p>
                  <ButtonLink href="/request-quote" arrow className="mt-4 w-full">
                    Request a quote
                  </ButtonLink>
                  <a
                    href={waHref(
                      `Hello, I'd like a quote for ${product.name}. Quantity needed: `
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/25 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    <Icon name="whatsapp" className="h-4 w-4" />
                    Ask on WhatsApp
                  </a>
                </div>

                <div className="rounded-2xl border border-steel-200 bg-white p-6">
                  <h2 className="font-display text-xl font-bold uppercase tracking-wide text-steel-950">
                    In the same range
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {related.map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/products/${p.category.slug}/${p.slug}`}
                          className="group flex items-center gap-3 text-sm text-steel-700"
                        >
                          {p.image && (
                            <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md border border-steel-200">
                              <Image
                                src={p.image}
                                alt=""
                                fill
                                sizes="48px"
                                className="object-cover"
                              />
                            </span>
                          )}
                          <span className="transition-colors group-hover:text-cool-700">
                            {p.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/products/${cat.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-cool-700 hover:underline"
                  >
                    All {cat.group}
                    <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
