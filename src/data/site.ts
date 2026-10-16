/**
 * Datos del local: una sola fuente de verdad para toda la página.
 * Costa Rica · precios en colones (₡).
 */
export const SHOP = {
  name: 'La Media Res',
  tagline: 'Carnicería',
  phoneLabel: '2253-0198',
  tel: '+50622530198',
  /** WhatsApp de pedidos (móvil, formato internacional sin +) */
  whatsapp: '50687120198',
  whatsappLabel: '8712-0198',
  address: 'Calle 33, Barrio Escalante',
  city: 'San José, Costa Rica',
  mail: 'hola@lamediares.cr',
  hoursShort: 'Lun a Vie 7 a.m.–12 m.d. / 2–6 p.m. · Sáb 7 a.m.–2 p.m.',
  hoursNote: 'Los pedidos por WhatsApp se cierran todos los días a las 6:00 p.m.',
  delivery: 'Entrega a domicilio en el GAM',
} as const;

export const NAV = [
  { href: '#cortes', label: 'Los cortes' },
  { href: '#carta', label: 'Mapa de cortes' },
  { href: '#oficio', label: 'Nuestra historia' },
  { href: '#notas', label: 'Consejos' },
  { href: '#visita', label: 'Visítenos' },
] as const;

export const NAV_MOBILE = [
  { num: '01', href: '#cortes', label: 'Los cortes' },
  { num: '02', href: '#carta', label: 'Mapa de cortes' },
  { num: '03', href: '#oficio', label: 'Nuestra historia' },
  { num: '04', href: '#proceso', label: 'Cómo trabajamos' },
  { num: '05', href: '#notas', label: 'Consejos' },
  { num: '06', href: '#visita', label: 'Visítenos' },
] as const;

/** Horarios de atención: [día ISO (0 = domingo), [apertura, cierre] en minutos] */
export const HOURS: Record<number, [number, number][]> = {
  1: [
    [420, 720],
    [840, 1080],
  ],
  2: [
    [420, 720],
    [840, 1080],
  ],
  3: [
    [420, 720],
    [840, 1080],
  ],
  4: [
    [420, 720],
    [840, 1080],
  ],
  5: [
    [420, 720],
    [840, 1080],
  ],
  6: [[420, 840]],
  0: [],
};

export const TICKER = [
  'Madurado en seco',
  'Cortado al momento',
  'Embutidos propios',
  'Menudencias frescas',
  'Hueso para sopa',
  'Sin conservantes',
];

export const TOPBAR = [
  { text: 'Pedidos hasta las 6:00 p.m.', strong: true },
  { text: 'Entrega gratis en el GAM desde ₡25.000', strong: false },
  { text: 'Cortado al momento en la carnicería', strong: true },
  { text: 'Menudencias frescas todos los días a las 7 a.m.', strong: false },
];

export const PROCESS = [
  {
    n: '01',
    title: 'Compra directa',
    text: 'Escogemos el animal en la subasta de ganado en Guanacaste. Pagamos por calidad, no por rendimiento.',
    tag: 'Subasta de Liberia',
  },
  {
    n: '02',
    title: 'Maduración en cámara',
    text: 'Entre 14 y 28 días a 2 °C y 78 % de humedad. La carne pierde agua, concentra sabor y se ablanda sola.',
    tag: 'Cámara 2 · 2 °C',
  },
  {
    n: '03',
    title: 'Corte a mano',
    text: 'Separamos los cuartos con cuchillo y sierra de mano. Cada pieza se clasifica y se guarda por corte.',
    tag: '6:30 a.m.',
  },
  {
    n: '04',
    title: 'Vitrina y entrega',
    text: 'Cortamos al momento lo que usted pide, lo sellamos al vacío si lo va a guardar y le explicamos la cocción.',
    tag: 'Hasta las 6:00 p.m.',
  },
] as const;

export const NOTES = [
  {
    n: 'N.01',
    title: 'La sal, antes o después',
    text: 'Aplique la sal 40 minutos antes de poner la carne al fuego. Ni 5 minutos antes —ahí solo se seca la superficie— ni después de cocinar, que la sal no penetra.',
    fix: 'Regla: 40 min · 1 % del peso',
  },
  {
    n: 'N.02',
    title: 'El reposo que no se respeta',
    text: 'Saque el bistec del fuego y déjelo tapado con papel aluminio. Un bistec de 3 cm necesita 6 minutos: los jugos vuelven al centro y no se pierden en el plato.',
    fix: 'Regla: 2 min por cm de grosor',
  },
  {
    n: 'N.03',
    title: 'El fuego de las menudencias',
    text: 'El mondongo y el hígado van con brasa fuerte y sin tapar. Si los tapa, se hierven en su propia agua y pierden el dorado, que es todo el punto.',
    fix: 'Regla: brasa fuerte · sin tapa',
  },
] as const;

export const REVIEWS = [
  {
    text: 'Vengo desde que estaba don Aldo. Usted pide la costilla al ancho que quiera y se la cortan ahí mismo, sin discusión. Eso ya no se consigue.',
    author: 'Marielos V.',
    meta: 'Barrio Escalante · clienta desde 1996',
  },
  {
    text: 'Les pedí que me explicaran el mondongo porque siempre me salía duro. Me dieron la clase completa y quedó suavecito. Le venden la carne y el cómo.',
    author: 'Esteban M.',
    meta: 'Asador de domingo · San Pedro',
  },
  {
    text: 'Trabajo en un restaurante en Zapote y aquí compro la carne de la semana. El lomito viene parejo, sin nervio y con el peso que pido. Nunca una sorpresa.',
    author: 'Yorleny C.',
    meta: 'Cocina en Zapote · 6 años de clienta',
  },
] as const;
