import React from 'react';
import Header from './components/Header';
import QuoteCard from './components/QuoteCard';
import Contact from './components/Contact';
import Footer from './components/Footer';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.mainCard}>
        <Header />
        <div className={styles.cardContent}>
          <QuoteCard />
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;