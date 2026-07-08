# Suds & Snouts 🐾

A vibrant, GSAP-animated landing page for a pet grooming studio, built with
Next.js 15 (App Router) and React 19.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (fully static)
npm start        # serve the production build
```

## Project structure

```
app/
  layout.js          Root layout, fonts, metadata
  page.js            Assembles all sections (statically prerendered)
  globals.css        Design tokens + all styles
components/
  Header.jsx         Sticky nav with scroll state
  Hero.jsx           Intro timeline, floating sticker photos, rotating badge
  Gallery.jsx        GSAP-pinned horizontal scroll (native swipe < 641px)
  Sections.jsx       Marquee, Services, Process, Testimonials, CTA, Footer
  PawTrail.jsx       🐾 cursor trail (desktop pointers only)
  PetPhoto.jsx       Image with vibrant emoji fallback on load failure
lib/
  data.js            All content: services, pets, steps, testimonials
  useGsap.js         Scoped GSAP hook with cleanup + reduced-motion guard
```

## Notes

- **Motion**: all animation runs through `lib/useGsap.js`, which scopes tweens
  with `gsap.context` (cleaned up on unmount) and skips everything when the
  user has `prefers-reduced-motion` enabled.
- **Mobile**: the pinned gallery becomes a native scroll-snap swipe under
  641px; grids collapse 3 → 2 → 1; type scales with `clamp()`.
- **Images**: real pet photos from Unsplash. If any URL ever fails, the
  `PetPhoto` component swaps in a vibrant gradient + emoji placeholder.
  `next.config.mjs` already allowlists `images.unsplash.com` if you want to
  migrate to `next/image`.
- **Fonts**: loaded via `<link>` in `app/layout.js` so builds work offline.
  Swap to `next/font/google` for self-hosted fonts if you prefer.
- **Content**: everything lives in `lib/data.js` — swap in your own pets,
  prices, and photos without touching the components.
