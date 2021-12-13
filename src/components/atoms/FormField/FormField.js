import React from 'react';

import styles from 'components/atoms/FormField/FormField.module.scss';

export const FormField = ({ name, label, placeholder, register }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label} :</label>
      <input
        className={styles.input}
        placeholder={placeholder}
        name={name}
        {...register(name, { required: true })}
      />
    </div>
  );
};
