import React from 'react';

import styles from 'components/templates/ThankYouPage/ThankYouPage.module.scss';
import { Link } from 'react-router-dom';
export const ThankYouPage = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.container__h1}>Thank You.</h1>
      <h3 className={styles.container__h3}>Message was sent.</h3>
      <Link to="/">
        <p className={styles.container__p}>Back to main page</p>
      </Link>
    </section>
  );
};
