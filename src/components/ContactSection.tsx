import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ContactButtons, WHATSAPP_LINK } from "./Contact";

export const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola Danipan! Soy ${form.name} (${form.phone}). ${form.message}`;
    window.open(`${WHATSAPP_LINK.split("?")[0]}?text=${encodeURIComponent(text)}`, "_blank");
    toast.success("¡Gracias! Te redirigimos a WhatsApp.");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contacto" className="py-24 sm:py-32 gradient-warm">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-4">Contacto</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4">
            Hablemos
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            ¿Pedido especial, evento o consulta? Escríbenos y te respondemos al instante.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <form onSubmit={onSubmit} className="bg-background rounded-2xl shadow-warm p-6 sm:p-8 space-y-5">
            <div>
              <Label htmlFor="name">Nombre</Label>
              <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-2" />
            </div>
            <div>
              <Label htmlFor="phone">Teléfono</Label>
              <Input id="phone" type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-2" />
            </div>
            <div>
              <Label htmlFor="message">Mensaje</Label>
              <Textarea id="message" rows={4} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-2" />
            </div>
            <Button type="submit" size="lg" className="w-full gradient-gold text-primary hover:opacity-90 shadow-gold">
              Enviar mensaje
            </Button>
          </form>

          <div className="bg-primary text-primary-foreground rounded-2xl shadow-warm p-6 sm:p-8 space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">Contacto directo</h3>
            <p className="text-primary-foreground/80">
              Para pedidos rápidos, escríbenos por WhatsApp o llámanos. Estamos abiertos todos los días de 8:30 a 22:30.
            </p>
            <ContactButtons variant="hero" />
            <div className="pt-6 border-t border-primary-foreground/15 text-sm text-primary-foreground/70">
              📍 Ibiza, España<br />
              ⏰ Lunes a Domingo · 8:30 – 22:30
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
