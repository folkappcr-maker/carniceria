'use client';

import { useEffect } from 'react';

/**
 * Efectos de scroll de la página: barra de progreso, revelado de bloques
 * y contadores de la sección "El oficio". Todo con IntersectionObserver.
 */
export function ScrollEffects() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ── barra de progreso ───────────────────────────────── */
    const bar = document.getElementById('scrollBar');
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (bar) bar.style.width = max > 0 ? `${Math.min(100, (window.scrollY / max) * 100)}%` : '0%';
        raf = 0;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ── revelado ────────────────────────────────────────── */
    const reveal = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    let io: IntersectionObserver | undefined;

    if (reduce || !('IntersectionObserver' in window)) {
      reveal.forEach((el) => el.classList.add('is-in'));
    } else {
      // lo que ya está en pantalla se muestra sin esperar al observer
      reveal.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) el.classList.add('is-in');
      });

      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-in');
              io?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
      );
      reveal.forEach((el) => {
        if (!el.classList.contains('is-in')) io?.observe(el);
      });
    }

    // red de seguridad: nada puede quedar invisible
    const safety = window.setTimeout(
      () => reveal.forEach((el) => el.classList.add('is-in')),
      2200,
    );

    /* ── contadores ──────────────────────────────────────── */
    const nums = Array.from(document.querySelectorAll<HTMLElement>('[data-count]'));
    const run = (el: HTMLElement) => {
      const target = Number(el.dataset.count ?? 0);
      if (reduce) {
        el.textContent = String(target);
        return;
      }
      const dur = 1400;
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / dur);
        el.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    let io2: IntersectionObserver | undefined;
    if ('IntersectionObserver' in window) {
      io2 = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              run(entry.target as HTMLElement);
              io2?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 },
      );
      nums.forEach((el) => io2?.observe(el));
    } else {
      nums.forEach((el) => (el.textContent = el.dataset.count ?? '0'));
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.clearTimeout(safety);
      if (raf) cancelAnimationFrame(raf);
      io?.disconnect();
      io2?.disconnect();
    };
  }, []);

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <div className="scroll-bar" aria-hidden="true">
        <span id="scrollBar" />
      </div>
    </>
  );
}
