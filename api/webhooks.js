// Serverless function to handle Stripe webhook events
// This receives real-time updates about subscription changes

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Disable body parsing so we can verify the webhook signature
export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper to read raw body from request
async function getRawBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks).toString('utf8');
}

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let event;

  try {
    // Get the raw body for signature verification
    const rawBody = await getRawBody(req);
    const signature = req.headers['stripe-signature'];

    // Verify webhook signature
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).json({ error: `Webhook Error: ${err.message}` });
  }

  // Handle the event
  try {
    switch (event.type) {
      case 'customer.subscription.created':
        console.log('New subscription created:', event.data.object.id);
        // TODO: Add logic to send welcome email, update database, etc.
        break;

      case 'customer.subscription.updated':
        console.log('Subscription updated:', event.data.object.id);
        // TODO: Handle plan changes, status updates, etc.
        break;

      case 'customer.subscription.deleted':
        console.log('Subscription canceled:', event.data.object.id);
        // TODO: Handle cancellation - update access, send email, etc.
        break;

      case 'invoice.payment_succeeded':
        console.log('Payment succeeded:', event.data.object.id);
        // TODO: Send receipt, update payment records, etc.
        break;

      case 'invoice.payment_failed':
        console.log('Payment failed:', event.data.object.id);
        // TODO: Send notification about failed payment
        break;

      case 'checkout.session.completed':
        const session = event.data.object;
        console.log('Checkout completed:', session.id);
        console.log('Customer email:', session.customer_email);
        console.log('Customer name:', session.customer_details?.name);
        // TODO: Save customer info to your database if needed
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    return res.status(200).json({ received: true });
  } catch (err) {
    console.error('Error processing webhook:', err);
    return res.status(500).json({ error: 'Webhook processing failed' });
  }
}
