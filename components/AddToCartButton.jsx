'use client';

import { useCart } from '@/lib/CartContext';

export default function AddToCartButton({ service }) {
  const { addItem } = useCart();
  return (
    <button
      className="btn btn-add"
      onClick={() =>
        addItem({
          id: service.id,
          title: service.title,
          amount: service.amount,
          icon: service.icon,
        })
      }
      aria-label={`Add ${service.title} to cart`}
    >
      Add to cart 🧺
    </button>
  );
}
