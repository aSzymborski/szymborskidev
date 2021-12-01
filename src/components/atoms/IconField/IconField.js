import React from 'react';
import styles from 'components/atoms/IconField/IconField.module.scss';
export const IconField = ({ img, alt, title }) => {
  return (
    <section className={styles.container}>
      <img className={styles.container__img} src={img} alt={alt}></img>
      <h4>{title}</h4>
    </section>
  );
};
