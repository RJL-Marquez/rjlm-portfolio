import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { Certifications } from "@/components/sections/Certifications";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-dot-grid">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <FeaturedProject />
        <Certifications />
      </main>
      <Footer />
    </>
  );
}
