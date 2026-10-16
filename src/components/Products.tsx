'use client';

import { useMemo, useState } from 'react';
import { useOrder } from './order-context';
import { CATEGORIES, PRODUCTS, type Category, type Product } from '@/data/products';
import { waLink } from '@/lib/whatsapp';

type Filter = Category | 'all';

const TONE_CLASS: Record<string, string> = {
  plain: '',
  hot: ' card__tag--hot',
  gold: ' card__tag--gold',
};

function Card({
  product,
  index,
  on,
  onToggle,
}: {
  product: Product;
  index: number;
  on: boolean;
  onToggle: () => void;
}) {
  return (
    <article
      className="card"
      data-cat={product.cat}
      data-name={product.name}
      style={{ animationDelay: `${Math.min(index, 8) * 35}ms` }}
    >
      {product.badge && (
        <div className={`card__tag${TONE_CLASS[product.badge.tone] ?? ''}`}>
          {product.badge.label}
        </div>
      )}

      <div className="card__art">
        <svg viewBox="0 0 200 150" aria-hidden="true">
          <use href={`#${product.art}`} />
        </svg>
      </div>

      <div className="card__body">
        <div className="card__top">
          <h3>{product.name}</h3>
          <span className="card__num mono">{product.num}</span>
        </div>
        <p>{product.desc}</p>
        <ul className="card__meta mono">
          {product.meta.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <footer className="card__foot">
        <span className="price">
          ₡{product.price}
          <small>{product.unit}</small>
        </span>
        <button
          type="button"
          className={`add${on ? ' is-on' : ''}`}
          onClick={onToggle}
          aria-pressed={on}
        >
          {on ? 'En el pedido' : 'Agregar al pedido'}
        </button>
      </footer>
    </article>
  );
}

export function Products() {
  const [filter, setFilter] = useState<Filter>('all');
  const { has, toggle } = useOrder();

  const shown = useMemo(
    () => PRODUCTS.filter((product) => filter === 'all' || product.cat === filter),
    [filter],
  );

  return (
    <section className="section products" id="cortes">
      <div className="wrap">
        <header className="sec-head">
          <p className="kicker mono">01 — La vitrina</p>
          <div className="sec-head__row">
            <h2 className="sec-title">
              Lo que hay hoy, <em>cortado a su gusto</em>.
            </h2>
            <p className="sec-lede">
              Precios por kilo, actualizados cada mañana
              en la pizarra. Si el corte que busca no está en la lista, pregunte: cortamos todos
              los días.
            </p>
          </div>
        </header>

        <div className="filters" role="tablist" aria-label="Filtrar productos por tipo de carne">
          {CATEGORIES.map((category) => {
            const active = filter === category.key;
            return (
              <button
                key={category.key}
                type="button"
                role="tab"
                aria-selected={active}
                className={active ? 'chip is-active' : 'chip'}
                onClick={() => setFilter(category.key)}
              >
                {category.label} <span>{category.count}</span>
              </button>
            );
          })}
        </div>

        <div className="grid" id="productGrid">
          {shown.map((product, index) => (
            <Card
              key={product.name}
              product={product}
              index={index}
              on={has(product.name)}
              onToggle={() => toggle(product.name)}
            />
          ))}
        </div>

        {shown.length === 0 && (
          <p className="grid__empty">
            No hay cortes en esta categoría hoy.{' '}
            <a href={waLink('Hola! Quería consultar por un corte.')} target="_blank" rel="noopener noreferrer">
              Pregúntenos por WhatsApp
            </a>
            .
          </p>
        )}
      </div>
    </section>
  );
}
