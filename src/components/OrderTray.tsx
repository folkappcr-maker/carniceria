'use client';

import { useOrder } from './order-context';
import { IconBag } from './icons';
import { waLink } from '@/lib/whatsapp';

export function OrderTray() {
  const { items, clear } = useOrder();
  const count = items.length;
  if (count === 0) return null;

  return (
    <div className="tray">
      <div className="tray__inner">
        <span className="tray__icon" aria-hidden="true">
          <IconBag />
        </span>
        <p className="tray__text">
          <b>{count === 1 ? '1 corte' : `${count} cortes`}</b>
          <span>{items.join(' · ')}</span>
        </p>
        <div className="tray__actions">
          <button type="button" className="tray__clear" onClick={clear}>
            Vaciar
          </button>
          <a
            className="btn btn--primary btn--sm"
            href={waLink(`Hola! Quiero pedir: ${items.join(', ')}.`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Enviar pedido</span>
          </a>
        </div>
      </div>
    </div>
  );
}
