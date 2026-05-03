export const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-12">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full gradient-gold text-primary font-serif text-xl font-bold">D</span>
            <span className="font-serif text-xl font-semibold">Danipan Ibiza</span>
          </div>
          <p className="text-primary-foreground/70 text-sm">
            Panadería y restaurante colombiano. Tradición y sabor en cada bocado.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-3">Horario</h4>
          <p className="text-primary-foreground/70 text-sm">Lunes a Domingo<br />8:30 – 22:30</p>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-3">Visítanos</h4>
          <p className="text-primary-foreground/70 text-sm">Ibiza, Islas Baleares<br />España</p>
        </div>
      </div>
      <div className="pt-6 border-t border-primary-foreground/15 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Panadería Colombiana Danipan Ibiza · Todos los derechos reservados
      </div>
    </div>
  </footer>
);
