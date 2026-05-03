import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-bakery.jpg";

export const Hero = () => (
  <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Pan fresco artesanal de la panadería colombiana Danipan en Ibiza"
        width={1920}
        height={1080}
        className="h-full w-full object-cover animate-ken-burns"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/30 to-primary/85" />
    </div>

    <div className="relative z-10 container text-center text-primary-foreground py-32">
      <p className="text-gold uppercase tracking-[0.3em] text-xs sm:text-sm font-medium mb-6 animate-fade-in-slow">
        Desde Colombia · Hecho en Ibiza
      </p>
      <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 animate-slide-up">
        Panadería Colombiana
        <span className="block text-gold italic font-medium mt-2">en Ibiza</span>
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-primary-foreground/90 font-light animate-slide-up [animation-delay:200ms]">
        Tradición, sabor y productos frescos hechos cada día.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up [animation-delay:400ms]">
        <Button asChild size="lg" className="gradient-gold text-primary hover:opacity-90 shadow-gold text-base px-8 py-6 font-semibold">
          <a href="#carta">Ver Carta</a>
        </Button>
        <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white/40 backdrop-blur-sm hover:bg-white hover:text-primary text-base px-8 py-6">
          <a href="#contacto">Contactar</a>
        </Button>
      </div>
    </div>

    <a href="#nosotros" aria-label="Desplazar" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/80 animate-bounce">
      <ChevronDown className="h-8 w-8" />
    </a>
  </section>
);
