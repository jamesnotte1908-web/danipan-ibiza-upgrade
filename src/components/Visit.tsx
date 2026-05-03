import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_LINK } from "./Contact";

export const Visit = () => (
  <section id="visitanos" className="py-24 sm:py-32 bg-background">
    <div className="container grid lg:grid-cols-2 gap-12 items-stretch">
      <div className="flex flex-col justify-center">
        <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-4">Visítanos</p>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
          Te esperamos en Ibiza
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          Pásate por nuestra panadería y vive la experiencia de un sabor auténticamente colombiano.
        </p>

        <div className="space-y-6 mb-10">
          <div className="flex gap-4">
            <div className="flex-shrink-0 h-12 w-12 rounded-full bg-accent/15 text-accent flex items-center justify-center">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold mb-1">Dirección</h3>
              <p className="text-muted-foreground">Ibiza, Islas Baleares, España</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 h-12 w-12 rounded-full bg-accent/15 text-accent flex items-center justify-center">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold mb-1">Horario</h3>
              <p className="text-muted-foreground">Abierto todos los días · 8:30 – 22:30</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 h-12 w-12 rounded-full bg-accent/15 text-accent flex items-center justify-center">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold mb-1">Teléfono</h3>
              <a href={PHONE_LINK} className="text-muted-foreground hover:text-gold transition-smooth">
                +34 618 36 91 71
              </a>
            </div>
          </div>
        </div>

        <Button asChild size="lg" className="gradient-gold text-primary hover:opacity-90 shadow-gold w-fit px-8 py-6">
          <a href="https://maps.google.com/?q=Ibiza+panaderia+danipan" target="_blank" rel="noopener noreferrer">
            <MapPin className="mr-2 h-5 w-5" /> Cómo llegar
          </a>
        </Button>
      </div>

      <div className="rounded-2xl overflow-hidden shadow-warm h-[400px] lg:h-auto min-h-[400px]">
        <iframe
          title="Ubicación Danipan Ibiza"
          src="https://www.google.com/maps?q=Ibiza,Spain&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);
