'use client';

import { useEffect, useState } from 'react';
import { HOURS } from '@/data/site';

/** Formato tico de 12 horas: 7:00 a.m. · 12:00 m.d. · 6:00 p.m. */
const hhmm = (min: number) => {
  const h = Math.floor(min / 60);
  const m = String(min % 60).padStart(2, '0');
  if (h === 12) return `12:${m} m.d.`;
  if (h === 0) return `12:${m} m.n.`;
  if (h < 12) return `${h}:${m} a.m.`;
  return `${h - 12}:${m} p.m.`;
};

type State = { text: string; closed: boolean };

/**
 * Estado del local calculado con la hora real del visitante.
 * Arranca con un texto neutro y se corrige en el cliente (sin desajuste de hidratación).
 */
export function OpenBadge() {
  const [state, setState] = useState<State>({ text: 'Abierto hasta las 6:00 p.m.', closed: false });

  useEffect(() => {
    const now = new Date();
    const windows = HOURS[now.getDay()] ?? [];
    const minutes = now.getHours() * 60 + now.getMinutes();

    const open = windows.find(([from, to]) => minutes >= from && minutes < to);
    if (open) {
      setState({ text: `Abierto hasta las ${hhmm(open[1])}`, closed: false });
      return;
    }
    const next = windows.find(([from]) => minutes < from);
    if (next) {
      setState({ text: `Cerrado · abre a las ${hhmm(next[0])}`, closed: true });
      return;
    }
    setState({ text: 'Cerrado ahora · pedidos por WhatsApp', closed: true });
  }, []);

  return (
    <span id="openState" style={state.closed ? { color: 'var(--oxblood)' } : undefined}>
      {state.text}
    </span>
  );
}
