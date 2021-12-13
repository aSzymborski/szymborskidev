import React from 'react';

import styles from 'components/organisms/AboutMe/AboutMe.module.scss';
import { Link } from 'react-router-dom';
export const AboutMe = () => {
  return (
    <section id="aboutme" className={styles.container}>
      <h3 className={styles.container__title}>In a nutshell</h3>
      <p className={styles.container__text}>
        Creative and independent Front-End Developer with a few months of
        experience building stable apps and websites in fast-paced,
        collaborative environments. I am self-taught.
      </p>
      <p className={styles.container__text}>
        Skilled in JavaScript/React/Scss and the rest of the tools you need to
        write better, cleaner code . Well-versed in Scrum and Agile.
      </p>
      <p className={styles.container__text}>
        Programming has become my passion for which I devote every free moment.
        He is also interested in old motorization, and more precisely -
        motorcycles.
      </p>
      <p className={styles.container__text}>
        Have an interesting project?
        <Link to="/contact">
          <span> Let's talk.</span>
        </Link>
      </p>
    </section>
  );
};
