import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => (
  <div className={styles.headerContainer}>
    <h1 className={styles.logoHeader}>1 PERCENT BETTER</h1>
    <div className={styles.accentBar}></div>
    <h2 className={styles.comingSoonTitle}>Our New Home is Coming Soon</h2>
    <p className={styles.comingSoonText}>
      We're building a community dedicated to growth, accountability, and faith. Stay tuned for our official launch.
    </p>
  </div>
);

export default Header;