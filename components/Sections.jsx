'use client';

import { useRef } from 'react';
import { gsap, useGsap, revealSectionHead } from '@/lib/useGsap';
import { MARQUEE_ITEMS, SERVICES, STEPS, TESTIMONIALS } from '@/lib/data';
import PetPhoto from './PetPhoto';
import AddToCartButton from './AddToCartButton';

/* ---------------- Marquee ---------------- */
export function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Services ---------------- */
export function Services() {
  const scope = useRef(null);

  useGsap(scope, () => {
    revealSectionHead(scope.current);
    gsap.utils.toArray('.svc-card').forEach((card, i) => {
      gsap.from(card, {
        y: 60,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        delay: (i % 3) * 0.08,
        scrollTrigger: { trigger: card, start: 'top 88%' },
      });
    });
  });

  return (
    <section className="services section-pad" id="services" ref={scope}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="kicker">The menu</span>
            <h2>Pick a treatment, any treatment</h2>
          </div>
          <p>
            Every visit starts with a sniff-around and a snack, so nobody is stressed — then we
            get to work. All prices include the goodbye treat.
          </p>
        </div>
        <div className="card-grid">
          {SERVICES.map((s) => (
            <article className={`svc-card ${s.color}`} key={s.title}>
              <div className="icon" aria-hidden="true">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <div className="svc-card-foot">
                <span className="price">{s.price}</span>
                <AddToCartButton service={s} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */
export function Process() {
  const scope = useRef(null);

  useGsap(scope, () => {
    revealSectionHead(scope.current);
    gsap.utils.toArray('.step').forEach((el, i) => {
      gsap.from(el, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 90%' },
      });
    });
  });

  return (
    <section className="process section-pad" id="process" ref={scope}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="kicker">The routine</span>
            <h2>From scruffy to strut in four steps</h2>
          </div>
          <p>
            The order matters: calm first, clean second, cute third, celebrate last. It&apos;s the
            same routine every visit, so returning pets walk in like regulars.
          </p>
        </div>
        <div className="steps">
          {STEPS.map((s) => (
            <div className="step" key={s.n}>
              <span className="n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
export function Testimonials() {
  const scope = useRef(null);

  useGsap(scope, () => {
    revealSectionHead(scope.current);
    gsap.utils.toArray('.bubble').forEach((el, i) => {
      gsap.from(el, {
        y: 50,
        opacity: 0,
        rotation: i % 2 ? 2 : -2,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'back.out(1.4)',
        scrollTrigger: { trigger: el, start: 'top 90%' },
      });
    });
  });

  return (
    <section className="testimonials section-pad" id="reviews" ref={scope}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="kicker">Client reviews</span>
            <h2>Word on the sidewalk</h2>
          </div>
          <p>Reviews transcribed faithfully from our clients. Their humans agreed to everything.</p>
        </div>
        <div className="bubble-grid">
          {TESTIMONIALS.map((t) => (
            <article className="bubble" key={t.name}>
              <blockquote>{t.quote}</blockquote>
              <div className="who">
                <PetPhoto className="avatar" src={t.avatar} alt="" emoji="🐾" />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.detail}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
export function Cta() {
  const scope = useRef(null);

  useGsap(scope, () => {
    gsap.from('.cta .wrap > *', {
      y: 36,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: { trigger: scope.current, start: 'top 75%' },
    });
  });

  return (
    <section className="cta section-pad" id="book" ref={scope}>
      <div className="wrap">
        <span className="cta-emoji" aria-hidden="true">🐾</span>
        <h2>
          Your pet&apos;s <span className="hl">glow-up</span> starts here
        </h2>
        <p>
          Open Tuesday–Saturday, 9am–6pm. Walk-ins for nail trims, appointments for everything
          else. First-visit pets get a free blueberry facial.
        </p>
        <div className="hero-ctas" style={{ marginTop: '2.4rem' }}>
          <a className="btn btn-pink" href="tel:+15551234567">Call (555) 123-4567</a>
          <a className="btn btn-butter" href="mailto:hello@sudsandsnouts.pet">
            hello@sudsandsnouts.pet
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
export function Footer() {
  return (
    <footer>
      <div className="wrap foot-inner">
        <a className="logo" href="#top">
          <span className="paw-badge" aria-hidden="true">🐶</span> SUDS&nbsp;&amp;&nbsp;SNOUTS
        </a>
        <ul className="foot-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#gallery">Portfolio</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#book">Book</a></li>
        </ul>
        <p className="credit">
          © 2026 Suds &amp; Snouts Grooming Co. · 42 Wagging Way · All pets photographed with
          consent (a treat).
        </p>
      </div>
    </footer>
  );
}
