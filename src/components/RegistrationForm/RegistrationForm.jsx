import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import styles from "./registrationForm.module.css";

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Мінімум 2 символи")
      .max(50, "Максимум 50 символів")
      .required("Обов’язкове поле"),
    email: Yup.string()
      .email("Невірна адреса email")
      .required("Обов’язкове поле"),
    password: Yup.string()
      .min(6, "Мінімум 6 символів")
      .required("Обов’язкове поле"),
  });

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(register(values));
        resetForm();
      }}>
      <Form className={styles.form}>
        <label className={styles.label}>
          Name
          <Field type="text" name="name" className={styles.input} />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>
        <label className={styles.label}>
          Email
          <Field type="email" name="email" className={styles.input} />
          <ErrorMessage name="email" component="div" className={styles.error} />
        </label>
        <label className={styles.label}>
          Password
          <Field type="password" name="password" className={styles.input} />
          <ErrorMessage
            name="password"
            component="div"
            className={styles.error}
          />
        </label>
        <button type="submit" className={styles.button}>
          Register
        </button>
      </Form>
    </Formik>
  );
};
