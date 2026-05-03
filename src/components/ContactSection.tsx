import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import { WHATSAPP_LINK, PHONE_LINK, PHONE_DISPLAY } from "./Contact";
import bgImg from "@/assets/about-interior.jpg";

export const ContactSection = () => {
  return (
    <section id="contacto" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Lively layered background */}
      <div className="absolute inset-0 gradient-warm" />
      <div
        className="absolute inset-0 opacity-15 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      />
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />

      <div className="container relative max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-4">Contacto</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4">
            Hablemos
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            ¿Pedido especial, evento o consulta? Llámanos o escríbenos por WhatsApp y te respondemos al instante.
          </p>
        </div>

        <div className="bg-primary text-primary-foreground rounded-2xl shadow-warm p-8 sm:p-12 space-y-8">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-center">Contacto directo</h3>

          <div className="grid sm:grid-cols-2 gap-4">
            <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#1fb755] text-white shadow-soft py-7 text-base">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="py-7 text-base">
              <a href={PHONE_LINK}>
                <Phone className="mr-2 h-5 w-5" /> {PHONE_DISPLAY}
              </a>
            </Button>
          </div>

          <div className="pt-6 border-t border-primary-foreground/15 grid sm:grid-cols-2 gap-6 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-primary-foreground">Ubicación</p>
                <p className="text-primary-foreground/70">Ibiza, España</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-primary-foreground">Horario</p>
                <p className="text-primary-foreground/70">Lunes a Domingo · 8:30 – 22:30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
