'use client';

import { useState } from 'react';

/**
 * Photo with a vibrant emoji placeholder that shows if the remote
 * image ever fails to load — no broken-image icons, ever.
 */
export default function PetPhoto({ src, alt, emoji, className = 'photo', loading = 'lazy' }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={className} style={{ position: 'relative' }}>
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          display: 'grid',
          placeItems: 'center',
          zIndex: 0,
        }}
      >
        {emoji}
      </span>
      {!failed && (
        <img src={src} alt={alt} loading={loading} onError={() => setFailed(true)} />
      )}
    </div>
  );
}
