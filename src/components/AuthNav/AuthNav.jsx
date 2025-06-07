import { NavLink } from "react-router-dom";
import styles from "./authNav.module.css";

export const AuthNav = () => {
  return (
    <div className={styles.authNav}>
      <NavLink to="/register" className={styles.link}>
        Register
      </NavLink>
      <NavLink to="/login" className={styles.link}>
        Login
      </NavLink>
    </div>
  );
};
