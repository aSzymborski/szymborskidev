import React, { useContext } from 'react';
import { NavigationContext } from 'providers/NavigationProvider';
import styles from 'components/organisms/Navigation/Navigation.module.scss';
import { Menu } from 'components/molecules/Menu/Menu';
import { Link } from 'react-router-dom';
export const Navigation = () => {
  const context = useContext(NavigationContext);
  return (
    <>
      <section className={styles.container}>
        <div className={styles.container__menu}>
          <Link to="/">
            <h1 className={styles.container__menu__title}>SzymborskiDev</h1>
          </Link>

          <button
            onClick={() => context.toggleMenu()}
            className={styles.button}
          >
            <span></span>
            <span></span>
          </button>
        </div>
        {context.open || context.widthSize > 999 ? <Menu /> : null}
      </section>
    </>
  );
};
