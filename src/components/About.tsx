import { Sparkles, Clock, Wheat } from "lucide-react";
import aboutImg from "@/assets/about-interior.jpg";

const trust = [
  { icon: Wheat, title: "Productos frescos cada día", text: "Horneamos desde temprano para ofrecerte lo mejor." },
  { icon: Sparkles, title: "Hecho artesanalmente", text: "Recetas tradicionales colombianas, con manos expertas." },
  { icon: Clock, title: "Abierto todos los días", text: "8:30 – 22:30 · te esperamos en Ibiza." },
];

export const About = () => (
  <section id="nosotros" className="py-24 sm:py-32 bg-cream">
    <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div className="relative">
        <div className="absolute -inset-4 gradient-gold rounded-2xl opacity-20 blur-2xl" />
        <img
          src={aboutImg}
          alt="Interior cálido de Panadería Danipan en Ibiza"
          width={1280}
          height={1280}
          loading="lazy"
          className="relative rounded-2xl shadow-warm w-full h-[500px] sm:h-[600px] object-cover"
        />
        <div className="absolute -bottom-6 -right-6 bg-background rounded-2xl shadow-warm p-6 hidden sm:block">
          <p className="font-serif text-4xl text-gold font-bold">15+</p>
          <p className="text-sm text-muted-foreground">años de tradición</p>
        </div>
      </div>

      <div>
        <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-4">Nuestra historia</p>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-primary leading-tight">
          Más de 15 años de tradición
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
          En <strong className="text-foreground">Danipan</strong> traemos a Ibiza el alma de la panadería colombiana.
          Cada pan, cada empanada y cada pastel se elabora a mano, con ingredientes frescos y recetas
          que han pasado de generación en generación.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed mb-10">
          Somos un negocio familiar, y eso se nota en cada detalle: en el aroma que recibe a quien entra,
          en el sabor auténtico de nuestros productos y en la calidez con la que te atendemos.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {trust.map(({ icon: Icon, title, text }) => (
            <div key={title} className="text-center sm:text-left">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent mb-3">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
