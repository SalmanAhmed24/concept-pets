'use client';

import { useRef } from 'react';
import { gsap, useGsap } from '@/lib/useGsap';
import { HERO_STICKERS } from '@/lib/data';
import PetPhoto from './PetPhoto';

export default function Hero() {
  const scope = useRef(null);

  useGsap(scope, () => {
    const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
    intro
      .from('h1 .line > span', { yPercent: 110, duration: 0.9, stagger: 0.12 })
      .from('.eyebrow', { y: 20, opacity: 0, duration: 0.5 }, '-=.7')
      .from(
        '.hero-sub, .hero-ctas, .hero-proof',
        { y: 24, opacity: 0, duration: 0.6, stagger: 0.1 },
        '-=.5'
      )
      .from(
        '.sticker',
        { scale: 0.4, opacity: 0, rotation: 20, duration: 0.7, stagger: 0.14, ease: 'back.out(1.8)' },
        '-=.8'
      )
      .from('.spin-badge', { scale: 0, opacity: 0, duration: 0.6, ease: 'back.out(2)' }, '-=.4');

    // Badge text spins forever
    gsap.to('#badgeText', {
      rotation: 360,
      transformOrigin: '75px 75px',
      duration: 16,
      repeat: -1,
      ease: 'none',
    });

    // Gentle float on the sticker photos
    gsap.utils.toArray('.sticker').forEach((el, i) => {
      gsap.to(el, {
        y: `+=${10 + i * 4}`,
        duration: 2.6 + i * 0.4,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: i * 0.3,
      });
    });
  });

  return (
    <section className="hero" id="top" ref={scope}>
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="dot" /> Grooming studio · Est. 2018
          </span>
          <h1 aria-label="Serious grooming for very unserious animals.">
            <span className="line">
              <span>Serious <span className="hl-butter">grooming</span></span>
            </span>
            <span className="line">
              <span>for very <span className="hl-pink">unserious</span></span>
            </span>
            <span className="line">
              <span><span className="hl-teal">animals</span>.</span>
            </span>
          </h1>
          <p className="hero-sub">
            Baths, trims, blowouts and pedicures for dogs, cats and the occasional rabbit. Your
            pet arrives a gremlin and leaves a supermodel — tail wag guaranteed.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-pink" href="#book">Book a groom</a>
            <a className="btn btn-butter" href="#gallery">See fresh cuts ↓</a>
          </div>
          <div className="hero-proof">
            <span className="stars" aria-hidden="true">★★★★★</span>
            <span>4.9 from 2,300+ happy humans (and their pets)</span>
          </div>
        </div>

        <div className="sticker-cluster" aria-label="Photos of freshly groomed pets">
          {HERO_STICKERS.map((s) => (
            <figure className={`sticker ${s.cls}`} key={s.cls}>
              <span className="tape" aria-hidden="true" />
              <PetPhoto src={s.src} alt={s.alt} emoji={s.emoji} loading="eager" />
              <figcaption>{s.caption}</figcaption>
            </figure>
          ))}

          <div className="spin-badge" aria-hidden="true">
            <svg viewBox="0 0 150 150">
              <defs>
                <path
                  id="circlePath"
                  d="M75,75 m-58,0 a58,58 0 1,1 116,0 a58,58 0 1,1 -116,0"
                />
              </defs>
              <circle cx="75" cy="75" r="72" fill="#FFD23F" stroke="#1B0733" strokeWidth="3" />
              <g id="badgeText">
                <text
                  style={{
                    fontFamily: "'Unbounded', sans-serif",
                    fontWeight: 700,
                    fontSize: '12.5px',
                    letterSpacing: '3px',
                    fill: '#1B0733',
                  }}
                >
                  <textPath href="#circlePath">FRESH CUTS · GOOD DOGS · FRESH CUTS ·</textPath>
                </text>
              </g>
            </svg>
            <span className="badge-center">✂️</span>
          </div>
        </div>
      </div>
    </section>
  );
}
