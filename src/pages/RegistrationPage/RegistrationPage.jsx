import { RegistrationForm } from "../../components/RegistrationForm/RegistrationForm";
import styles from "./registrationPage.module.css";

export const RegistrationPage = () => {
  return (
    <div className={styles.container}>
      <h2>Register</h2>
      <RegistrationForm />
    </div>
  );
};
