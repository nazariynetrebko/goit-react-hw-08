import { Outlet } from "react-router-dom";
import { AppBar } from "../AppBar/AppBar";
import styles from "./layout.module.css";

export const Layout = () => {
  return (
    <div className={styles.container}>
      <AppBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
