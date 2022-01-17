import React from 'react';

import soon from 'assets/soon.png';

import styles from 'components/molecules/SoonPortfolioItem/SoonPortfolioItem.module.scss';
export const SoonPortfolioItem = () => {
  return (
    <li className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <h1 className={styles.box__h1}>
            Here is my project - I'll add soon :)
          </h1>
          <p className={styles.box__p}>Technology stack: React</p>
          <p className={styles.box__check}>Check this project </p>
        </div>
        <img className={styles.wrapper__img} src={soon} alt="soon"></img>
      </div>
    </li>
  );
};
