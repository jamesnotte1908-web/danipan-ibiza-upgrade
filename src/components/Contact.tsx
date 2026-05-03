import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "34618369171";
export const PHONE_DISPLAY = "+34 618 36 91 71";

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hola Danipan, me gustaría hacer un pedido"
)}`;
export const PHONE_LINK = "tel:+34618369171";

export const FloatingWhatsApp = () => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Pedir por WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-4 text-white shadow-warm transition-smooth hover:scale-110 hover:shadow-gold"
  >
    <MessageCircle className="h-6 w-6" />
    <span className="hidden sm:inline font-semibold">Pedir por WhatsApp</span>
  </a>
);

export const ContactButtons = ({ variant = "default" }: { variant?: "default" | "hero" }) => (
  <div className="flex flex-col sm:flex-row gap-3">
    <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#1fb755] text-white shadow-soft">
      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp
      </a>
    </Button>
    <Button asChild size="lg" variant={variant === "hero" ? "secondary" : "outline"}>
      <a href={PHONE_LINK}>
        <Phone className="mr-2 h-5 w-5" /> Llamar ahora
      </a>
    </Button>
  </div>
);
