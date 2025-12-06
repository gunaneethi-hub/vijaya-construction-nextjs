import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Projects } from "@/components/Projects";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
