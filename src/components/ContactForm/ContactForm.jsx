import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  number: Yup.string()
    .required("Required")
    .matches(/^[\d\(\)\-\s]+$/, "Phone number is not valid. Only numbers, spaces, dashes and parentheses are allowed."),
});

const ContactForm = ({ onAddContacts, contacts }) => {
  const handleSubmit = (values, { resetForm }) => {
    const newContact = { ...values, id: nanoid() };
    if (!contacts.some((contact) => contact.name === values.name)) {
      onAddContacts((prevContacts) => [...prevContacts, newContact]);
      resetForm();
    } else {
      alert("Contact already exists");
    }
  };

  return (
    <Formik initialValues={{ name: "", number: "" }} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className={s.form}>
        <Field type="text" name="name" placeholder="Name" className={s.input} />
        <ErrorMessage name="name" component="div" className={s.error} />
        <Field type="text" name="number" placeholder="Phone number" className={s.input} />
        <ErrorMessage name="number" component="div" className={s.error} />
        <button type="submit" className={s.submitButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
