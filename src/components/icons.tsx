import type { SVGProps } from 'react';

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function IconArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M5 12h13M12 5.5 18.5 12 12 18.5" {...base} />
    </svg>
  );
}

export function IconPhone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M6.6 3h3l1.5 4-2 1.4a12 12 0 0 0 6.5 6.5l1.4-2 4 1.5v3c0 1-.8 1.8-1.8 1.7C11.4 18.4 5.6 12.6 4.9 4.8 4.8 3.8 5.6 3 6.6 3Z"
        {...base}
        strokeWidth={1.7}
      />
    </svg>
  );
}

export function IconWhatsApp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Zm4.3 12.4c-.2.5-1.1 1-1.6 1-.4 0-1.4-.1-3-1.2a10 10 0 0 1-3.1-3.7c-.3-.7-.4-1.5 0-2 .2-.4.8-.9 1.1-.9h.6c.2 0 .4.2.5.6l.6 1.4c0 .2 0 .4-.1.6l-.4.5c-.2.2-.2.3 0 .6a7 7 0 0 0 2.2 2c.3.1.5.1.7-.1l.6-.7c.2-.2.4-.2.6-.1l1.4.7c.3.2.4.3.4.5 0 .2 0 .5-.1.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconBag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M4 7h16l-1.4 12.2a2 2 0 0 1-2 1.8H7.4a2 2 0 0 1-2-1.8L4 7Zm3.5 0a4.5 4.5 0 0 1 9 0"
        {...base}
        strokeWidth={1.8}
      />
    </svg>
  );
}

export function IconCard(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" {...props}>
      <path d="M6 13h19a5 5 0 0 1 5 5v3a5 5 0 0 1-5 5H6z" {...base} strokeWidth={2.4} />
      <rect x="30" y="12" width="5" height="15" rx="2" fill="currentColor" />
      <circle cx="11" cy="19.5" r="2" fill="currentColor" />
    </svg>
  );
}

/** Cuchilla de carnicero: la marca de la casa. */
export function IconCleaver(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" {...props}>
      <path
        d="M3 14.5h20.5a4.5 4.5 0 0 1 4.5 4.5v3a4.5 4.5 0 0 1-4.5 4.5H3z"
        fill="currentColor"
      />
      <rect
        x="27"
        y="11.5"
        width="8.5"
        height="18"
        rx="3.6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.8}
      />
      <circle cx="9" cy="20.2" r="2" />
    </svg>
  );
}
