import styles from "./homePage.module.css";

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to the Phonebook App</h1>
      <p>
        This is a simple application to manage your contacts. Register or log in
        to start adding and organizing your contacts securely.
      </p>
    </div>
  );
};
