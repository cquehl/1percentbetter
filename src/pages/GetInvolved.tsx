import React from 'react';

const GetInvolved: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Your Contribution Fuels Our Mission
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Be a Part of Something Bigger
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At 1 Percent Better, our success is built on the dedication and passion of our community. We offer various opportunities for individuals to make a tangible impact on the lives of young athletes, from coaching and mentoring to administrative support. Join us in fostering growth, accountability, and faith.
            </p>
          </div>
        </div>
      </section>

      {/* How You Can Contribute Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Volunteer Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-primary hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Volunteer Your Time</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                From event support to administrative tasks, our volunteers are the backbone of our organization. Lend a hand and help us create memorable experiences for our youth.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Volunteer Opportunities:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Event coordination and support</li>
                  <li>• Equipment management</li>
                  <li>• Administrative assistance</li>
                  <li>• Fundraising activities</li>
                  <li>• Social media and marketing</li>
                </ul>
              </div>
              <a
                href="mailto:info@1percentbetter.net?subject=Volunteer%20Inquiry"
                className="btn-primary w-full text-center block"
              >
                Volunteer Inquiry Form
              </a>
            </div>

            {/* Coach Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-secondary hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Become a Coach</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Shape future leaders on and off the field. We're seeking passionate and knowledgeable coaches committed to our values of growth, accountability, and faith.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Coaching Requirements:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Sports experience preferred</li>
                  <li>• Passion for youth development</li>
                  <li>• Commitment to our values</li>
                  <li>• Background check required</li>
                  <li>• Training provided</li>
                </ul>
              </div>
              <a
                href="mailto:coaching@1percentbetter.net?subject=Coaching%20Application"
                className="btn-primary w-full text-center block"
              >
                Apply to Coach
              </a>
            </div>

            {/* General Support Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-green-500 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Other Ways to Support</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Have a specific skill or idea to contribute? We're always open to new ways to enhance our programs and community impact. Reach out and share your thoughts.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Ways to Help:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Professional skills (legal, accounting, etc.)</li>
                  <li>• Facility or equipment donations</li>
                  <li>• Sponsorship opportunities</li>
                  <li>• Community partnerships</li>
                  <li>• Special event support</li>
                </ul>
              </div>
              <a
                href="mailto:info@1percentbetter.net?subject=Support%20Ideas"
                className="btn-primary w-full text-center block"
              >
                Suggest an Idea
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Get Involved Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Why Join the 1 Percent Better Family?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Impact</h3>
              <p className="text-gray-700">Make a real difference in youth development and see the positive changes you help create.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-700">Become part of a supportive and passionate network of like-minded individuals.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Growth</h3>
              <p className="text-gray-700">Develop new skills, gain valuable experience, and grow personally and professionally.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Legacy</h3>
              <p className="text-gray-700">Help build a lasting foundation for future generations of young athletes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Your time and talent are invaluable. Contact us today to learn more about how you can become a vital part of the 1 Percent Better mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@1percentbetter.net?subject=Get%20Involved%20Inquiry"
              className="btn-secondary text-lg px-8 py-4 inline-block"
            >
              Contact Us Today
            </a>
            <a
              href="tel:+1234567890"
              className="btn-outline bg-white/10 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 inline-block"
            >
              Call Us: (123) 456-7890
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;