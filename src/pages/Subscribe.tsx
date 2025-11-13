import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

function Subscribe() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubscribe = async () => {
    try {
      setLoading(true);
      setError(null);

      // Call your serverless function to create a checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: import.meta.env.VITE_STRIPE_PRICE_ID,
          successUrl: `${window.location.origin}/subscribe/success?session_id={CHECKOUT_SESSION_ID}`,
          cancelUrl: `${window.location.origin}/subscribe/cancel`,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create checkout session');
      }

      const { sessionId } = await response.json();

      // Redirect to Stripe Checkout
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Stripe failed to load');
      }

      const { error: stripeError } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (stripeError) {
        throw new Error(stripeError.message);
      }
    } catch (err) {
      console.error('Error:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Join 1 Percent Better
          </h1>
          <p className="text-xl text-gray-600">
            Support youth athletes and help them become 1% better every day
          </p>
        </div>

        {/* Subscription Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-2">Monthly Supporter</h2>
            <div className="flex items-baseline justify-center gap-2 mb-4">
              <span className="text-5xl font-bold">$25</span>
              <span className="text-xl text-purple-100">/month</span>
            </div>
            <p className="text-purple-100 text-lg">
              Cancel anytime • No commitment required
            </p>
          </div>

          <div className="px-8 py-12">
            {/* Benefits */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What Your Support Provides:</h3>
              <ul className="space-y-4">
                <BenefitItem text="Help fund equipment and facilities for youth athletes" />
                <BenefitItem text="Support coaching and training programs in baseball, volleyball, and wrestling" />
                <BenefitItem text="Enable scholarships for underprivileged youth" />
                <BenefitItem text="Build character, discipline, and resilience in the next generation" />
                <BenefitItem text="Receive monthly updates on program impact" />
                <BenefitItem text="Access to exclusive community events" />
              </ul>
            </div>

            {/* Call to Action */}
            <div className="space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              <button
                onClick={handleSubscribe}
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  'Become a Monthly Supporter'
                )}
              </button>

              <p className="text-center text-sm text-gray-500">
                Secure payment powered by <span className="font-semibold">Stripe</span>
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg px-8 py-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
          <div className="space-y-6">
            <FAQItem
              question="Can I cancel anytime?"
              answer="Yes! You can cancel your subscription at any time through your account portal. No questions asked."
            />
            <FAQItem
              question="Is my payment information secure?"
              answer="Absolutely. We use Stripe, a PCI-compliant payment processor trusted by millions. We never store your card information."
            />
            <FAQItem
              question="How will my contribution be used?"
              answer="100% of monthly contributions go directly to supporting our youth sports programs, including equipment, coaching, facilities, and scholarships."
            />
            <FAQItem
              question="Will I receive a receipt?"
              answer="Yes! You'll receive an email receipt after each monthly payment. These receipts can be used for tax deduction purposes as we are a 501(c)(3) organization."
            />
          </div>
        </div>

        {/* Contact */}
        <div className="mt-12 text-center text-gray-600">
          <p>Questions? Contact us at{' '}
            <a href="mailto:info@1percentbetter.net" className="text-purple-600 hover:text-purple-700 font-semibold">
              info@1percentbetter.net
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

// Helper component for benefit items
function BenefitItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <span className="text-gray-700">{text}</span>
    </li>
  );
}

// Helper component for FAQ items
function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div>
      <h4 className="text-lg font-semibold text-gray-900 mb-2">{question}</h4>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
}

export default Subscribe;
