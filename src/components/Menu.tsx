import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "./Contact";
import panaderia from "@/assets/menu-panaderia.jpg";
import pasteleria from "@/assets/menu-pasteleria.jpg";
import restaurante from "@/assets/menu-restaurante.jpg";
import bebidas from "@/assets/menu-bebidas.jpg";

type Item = { name: string; desc: string; price?: string; popular?: boolean };
type Category = { id: string; title: string; image: string; items: Item[] };

const categories: Category[] = [
  {
    id: "panaderia", title: "Panadería", image: panaderia,
    items: [
      { name: "Pan fresco diario", desc: "Horneado cada mañana, corteza dorada y miga suave.", popular: true },
      { name: "Pan tradicional colombiano", desc: "Pan de bono, pandebono y pan de queso." },
      { name: "Bollería variada", desc: "Croissants, almojábanas y buñuelos." },
    ],
  },
  {
    id: "pasteleria", title: "Pastelería", image: pasteleria,
    items: [
      { name: "Tartas artesanales", desc: "Tres leches, chocolate, frutas de temporada.", popular: true },
      { name: "Dulces colombianos", desc: "Arequipe, obleas, brevas con arequipe." },
      { name: "Postres tradicionales", desc: "Recetas de la abuela, hechas a mano." },
    ],
  },
  {
    id: "restaurante", title: "Restaurante", image: restaurante,
    items: [
      { name: "Bandeja paisa", desc: "El plato típico colombiano, completo y abundante.", popular: true },
      { name: "Arepas rellenas", desc: "Con queso, carne, pollo o huevo." },
      { name: "Menú del día", desc: "Comida casera diferente cada día." },
    ],
  },
  {
    id: "bebidas", title: "Bebidas", image: bebidas,
    items: [
      { name: "Café colombiano", desc: "100% origen, intenso y aromático.", popular: true },
      { name: "Jugos naturales", desc: "Lulo, maracuyá, mora, mango." },
      { name: "Bebidas frías y calientes", desc: "Aguapanela, chocolate, refrescos." },
    ],
  },
];

export const Menu = () => (
  <section id="carta" className="py-24 sm:py-32 bg-background">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-4">Nuestra carta</p>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4">
          Sabores que enamoran
        </h2>
        <p className="text-muted-foreground text-lg">
          Desde el pan recién horneado hasta los platos típicos colombianos.
        </p>
      </div>

      <div className="space-y-20">
        {categories.map((cat, idx) => (
          <div key={cat.id} className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${idx % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className="relative group overflow-hidden rounded-2xl shadow-warm">
              <img
                src={cat.image}
                alt={cat.title}
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full h-[400px] sm:h-[500px] object-cover transition-smooth group-hover:scale-105"
              />
            </div>

            <div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-6">{cat.title}</h3>
              <ul className="space-y-5">
                {cat.items.map((item) => (
                  <li key={item.name} className="border-b border-border pb-5 last:border-0">
                    <div className="flex items-baseline justify-between gap-4 mb-1">
                      <h4 className="font-serif text-xl font-semibold text-foreground flex items-center gap-2">
                        {item.name}
                        {item.popular && (
                          <span className="text-[10px] uppercase tracking-wider bg-gold/15 text-gold px-2 py-0.5 rounded-full font-sans font-semibold">
                            Popular
                          </span>
                        )}
                      </h4>
                      {item.price && <span className="text-accent font-semibold whitespace-nowrap">{item.price}</span>}
                    </div>
                    <p className="text-muted-foreground text-sm sm:text-base">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#1fb755] text-white shadow-warm text-base px-8 py-6">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" /> Hacer pedido por WhatsApp
          </a>
        </Button>
      </div>
    </div>
  </section>
);
