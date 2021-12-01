import React from 'react';
import { IconField } from 'components/atoms/IconField/IconField';

import mailicon from 'assets/mail.svg';
import lnicon from 'assets/ln.svg';
import instaicon from 'assets/instagram-logo.svg';

import styles from 'components/organisms/Contact/Contact.module.scss';
export const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <h3 className={styles.container__title}>Contact</h3>
      <div className={styles.container__wrapper}>
        <IconField
          img={mailicon}
          alt="mailicon"
          title="hello@szymborskidev.com"
        />
        <IconField img={lnicon} alt="lnicon" title="Adrian Szymborski" />
        <IconField img={instaicon} alt="instagramicon" title="szymborski_dev" />
      </div>
    </section>
  );
};
