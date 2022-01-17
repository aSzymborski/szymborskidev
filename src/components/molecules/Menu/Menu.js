import React, { useContext } from 'react';
import { NavigationContext } from 'providers/NavigationProvider';
import { Link } from 'react-router-dom';

import styles from 'components/molecules/Menu/Menu.module.scss';
export const Menu = () => {
  const context = useContext(NavigationContext);
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
    </ul>
  );
};
