import { LoginForm } from "../../components/LoginForm/LoginForm";
import styles from "./loginPage.module.css";

export const LoginPage = () => {
  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
};
