import React from 'react';
import { HomePageHeader } from 'components/organisms/HomePageHeader/HomePageHeader';
import { AboutMe } from 'components/organisms/AboutMe/AboutMe';
import { Portfolio } from 'components/organisms/Portfolio/Portfolio';
import { Contact } from 'components/organisms/Contact/Contact';
import { HomePageHeaderProvider } from 'providers/HomePageHeaderProvider';
import styles from 'components/templates/HomePage/HomePage.module.scss';
export const HomePage = () => {
  return (
    <section id="homepage" className={styles.container}>
      <HomePageHeaderProvider>
        <HomePageHeader />
      </HomePageHeaderProvider>
      <AboutMe />
      <Portfolio />
      <Contact />
    </section>
  );
};
