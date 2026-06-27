import type { Metadata } from "next";
import { company, services, productCategories } from "./site";

// Build per-page metadata with sensible canonical + OpenGraph + Twitter defaults.
export function pageMeta({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = `${company.url}${path}`;
  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    authors: [{ name: company.name, url: company.url }],
    creator: company.name,
    publisher: company.name,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${company.shortName}`,
      description,
      url,
      siteName: company.name,
      locale: "en_KE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${company.shortName}`,
      description,
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
  alternateName: company.shortName,
  description: company.blurb,
  url: company.url,
  telephone: phonesIntl,
  email: company.email,
  image: `${company.url}/opengraph-image`,
  logo: `${company.url}/opengraph-image`,
  priceRange: "$$",
  slogan: company.tagline,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.street,
    addressLocality: company.city,
    addressCountry: company.countryCode,
  },
  // REPLACE: confirm exact coordinates of the Jogoo Road workshop.
  geo: {
    "@type": "GeoCoordinates",
    latitude: -1.2921,
    longitude: 36.8602,
  },
  areaServed: [
    { "@type": "Country", name: "Kenya" },
    ...company.eacCountries
      .filter((c) => c !== "Kenya")
      .map((name) => ({ "@type": "Country", name })),
    { "@type": "Place", name: "East Africa" },
  ],
  openingHours: company.openingHours,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "17:00",
  },
  sameAs: Object.values(company.social),
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: phonesIntl[0],
      contactType: "sales",
      areaServed: "KE",
      availableLanguage: ["en", "sw"],
    },
    {
      "@type": "ContactPoint",
      telephone: phonesIntl[1] ?? phonesIntl[0],
      contactType: "customer service",
      areaServed: "KE",
      availableLanguage: ["en", "sw"],
    },
  ],
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.title },
  })),
  knowsAbout: [
    ...services.map((s) => s.title),
    ...productCategories.map((c) => c.group),
  ],
};

// WebSite schema — helps Google show the correct site name in results.
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${company.url}/#website`,
  url: company.url,
  name: company.name,
  inLanguage: "en-KE",
  publisher: { "@id": `${company.url}/#organization` },
};

// ItemList for index pages (services, industries, products).
export function itemListSchema(
  items: { name: string; path: string }[],
  name: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: `${company.url}${item.path}`,
    })),
  };
}

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

// WebPage — describes an individual page and ties it to the WebSite + Organization.
export function webPageSchema({
  title,
  description,
  path,
  primaryImage,
}: {
  title: string;
  description: string;
  path: string;
  primaryImage?: string;
}) {
  const url = `${company.url}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: "en-KE",
    isPartOf: { "@id": `${company.url}/#website` },
    about: { "@id": `${company.url}/#organization` },
    ...(primaryImage
      ? {
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: primaryImage.startsWith("http")
              ? primaryImage
              : `${company.url}${primaryImage}`,
          },
        }
      : {}),
  };
}

// CollectionPage — for index pages that list a set of items (services, products…).
export function collectionPageSchema({
  title,
  description,
  path,
  items,
}: {
  title: string;
  description: string;
  path: string;
  items: { name: string; path: string }[];
}) {
  const url = `${company.url}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    url,
    name: title,
    description,
    inLanguage: "en-KE",
    isPartOf: { "@id": `${company.url}/#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        url: `${company.url}${item.path}`,
      })),
    },
  };
}

// Product — honest markup: name, description, image, category only.
// No `brand` (these materials are supplied, not manufactured by us), no
// Offer/price and no Review/AggregateRating (we never fabricate those).
export function productCollectionSchema(
  categories: {
    group: string;
    image?: string;
    items: { name: string; desc: string }[];
  }[]
) {
  const products = categories.flatMap((c) =>
    c.items.map((p) => ({
      "@type": "Product",
      name: p.name,
      description: p.desc,
      category: c.group,
      ...(c.image ? { image: `${company.url}${c.image}` } : {}),
    }))
  );
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Insulation & Refractory Products",
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: p,
    })),
  };
}

// ImageObject list — for the gallery (helps image search).
export function imageGallerySchema(images: { src: string; label: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Citizen Cooling Solutions — workshop & projects",
    image: images.map((img) => ({
      "@type": "ImageObject",
      contentUrl: `${company.url}${img.src}`,
      caption: img.label,
    })),
  };
}

// ContactPage schema for /contact.
export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${company.url}/contact#webpage`,
  url: `${company.url}/contact`,
  name: `Contact ${company.shortName}`,
  inLanguage: "en-KE",
  isPartOf: { "@id": `${company.url}/#website` },
  about: { "@id": `${company.url}/#organization` },
  mainEntity: {
    "@type": "Organization",
    "@id": `${company.url}/#organization`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: phonesIntl[0],
      contactType: "customer service",
      areaServed: "KE",
      availableLanguage: ["en", "sw"],
    },
  },
};

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
