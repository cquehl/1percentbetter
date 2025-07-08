import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => (
  <div className={styles.footer}>
    <p style={{ margin: 0 }}>
      &copy; {new Date().getFullYear()} 1 Percent Better. A 501(c)(3) non-profit organization.
    </p>
  </div>
);

export default Footer;