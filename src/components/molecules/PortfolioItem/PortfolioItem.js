import React from 'react';
import dailycious from 'assets/dailycious.png';
import styles from 'components/molecules/PortfolioItem/PortfolioItem.module.scss';
export const PortfolioItem = () => {
  return (
    <li className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <h1 className={styles.box__h1}>Dailycious</h1>
          <p className={styles.box__p}>
            Technology stack: React, Directus CMS{' '}
          </p>
          <p className={styles.box__check}>Check this project </p>
        </div>
        <img
          className={styles.wrapper__img}
          src={dailycious}
          alt="dailycious"
        ></img>
      </div>
    </li>
  );
};
