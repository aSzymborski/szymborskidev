import React, { useContext } from 'react';
import { MainContext } from 'providers/MainProvider';
import { Link } from 'react-router-dom';

import styles from 'components/molecules/Menu/Menu.module.scss';
export const Menu = () => {
  const context = useContext(MainContext);
  return (
    <ul className={styles.list}>
      <li
        onClick={() => {
          if (context.size[0] <= 999) {
            context.toggleMenu();
          }
          context.handleNavigationMenuItemIndex(2);
        }}
        style={{ color: context.index === 2 ? '#f0860c' : '#ffffff' }}
        className={styles.list__item}
      >
        <Link to="/aboutme">
          <p>About me</p>
        </Link>
      </li>

      <li
        onClick={() => {
          if (context.size[0] <= 999) {
            context.toggleMenu();
          }
          context.handleNavigationMenuItemIndex(3);
        }}
        style={{ color: context.index === 3 ? '#f0860c' : '#ffffff' }}
        className={styles.list__item}
      >
        <Link to="/portfolio">Portfolio</Link>
      </li>

      <li
        onClick={() => {
          if (context.size[0] <= 999) {
            context.toggleMenu();
          }
          context.handleNavigationMenuItemIndex(4);
        }}
        style={{ color: context.index === 4 ? '#f0860c' : '#ffffff' }}
        className={styles.list__item}
      >
        <Link to="/contact">Contact</Link>
      </li>

      <li className={styles.list__item}>
        <a
          href="https://github.com/aSzymborski"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </li>
      <li className={styles.list__item}>
        <a
          href="https://pl.linkedin.com/in/adrian-szymborski-116366149"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
      </li>
    </ul>
  );
};
