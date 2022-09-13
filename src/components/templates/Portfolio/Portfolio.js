import React, { useEffect, useContext } from 'react';
import { PortfolioItem } from 'components/molecules/PortfolioItem/PortfolioItem';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { MainContext } from 'providers/MainProvider';

import styles from 'components/templates/Portfolio/Portfolio.module.scss';
export const Portfolio = () => {
  const context = useContext(MainContext);
  useEffect(() => {
    <HelmetProvider>
      <Helmet>
        <title>SzymborskiDev | Portfolio</title>
        <meta name="description" content="Portfolio" />
      </Helmet>
    </HelmetProvider>;
  }, []);
  return (
    <>
      <section id="portfolio" className={styles.container}>
        <h3 className={styles.container__title}>Portfolio.</h3>
        <ul className={styles.wrapper}>
          {context.portfolioItems.map((item) => (
            <PortfolioItem
              key={item.id}
              title={item.title}
              techStack={item.technologyStack}
              link={item.link}
              image={item.photo.url}
              background={item.backgroundGradient}
            />
          ))}
        </ul>
      </section>
    </>
  );
};
