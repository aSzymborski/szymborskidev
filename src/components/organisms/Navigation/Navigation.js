import React, { useContext } from 'react';
import { NavigationContext } from 'providers/NavigationProvider';
import hammenu from 'assets/hamburgericon.svg';
import styles from 'components/organisms/Navigation/Navigation.module.scss';
import { Menu } from 'components/molecules/Menu/Menu';
export const Navigation = () => {
  const context = useContext(NavigationContext);
  return (
    <section className={styles.container}>
      <div className={styles.container__menu}>
        <a href="#homepage">
          <h1 className={styles.container__menu__title}>SZYMBORSKI DEV</h1>
        </a>

        <button
          onClick={context.toggleMenu}
          className={styles.container__menu__button}
        >
          <img
            className={styles.container__menu__icon}
            src={hammenu}
            alt="menu"
          ></img>
        </button>
      </div>
      {context.open || context.innerWidth ? <Menu /> : null}
    </section>
  );
};
