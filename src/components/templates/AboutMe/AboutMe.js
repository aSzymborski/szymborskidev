import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MainContext } from 'providers/MainProvider';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import styles from 'components/templates/AboutMe/AboutMe.module.scss';
export const AboutMe = () => {
  const context = useContext(MainContext);
  useEffect(() => {
    <HelmetProvider>
      <Helmet>
        <title>SzymborskiDev | About me</title>
        <meta name="description" content="About Me" />
      </Helmet>
    </HelmetProvider>;
  }, []);
  return (
    <>
      <section className={styles.container}>
        <h3 className={styles.container__title}>A little bit about me.</h3>
        {context.aboutMe.map((aboutme) => (
          <div key={aboutme.id}>
            <p className={styles.container__text}>{aboutme.header}</p>
            <p className={styles.container__text}>{aboutme.skills}</p>
            <p className={styles.container__text}>{aboutme.passion}</p>
          </div>
        ))}
        <p className={styles.container__text}>
          Have an interesting project? &nbsp;
          <Link to="/contact">
            <span onClick={() => context.handleNavigationMenuItemIndex(4)}>
              Let's talk.
            </span>
          </Link>
        </p>
      </section>
    </>
  );
};
