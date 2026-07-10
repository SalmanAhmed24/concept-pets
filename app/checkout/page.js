'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart, formatMoney } from '@/lib/CartContext';

export default function CheckoutPage() {
  const { items, subtotal } = useCart();
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', petName: '', notes: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | error
  const [error, setError] = useState('');

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    if (items.length === 0) return;
    setStatus('submitting');
    setError('');
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer: form,
          items: items.map(({ id, qty }) => ({ id, qty })),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Checkout failed');
      if (data.url) {
        // Stripe-hosted payment page (or demo success page)
        window.location.assign(data.url);
      } else {
        router.push('/checkout/success');
      }
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Something went wrong. Please try again.');
    }
  }

  return (
    <main className="checkout-page section-pad">
      <div className="wrap checkout-wrap">
        <div className="section-head">
          <div>
            <span className="kicker">Almost there</span>
            <h1>Checkout</h1>
          </div>
          <p>
            Tell us who&apos;s coming in and settle up. Payment is handled securely — we never see
            your card details.
          </p>
        </div>

        {items.length === 0 ? (
          <div className="checkout-empty">
            <p>Your cart is empty — go pick a treatment first. 🐾</p>
            <Link className="btn btn-butter" href="/#services">
              Back to services
            </Link>
          </div>
        ) : (
          <div className="checkout-grid">
            <form className="checkout-form" onSubmit={handleSubmit}>
              <label>
                Your name
                <input required value={form.name} onChange={set('name')} placeholder="Sam Whiskers" />
              </label>
              <label>
                Email
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={set('email')}
                  placeholder="you@example.com"
                />
              </label>
              <label>
                Pet&apos;s name
                <input required value={form.petName} onChange={set('petName')} placeholder="Biscuit" />
              </label>
              <label>
                Notes for the groomer (optional)
                <textarea
                  rows={3}
                  value={form.notes}
                  onChange={set('notes')}
                  placeholder="Dramatic about nail trims, motivated by cheese."
                />
              </label>

              {status === 'error' && <p className="checkout-error" role="alert">{error}</p>}

              <button className="btn btn-pink checkout-pay-btn" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Taking you to payment…' : `Pay ${formatMoney(subtotal)}`}
              </button>
              <p className="checkout-secure">🔒 Secured by Stripe Checkout</p>
            </form>

            <aside className="order-summary" aria-label="Order summary">
              <h2>Order summary</h2>
              <ul>
                {items.map((item) => (
                  <li key={item.id}>
                    <span>
                      {item.icon} {item.title} × {item.qty}
                    </span>
                    <span>{formatMoney(item.amount * item.qty)}</span>
                  </li>
                ))}
              </ul>
              <div className="order-total">
                <span>Total</span>
                <strong>{formatMoney(subtotal)}</strong>
              </div>
              <Link href="/#services" className="order-edit">
                ← Keep shopping
              </Link>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
