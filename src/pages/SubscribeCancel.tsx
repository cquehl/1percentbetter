import { Link } from 'react-router-dom';

function SubscribeCancel() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-600 to-gray-700 px-8 py-12 text-white text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold mb-2">Subscription Canceled</h1>
            <p className="text-xl text-gray-100">
              No charges were made
            </p>
          </div>

          <div className="px-8 py-12">
            {/* Message */}
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">We Hope to See You Again</h2>
              <p className="text-gray-600 mb-4">
                Your subscription was not completed and no payment was processed.
              </p>
              <p className="text-gray-600">
                If you experienced any issues or have questions, please don't hesitate to reach out to us.
              </p>
            </div>

            {/* Why Subscribe */}
            <div className="mb-8 bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Support 1 Percent Better?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Direct impact on youth athletes in your community</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  <span>Transparent use of funds - 100% goes to programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Cancel anytime with no commitments</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Link
                to="/subscribe"
                className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-200"
              >
                Try Again
              </Link>
              <Link
                to="/"
                className="block w-full border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold text-center hover:bg-gray-50 transition-all duration-200"
              >
                Return to Home
              </Link>
            </div>

            {/* Alternative Support Options */}
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Other Ways to Help</h3>
              <p className="text-gray-600 mb-4">
                Not ready for a monthly subscription? There are other ways you can support our mission:
              </p>
              <div className="space-y-2">
                <Link to="/raffle" className="block text-purple-600 hover:text-purple-700 font-semibold">
                  → Purchase Raffle Tickets
                </Link>
                <Link to="/get-involved" className="block text-purple-600 hover:text-purple-700 font-semibold">
                  → Volunteer Your Time
                </Link>
                <Link to="/get-involved" className="block text-purple-600 hover:text-purple-700 font-semibold">
                  → Become a Coach
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Support Contact */}
        <div className="mt-8 text-center text-gray-600">
          <p>Have questions or feedback?{' '}
            <a href="mailto:info@1percentbetter.net" className="text-purple-600 hover:text-purple-700 font-semibold">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SubscribeCancel;
