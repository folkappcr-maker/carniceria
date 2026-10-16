import { IconCleaver } from './icons';
import { SHOP } from '@/data/site';

/** Marca de la casa: cuchilla + logotipo. El color lo resuelve el CSS. */
export function Brand({ variant = 'head' }: { variant?: 'head' | 'foot' }) {
  return (
    <a
      className={variant === 'foot' ? 'brand brand--foot' : 'brand'}
      href="#top"
      aria-label={`${SHOP.name}, inicio`}
    >
      <span className="brand__mark" aria-hidden="true">
        <IconCleaver />
      </span>
      <span className="brand__text">
        <b>{SHOP.name}</b>
        <em>{SHOP.tagline}</em>
      </span>
    </a>
  );
}
