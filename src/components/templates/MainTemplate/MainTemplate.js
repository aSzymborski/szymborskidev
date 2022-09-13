import React from 'react';
import { Navigation } from 'components/organisms/Navigation/Navigation';
import { MainProvider } from 'providers/MainProvider';

import adanio from 'assets/Szymbor-1.png';
import styles from 'components/templates/MainTemplate/MainTemplate.module.scss';
export const MainTemplate = ({ children }) => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapperPhoto}>
        <img className={styles.img} src={adanio} alt="me" />
      </div>
      <MainProvider>
        <Navigation />
        {children}
      </MainProvider>
    </section>
  );
};
