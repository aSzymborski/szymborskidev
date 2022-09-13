import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MainContext } from 'providers/MainProvider';
import { Menu } from 'components/molecules/Menu/Menu';

import styles from 'components/organisms/Navigation/Navigation.module.scss';
export const Navigation = () => {
  const context = useContext(MainContext);
  return (
    <section className={styles.container}>
      <div className={styles.container__menu}>
        <Link
          onClick={() => {
            if (context.size[0] < 999 && context.open === true) {
              context.toggleMenu();
            }
            context.handleNavigationMenuItemIndex(0);
          }}
          to="/"
        >
          <h1
            style={{ color: context.index === 0 ? '#f0860c' : '#ffffff' }}
            className={styles.container__menu__title}
          >
            SzymborskiDev
          </h1>
        </Link>

        <input
          checked={context.checked}
          onChange={() => context.toggleMenu()}
          type="checkbox"
          className={styles.toggler}
        />
        <div className={styles.button}>
          <div></div>
        </div>
      </div>
      {context.open || context.size[0] > 999 ? <Menu /> : null}
    </section>
  );
};
