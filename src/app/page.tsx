import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import StatBar from "@/components/StatBar";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Industries from "@/components/Industries";
import WhyUs from "@/components/WhyUs";
import Clients from "@/components/Clients";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <StatBar />
      <Services />
      <Products />
      <Industries />
      <WhyUs />
      <Clients />
      <Gallery />
      <Faq />
      <Contact />
    </>
  );
}
