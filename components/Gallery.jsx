'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, useGsap, revealSectionHead } from '@/lib/useGsap';
import { PETS } from '@/lib/data';
import PetPhoto from './PetPhoto';

export default function Gallery() {
  const scope = useRef(null);
  const railRef = useRef(null);
  const viewportRef = useRef(null);

  useGsap(scope, () => {
    revealSectionHead(scope.current);

    // Pinned horizontal scroll on larger screens; small screens keep
    // native swipe via CSS (overflow-x + scroll-snap in globals.css).
    const mm = gsap.matchMedia();
    mm.add('(min-width: 641px)', () => {
      const rail = railRef.current;
      const viewport = viewportRef.current;
      const getDistance = () => Math.max(0, rail.scrollWidth - viewport.clientWidth);

      const tween = gsap.to(rail, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: scope.current,
          start: 'top top',
          end: () => `+=${getDistance() + window.innerHeight * 0.3}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });
  });

  // Recalculate pin distance once images have loaded
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    return () => window.removeEventListener('load', refresh);
  }, []);

  return (
    <section className="gallery" id="gallery" ref={scope}>
      <div className="wrap section-head">
        <div>
          <span className="kicker">The portfolio</span>
          <h2>Fresh out of the tub</h2>
        </div>
        <p className="rail-hint">
          Keep scrolling — the pets slide sideways <span aria-hidden="true">→</span>
        </p>
      </div>
      <div className="rail-viewport" ref={viewportRef}>
        <div className="rail" ref={railRef}>
          {PETS.map((pet) => (
            <article className="pet-card" style={{ '--tilt': pet.tilt }} key={pet.name}>
              <PetPhoto
                className={`photo ${pet.ph}`}
                src={pet.src}
                alt={pet.alt}
                emoji={pet.emoji}
              />
              <div className="meta">
                <h3>{pet.name}</h3>
                <p>{pet.breed}</p>
                <span className="tag">{pet.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
