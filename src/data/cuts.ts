export type CutKey =
  | 'paleta' | 'aguja' | 'costilla' | 'lomo' | 'solomo' | 'posta'
  | 'rabo' | 'falda' | 'pecho' | 'pulpa' | 'cuello';

export type Cut = {
  key: CutKey;
  /** número que aparece dentro de la lámina */
  num: string;
  label: string;
  /** cuarto al que pertenece, para el color de la lámina */
  quarter: 'delantero' | 'trasero';
  /** polígono del cuarto dentro de la media res (se recorta con la silueta) */
  d: string;
  /** posición del número */
  x: number;
  y: number;
  /** ficha técnica del panel derecho */
  quarter_label: string;
  desc: string;
  cook: string;
  style: string;
  stock: string;
};

export const CARCASS_OUTLINE =

  'M30 104C30 74 62 50 108 42 160 33 240 30 300 34 352 38 392 56 398 88c6 34-12 70-46 92-36 23-90 30-138 24C160 197 108 178 74 150 48 129 30 118 30 104Z';

export const CARCASS_CLIP =
  'M30 104C30 74 62 50 108 42 160 33 240 30 300 34 352 38 392 56 398 88c6 34-12 70-46 92-36 23-90 30-138 24C160 197 108 178 74 150 48 129 30 118 30 104Z';

export const CUTS: Cut[] = [
  {
    key: 'paleta', num: '1', label: 'Paleta', quarter: 'delantero',
    d: 'M12 28 118 22 122 132 12 126Z', x: 74, y: 82,
    quarter_label: 'Cuarto delantero',
    desc: 'De aquí salen la carne para desmenuzar y la molida. Fibra corta y mucho colágeno: pide cocción lenta.',
    cook: 'Braseado · olla', style: 'Cubos · desmenuzado', stock: 'Carne para desmenuzar, molida',
  },
  {
    key: 'aguja', num: '2', label: 'Aguja', quarter: 'delantero',
    d: 'M118 22 214 18 216 134 122 132Z', x: 166, y: 78,
    quarter_label: 'Cuarto delantero',
    desc: 'Pieza con hueso y bastante colágeno. Es la clásica para la olla de carne: se ablanda sola y deja un caldo con cuerpo.',
    cook: 'Olla · 2 horas', style: 'Con hueso · en trozos', stock: 'Aguja para olla, hueso para sopa',
  },
  {
    key: 'costilla', num: '3', label: 'Costilla', quarter: 'delantero',
    d: 'M214 18 294 20 296 136 216 134Z', x: 254, y: 78,
    quarter_label: 'Cuarto delantero',
    desc: 'Costilla con hueso, cortada al ancho que usted pida. Se cocina con brasa suave y paciencia: queda suelta y jugosa.',
    cook: 'Parrilla lenta · 1 h 30', style: 'Al ancho que pida', stock: 'Costilla de res, costilla para parrillada',
  },
  {
    key: 'lomo', num: '4', label: 'Lomo', quarter: 'trasero',
    d: 'M294 20 414 28 414 138 296 136Z', x: 348, y: 80,
    quarter_label: 'Cuarto trasero',
    desc: 'La parte más suave de la res: de aquí salen el lomito y el bistec de lomo. Se corta en medallones parejos.',
    cook: 'Parrilla · plancha bien caliente', style: 'Bistec · medallón', stock: 'Lomito, lomo, bistec de lomo',
  },
  {
    key: 'solomo', num: '5', label: 'Solomo', quarter: 'trasero',
    d: 'M296 136 414 138 414 162 296 164Z', x: 352, y: 150,
    quarter_label: 'Cuarto trasero',
    desc: 'Corte magro y parejo, con algo de grasa en el borde. Es el que más se pide para la parrillada del domingo.',
    cook: 'Parrilla · 3 min por lado', style: 'Bistec de 3 cm', stock: 'Solomo, bistec de solomo',
  },
  {
    key: 'posta', num: '6', label: 'Posta', quarter: 'trasero',
    d: 'M296 164 414 162 410 188 296 188Z', x: 336, y: 176,
    quarter_label: 'Cuarto trasero',
    desc: 'Pieza limpia y sin grasa. Se usa para desmenuzar, para el estrogonofe y para cortar en tiras.',
    cook: 'Olla · plancha', style: 'En tiras · desmenuzado', stock: 'Posta para desmenuzar, carne en tiras',
  },
  {
    key: 'rabo', num: '7', label: 'Rabo', quarter: 'trasero',
    d: 'M268 178 414 188 366 214 272 212Z', x: 308, y: 196,
    quarter_label: 'Cuarto trasero',
    desc: 'Limpio y cortado en rodajas. Es el corte de la sopa de rabo: a las dos horas se deshace y le da cuerpo al caldo.',
    cook: 'Olla 2 h · vino tinto', style: 'En rodajas con hueso', stock: 'Rabo de res, hueso para sopa',
  },
  {
    key: 'falda', num: '8', label: 'Falda', quarter: 'delantero',
    d: 'M122 132 296 136 294 176 126 174Z', x: 210, y: 156,
    quarter_label: 'Cuarto delantero',
    desc: 'Fibra larga y mucho sabor. Se cocina lento y se corta contra la fibra, o se usa para desmenuzar.',
    cook: 'Parrilla lenta · 1 h', style: 'En tiras · desmenuzado', stock: 'Falda para desmenuzar, carne en tiras',
  },
  {
    key: 'pecho', num: '9', label: 'Pecho', quarter: 'delantero',
    d: 'M172 180 268 178 272 212 172 214Z', x: 220, y: 194,
    quarter_label: 'Cuarto delantero',
    desc: 'Con hueso y bastante grasa, que es donde está el sabor. Es el corte de los caldos y de la olla de carne.',
    cook: 'Olla · 2 horas', style: 'En trozos con hueso', stock: 'Pecho para caldo, hueso carnoso',
  },
  {
    key: 'pulpa', num: '10', label: 'Pulpa', quarter: 'delantero',
    d: 'M12 170 126 174 172 180 172 214 12 208Z', x: 134, y: 192,
    quarter_label: 'Cuarto delantero',
    desc: 'Carne magra y sin hueso. Es la que se usa para la molida, para las albóndigas y para desmenuzar.',
    cook: 'Olla · sartén', style: 'Molida · cubos', stock: 'Carne molida, pulpa para desmenuzar',
  },
  {
    key: 'cuello', num: '11', label: 'Cuello', quarter: 'delantero',
    d: 'M12 126 122 132 126 174 12 170Z', x: 92, y: 152,
    quarter_label: 'Cuarto delantero',
    desc: 'Mucho colágeno y mucho sabor. Ideal para la olla de carne y para la molida de la casa.',
    cook: 'Olla 2 h · braseado', style: 'Troceado · molida', stock: 'Carne para olla, molida especial',
  },
];
