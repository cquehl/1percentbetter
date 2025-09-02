import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Building Character, Fostering Community, Guiding Futures
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To empower youth through sports, instilling principles of growth, accountability, and faith, enabling them to reach their fullest potential as athletes and individuals.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To create a nationwide network of supportive sports communities where every young person has the opportunity to develop strong character, valuable life skills, and a deep sense of belonging.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Values</h3>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Growth:</strong> Continuous personal and athletic improvement</li>
                <li><strong>Accountability:</strong> Taking responsibility for actions and commitments</li>
                <li><strong>Faith:</strong> Building a foundation of spiritual and moral strength</li>
                <li><strong>Integrity:</strong> Upholding strong ethical principles</li>
                <li><strong>Community:</strong> Fostering a supportive and inclusive environment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              The Journey of 1 Percent Better
            </h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-700 mb-6 leading-relaxed">
                1 Percent Better was founded on the belief that true athletic development extends beyond the scoreboard. Born from a passion for mentoring young athletes and a desire to integrate core life principles into sports, our journey began with a simple yet powerful concept: that small, consistent improvements compound into extraordinary transformation.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our founders recognized that youth sports had the unique power to teach invaluable life lessons - discipline, perseverance, teamwork, and character. However, they also saw that many programs focused solely on winning games rather than developing winners in life. This realization sparked the creation of an organization that would prioritize both athletic excellence and character development.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The "1 Percent Better" philosophy emerged from understanding that meaningful change doesn't happen overnight. Instead, it's the result of consistent, daily commitment to improvement. Whether it's perfecting a baseball swing, mastering a volleyball serve, or building mental toughness through wrestling, our programs emphasize the process of growth over the outcome of any single competition.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we continue to expand our reach, always staying true to our core mission of empowering youth through the transformative combination of sports, accountability, and faith. Every young athlete who joins our programs becomes part of a legacy built on the foundation that everyone has the potential to become 1 percent better, every single day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Dedicated Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the passionate individuals who make our mission possible
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">John Doe</h3>
                <p className="text-primary font-medium mb-3">Founder & Executive Director</p>
                <p className="text-gray-700 text-sm">
                  Passionate about youth development with over 15 years of coaching experience. Believes in the power of sports to transform lives.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Jane Smith</h3>
                <p className="text-primary font-medium mb-3">Program Director</p>
                <p className="text-gray-700 text-sm">
                  Former collegiate athlete dedicated to creating inclusive and supportive environments for all young athletes to thrive.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mike Johnson</h3>
                <p className="text-primary font-medium mb-3">Lead Wrestling Coach</p>
                <p className="text-gray-700 text-sm">
                  Specializes in character building through wrestling, helping athletes develop mental toughness and personal discipline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Making a Difference</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Every day, 1 Percent Better is shaping lives and strengthening communities. Learn more about the tangible impact we're making and how you can be a part of it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">500+</div>
              <div className="text-gray-200">Youth Athletes Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">50+</div>
              <div className="text-gray-200">Dedicated Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">3</div>
              <div className="text-gray-200">Sports Programs</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;