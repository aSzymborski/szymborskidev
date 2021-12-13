import React from 'react';
import { Navigation } from 'components/organisms/Navigation/Navigation';
import { NavigationProvider } from 'providers/NavigationProvider';
import adanio from 'assets/me1.jpg';

import styles from 'components/templates/MainTemplate/MainTemplate.module.scss';

export const MainTemplate = ({ children }) => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapperPhoto}>
        <img className={styles.img} src={adanio} alt="me" />
      </div>

      <NavigationProvider>
        <Navigation />
        {children}
      </NavigationProvider>
    </section>
  );
};
