import React from 'react';

// SVG Icon for the mail link for a nice visual touch.
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
  // Color palette from your style guide PDF
  const colors = {
    primaryDark: '#0A2342',
    accent: '#FFB703',
    background: '#F8F9FA',
    textPrimary: '#212529',
    textSecondary: '#6c757d',
    white: '#FFFFFF',
  };

  // Inline styles for easy application without needing a CSS framework setup
  const styles = {
    page: {
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      fontFamily: '"Inter", "system-ui", "Avenir", "Helvetica", "Arial", sans-serif',
      background: `linear-gradient(135deg, ${colors.primaryDark}, #000000)`,
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
      color: colors.primaryDark,
      marginBottom: '0.5rem',
    },
    accentBar: {
      width: '4rem',
      height: '0.25rem',
      margin: '0 auto 2rem auto',
      backgroundColor: colors.accent,
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
      backgroundColor: colors.background,
      margin: '2.5rem 0',
      borderLeft: `4px solid ${colors.accent}`,
    },
    quoteText: {
      fontFamily: 'serif',
      fontSize: '1.5rem',
      fontStyle: 'italic',
      color: colors.primaryDark,
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
      backgroundColor: colors.primaryDark,
      color: colors.white,
      transition: 'background-color 0.3s ease, transform 0.2s ease',
    },
    footer: {
      padding: '1rem',
      backgroundColor: colors.primaryDark,
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: '0.875rem',
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.mainCard}>
        <div style={styles.cardContent}>
          <h1 style={styles.logoHeader}>1% BETTER</h1>
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
            <h3 style={styles.contactTitle}>Get In Touch</h3>
            <a
              href="mailto:info@1percentbetter.org"
              style={styles.contactLink}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = colors.accent;
                e.currentTarget.style.color = colors.primaryDark;
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = colors.primaryDark;
                e.currentTarget.style.color = colors.white;
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
