'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header id="site-header" className={scrolled ? 'scrolled' : ''}>
      <div className="wrap nav">
        <a className="logo" href="#top" aria-label="Suds and Snouts home">
          <span className="paw-badge" aria-hidden="true">🐶</span>
          SUDS&nbsp;&amp;&nbsp;SNOUTS
        </a>
        <nav aria-label="Primary">
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#gallery">Fresh cuts</a></li>
            <li><a href="#process">How it works</a></li>
            <li><a href="#reviews">Reviews</a></li>
          </ul>
        </nav>
        <a className="btn btn-butter" href="#book">Book a groom</a>
      </div>
    </header>
  );
}
