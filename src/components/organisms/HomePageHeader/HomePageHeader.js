import React, { useContext } from 'react';
import { HomePageHeaderContext } from 'providers/HomePageHeaderProvider';
import keyboard from 'assets/keyboard.svg';
import styles from 'components/organisms/HomePageHeader/HomePageHeader.module.scss';

export const HomePageHeader = () => {
  const context = useContext(HomePageHeaderContext);
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.wrapper__h1}>
          SZYMBORSKI <br />
          DEV
        </h1>
        <div
          className={styles.wrapper__fillDiv}
          style={{ width: 160 + context.size }}
        ></div>
      </div>
      <img className={styles.container__img} src={keyboard} alt="keyboard" />
    </section>
  );
};
