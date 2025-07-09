import React from 'react';
import MailIcon from './MailIcon';
import styles from './Contact.module.css';

const Contact: React.FC = () => (
  <div>
    <h3 className={styles.contactTitle}>Interested in youth baseball, volleyball or wrestling?</h3>
    <h3 className={styles.contactTitle}>Get In Touch!</h3>
    <a href="mailto:onepercentbetter1@hotmail.com" className={styles.contactLink}>
      <MailIcon />
      onepercentbetter1@hotmail.com
    </a>
  </div>
);

export default Contact;