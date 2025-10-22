import { Link } from 'react-router-dom';

const Raffle: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 rounded-full px-5 py-2.5 mb-6 shadow-lg shadow-amber-400/40 animate-pulse">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L19 7L14.74 12L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12L5 7L10.91 8.26L12 2Z"/>
              </svg>
              <span className="font-bold text-sm tracking-wide uppercase">Limited Time</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">1% Better Raffle</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Support Our Baseball and Wrestling Programs & Win Amazing Prizes!
            </p>
          </div>
        </div>
      </section>

      {/* Raffle Image Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg shadow-2xl overflow-hidden">
            <img
              src="/images/1PercentBetterRaffle.jpg"
              alt="1% Better Raffle - Support Baseball and Wrestling Programs"
              className="w-full h-auto"
            />
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Scan the QR code above or add your name, phone number, and number of tickets on a Venmo note
            </p>
            <a
              href="https://venmo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4 inline-block"
            >
              Open Venmo to Purchase Tickets
            </a>
          </div>
        </div>
      </section>

      {/* Prize Details Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Amazing Prizes</h2>
            <p className="text-xl text-gray-600">Enter for a chance to win one of these incredible prizes!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-6 border-2 border-amber-400 shadow-md">
              <div className="text-amber-600 font-bold text-lg mb-2">🏆 Grand Prize</div>
              <p className="text-gray-800 font-semibold">¼ COW - Roughly 120 lbs of Meat</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-300 shadow-md">
              <div className="text-primary font-bold text-lg mb-2">🎁 2nd Prize</div>
              <p className="text-gray-800 font-semibold">$500 Gift Card - Porter Landscaping</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-300 shadow-md">
              <div className="text-primary font-bold text-lg mb-2">🎁 3rd Prize</div>
              <p className="text-gray-800 font-semibold">$100 Gift Card - Better Blends</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-300 shadow-md">
              <div className="text-primary font-bold text-lg mb-2">🎁 4th Prize</div>
              <p className="text-gray-800 font-semibold">$500 Gift Card - Heritage Brooke Traveling Bar</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-300 shadow-md">
              <div className="text-primary font-bold text-lg mb-2">🎁 5th Prize</div>
              <p className="text-gray-800 font-semibold">$500 Business Strategy and Data Analysis Meeting - 2 Hour Session</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ticket Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ticket Pricing</h2>
            <p className="text-xl text-gray-600">Get more tickets, increase your chances!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-lg border-t-4 border-primary text-center">
              <div className="text-5xl font-bold text-primary mb-2">$20</div>
              <div className="text-2xl text-gray-700 font-semibold mb-4">1 Ticket</div>
              <p className="text-gray-600">Single entry into the raffle</p>
            </div>

            <div className="bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg p-8 shadow-xl text-center transform hover:scale-105 transition-transform duration-300">
              <div className="inline-block bg-white text-amber-600 text-xs font-bold px-3 py-1 rounded-full mb-2">
                BEST VALUE
              </div>
              <div className="text-5xl font-bold text-gray-900 mb-2">$100</div>
              <div className="text-2xl text-gray-900 font-semibold mb-4">6 Tickets</div>
              <p className="text-gray-800 font-medium">6x the chances to win!</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Enter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How to Enter</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scan QR Code</h3>
              <p className="text-gray-700">Use your phone camera to scan the QR code on the raffle flyer above</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Add Info to Venmo</h3>
              <p className="text-gray-700">Include your name, phone number, and number of tickets in the Venmo note</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Payment</h3>
              <p className="text-gray-700">Submit your payment and you're entered to win amazing prizes!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Support Our Youth Athletes Today
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Every ticket purchased directly supports our baseball and wrestling programs, helping young athletes grow in skill, character, and faith.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://venmo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-8 py-4 inline-block"
            >
              Buy Tickets Now
            </a>
            <Link
              to="/programs"
              className="btn-outline bg-white/10 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 inline-block"
            >
              Learn About Our Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Raffle;
