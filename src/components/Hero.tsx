import { HeroArt } from './art/HeroArt';
import { OpenBadge } from './OpenBadge';
import { IconArrow } from './icons';
import { SHOP } from '@/data/site';

const BADGES = [
  { b: '21 días', span: 'Madurado en seco, en cámara propia' },
  { b: 'Canal entera', span: 'Compramos la canal completa, no por partes' },
  { b: '7:00 a.m.', span: 'Menudencias y embutidos del día' },
];

export function Hero() {
  return (
    <section className="hero" id="top">
      <span className="hero__ghost" aria-hidden="true">
        RES
      </span>

      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="eyebrow rise">
            <span className="dot" aria-hidden="true" />
            Carnicería de barrio · {SHOP.city}
          </p>

          <h1 className="hero__title rise" data-delay="1">
            El corte exacto, <em>a cuchillo</em>, sin atajos.
          </h1>

          <p className="hero__lede rise" data-delay="2">
            Compramos la canal entera, la maduramos en cámara y la cortamos aquí mismo.
            Usted escoge el corte, lo hacemos al momento y le decimos exactamente cómo llevarlo
            al fuego.
          </p>

          <div className="hero__cta rise" data-delay="3">
            <a className="btn btn--primary" href="#cortes">
              <span>Ver los cortes</span>
              <IconArrow />
            </a>
            <a className="btn btn--ghost" href="#carta">
              Conocer los cortes de la res
            </a>
          </div>

          <ul className="hero__badges rise" data-delay="4">
            {BADGES.map((badge) => (
              <li key={badge.b}>
                <b>{badge.b}</b>
                <span>{badge.span}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__art rise" data-delay="3">
          <div className="specimen">
            <div className="specimen__tape specimen__tape--a" aria-hidden="true" />
            <div className="specimen__tape specimen__tape--b" aria-hidden="true" />

            <header className="specimen__head">
              <span className="mono">Ficha nº 07</span>
              <span className="mono">Lomo · res</span>
            </header>

            <div className="specimen__stage">
              <HeroArt />
              <div className="specimen__callout specimen__callout--a">
                <span className="mono">Capa de grasa</span>
                <i aria-hidden="true" />
              </div>
              <div className="specimen__callout specimen__callout--b">
                <span className="mono">Marmoleo 3/5</span>
                <i aria-hidden="true" />
              </div>
            </div>

            <footer className="specimen__foot">
              <div className="specimen__prize">
                <span className="mono">Precio del día</span>
                <b>
                  ₡9.800<small>/kg</small>
                </b>
              </div>
              <div className="stamp" aria-hidden="true">
                <svg viewBox="0 0 100 100">
                  <defs>
                    <path
                      id="stampPath"
                      d="M50,50 m-34,0 a34,34 0 1,1 68,0 a34,34 0 1,1 -68,0"
                    />
                  </defs>
                  <circle
                    cx="50"
                    cy="50"
                    r="43"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.4}
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={0.8}
                    strokeDasharray="2 3"
                  />
                  <text className="stamp__text">
                    <textPath href="#stampPath" startOffset="0%">
                      CORTADO A MANO · DESDE 1987 · SAN JOSÉ · 
                    </textPath>
                  </text>
                  <path
                    d="M42 50.5c3-1 5.6-3.4 7.4-6.4M42 50.5c3 .4 5.9 1.8 7.6 3.8M42 50.5 55 45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </footer>
          </div>

          <div className="hero__note">
            <b>Hoy en la pizarra</b>
            <span>Rabo de res · Mondongo · Carne para desmenuzar</span>
          </div>
        </div>
      </div>

      <div className="wrap hero__foot">
        <a className="scroll-cue" href="#cortes">
          <span>Vea la vitrina</span>
          <i aria-hidden="true" />
        </a>
        <p className="hero__addr mono">
          {SHOP.address} · <OpenBadge />
        </p>
      </div>
    </section>
  );
}
