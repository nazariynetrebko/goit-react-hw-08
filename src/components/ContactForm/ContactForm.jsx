import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps"; // Updated import
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./contactForm.module.css";

function ContactForm() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Мінімум 3 символи")
      .max(50, "Максимум 50 символів")
      .required("Обов’язкове поле"),
    number: Yup.string()
      .min(3, "Мінімум 3 символи")
      .max(50, "Максимум 50 символів")
      .matches(/^\d+$/, "Тільки цифри")
      .required("Обов’язкове поле"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(addContact(values));
        resetForm();
      }}>
      <Form className={styles.form}>
        <label>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>
        <label>
          Number
          <Field type="text" name="number" />
          <ErrorMessage
            name="number"
            component="div"
            className={styles.error}
          />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
