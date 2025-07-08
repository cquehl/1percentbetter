import React from 'react';

// SVG Icon for the mail link
const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ marginRight: '0.75rem', height: '1.25rem', width: '1.25rem' }}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

function App() {
  // The new hybrid color palette you provided
  const colors = {
    primaryDark: '#380a3e', // Your deep purple
    accent: '#c32cd6',       // Your vibrant purple accent
    quoteBackground: '#f2eaf4', // A lighter version of your background for better contrast
    textPrimary: '#212529',
    textSecondary: '#6c757d',
    white: '#FFFFFF',
  };

  const styles = {
    page: {
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      fontFamily: '"Inter", "system-ui", "Avenir", "Helvetica", "Arial", sans-serif',
      // Using your new dark purple for the background gradient
      background: `linear-gradient(135deg, ${colors.primaryDark}, #1a021d)`,
    },
    mainCard: {
      width: '100%',
      maxWidth: '650px',
      margin: '0 auto',
      borderRadius: '1rem',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      overflow: 'hidden',
      backgroundColor: colors.white,
      textAlign: 'center',
    },
    cardContent: {
      padding: '2.5rem',
    },
    logoHeader: {
      fontSize: '3rem',
      fontWeight: '800',
      letterSpacing: '-0.025em',
      color: colors.textPrimary, // Dark text on the white card
      marginBottom: '0.5rem',
    },
    accentBar: {
      width: '4rem',
      height: '0.25rem',
      margin: '0 auto 2rem auto',
      backgroundColor: colors.accent, // Using your vibrant purple
    },
    comingSoonTitle: {
      fontSize: '2.25rem',
      fontWeight: '700',
      color: colors.textPrimary,
      marginBottom: '1rem',
      lineHeight: '1.2',
    },
    comingSoonText: {
      fontSize: '1.125rem',
      color: colors.textSecondary,
      marginBottom: '2.5rem',
    },
    quoteSection: {
      padding: '1.5rem',
      borderRadius: '0.75rem',
      backgroundColor: colors.quoteBackground, // Using a light purple for the quote box
      margin: '2.5rem 0',
      borderLeft: `4px solid ${colors.accent}`, // Vibrant purple border
    },
    quoteText: {
      fontFamily: 'serif',
      fontSize: '1.5rem',
      fontStyle: 'italic',
      color: colors.primaryDark, // Deep purple text for the quote
      lineHeight: '1.6',
    },
    quoteCite: {
      display: 'block',
      textAlign: 'right',
      marginTop: '0.5rem',
      color: colors.textSecondary,
      fontStyle: 'normal',
    },
    contactTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: colors.textPrimary,
      marginBottom: '0.75rem',
    },
    contactLink: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0.75rem 1.5rem',
      border: '1px solid transparent',
      fontSize: '1rem',
      fontWeight: '500',
      borderRadius: '0.5rem',
      textDecoration: 'none',
      backgroundColor: colors.primaryDark, // Deep purple button
      color: colors.white,
      transition: 'background-color 0.3s ease, transform 0.2s ease',
    },
    footer: {
      padding: '1rem',
      backgroundColor: colors.primaryDark, // Deep purple footer
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: '0.875rem',
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.mainCard}>
        <div style={styles.cardContent}>
          <h1 style={styles.logoHeader}>1 PERCENT BETTER</h1>
          <div style={styles.accentBar}></div>

          <h2 style={styles.comingSoonTitle}>Our New Home is Coming Soon</h2>
          <p style={styles.comingSoonText}>
            We're building a community dedicated to growth, accountability, and faith. Stay tuned for our official launch.
          </p>

          <div style={styles.quoteSection}>
            <blockquote style={{ margin: 0, padding: 0 }}>
              <p style={styles.quoteText}>
                "As iron sharpens iron, so one person sharpens another."
              </p>
              <cite style={styles.quoteCite}>Proverbs 27:17</cite>
            </blockquote>
          </div>

          <div>
            <h3 style={styles.contactTitle}>Interested in youth baseball, volleyball or wrestling?</h3>
            <h3 style={styles.contactTitle}>Get In Touch!</h3>
            <a
              href="mailto:info@1percentbetter.org"
              style={styles.contactLink}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = colors.accent; // Vibrant purple on hover
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = colors.primaryDark;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <MailIcon />
              info@1percentbetter.org
            </a>
          </div>
        </div>

        <div style={styles.footer}>
          <p style={{ margin: 0 }}>
            &copy; {new Date().getFullYear()} 1% Better. A 501(c)(3) non-profit organization.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
