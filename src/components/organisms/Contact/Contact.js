import React from 'react';
import styles from 'components/organisms/Contact/Contact.module.scss';
import { FormField } from 'components/atoms/FormField/FormField';
import { TextareaField } from 'components/atoms/TextareaField/TextareaField';
import { useForm } from 'react-hook-form';
export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section id="contact" className={styles.container}>
      <h3 className={styles.container__title}>Let's talk.</h3>

      <p className={styles.container__p}>
        Get in touch via the form below, or by emailing{' '}
        <span className={styles.container__span}>hello@szymborskidev.com</span>{' '}
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {errors.name && <span>This field is required</span>}

        <FormField
          register={register}
          label="Name"
          placeholder="Enter your name"
          name="name"
        />
        {errors.email && <span>This field is required</span>}

        <FormField
          register={register}
          label="Email Address"
          placeholder="Enter your email address"
          name="email"
        />
        <TextareaField
          label="Message :"
          name="message"
          register={register}
          placeholder="Enter your message"
        />

        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </section>
  );
};
