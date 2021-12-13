import React, { useContext } from 'react';
import { NavigationContext } from 'providers/NavigationProvider';
import styles from 'components/molecules/Menu/Menu.module.scss';
import { Link } from 'react-router-dom';

export const Menu = () => {
  const context = useContext(NavigationContext);
  return (
    <ul className={styles.list}>
      <li onClick={context.toggleMenu} className={styles.list__item}>
        <Link to="/aboutme">
          <p>About me</p>
        </Link>
      </li>

      <li onClick={context.toggleMenu} className={styles.list__item}>
        <Link to="/portfolio">Portfolio</Link>
      </li>

      <li onClick={context.toggleMenu} className={styles.list__item}>
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
