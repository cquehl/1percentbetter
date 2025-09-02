import React from 'react';

const Programs: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Fostering Excellence in Baseball, Volleyball, and Wrestling
            </p>
          </div>
        </div>
      </section>

      {/* Program Navigation */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Discover Your Sport</h2>
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6">
              <a href="#baseball" className="btn-outline">Baseball</a>
              <a href="#volleyball" className="btn-outline">Volleyball</a>
              <a href="#wrestling" className="btn-outline">Wrestling</a>
            </div>
          </div>
        </div>
      </section>

      {/* Baseball Program */}
      <section id="baseball" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="text-6xl">⚾</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Baseball Program</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our Baseball program focuses on fundamental skills, strategic gameplay, and character development. Athletes learn discipline, teamwork, and resilience through rigorous training and competitive play. We emphasize sportsmanship and personal growth, preparing them for success on and off the field.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Through America's pastime, we teach the importance of preparation, patience, and perseverance. Every practice builds not just baseball skills, but life skills that extend far beyond the diamond.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our experienced coaches focus on proper technique, mental toughness, and the development of leadership qualities that will serve players throughout their lives.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Age Groups:</h4>
                  <p className="text-gray-700">Ages 8-10, 11-13, 14-18</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Training Focus:</h4>
                  <p className="text-gray-700">Pitching, Hitting, Fielding Drills, Game Strategy</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Season Duration:</h4>
                  <p className="text-gray-700">Spring (March-May), Fall (September-November)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Practice Schedule:</h4>
                  <p className="text-gray-700">2-3 times per week, schedule TBD</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Values Emphasized:</h4>
                  <p className="text-gray-700">Teamwork, Discipline, Focus, Sportsmanship</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Eligibility & Requirements:</h4>
                <p className="text-gray-700 mb-6">
                  Open to all skill levels. Requires basic equipment and a positive attitude. Medical waiver required.
                </p>
                <a href="mailto:info@1percentbetter.net?subject=Baseball%20Registration" className="btn-primary">
                  Register for Baseball
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volleyball Program */}
      <section id="volleyball" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Highlights</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Age Groups:</h4>
                    <p className="text-gray-700">Ages 10-12, 13-15, 16-18</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Training Focus:</h4>
                    <p className="text-gray-700">Serving, Passing, Setting, Hitting, Team Strategy</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Season Duration:</h4>
                    <p className="text-gray-700">Fall (August-November), Spring (January-April)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Practice Schedule:</h4>
                    <p className="text-gray-700">3-4 times per week, schedule TBD</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Values Emphasized:</h4>
                    <p className="text-gray-700">Communication, Trust, Perseverance, Unity</p>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Eligibility & Requirements:</h4>
                  <p className="text-gray-700 mb-6">
                    Open to all skill levels. Basic volleyball knowledge helpful but not required. Medical waiver required.
                  </p>
                  <a href="mailto:info@1percentbetter.net?subject=Volleyball%20Registration" className="btn-primary">
                    Register for Volleyball
                  </a>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-6">
                <span className="text-6xl">🏐</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Volleyball Program</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our Volleyball program builds communication, trust, and perseverance through dynamic team play. Athletes develop both individual skills and collective teamwork, learning that success comes through unity and mutual support.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Volleyball teaches the importance of constant communication, quick decision-making, and supporting teammates. Every point is a team effort, and every practice reinforces the value of working together toward a common goal.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our coaching staff emphasizes proper technique, strategic thinking, and the mental aspects of the game, helping athletes develop confidence both on and off the court.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wrestling Program */}
      <section id="wrestling" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="text-6xl">🤼</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Wrestling Program</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our Wrestling program develops mental toughness, self-discipline, and resilience through individual challenge and growth. Wrestling builds the "person in the mirror" - fostering inner strength, determination, and the courage to face any challenge.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                This sport demands complete dedication, teaching athletes that success comes from consistent effort, proper preparation, and the willingness to push beyond comfort zones. Every practice is an opportunity to become 1 percent better.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through wrestling, athletes learn that they can overcome any obstacle through hard work, mental fortitude, and unwavering commitment to improvement.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Age Groups:</h4>
                  <p className="text-gray-700">Ages 6-8, 9-12, 13-15, 16-18</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Training Focus:</h4>
                  <p className="text-gray-700">Technique, Mental Toughness, Conditioning, Character Development</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Season Duration:</h4>
                  <p className="text-gray-700">Year-round training with competition seasons</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Practice Schedule:</h4>
                  <p className="text-gray-700">4-5 times per week, schedule TBD</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Values Emphasized:</h4>
                  <p className="text-gray-700">Self-Discipline, Mental Toughness, Resilience, Personal Growth</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Eligibility & Requirements:</h4>
                <p className="text-gray-700 mb-6">
                  Open to all skill levels. Requires dedication and commitment to training. Medical waiver required.
                </p>
                <a href="mailto:info@1percentbetter.net?subject=Wrestling%20Registration" className="btn-primary">
                  Register for Wrestling
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* General Inquiry Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Have Questions About Our Programs?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Our team is here to help. Reach out if you need more details on eligibility, schedules, or anything else about our programs.
          </p>
          <a
            href="mailto:info@1percentbetter.net?subject=Program%20Inquiry"
            className="btn-secondary text-lg px-8 py-4 inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Programs;