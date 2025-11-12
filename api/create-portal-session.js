// Serverless function to create a Stripe Customer Portal session
// This allows customers to manage their subscriptions, payment methods, etc.

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { customerId, returnUrl } = req.body;

    // Validate required fields
    if (!customerId) {
      return res.status(400).json({ error: 'Customer ID is required' });
    }

    // Create a portal session
    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: returnUrl || `${process.env.VITE_APP_URL}/subscribe`,
    });

    // Return the portal URL to the client
    return res.status(200).json({ url: session.url });
  } catch (error) {
    console.error('Error creating portal session:', error);
    return res.status(500).json({
      error: 'Failed to create portal session',
      details: error.message
    });
  }
}
