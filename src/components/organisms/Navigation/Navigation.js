import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavigationContext } from 'providers/NavigationProvider';
import { Menu } from 'components/molecules/Menu/Menu';

import styles from 'components/organisms/Navigation/Navigation.module.scss';

export const Navigation = () => {
  const context = useContext(NavigationContext);
  return (
    <section className={styles.container}>
      <div className={styles.container__menu}>
        <Link
          onClick={() => {
            context.setOpen(false);
            context.checked(false);
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
      {context.open || context.widthSize > 999 ? <Menu /> : null}
    </section>
  );
};
