import type { Metadata } from "next";
import { company, services, productCategories } from "./site";

// Build per-page metadata with sensible canonical + OpenGraph defaults.
export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${company.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${company.shortName}`,
      description,
      url,
      siteName: company.name,
      locale: "en_KE",
      type: "website",
    },
  };
}

const phonesIntl = company.phones.map(
  (p) => "+254" + p.replace(/\D/g, "").replace(/^0/, "")
);

// Organisation / LocalBusiness schema for the site root.
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${company.url}/#organization`,
  name: company.name,
  description: company.blurb,
  url: company.url,
  telephone: phonesIntl,
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.street,
    addressLocality: company.city,
    addressCountry: company.countryCode,
  },
  areaServed: { "@type": "Country", name: "Kenya" },
  openingHours: company.openingHours,
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.title },
  })),
  knowsAbout: [
    ...services.map((s) => s.title),
    ...productCategories.map((c) => c.group),
  ],
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${company.url}${item.path}`,
    })),
  };
}

export function serviceSchema(s: {
  title: string;
  metaDescription: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.metaDescription,
    url: `${company.url}/services/${s.slug}`,
    provider: { "@id": `${company.url}/#organization` },
    areaServed: { "@type": "Country", name: "Kenya" },
  };
}

export function reviewSchema(
  reviews: { quote: string; name: string; role: string; rating: number }[]
) {
  const avg =
    reviews.reduce((sum, r) => sum + r.rating, 0) / (reviews.length || 1);
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${company.url}/#organization`,
    name: company.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avg.toFixed(1),
      reviewCount: reviews.length,
      bestRating: 5,
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
      },
      author: { "@type": "Person", name: r.name },
      reviewBody: r.quote,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
