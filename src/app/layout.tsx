import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { company } from "@/lib/site";
import { organizationSchema, JsonLd } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: `${company.name} | Industrial Cooling, Power & Insulation — Nairobi`,
    template: `%s | ${company.shortName}`,
  },
  description:
    "Radiator repair & fabrication, oil cooler & intercooler repair, generator maintenance, motor & stator rewinding, plus supply of thermal insulation & refractory materials. Jogoo Road, Nairobi — serving industrial clients across Kenya.",
  keywords: [
    "radiator repair Nairobi",
    "radiator fabrication Kenya",
    "generator repair Nairobi",
    "motor rewinding Kenya",
    "stator rewinding",
    "oil cooler repair",
    "intercooler repair",
    "tea factory dryer radiator",
    "thermal insulation supplier Kenya",
    "refractory materials Nairobi",
    "fire bricks Kenya",
  ],
  openGraph: {
    title: `${company.name} — Industrial Cooling, Power & Insulation`,
    description:
      "Industrial radiator & cooling repair, generator maintenance, motor rewinding, and thermal insulation & refractory supply. Jogoo Road, Nairobi.",
    url: company.url,
    siteName: company.name,
    locale: "en_KE",
    type: "website",
  },
  alternates: { canonical: company.url },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b1220",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCondensed.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-frost text-steel-900">
        <JsonLd data={organizationSchema} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-heat-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
