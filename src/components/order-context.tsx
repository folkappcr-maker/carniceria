'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';

type OrderValue = {
  /** nombres de los cortes que el cliente fue sumando */
  items: string[];
  has: (name: string) => boolean;
  toggle: (name: string) => void;
  clear: () => void;
};

const OrderContext = createContext<OrderValue | null>(null);

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<string[]>([]);

  const toggle = useCallback((name: string) => {
    setItems((prev) => (prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<OrderValue>(
    () => ({ items, has: (name) => items.includes(name), toggle, clear }),
    [items, toggle, clear],
  );

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}

export function useOrder() {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error('useOrder tiene que usarse dentro de <OrderProvider>');
  return ctx;
}
