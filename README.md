# La Media Res — Landing de carnicería (Costa Rica)

Landing page de una sola página para una carnicería de barrio en **San José, Costa Rica**, pensada
como **propuesta visual** para mostrarle al cliente. No es una plantilla: el sistema gráfico, las
ilustraciones y los textos son originales.

Hecha con **Next.js (App Router) + TypeScript + React 19**, gestionada con **pnpm**.
Sin frameworks de CSS: el sistema de diseño es CSS propio con tokens.

## Cómo correrla

```bash
pnpm install      # instalar dependencias
pnpm dev          # desarrollo  → http://localhost:3100
pnpm build        # build de producción
pnpm start        # servir el build → http://localhost:3100
pnpm typecheck    # chequeo de tipos
pnpm verify:ui    # verificación de interacciones (ver más abajo)
```

## Localización Costa Rica

| Tema | Decisión |
|---|---|
| Moneda | Precios por kilo en **colones**: `₡16.500`, `₡9.800`… con punto de miles. |
| Cortes | Nomenclatura tica: **lomito, lomo, bistec de res, costilla, posta, rabo, chuleta de cerdo, chicharrón, hígado**. |
| Mapa de cortes | **Paleta, aguja, costilla, lomo, solomo, posta, rabo, falda, pecho, pulpa, cuello**. |
| Menudencias | Se reemplazó "achuras" (argentinismo) por **menudencias**. |
| Empanizados | "Milanesa" → **carne empanizada**. |
| Trato | **Usted** ("pase", "escoja", "pregunte"), que es lo habitual en el comercio costarricense. |
| Vitrina | "Mostrador" → **vitrina**; "pizarrón" → **pizarra**. |
| Pagos | **Efectivo, SINPE Móvil y tarjeta**. |
| Entregas | **GAM** (Gran Área Metropolitana) con entrega el mismo día. |
| Horarios | Formato de 12 horas: **7 a.m. – 12 m.d. / 2 – 6 p.m.**, y el estado del local en vivo ("Abierto hasta las 12:00 m.d."). |
| Ubicación | **Calle 33, Barrio Escalante, San José**, a 150 m del Parque Francia. Teléfono `2253-0198`, WhatsApp `8712-0198`, correo `@lamediares.cr`. |
| Contexto | Subasta de ganado en **Guanacaste**, pollo de **Zarcero**, platos locales (**olla de carne**, **sopa de rabo**), clientela de **San Pedro** y **Zapote**. |
| Marca | "Carnicería & Parrilla" → **Carnicería** (es solo carnicería). |

## Estructura

```
la-media-res/
├── src/
│   ├── app/
│   │   ├── layout.tsx        fuentes (next/font), metadatos, OrderProvider
│   │   ├── page.tsx          ordena las secciones de la página
│   │   └── globals.css       sistema de diseño completo (tokens + componentes)
│   ├── components/
│   │   ├── SiteHeader.tsx    header pegajoso + menú móvil (client)
│   │   ├── Hero.tsx          hero con la ficha técnica del lomo
│   │   ├── Products.tsx      vitrina con filtros y "agregar al pedido" (client)
│   │   ├── CutChart.tsx      lámina interactiva de los cortes (client)
│   │   ├── Sections.tsx      "Cómo trabajamos" + "Consejos del carnicero"
│   │   ├── Story.tsx         la familia: historia, cita y contadores
│   │   ├── Reviews.tsx       reseñas de la clientela
│   │   ├── Visit.tsx         horarios, mapa estilizado, tarjeta del asador
│   │   ├── SiteFooter.tsx    footer + newsletter
│   │   ├── OrderTray.tsx     bandeja flotante del pedido (client)
│   │   ├── OpenBadge.tsx     "abierto / cerrado" con la hora real (client)
│   │   ├── ScrollEffects.tsx progreso, revelados y contadores (client)
│   │   ├── order-context.tsx estado del pedido compartido (client)
│   │   ├── icons.tsx         íconos SVG
│   │   └── art/              ilustraciones SVG dibujadas a medida
│   │       ├── Sprite.tsx        los 12 cortes de la vitrina
│   │       ├── HeroArt.tsx       lomo de la ficha técnica
│   │       ├── StoryScene.tsx    cámara, medias reses colgadas, balanza
│   │       └── MapArt.tsx        mapa estilizado del barrio
│   ├── data/
│   │   ├── site.ts           datos del local, horarios, navegación, textos
│   │   ├── products.ts       los 12 cortes con precio en colones
│   │   └── cuts.ts           geometría de la lámina + ficha de cada cuarto
│   └── lib/whatsapp.ts       armado de los links de WhatsApp
├── scripts/verify-ui.mjs     verificación de interacciones por DevTools Protocol
└── preview/                  capturas de la página completa
```

## La idea de diseño

El punto de partida fue **alejarse del look "delivery de carne"**: fondo blanco, foto de bife
brillante, tarjetas redondeadas y botón verde de WhatsApp. En su lugar, la página se construye
como un **cartel impreso de carnicería**: papel hueso, tinta cálida, rojo sangre y latón.

| Decisión | Por qué |
|---|---|
| Paleta papel + tinta + rojo sangre + latón | Evoca el pizarrón, la balanza y el papel de envolver. Nada de blanco puro ni verde delivery. |
| Fraunces (serif editorial) + Inter + JetBrains Mono | La serif da oficio y antigüedad; la mono da el aire de etiqueta, ticket y ficha técnica. |
| Grano de papel en overlay | Saca el "plástico digital" y unifica toda la página. |
| Sombras duras desplazadas (`8px 8px 0`), sin blur | Recurso de imprenta: las tarjetas parecen recortes pegados. |
| 12 ilustraciones SVG duotono dibujadas a mano | Cero fotos de stock. Cada corte tiene su dibujo, en el mismo lenguaje. |
| Grilla de la vitrina con líneas continuas | Se lee como catálogo impreso, no como grilla de tarjetas flotantes. |

**Estructura narrativa**:

1. **Hero** — promesa concreta + *ficha técnica* del lomo con sello giratorio y precio del día.
2. **La vitrina** — 12 cortes con filtros por tipo de carne, precio por kilo y para qué cocción sirve.
3. **Mapa de cortes** — lámina de la media res con 11 cuartos navegables.
4. **Nuestra historia** — tres generaciones, cita del maestro carnicero y stats animados.
5. **Cómo trabajamos** — compra en subasta, maduración, corte a mano, vitrina y entrega.
6. **Consejos del carnicero** — tres errores frecuentes con su corrección práctica.
7. **Reseñas**, **visítanos** (horarios, mapa, tarjeta del asador) y **footer**.

## Interacciones

- **Filtros de la vitrina** por categoría (estado en React, contadores calculados desde los datos).
- **Mapa de cortes**: los 11 cuartos responden a hover, click, foco y teclado. La lista lateral y la
  lámina están sincronizadas en los dos sentidos y la ficha técnica se anuncia por `aria-live`.
- **Pedido**: cada corte se suma a una bandeja flotante y el botón "Enviar pedido" arma solo el
  mensaje de WhatsApp con la lista.
- **Estado del local**: "Abierto hasta las 12:00 m.d." o "Cerrado · abre a las 7:00 a.m." calculado
  con la hora real del visitante.
- **Revelado al scrollear** con `IntersectionObserver`, contadores animados y barra de progreso.

### Accesibilidad y robustez

- Skip link, roles `tab`/`aria-selected`, `aria-pressed` en los botones de pedido, foco visible.
- El **hero se pinta con animación CSS pura** (`.rise`), sin depender del JS ni de la hidratación.
- El revelado del resto es **mejora progresiva**: solo se ocultan los bloques si hay JS
  (`[data-js="on"] .reveal`), con una red de seguridad que los muestra igual a los 2,2 s.
  Sin JS la página se ve completa.
- `prefers-reduced-motion` desactiva animaciones y transiciones.
- Los links de WhatsApp abren en pestaña nueva con `rel="noopener noreferrer"`.

## Responsive

Cuatro puntos de quiebre reales: 1180 px (grilla de 3), 1080 px (menú hamburguesa, mapa en una
columna), 980 px (hero apilado, grids a 2), 720/560 px (una columna, header limpio con el WhatsApp
en el botón flotante).

## Qué tocar para personalizar

Todo el contenido vive en `src/data/`, no hay texto duro en los componentes:

- `site.ts` — teléfono, WhatsApp, dirección, horarios (en minutos), navegación, pasos, consejos, reseñas.
- `products.ts` — los cortes de la vitrina: categoría, precio en colones, descripción, etiquetas y
  qué ilustración usa.
- `cuts.ts` — la geometría de la lámina y la ficha técnica de cada cuarto.

Para cambiar el número de WhatsApp alcanza con `SHOP.whatsapp` en `src/data/site.ts`; los CTA, el
botón flotante y el mensaje del pedido se actualizan solos.

## Verificación

`scripts/verify-ui.mjs` maneja Chrome por **DevTools Protocol** (sin dependencias) y comprueba las
interacciones de verdad: filtros, bandeja de pedido, mapa de cortes por click y por teclado,
contadores, menú móvil, validación de la newsletter y que ningún bloque quede invisible.

```bash
pnpm build && pnpm start            # en una terminal
# en otra: Chrome con el puerto de depuración abierto apuntando al sitio
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --remote-debugging-port=9222 --user-data-dir=/tmp/lmr-cdp http://127.0.0.1:3100/
pnpm verify:ui                      # 18/18 verificaciones
```

## Antes de publicar

- Precios, dirección, teléfonos y horarios son de referencia: reemplazarlos por los reales.
- Confirmar el número de WhatsApp real (hoy es `8712-0198`, un móvil de ejemplo).
- El formulario de la newsletter valida y responde en pantalla; falta conectarlo a un servicio.
- El mapa es una ilustración SVG, no un mapa real: si hace falta, embeber el de Google o Mapbox.
- Sumar `og:image` con una captura de la página para compartir por redes.
