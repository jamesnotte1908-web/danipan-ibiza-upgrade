import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const images = [
  { src: g1, alt: "Empanadas colombianas recién hechas" },
  { src: g2, alt: "Vitrina de pastelería" },
  { src: g3, alt: "Manos amasando pan artesanal" },
  { src: g4, alt: "Arepas con queso" },
  { src: g5, alt: "Tres leches casera" },
  { src: g6, alt: "Fachada de la panadería en Ibiza" },
];

export const Gallery = () => (
  <section id="galeria" className="py-24 sm:py-32 bg-cream">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-4">Galería</p>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4">
          Un vistazo a Danipan
        </h2>
        <p className="text-muted-foreground text-lg">Los detalles que hacen único cada momento.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className={`relative overflow-hidden rounded-xl shadow-soft group ${i === 0 ? "md:row-span-2 md:col-span-1 aspect-[1/2.05]" : "aspect-square"}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              width={800}
              height={800}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-smooth group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-smooth" />
          </div>
        ))}
      </div>
    </div>
  </section>
);
