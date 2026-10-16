import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import { OrderProvider } from '@/components/order-context';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  // ejes variables: sin 'opsz' el título pierde el corte display y se abre de más
  axes: ['opsz', 'SOFT', 'WONK'],
  display: 'swap',
  variable: '--font-fraunces',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-jetbrains',
});

export const metadata: Metadata = {
  title: 'La Media Res — Carnicería en Barrio Escalante, San José',
  description:
    'Carnicería de barrio en Barrio Escalante, San José. Compramos la canal entera, la maduramos en cámara y la cortamos en la carnicería. Cortes al momento, menudencias frescas y embutidos propios. Entregas en todo el GAM.',
  // ruta relativa a propósito: así funciona igual en la raíz y bajo /carniceria (GitHub Pages)
  icons: { icon: 'favicon.svg' },
  keywords: ['carnicería', 'San José', 'Barrio Escalante', 'cortes de res', 'menudencias', 'embutidos', 'SINPE Móvil'],
  openGraph: {
    title: 'La Media Res — Carnicería & Parrilla',
    description: 'El corte exacto, a cuchillo, sin atajos. Desde 1987 en San José.',
    type: 'website',
    locale: 'es_AR',
  },
};

export const viewport: Viewport = {
  themeColor: '#17110F',
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es-CR"
      className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body>
        {/* Marca que hay JS antes del primer pintado: sin JS, la página se ve completa igual. */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.dataset.js='on'" }}
        />
        <OrderProvider>{children}</OrderProvider>
      </body>
    </html>
  );
}
