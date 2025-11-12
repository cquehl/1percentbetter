# Stripe Recurring Payments Setup Guide

This guide will walk you through setting up Stripe recurring payments for the 1 Percent Better website.

## Overview

The implementation includes:
- **Monthly subscription checkout** using Stripe Checkout
- **Customer Portal** for subscription management (update payment, cancel, etc.)
- **Webhook handling** for real-time subscription updates
- **Serverless functions** deployed on Vercel

## Prerequisites

1. **Stripe Account**: Sign up at [stripe.com](https://stripe.com)
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com) (free tier is sufficient)
3. **Node.js**: Version 18 or higher

## Step 1: Create a Stripe Product

1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com)
2. Go to **Products** → **Add Product**
3. Fill in the details:
   - **Name**: "Monthly Supporter" (or your preferred name)
   - **Description**: "Monthly recurring support for 1 Percent Better"
   - **Pricing Model**: Recurring
   - **Price**: $25 (or your desired amount)
   - **Billing Period**: Monthly
4. Click **Save Product**
5. **Copy the Price ID** (starts with `price_`) - you'll need this later

## Step 2: Get Your Stripe API Keys

1. In the Stripe Dashboard, go to **Developers** → **API Keys**
2. You'll see two keys:
   - **Publishable key** (starts with `pk_test_` or `pk_live_`)
   - **Secret key** (starts with `sk_test_` or `sk_live_`) - Click "Reveal test key"
3. **Important**: Start with TEST keys for development
4. Copy both keys - you'll need them in the next step

## Step 3: Set Up Local Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Open `.env.local` and fill in your values:
   ```bash
   # Stripe API Keys
   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
   STRIPE_SECRET_KEY=sk_test_your_key_here
   STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here  # Leave empty for now

   # Your Stripe Price ID from Step 1
   VITE_STRIPE_PRICE_ID=price_your_price_id_here

   # Your app URL
   VITE_APP_URL=http://localhost:5173  # For local development
   ```

3. **Never commit `.env.local` to git!** It's already in `.gitignore`

## Step 4: Test Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Visit `http://localhost:5173/subscribe` in your browser

4. **Test the checkout** using Stripe's test card numbers:
   - Card number: `4242 4242 4242 4242`
   - Expiration: Any future date
   - CVC: Any 3 digits
   - ZIP: Any 5 digits

**Note**: Local testing won't process webhooks yet. You'll set that up after deploying to Vercel.

## Step 5: Deploy to Vercel

1. **Install Vercel CLI** (optional but recommended):
   ```bash
   npm install -g vercel
   ```

2. **Connect your repository to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the React/Vite setup

3. **Configure Environment Variables in Vercel**:
   - In your Vercel project settings, go to **Settings** → **Environment Variables**
   - Add the following variables:
     ```
     VITE_STRIPE_PUBLISHABLE_KEY = pk_test_your_key_here
     STRIPE_SECRET_KEY = sk_test_your_key_here
     VITE_STRIPE_PRICE_ID = price_your_price_id_here
     VITE_APP_URL = https://your-domain.vercel.app (or your custom domain)
     ```
   - Apply to: **Production, Preview, and Development**

4. **Deploy**:
   ```bash
   vercel --prod
   ```

## Step 6: Set Up Stripe Webhooks

Webhooks notify your application when subscription events occur (payments, cancellations, etc.).

1. Go to **Stripe Dashboard** → **Developers** → **Webhooks**
2. Click **Add Endpoint**
3. **Endpoint URL**: `https://your-domain.vercel.app/api/webhooks`
4. **Description**: "1 Percent Better Subscription Webhooks"
5. **Select events to listen to**:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
6. Click **Add Endpoint**
7. **Copy the Signing Secret** (starts with `whsec_`)
8. Add it to Vercel environment variables:
   - Variable name: `STRIPE_WEBHOOK_SECRET`
   - Value: `whsec_your_webhook_secret_here`
9. Redeploy your application for the change to take effect

## Step 7: Test the Complete Flow

1. Visit your deployed site: `https://your-domain.vercel.app/subscribe`
2. Click "Become a Monthly Supporter"
3. Use test card: `4242 4242 4242 4242`
4. Complete the checkout
5. You should be redirected to the success page
6. Check **Stripe Dashboard** → **Customers** to see the new subscriber
7. Check **Stripe Dashboard** → **Webhooks** → your endpoint to see the webhook events

## Step 8: Going Live (Production)

When you're ready to accept real payments:

1. **Activate your Stripe account**:
   - Complete business verification in Stripe Dashboard
   - Add bank account for payouts

2. **Replace test keys with live keys**:
   - Get live keys from **Stripe Dashboard** → **Developers** → **API Keys**
   - Update Vercel environment variables with live keys:
     - `pk_live_...` for publishable key
     - `sk_live_...` for secret key

3. **Create live webhook endpoint**:
   - Create a new webhook endpoint in live mode
   - Use the same URL: `https://your-domain.vercel.app/api/webhooks`
   - Update `STRIPE_WEBHOOK_SECRET` with the live webhook secret

4. **Create live product**:
   - Create the same product in live mode
   - Update `VITE_STRIPE_PRICE_ID` with the live price ID

5. **Test with a real card** (yours!) before announcing

## Monitoring Subscriptions

### In Stripe Dashboard

- **Customers**: View all subscribers, emails, payment methods
- **Subscriptions**: See active, past_due, canceled subscriptions
- **Payments**: View all successful and failed payments
- **Balance**: See your available funds

### Customer Portal

Customers can manage their own subscriptions:
- Update payment methods
- View invoices and receipts
- Cancel subscription
- Update billing information

Access via the link sent in Stripe emails or implement the portal button in your app.

## Querying Customer Data

You can access customer data in multiple ways:

### 1. Stripe Dashboard (Manual)
- Search by name, email, or customer ID
- Export to CSV

### 2. Stripe API (Programmatic)
```javascript
// List all customers
const customers = await stripe.customers.list({
  limit: 100,
});

// Search for specific customer
const results = await stripe.customers.search({
  query: 'email:"customer@example.com"',
});

// Get subscription details
const subscription = await stripe.subscriptions.retrieve('sub_xxxxx');
```

### 3. Webhook Events (Real-time)
The `/api/webhooks.js` function receives real-time updates. You can extend it to:
- Save to your own database
- Send confirmation emails
- Update user access
- Trigger other automations

## Pricing and Subscription Tiers

To add multiple pricing tiers:

1. Create additional products in Stripe
2. Get each Price ID
3. Update the Subscribe page to show multiple options
4. Pass the selected `priceId` to the checkout session

Example subscription tiers:
- Basic Supporter: $10/month (`price_xxxxx1`)
- Standard Supporter: $25/month (`price_xxxxx2`)
- Premium Supporter: $100/month (`price_xxxxx3`)

## Troubleshooting

### "Stripe failed to load"
- Check that `VITE_STRIPE_PUBLISHABLE_KEY` is set correctly
- Make sure the key starts with `pk_`

### Checkout session not creating
- Check server logs in Vercel Dashboard → Functions → Logs
- Verify `STRIPE_SECRET_KEY` is set
- Verify `STRIPE_PRICE_ID` is correct

### Webhooks not working
- Verify the webhook URL in Stripe matches your deployed URL
- Check `STRIPE_WEBHOOK_SECRET` is set correctly
- View webhook attempts in Stripe Dashboard → Webhooks

### Local webhook testing
Use the Stripe CLI for local webhook testing:
```bash
stripe listen --forward-to localhost:5173/api/webhooks
```

## Security Best Practices

1. ✅ **Never commit API keys** - They're in `.gitignore`
2. ✅ **Use environment variables** - All keys are in env vars
3. ✅ **Verify webhook signatures** - Already implemented
4. ✅ **Use HTTPS in production** - Vercel provides this automatically
5. ✅ **Keep Stripe.js up to date** - Update dependencies regularly

## Support

- **Stripe Documentation**: [stripe.com/docs](https://stripe.com/docs)
- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Stripe Support**: Contact via Stripe Dashboard

## Next Steps / Future Enhancements

- [ ] Add customer portal button on success page
- [ ] Send custom confirmation emails (using Sendgrid/Mailgun)
- [ ] Add database to store additional customer data
- [ ] Create admin dashboard to view subscribers
- [ ] Add promotional codes/discounts
- [ ] Implement trial periods
- [ ] Add annual subscription option
- [ ] Email receipts with more branding

---

**Questions?** Contact the development team or refer to the code comments in:
- `/src/pages/Subscribe.tsx` - Frontend checkout page
- `/api/create-checkout-session.js` - Checkout session creation
- `/api/webhooks.js` - Webhook event handling
- `/api/create-portal-session.js` - Customer portal access
