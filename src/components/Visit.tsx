import { MapArt } from './art/MapArt';
import { IconCard, IconWhatsApp } from './icons';
import { SHOP } from '@/data/site';
import { waLink } from '@/lib/whatsapp';

const HOURS_TABLE = [
  { day: 'Lunes a viernes', time: '7:00 a.m. – 12:00 m.d. · 2:00 – 6:00 p.m.' },
  { day: 'Sábados', time: '7:00 a.m. – 2:00 p.m.' },
  { day: 'Domingos y feriados', time: 'Cerrado' },
];

const CHIPS = [
  'Pase a recoger',
  'Entrega el mismo día en el GAM',
  'Sellado al vacío sin costo',
  'Efectivo, SINPE Móvil y tarjeta',
];

export function Visit() {
  return (
    <section className="section visit" id="visita">
      <div className="wrap visit__grid">
        <div className="visit__copy">
          <p className="kicker mono">07 — Visítenos</p>
          <h2 className="sec-title reveal">
            Pase por la carnicería
            <br />y <em>escoja con los ojos</em>.
          </h2>
          <p className="reveal" data-delay="1">
            Estamos a 150 metros del Parque Francia, sobre Calle 33. Si no puede venir, pida por
            WhatsApp y se lo llevamos el mismo día en todo el GAM.
          </p>

          <table className="hours reveal" data-delay="2">
            <caption className="sr-only">Horarios de atención</caption>
            <tbody>
              {HOURS_TABLE.map((row) => (
                <tr key={row.day}>
                  <th scope="row">{row.day}</th>
                  <td className="mono">{row.time}</td>
                </tr>
              ))}
              <tr className="hours__note">
                <td colSpan={2} className="mono">
                  {SHOP.hoursNote}
                </td>
              </tr>
            </tbody>
          </table>

          <ul className="visit__chips reveal" data-delay="3">
            {CHIPS.map((chip) => (
              <li key={chip}>{chip}</li>
            ))}
          </ul>

          <div className="visit__cta reveal" data-delay="4">
            <a
              className="btn btn--primary"
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWhatsApp />
              <span>Pedir por WhatsApp</span>
            </a>
            <a className="btn btn--ghost" href={`tel:${SHOP.tel}`}>
              Llamar al {SHOP.phoneLabel}
            </a>
          </div>
        </div>

        <div className="visit__map reveal" data-delay="2">
          <div className="mapcard">
            <header className="mapcard__head">
              <span className="mono">{SHOP.address}</span>
              <span className="mono">{SHOP.city}</span>
            </header>

            <MapArt />

            <footer className="mapcard__foot">
              <span className="mono">Buses San José–San Pedro</span>
              <span className="mono">Tren: Estación del Pacífico</span>
            </footer>
          </div>

          <div className="loyalty">
            <span className="loyalty__icon" aria-hidden="true">
              <IconCard />
            </span>
            <div>
              <b>Tarjeta del asador</b>
              <p>
                Cada 10 compras, un kilo de costilla de res de regalo. Se pide en la vitrina, sin
                app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
