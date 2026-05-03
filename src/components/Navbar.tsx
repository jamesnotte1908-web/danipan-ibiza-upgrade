import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#carta", label: "Carta" },
  { href: "#galeria", label: "Galería" },
  { href: "#visitanos", label: "Visítanos" },
  { href: "#contacto", label: "Contacto" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-smooth",
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="container flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 group">
          <span className="flex h-10 w-10 items-center justify-center rounded-full gradient-gold text-primary font-serif text-xl font-bold shadow-soft">D</span>
          <span className={cn("font-serif text-lg sm:text-xl font-semibold leading-tight", scrolled ? "text-foreground" : "text-white drop-shadow-md")}>
            Danipan <span className="text-gold">Ibiza</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  "text-sm font-medium transition-smooth hover:text-gold relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all hover:after:w-full",
                  scrolled ? "text-foreground" : "text-white drop-shadow"
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className={cn("lg:hidden p-2", scrolled ? "text-foreground" : "text-white")}
          aria-label="Menú"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border animate-fade-in">
          <ul className="container py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 px-2 rounded-lg text-foreground font-medium hover:bg-secondary transition-smooth"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
