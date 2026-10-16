import { StoryScene } from './art/StoryScene';

const STATS = [
  { value: 38, label: 'años en el barrio' },
  { value: 42, label: 'cortes en carta' },
  { value: 900, label: 'familias por mes' },
];

export function Story() {
  return (
    <section className="section story" id="oficio">
      <div className="wrap story__grid">
        <div className="story__art reveal">
          <div className="story__frame">
            <StoryScene />
            <span className="story__sticker" aria-hidden="true">
              <svg viewBox="0 0 100 100">
                <defs>
                  <path
                    id="stampPath2"
                    d="M50,50 m-33,0 a33,33 0 1,1 66,0 a33,33 0 1,1 -66,0"
                  />
                </defs>
                <circle cx="50" cy="50" r="46" fill="#8A1B22" />
                <text className="stamp__text stamp__text--light">
                  <textPath href="#stampPath2" startOffset="0%">
                    TRES GENERACIONES · MISMO CUCHILLO ·{' '}
                  </textPath>
                </text>
                <path
                  d="M38 52h24M50 40v24"
                  stroke="#F3EDE2"
                  strokeWidth={2.4}
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="story__copy">
          <p className="kicker mono">03 — Nuestra historia</p>
          <h2 className="sec-title reveal">
            Tres generaciones
            <br />y el mismo <em>cuchillo</em>.
          </h2>
          <p className="reveal" data-delay="1">
            Don Aldo abrió la carnicería en 1987 con una balanza de dos platos y un cliente que
            todavía viene los sábados. Hoy el hijo corta y el nieto reparte los pedidos en moto. Lo
            demás no cambió: seguimos comprando la canal entera, porque el que compra entero sabe
            lo que vende.
          </p>
          <p className="reveal" data-delay="2">
            No usamos conservantes ni colorantes, no inyectamos con agua y no vendemos lo que no
            comeríamos. Si un corte no está en su punto, no sale a la vitrina.
          </p>

          <blockquote className="quote reveal" data-delay="3">
            <p>“La carne no se apura. Se espera, se mira y solo entonces se corta.”</p>
            <cite>Don Aldo Ferreyra · maestro carnicero, desde 1987</cite>
          </blockquote>

          <div className="stats reveal" data-delay="4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <b data-count={stat.value}>0</b>
                <span className="mono">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
