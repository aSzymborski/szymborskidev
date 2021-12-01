import React from 'react';

import dailycious from 'assets/dailycious.png';
import styles from 'components/organisms/Portfolio/Portfolio.module.scss';
export const Portfolio = () => {
  return (
    <section id="mywork" className={styles.container}>
      <h3 className={styles.container__title}>My works</h3>
      <div className={styles.container__wrapper}>
        <img
          className={styles.container__wrapper__img}
          src={dailycious}
          alt="dailycious"
        ></img>
        <img
          className={styles.container__wrapper__img}
          src={dailycious}
          alt="dailycious"
        ></img>
        <img
          className={styles.container__wrapper__img}
          src={dailycious}
          alt="dailycious"
        ></img>
      </div>
    </section>
  );
};
