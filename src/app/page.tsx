import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import StatBar from "@/components/StatBar";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Industries from "@/components/Industries";
import WhyUs from "@/components/WhyUs";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import { webPageSchema, JsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Industrial Cooling, Power & Insulation — Nairobi",
          description:
            "Radiator repair & fabrication, generator service and motor & stator rewinding across Kenya, plus thermal insulation & refractory supply throughout East Africa.",
          path: "/",
          primaryImage: "/opengraph-image",
        })}
      />
      <Hero />
      <Marquee />
      <StatBar />
      <Services />
      <Products />
      <Industries />
      <WhyUs />
      <Clients />
      <Testimonials />
      <Gallery />
      <Faq />
      <Contact />
    </>
  );
}
