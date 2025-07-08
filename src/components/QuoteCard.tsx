import React from 'react';
import styles from './QuoteCard.module.css';

const QuoteCard: React.FC = () => (
  <div className={styles.quoteSection}>
    <blockquote className={styles.blockquote}>
      <p className={styles.quoteText}>
        "As iron sharpens iron, so one person sharpens another."
      </p>
      <cite className={styles.quoteCite}>Proverbs 27:17</cite>
    </blockquote>
  </div>
);

export default QuoteCard;