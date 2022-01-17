import React from 'react';
import { SoonPortfolioItem } from 'components/molecules/SoonPortfolioItem/SoonPortfolioItem';
import { PortfolioItem } from 'components/molecules/PortfolioItem/PortfolioItem';

import styles from 'components/templates/Portfolio/Portfolio.module.scss';
export const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.container}>
      <h3 className={styles.container__title}>Portfolio.</h3>
      <ul className={styles.wrapper}>
        <PortfolioItem />
        <SoonPortfolioItem />
      </ul>
    </section>
  );
};
