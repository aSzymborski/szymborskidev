import React from 'react';
import { Navigation } from 'components/organisms/Navigation/Navigation';
import { NavigationProvider } from 'providers/NavigationProvider';
import adanio from 'assets/me1.jpg';

import styles from 'components/templates/MainTemplate/MainTemplate.module.scss';

export const MainTemplate = ({ children }) => {
  return (
    <section className={styles.container}>
      <img className={styles.img} src={adanio} alt="me" />
      <NavigationProvider>
        <Navigation />
        {children}
      </NavigationProvider>
    </section>
  );
};
