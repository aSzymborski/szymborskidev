import React from 'react';
import { HomePageProvider } from 'providers/HomePageProvider';

import styles from 'components/templates/HomePage/HomePage.module.scss';
import { Link } from 'react-router-dom';
export const HomePage = () => {
  return (
    <HomePageProvider>
      <section className={styles.container}>
        <p className={styles.container__p}>Hi, I'm Adrian.</p>
        <h1 className={styles.container__h1}>
          Frontend <br /> developer.
        </h1>
        <div className={styles.container__fillDiv}></div>
        <Link to="/aboutme">
          <p className={styles.container__learnMore}>Learn more</p>
        </Link>
      </section>
    </HomePageProvider>
  );
};
