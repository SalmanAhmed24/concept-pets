import { NextResponse } from 'next/server';
import { SERVICES } from '@/lib/data';

/**
 * POST /api/checkout
 * Body: { customer: { name, email, petName, notes }, items: [{ id, qty }] }
 *
 * Prices are always looked up server-side from lib/data.js by service id,
 * so a tampered client can never set its own prices.
 *
 * With STRIPE_SECRET_KEY set, this creates a real Stripe Checkout Session
 * and returns its hosted payment URL. Without it, the route runs in demo
 * mode and returns the success page URL directly so the flow can be
 * exercised end-to-end in development.
 */
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { customer, items } = body || {};

  if (!Array.isArray(items) || items.length === 0) {
    return NextResponse.json({ error: 'Your cart is empty' }, { status: 400 });
  }
  if (!customer?.email || !customer?.name) {
    return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
  }

  // Resolve items against the server-side catalogue
  const lineItems = [];
  for (const { id, qty } of items) {
    const service = SERVICES.find((s) => s.id === id);
    const quantity = Number.parseInt(qty, 10);
    if (!service || !Number.isFinite(quantity) || quantity < 1 || quantity > 20) {
      return NextResponse.json({ error: `Invalid cart item: ${id}` }, { status: 400 });
    }
    lineItems.push({ service, quantity });
  }

  const origin =
    request.headers.get('origin') ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    'http://localhost:3000';

  const secretKey = process.env.STRIPE_SECRET_KEY;

  // ---- Demo mode (no Stripe key configured) ----
  if (!secretKey) {
    const total = lineItems.reduce((n, li) => n + li.service.amount * li.quantity, 0);
    return NextResponse.json({
      url: `${origin}/checkout/success?demo=1&total=${total.toFixed(2)}`,
    });
  }

  // ---- Real Stripe Checkout ----
  try {
    const { default: Stripe } = await import('stripe');
    const stripe = new Stripe(secretKey);

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      customer_email: customer.email,
      line_items: lineItems.map(({ service, quantity }) => ({
        quantity,
        price_data: {
          currency: 'usd',
          unit_amount: Math.round(service.amount * 100),
          product_data: {
            name: service.title,
            description: service.body,
          },
        },
      })),
      metadata: {
        customer_name: String(customer.name).slice(0, 500),
        pet_name: String(customer.petName || '').slice(0, 500),
        notes: String(customer.notes || '').slice(0, 500),
      },
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('Stripe checkout error:', err);
    return NextResponse.json(
      { error: 'Could not start payment. Please try again.' },
      { status: 500 }
    );
  }
}
