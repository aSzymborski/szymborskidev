import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavigationContext } from 'providers/NavigationProvider';

import styles from 'components/templates/HomePage/HomePage.module.scss';

export const HomePage = () => {
  const context = useContext(NavigationContext);
  return (
    <section id="home" className={styles.container}>
      <p className={styles.container__p}>Hi, I'm Adrian.</p>
      <h1 className={styles.container__h1}>
        Front-end <br /> developer.
      </h1>
      <div className={styles.container__fillDiv}></div>
      <Link to="/aboutme">
        <p
          onClick={() => context.handleNavigationMenuItemIndex(2)}
          className={styles.container__learnMore}
        >
          Learn more
        </p>
      </Link>
    </section>
  );
};
