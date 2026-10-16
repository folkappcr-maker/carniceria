export type Category = 'res' | 'cerdo' | 'pollo' | 'embutidos' | 'menudencias' | 'empanizados';

export type Badge = { label: string; tone: 'plain' | 'hot' | 'gold' };

export type Product = {
  /** categoría usada por los filtros de la vitrina */
  cat: Category;
  name: string;
  /** id del símbolo SVG en components/art/Sprite.tsx */
  art: string;
  num: string;
  desc: string;
  meta: string[];
  /** precio por kilo en colones, sin el símbolo */
  price: string;
  unit: string;
  badge?: Badge;
};

export const CATEGORIES: { key: Category | 'all'; label: string; count: number }[] = [
  { key: 'all', label: 'Todo', count: 12 },
  { key: 'res', label: 'Res', count: 6 },
  { key: 'cerdo', label: 'Cerdo', count: 2 },
  { key: 'pollo', label: 'Pollo', count: 1 },
  { key: 'embutidos', label: 'Embutidos', count: 1 },
  { key: 'menudencias', label: 'Menudencias', count: 1 },
  { key: 'empanizados', label: 'Empanizados', count: 1 },
];

export const PRODUCTS: Product[] = [
  {
    cat: 'res', name: 'Lomito', art: 'art-tenderloin', num: '01',
    desc: 'La pieza más suave de la res, limpia y sin nervio. Se corta en medallones parejos: ideal para saltear o a la parrilla.',
    meta: ['Sin nervio', 'Parrilla · Sartén'],
    price: '16.500', unit: '/kg',
    badge: { label: 'Más vendido', tone: 'hot' },
  },
  {
    cat: 'res', name: 'Lomo', art: 'art-ribeye', num: '02',
    desc: 'Magro y jugoso, con su capa de grasa en el borde. Es el corte que más se pide para la parrillada del domingo.',
    meta: ['Corte de 3 cm', 'Parrilla · Plancha'],
    price: '9.800', unit: '/kg',
  },
  {
    cat: 'res', name: 'Bistec de res', art: 'art-flank', num: '03',
    desc: 'Cortado parejo y sin nervio. Se golpea para suavizarlo y se usa para bistec en salsa o para empanizar.',
    meta: ['Cortado parejo', 'Sartén · Plancha'],
    price: '7.400', unit: '/kg',
  },
  {
    cat: 'res', name: 'Costilla de res', art: 'art-ribs', num: '04',
    desc: 'Costilla con hueso, cortada al ancho que usted pida. Se cocina con brasa suave y paciencia: queda suelta y jugosa.',
    meta: ['Al ancho que pida', 'Parrilla · Horno'],
    price: '6.200', unit: '/kg',
    badge: { label: 'Para la parrillada', tone: 'plain' },
  },
  {
    cat: 'res', name: 'Posta', art: 'art-striploin', num: '05',
    desc: 'Pieza limpia y magra. La clásica para desmenuzar, para la olla de carne o para cortar en tiras.',
    meta: ['Para desmenuzar', 'Olla · Horno'],
    price: '7.900', unit: '/kg',
  },
  {
    cat: 'res', name: 'Rabo de res', art: 'art-rabo', num: '06',
    desc: 'Limpio y cortado en rodajas. Es el corte de la sopa de rabo: a las dos horas se deshace y le da cuerpo al caldo.',
    meta: ['En rodajas', 'Olla · 2 horas'],
    price: '8.500', unit: '/kg',
  },
  {
    cat: 'cerdo', name: 'Chuleta de cerdo', art: 'art-chuleta', num: '07',
    desc: 'Con hueso y su capa de grasa. A la parrilla o al sartén queda dorada por fuera y jugosa por dentro.',
    meta: ['Con hueso', 'Parrilla · Sartén'],
    price: '6.800', unit: '/kg',
  },
  {
    cat: 'cerdo', name: 'Chicharrón de cerdo', art: 'art-chicharron', num: '08',
    desc: 'Con la piel bien gruesa, para freír en su propia grasa. Crujiente por fuera y suave por dentro.',
    meta: ['Con piel', 'Freidora · Sartén'],
    price: '7.500', unit: '/kg',
    badge: { label: 'Del día', tone: 'hot' },
  },
  {
    cat: 'pollo', name: 'Pollo entero', art: 'art-chicken', num: '09',
    desc: 'De granja en Zarcero, sin jaula. Se lo trozamos sin costo o se lo damos entero para el horno.',
    meta: ['Trozado sin costo', 'Horno · Parrilla'],
    price: '3.100', unit: '/kg',
  },
  {
    cat: 'embutidos', name: 'Chorizo criollo', art: 'art-chorizo', num: '10',
    desc: 'Tripa natural, 20 % de grasa y nada más que especias. Los hacemos los jueves con la receta de la casa.',
    meta: ['Tripa natural', 'Parrilla · Ahumado'],
    price: '5.200', unit: '/kg',
    badge: { label: 'Receta de la casa', tone: 'plain' },
  },
  {
    cat: 'menudencias', name: 'Hígado de res', art: 'art-higado', num: '11',
    desc: 'Fresco del día, en fetas parejas. A la plancha con cebolla no necesita nada más.',
    meta: ['En fetas', 'Plancha · Sartén'],
    price: '3.900', unit: '/kg',
  },
  {
    cat: 'empanizados', name: 'Carne empanizada', art: 'art-empanizada', num: '12',
    desc: 'Cortada de la posta, golpeada a mano y empanizada al momento. Pan casero, sin doble rebozo.',
    meta: ['Empanada hoy', 'Horno · Sartén'],
    price: '6.500', unit: '/kg',
  },
];
