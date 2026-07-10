'use client';

import { Suspense, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useCart } from '@/lib/CartContext';

function SuccessContent() {
  const { clearCart } = useCart();
  const params = useSearchParams();
  const isDemo = params.get('demo') === '1';
  const total = params.get('total');

  // Payment finished — empty the cart
  useEffect(() => {
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="success-page section-pad">
      <div className="wrap success-wrap">
        <span className="success-emoji" aria-hidden="true">🎉🐾</span>
        <h1>Order confirmed!</h1>
        <p>
          You&apos;re booked in. A confirmation email is on its way — we&apos;ll see you (and the
          floof) soon. The goodbye treat is already set aside.
        </p>
        {isDemo && (
          <p className="demo-note">
            Demo mode: no payment was actually taken{total ? ` (order total $${total})` : ''}. Set{' '}
            <code>STRIPE_SECRET_KEY</code> to enable real payments.
          </p>
        )}
        <Link className="btn btn-butter" href="/">
          Back to Suds &amp; Snouts
        </Link>
      </div>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={null}>
      <SuccessContent />
    </Suspense>
  );
}
