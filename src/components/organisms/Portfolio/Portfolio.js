import React from 'react';

import styles from 'components/organisms/Portfolio/Portfolio.module.scss';
import { PortfolioItem } from 'components/molecules/PortfolioItem/PortfolioItem';
export const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.container}>
      <h3 className={styles.container__title}>Portfolio</h3>
      <ul className={styles.wrapper}>
        <PortfolioItem />
      </ul>
    </section>
  );
};
