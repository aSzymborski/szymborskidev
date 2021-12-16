import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavigationContext } from 'providers/NavigationProvider';

import styles from 'components/templates/AboutMe/AboutMe.module.scss';

export const AboutMe = () => {
  const context = useContext(NavigationContext);
  return (
    <section className={styles.container}>
      <h3 className={styles.container__title}>A little bit about me.</h3>
      <p className={styles.container__text}>
        Creative and independent Front-End Developer with a few months of
        experience building stable apps and websites in fast-paced. I am
        self-taught.
      </p>

      <p className={styles.container__text}>
        Skilled in JavaScript/React/Scss and the rest of the tools you need to
        write better, cleaner code.
      </p>

      <p className={styles.container__text}>
        Programming has become my passion for which I devote every free moment.
        I also interested in old motorization, and more precisely - motorcycles.
      </p>

      <p className={styles.container__text}>
        Have an interesting project? &nbsp;
        <Link to="/contact">
          <span onClick={() => context.handleNavigationMenuItemIndex(4)}>
            Let's talk.
          </span>
        </Link>
      </p>
    </section>
  );
};
