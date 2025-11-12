import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

function SubscribeSuccess() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    // Optionally fetch session details from your backend
    // For now, we'll just show a generic success message
    if (sessionId) {
      console.log('Checkout session:', sessionId);
      // You could fetch session details here if needed
    }
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Success Icon */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 px-8 py-12 text-white text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold mb-2">Welcome to the Team!</h1>
            <p className="text-xl text-green-100">
              Your subscription is now active
            </p>
          </div>

          <div className="px-8 py-12">
            {/* Confirmation Message */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You for Your Support!</h2>
              <p className="text-gray-600 mb-4">
                Your monthly contribution will make a real difference in the lives of young athletes. Together, we're helping them become 1% better every day.
              </p>
              <p className="text-gray-600">
                You'll receive a confirmation email shortly with your receipt and subscription details.
              </p>
            </div>

            {/* What's Next */}
            <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What Happens Next?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">1.</span>
                  <span>Check your email for a confirmation receipt from Stripe</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">2.</span>
                  <span>You'll be charged $25/month on this same day each month</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">3.</span>
                  <span>Receive monthly updates on how your support is making an impact</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">4.</span>
                  <span>Access your subscription portal anytime to update payment methods or cancel</span>
                </li>
              </ul>
            </div>

            {/* Manage Subscription */}
            <div className="mb-8 p-6 border-2 border-purple-200 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Manage Your Subscription</h3>
              <p className="text-gray-600 mb-4">
                You can update your payment method, billing information, or cancel your subscription at any time through the Stripe Customer Portal.
              </p>
              <button
                onClick={() => {
                  // This would call your portal session endpoint
                  alert('Customer portal integration coming soon! You can manage your subscription directly from emails you receive from Stripe.');
                }}
                className="text-purple-600 font-semibold hover:text-purple-700 underline"
              >
                Manage Subscription →
              </button>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Link
                to="/"
                className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-200"
              >
                Return to Home
              </Link>
              <Link
                to="/programs"
                className="block w-full border-2 border-purple-600 text-purple-600 py-3 px-6 rounded-lg font-semibold text-center hover:bg-purple-50 transition-all duration-200"
              >
                Explore Our Programs
              </Link>
            </div>
          </div>
        </div>

        {/* Support Contact */}
        <div className="mt-8 text-center text-gray-600">
          <p>Questions or issues?{' '}
            <a href="mailto:info@1percentbetter.net" className="text-purple-600 hover:text-purple-700 font-semibold">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SubscribeSuccess;
