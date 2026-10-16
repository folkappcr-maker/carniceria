'use client';

import { useMemo, useState } from 'react';
import { CARCASS_CLIP, CARCASS_OUTLINE, CUTS, type CutKey } from '@/data/cuts';

/** Los cortes ordenados por número, para que la lista siga la lámina. */
const CUT_LIST = [...CUTS].sort((a, b) => Number(a.num) - Number(b.num));

export function CutChart() {
  const [active, setActive] = useState<CutKey>('paleta');
  const cut = useMemo(
    () => CUTS.find((item) => item.key === active) ?? CUTS[0],
    [active],
  );

  return (
    <section className="section chart-sec" id="carta">
      <div className="wrap">
        <header className="sec-head">
          <p className="kicker mono">02 — Mapa de cortes</p>
          <div className="sec-head__row">
            <h2 className="sec-title">
              De dónde sale <em>cada cosa</em>.
            </h2>
            <p className="sec-lede">
              El mismo mapa que tenemos colgado detrás de la vitrina.
              Pase el mouse por un cuarto para ver de qué corte hablamos, cómo lo cortamos y
              cómo conviene cocinarlo.
            </p>
          </div>
        </header>

        <div className="chart">
          <div className="chart__board">
            <div className="chart__board-head">
              <span className="mono">Lámina 1 · Cortes de res</span>
              <span className="mono">Escala 1:12</span>
            </div>

            <svg
              className="cow"
              viewBox="0 0 420 250"
              role="img"
              aria-label="Lámina técnica de los cortes de la media res"
            >
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M20 0H0V20" fill="none" stroke="rgba(23,17,15,.10)" strokeWidth={1} />
                </pattern>
                <clipPath id="carcassClip">
                  <path d={CARCASS_CLIP} />
                </clipPath>
              </defs>

              <rect width="420" height="250" fill="url(#grid)" />
              <path className="cow__base" d={CARCASS_OUTLINE} />

              <g clipPath="url(#carcassClip)">
                {CUTS.map((region) => (
                  <g
                    key={region.key}
                    className={`cut${region.key === active ? ' is-active' : ''} cut--${region.quarter}`}
                    data-cut={region.key}
                    tabIndex={0}
                    role="button"
                    aria-label={region.label}
                    onMouseEnter={() => setActive(region.key)}
                    onFocus={() => setActive(region.key)}
                    onClick={() => setActive(region.key)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        setActive(region.key);
                      }
                    }}
                  >
                    <path d={region.d} />
                    <text x={region.x} y={region.y}>
                      {region.num}
                    </text>
                  </g>
                ))}
                <path className="cow__split" d="M296 18v180" />
              </g>

              <path className="cow__outline" d={CARCASS_OUTLINE} />
            </svg>

            <div className="chart__legend">
              <span className="mono">
                <i className="sw sw--1" />
                Delantero
              </span>
              <span className="mono">
                <i className="sw sw--2" />
                Cuarto trasero
              </span>
              <span className="mono">
                <i className="sw sw--3" />
                Línea de corte
              </span>
            </div>
          </div>

          <div className="chart__panel">
            <div className="chart__list" role="tablist" aria-label="Cortes de la res">
              {CUT_LIST.map((item) => {
                const selected = item.key === active;
                return (
                  <button
                    key={item.key}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActive(item.key)}
                    onMouseEnter={() => setActive(item.key)}
                    onFocus={() => setActive(item.key)}
                  >
                    <span className="mono">{item.num.padStart(2, '0')}</span>
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="chart__detail" id="cutDetail" aria-live="polite">
              <p className="kicker mono">{cut.quarter_label}</p>
              <h3>{cut.label}</h3>
              <p>{cut.desc}</p>
              <dl className="chart__facts">
                <div>
                  <dt className="mono">Cocción</dt>
                  <dd>{cut.cook}</dd>
                </div>
                <div>
                  <dt className="mono">Corte</dt>
                  <dd>{cut.style}</dd>
                </div>
                <div>
                  <dt className="mono">En vitrina</dt>
                  <dd>{cut.stock}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
