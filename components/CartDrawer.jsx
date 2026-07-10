'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useCart, formatMoney } from '@/lib/CartContext';

export default function CartDrawer() {
  const { items, subtotal, isOpen, closeCart, setQty, removeItem } = useCart();

  // Close on Escape, lock scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === 'Escape' && closeCart();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, closeCart]);

  return (
    <>
      <div
        className={`cart-overlay ${isOpen ? 'open' : ''}`}
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside
        className={`cart-drawer ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="cart-head">
          <h2>Your cart 🧺</h2>
          <button className="cart-close" onClick={closeCart} aria-label="Close cart">
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <span aria-hidden="true">🐾</span>
            <p>Nothing in here yet — every good groom starts with a click.</p>
            <button className="btn btn-butter" onClick={closeCart}>
              Browse services
            </button>
          </div>
        ) : (
          <>
            <ul className="cart-items">
              {items.map((item) => (
                <li className="cart-item" key={item.id}>
                  <span className="cart-item-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <div className="cart-item-info">
                    <strong>{item.title}</strong>
                    <span className="cart-item-price">{formatMoney(item.amount)}</span>
                    <div className="qty-controls" aria-label={`Quantity of ${item.title}`}>
                      <button onClick={() => setQty(item.id, item.qty - 1)} aria-label="Decrease quantity">
                        −
                      </button>
                      <span aria-live="polite">{item.qty}</span>
                      <button onClick={() => setQty(item.id, item.qty + 1)} aria-label="Increase quantity">
                        +
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-end">
                    <span className="cart-line-total">{formatMoney(item.amount * item.qty)}</span>
                    <button
                      className="cart-remove"
                      onClick={() => removeItem(item.id)}
                      aria-label={`Remove ${item.title} from cart`}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-foot">
              <div className="cart-subtotal">
                <span>Subtotal</span>
                <strong>{formatMoney(subtotal)}</strong>
              </div>
              <p className="cart-note">Goodbye treat included, as always. 🦴</p>
              <Link className="btn btn-pink cart-checkout-btn" href="/checkout" onClick={closeCart}>
                Go to checkout →
              </Link>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
