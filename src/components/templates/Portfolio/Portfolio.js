import React from 'react';
import { PortfolioItem } from 'components/molecules/PortfolioItem/PortfolioItem';
import Helmet from 'react-helmet';

import mygarage from 'assets/mygarage.png';
import dailycious from 'assets/dailycious.png';
import rockets from 'assets/rockets.png';
import calculator from 'assets/calculator.png';
import styles from 'components/templates/Portfolio/Portfolio.module.scss';
export const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.container}>
      <Helmet>
        <title>SzymborskiDev | Portfolio</title>
        <meta name="description" content="Portfolio" />
      </Helmet>
      <h3 className={styles.container__title}>Portfolio.</h3>
      <ul className={styles.wrapper}>
        <PortfolioItem
          title="Dailycious"
          techStack="React, Scss, NodeJS"
          link="https://www.dailycious.pl"
          image={dailycious}
          background="linear-gradient(
            360deg,
            rgba(2, 0, 36, 1) 0%,
            rgba(0, 0, 0, 1) 0%,
            rgba(1, 1, 5, 1) 41%,
            rgba(47, 50, 51, 1) 97%
          )"
        />
        <PortfolioItem
          title="My Garage"
          techStack="React, TypeScript, Scss, Firebase, DatoCMS, NodeJS"
          link="http://www.mygarage.szymborskidev.com"
          image={mygarage}
          background="linear-gradient(
            360deg,
            rgba(2, 0, 36, 1) 0%,
            rgba(0, 0, 0, 1) 0%,
            rgba(1, 1, 5, 1) 41%,
            rgba(47, 50, 51, 1) 97%
          )"
        />
        <PortfolioItem
          title="Rockets Game"
          techStack="Vanilla JS"
          link="http://www.rockets.szymborskidev.com"
          image={rockets}
          background="linear-gradient(
            360deg,
            rgba(2, 0, 36, 1) 0%,
            rgba(0, 0, 0, 1) 0%,
            rgba(1, 1, 5, 1) 41%,
            rgba(47, 50, 51, 1) 97%
          )"
        />
        <PortfolioItem
          title="Calculator"
          techStack="Vanilla JS"
          link="http://www.calculator.szymborskidev.com"
          image={calculator}
          background="linear-gradient(
            360deg,
            rgba(2, 0, 36, 1) 0%,
            rgba(0, 0, 0, 1) 0%,
            rgba(1, 1, 5, 1) 41%,
            rgba(47, 50, 51, 1) 97%
          )"
        />
      </ul>
    </section>
  );
};
