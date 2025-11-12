// Serverless function to create a Stripe Checkout session
// This runs on Vercel's serverless infrastructure

import Stripe from 'stripe';

// Initialize Stripe with secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { priceId, successUrl, cancelUrl } = req.body;

    // Validate required fields
    if (!priceId) {
      return res.status(400).json({ error: 'Price ID is required' });
    }

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      // Allow promotional codes
      allow_promotion_codes: true,
      // Collect customer information
      billing_address_collection: 'required',
      customer_email: undefined, // Let customer enter email
      phone_number_collection: {
        enabled: true,
      },
      // Success and cancel URLs
      success_url: successUrl || `${process.env.VITE_APP_URL}/subscribe/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${process.env.VITE_APP_URL}/subscribe/cancel`,
      // Subscription options
      subscription_data: {
        trial_period_days: 0, // Change if you want to offer a trial
        metadata: {
          source: '1percentbetter_website',
        },
      },
    });

    // Return the session ID to the client
    return res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return res.status(500).json({
      error: 'Failed to create checkout session',
      details: error.message
    });
  }
}
