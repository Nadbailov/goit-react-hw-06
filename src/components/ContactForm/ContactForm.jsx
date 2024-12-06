import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const ContactForm = () => {
  const dispatch = useDispatch();
  const usernameId = nanoid();
  const numberId = nanoid();

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
    number: Yup.string()
      .matches(
        /^[\d\(\)\-\s]+$/,
        "Phone number is not valid. Only numbers, spaces, dashes and parentheses are allowed."
      )
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be 50 characters or less")
      .required("Required"),
  });

  const initialValues = {
    name: "",
    number: "",
    id: "",
  };

  const handleSubmit = (values, options) => {
    const addNewContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(addNewContact));
    options.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        <Form className={s.form}>
          <div className={s.formList}>
            <label htmlFor={usernameId}>Name</label>
            <Field className={s.input} name="name" type="text" id={usernameId} placeholder="Name" />
            <ErrorMessage className={s.error} name="name" component="span" />
          </div>

          <div className={s.formList}>
            <label htmlFor={numberId}>Number</label>
            <Field className={s.input} type="text" name="number" id={numberId} placeholder="Number" />
            <ErrorMessage className={s.error} name="number" component="span" />
          </div>

          <button className={s.submitButton} type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
