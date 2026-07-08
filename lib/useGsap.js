'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Runs a GSAP setup function scoped to a ref, only when the user
 * allows motion. Everything is cleaned up on unmount via gsap.context.
 *
 * @param {React.RefObject} scopeRef - element that scopes all selectors
 * @param {(ctx: gsap.Context) => void} setup - animation setup
 * @param {any[]} deps
 */
export function useGsap(scopeRef, setup, deps = []) {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !scopeRef.current) return undefined;

    const ctx = gsap.context(setup, scopeRef);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

/** Standard "section head fades up" reveal used by several sections. */
export function revealSectionHead(scope) {
  const head = scope.querySelector('.section-head');
  if (!head) return;
  gsap.from(head.children, {
    y: 30,
    opacity: 0,
    duration: 0.7,
    stagger: 0.12,
    ease: 'power3.out',
    scrollTrigger: { trigger: head, start: 'top 85%' },
  });
}

export { gsap, ScrollTrigger };
