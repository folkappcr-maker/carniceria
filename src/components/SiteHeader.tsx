'use client';

import { useEffect, useState } from 'react';
import { Brand } from './Brand';
import { IconPhone } from './icons';
import { NAV, NAV_MOBILE, SHOP } from '@/data/site';
import { waLink } from '@/lib/whatsapp';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <header className={`site-head${stuck ? ' is-stuck' : ''}`}>
        <div className="wrap site-head__inner">
          <Brand />

          <nav className="nav" aria-label="Navegación principal">
            {NAV.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="site-head__actions">
            <a className="tel" href={`tel:${SHOP.tel}`}>
              <IconPhone />
              {SHOP.phoneLabel}
            </a>
            <a
              className="btn btn--primary btn--sm"
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Pedir por WhatsApp</span>
            </a>
            <button
              type="button"
              className="burger"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
              aria-controls="mobileMenu"
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className="mmenu" id="mobileMenu" hidden={!open}>
        <nav className="mmenu__nav" aria-label="Navegación móvil">
          {NAV_MOBILE.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              <span>{link.num}</span> {link.label}
            </a>
          ))}
        </nav>
        <div className="mmenu__foot">
          <p className="mmenu__hours">{SHOP.hoursShort}</p>
          <p>
            <a href={`tel:${SHOP.tel}`}>{SHOP.phoneLabel}</a>
          </p>
          <p>
            {SHOP.address}, {SHOP.city}
          </p>
        </div>
      </div>
    </>
  );
}
