'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';

/** 🐾 trail that follows the cursor. Desktop pointers only, respects reduced motion. */
export default function PawTrail() {
  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || prefersReduced) return undefined;

    let last = 0;
    const onMove = (e) => {
      const now = Date.now();
      if (now - last < 90) return; // throttle: a trail, not a blizzard
      last = now;

      const paw = document.createElement('span');
      paw.className = 'paw-dot';
      paw.textContent = '🐾';
      paw.style.left = `${e.clientX - 10}px`;
      paw.style.top = `${e.clientY - 10}px`;
      document.body.appendChild(paw);

      gsap.fromTo(
        paw,
        { scale: 0.4, opacity: 0.9, rotation: gsap.utils.random(-30, 30) },
        {
          scale: 1,
          opacity: 0,
          y: -14,
          duration: 0.9,
          ease: 'power1.out',
          onComplete: () => paw.remove(),
        }
      );
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return null;
}
