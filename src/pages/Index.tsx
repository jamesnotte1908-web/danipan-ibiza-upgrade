import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { Gallery } from "@/components/Gallery";
import { Visit } from "@/components/Visit";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/Contact";

const Index = () => (
  <main className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <About />
    <Menu />
    <Gallery />
    <Visit />
    <ContactSection />
    <Footer />
    <FloatingWhatsApp />
  </main>
);

export default Index;
