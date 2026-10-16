import { SHOP } from '@/data/site';

/**
 * Devuelve el link de WhatsApp con el mensaje ya escrito.
 * Si algún día cambia el número, se toca solo `SHOP.whatsapp`.
 */
export function waLink(message = 'Hola! Quiero hacer un pedido.') {
  return `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(message)}`;
}
