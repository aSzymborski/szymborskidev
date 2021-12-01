import React, { useContext } from 'react';
import { NavigationContext } from 'providers/NavigationProvider';
import styles from 'components/molecules/Menu/Menu.module.scss';

export const Menu = () => {
  const context = useContext(NavigationContext);
  return (
    <ul className={styles.list}>
      <a href="#aboutme">
        <li onClick={context.toggleMenu} className={styles.list__item}>
          ABOUT ME
        </li>
      </a>
      <a href="#mywork">
        <li onClick={context.toggleMenu} className={styles.list__item}>
          PORTFOLIO
        </li>
      </a>
      <a href="#contact">
        <li onClick={context.toggleMenu} className={styles.list__item}>
          CONTACT
        </li>
      </a>

      <a href="https://github.com/aSzymborski" target="_blank" rel="noreferrer">
        <li className={styles.list__item}>GITHUB</li>
      </a>
    </ul>
  );
};
