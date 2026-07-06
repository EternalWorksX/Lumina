import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import BentoGrid from "@/components/BentoGrid";
import Philosophy from "@/components/Philosophy";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Marquee />
        <BentoGrid />
        <Philosophy />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
