import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Building Better Futures,<br />
              <span className="text-secondary">One Percent At A Time</span>
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Empowering Youth Through Faith, Adversity, and Accountability
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/programs"
                className="btn-primary text-lg px-8 py-4 inline-block"
              >
                Explore Our Programs
              </Link>
              <Link
                to="/get-involved"
                className="btn-outline bg-white/10 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 inline-block"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Turning Obstacles Into Opportunities
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                At 1 Percent Better, we believe in the transformative power of youth sports. We're dedicated to fostering environments where young athletes can grow not just in skill, but in character. Through disciplined training, communal accountability, and unwavering faith, we guide them toward becoming exceptional individuals, both on and off the field.
              </p>
              <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-primary">
                <blockquote className="text-xl md:text-2xl text-gray-800 italic font-medium">
                  "As iron sharpens iron, so one person sharpens another."
                </blockquote>
                <cite className="block text-primary font-semibold mt-4">Proverbs 27:17</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Feature Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-secondary text-gray-900 rounded-full px-4 py-2 mb-4">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L19 7L14.74 12L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12L5 7L10.91 8.26L12 2Z"/>
              </svg>
              <span className="font-semibold">As Featured In</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Media Coverage</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <a
              href="https://spectrumnews1.com/oh/columbus/news/2025/06/20/wrestling-for-a-cause-"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Article Preview Card */}
              <div className="md:flex">
                {/* Article Video Thumbnail */}
                <div className="md:w-1/2 relative min-h-[300px] overflow-hidden">
                  <img 
                    src="/images/Wrestling for a cause.png" 
                    alt="Youth wrestlers training at 1 Percent Better - Spectrum News 1 coverage" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <p className="text-lg font-semibold">Watch the Story</p>
                      <p className="text-sm text-gray-200">Click to view article</p>
                    </div>
                  </div>
                </div>
                
                {/* Article Content */}
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <img 
                      src="https://spectrumnews1.com/content/dam/news/common/spectrum-news-logo-black.png" 
                      alt="Spectrum News 1" 
                      className="h-6"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling.style.display = 'block';
                      }}
                    />
                    <span className="text-primary font-bold text-lg hidden">Spectrum News 1</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    Wrestling for a Cause
                  </h3>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    "1 Percent Better is making a significant impact in the Columbus community through their innovative approach to youth development. The organization combines wrestling training with character building, helping young athletes develop both physical and mental strength."
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">June 20, 2025</span>
                    <div className="flex items-center gap-1 text-primary">
                      <span className="text-sm font-medium">Read Full Article</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>



      {/* Sports Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Developing Champions In
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Baseball Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/Baseball.jpg" 
                  alt="Baseball training at 1 Percent Better" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Baseball</h3>
                <p className="text-gray-700 mb-6">
                  Honing fundamentals and teamwork on the diamond with a focus on discipline and sportsmanship. Our baseball program builds character through America's pastime.
                </p>
                <Link
                  to="/programs#baseball"
                  className="btn-primary inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Volleyball Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/Volleyball.jpg" 
                  alt="Volleyball training at 1 Percent Better" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Volleyball</h3>
                <p className="text-gray-700 mb-6">
                  Building communication, trust, and perseverance through dynamic team play. Our volleyball program emphasizes unity and collective achievement.
                </p>
                <Link
                  to="/programs#volleyball"
                  className="btn-primary inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Wrestling Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/Wrestling.jpg" 
                  alt="Wrestling training at 1 Percent Better" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Wrestling</h3>
                <p className="text-gray-700 mb-6">
                  Developing mental toughness, self-discipline, and resilience through individual challenge and growth. Wrestling builds the person in the mirror.
                </p>
                <Link
                  to="/programs#wrestling"
                  className="btn-primary inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Hear From Our Community
            </h2>
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-800 italic mb-6">
                "1 Percent Better has truly changed my son's outlook on sports and life. The emphasis on character development alongside athletic skills is invaluable. We've seen tremendous growth in his confidence and leadership abilities."
              </blockquote>
              <cite className="text-primary font-semibold text-lg">
                - Sarah Johnson, Parent
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Make a Difference
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Our community thrives on dedicated individuals who share our vision. Whether you're a coach, mentor, or supporter, there's a place for you to contribute to the next generation.
          </p>
          <Link
            to="/get-involved"
            className="btn-secondary text-lg px-8 py-4 inline-block"
          >
            Join Our Team
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;