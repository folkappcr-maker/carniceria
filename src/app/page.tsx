import { Sprite } from '@/components/art/Sprite';
import { CutChart } from '@/components/CutChart';
import { Hero } from '@/components/Hero';
import { OrderTray } from '@/components/OrderTray';
import { Products } from '@/components/Products';
import { Reviews } from '@/components/Reviews';
import { Notes, Process } from '@/components/Sections';
import { ScrollEffects } from '@/components/ScrollEffects';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { Story } from '@/components/Story';
import { Ticker } from '@/components/Ticker';
import { TopBar } from '@/components/TopBar';
import { Visit } from '@/components/Visit';
import { IconWhatsApp } from '@/components/icons';
import { waLink } from '@/lib/whatsapp';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Saltar al contenido
      </a>

      <ScrollEffects />

      <TopBar />
      <SiteHeader />

      <main id="main">
        <Hero />
        <Ticker />
        <Products />
        <CutChart />
        <Story />
        <Process />
        <Notes />
        <Reviews />
        <Visit />
      </main>

      <SiteFooter />
      <OrderTray />

      <a
        className="fab"
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pedir por WhatsApp"
      >
        <IconWhatsApp />
      </a>

      <Sprite />
    </>
  );
}
