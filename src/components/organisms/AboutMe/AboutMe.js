import React from 'react';

import styles from 'components/organisms/AboutMe/AboutMe.module.scss';
export const AboutMe = () => {
  return (
    <section id="aboutme" className={styles.container}>
      <h3 className={styles.container__title}>About me</h3>
      <p className={styles.container__text}>
        Creative and independent Front-End Developer with a few months of
        experience building stable apps and websites in fast-paced,
        collaborative environments. Skilled in JavaScript/React/Scss and the
        rest of the tools you need to write better, cleaner code . Well-versed
        in Scrum and Agile. I am self-taught. Programming has become my passion
        for which I devote every free moment. He is also interested in old
        motorization, and more precisely - motorcycles.
      </p>
    </section>
  );
};
