import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Spaces from "@/components/Spaces";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Page() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Marquee />
      <About />
      <Spaces />
      <Gallery />
      <Location />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
