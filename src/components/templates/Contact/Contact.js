import React, { useEffect } from 'react';
import { FormField } from 'components/atoms/FormField/FormField';
import { TextareaField } from 'components/atoms/TextareaField/TextareaField';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import styles from 'components/templates/Contact/Contact.module.scss';
export const Contact = () => {
  useEffect(() => {
    <HelmetProvider>
      <Helmet>
        <title>SzymborskiDev | Contact</title>
        <meta name="description" content="Contact" />
      </Helmet>
    </HelmetProvider>;
  }, []);
  return (
    <>
      <section id="contact" className={styles.container}>
        <h3 className={styles.container__title}>Let's talk.</h3>
        <p className={styles.container__p}>
          Get in touch via the form below, or by emailing{' '}
          <a
            href="mailto:hello@szymborskidev.com"
            className={styles.container__span}
          >
            hello@szymborskidev.com
          </a>{' '}
        </p>
        <form
          className={styles.form}
          action="https://formsubmit.co/b0c4221f22988ead5c93182cd8fab0d2"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New email!" />
          <input
            type="hidden"
            name="_next"
            value="https://www.szymborskidev.com/thanks.html"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for your message. I will write back as soon as I can"
          />
          <FormField
            type="text"
            name="name"
            placeholder="Enter your name"
            label="Name"
          />
          <FormField
            type="email"
            name="email"
            placeholder="Enter your email address"
            label="Email"
          />
          <TextareaField
            type="text"
            name="message"
            placeholder="Enter your message"
            label="Message"
          />
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </section>
    </>
  );
};
