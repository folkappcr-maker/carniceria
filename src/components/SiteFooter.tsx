import { Brand } from './Brand';
import { NewsletterForm } from './NewsletterForm';
import { SHOP } from '@/data/site';

const FOOT_LINKS = [
  { href: '#cortes', label: 'Los cortes' },
  { href: '#carta', label: 'Mapa de cortes' },
  { href: '#oficio', label: 'Nuestra historia' },
  { href: '#notas', label: 'Consejos del carnicero' },
  { href: '#visita', label: 'Visítenos' },
];

export function SiteFooter() {
  return (
    <footer className="foot">
      <div className="wrap foot__grid">
        <div className="foot__brand">
          <Brand variant="foot" />
          <p className="foot__pitch">
            Canal entera, madurada en cámara y cortada en la carnicería. Desde 1987 en San José.
          </p>
        </div>

        <nav className="foot__col" aria-label="Secciones">
          <h4 className="mono">Recorrido</h4>
          {FOOT_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="foot__col">
          <h4 className="mono">Contacto</h4>
          <a href={`tel:${SHOP.tel}`}>{SHOP.phoneLabel}</a>
          <a href={`mailto:${SHOP.mail}`}>{SHOP.mail}</a>
          <p>
            {SHOP.address}
            <br />
            {SHOP.city}
          </p>
          <p className="mono foot__hours">{SHOP.hoursShort}</p>
        </div>

        <div className="foot__col foot__news">
          <h4 className="mono">La pizarra de la semana</h4>
          <p>
            Un correo los jueves con los cortes que entran, el precio del día y una receta. Nada más.
          </p>
          <NewsletterForm />
        </div>
      </div>

      <div className="wrap foot__base">
        <p className="mono">
          © {new Date().getFullYear()} {SHOP.name} · Hecho en San José, Costa Rica
        </p>
        <p className="mono">Precios en colones · Sujetos a variación diaria del mercado</p>
      </div>
    </footer>
  );
}
