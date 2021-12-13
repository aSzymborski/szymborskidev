import React from 'react';

import styles from 'components/atoms/TextareaField/TextareaField.module.scss';
export const TextareaField = ({ label, placeholder, name, register }) => {
  return (
    <div className={styles.container}>
      <label className={styles.container__label}>{label}</label>
      <textarea
        className={styles.container__textarea}
        palceholder={placeholder}
        name={name}
        {...register(name)}
      />
    </div>
  );
};
