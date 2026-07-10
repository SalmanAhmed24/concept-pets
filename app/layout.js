import './globals.css';
import { CartProvider } from '@/lib/CartContext';
import CartDrawer from '@/components/CartDrawer';

export const metadata = {
  title: 'Suds & Snouts — Serious grooming for very unserious animals',
  description:
    'Award-worthy pet grooming studio. Baths, trims, nails and blowouts for dogs, cats and the occasional rabbit.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Loaded via <link> (not next/font) so builds work offline; swap to next/font if you prefer */}
        <link
          href="https://fonts.googleapis.com/css2?family=Unbounded:wght@400;600;800;900&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
