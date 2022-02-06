import React from 'react';

import styles from 'components/molecules/PortfolioItem/PortfolioItem.module.scss';
export const PortfolioItem = ({
  title,
  techStack,
  link,
  image,
  background,
}) => {
  return (
    <li style={{ background: `${background}` }} className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <h1 className={styles.box__h1}>{title}</h1>
          <p className={styles.box__p}>Technology stack: {techStack}</p>
          <a
            className={styles.box__check}
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            Check this project
          </a>
        </div>
        <img className={styles.wrapper__img} src={image} alt="project"></img>
      </div>
    </li>
  );
};
