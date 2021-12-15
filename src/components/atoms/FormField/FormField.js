import React from 'react';

import styles from 'components/atoms/FormField/FormField.module.scss';

export const FormField = ({ name, label, placeholder, type, value }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label} :</label>
      <input
        type={type}
        className={styles.input}
        placeholder={placeholder}
        name={name}
        required
        value={value}
      />
    </div>
  );
};
