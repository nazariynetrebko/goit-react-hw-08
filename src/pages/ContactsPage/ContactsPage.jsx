import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import styles from "./contactsPage.module.css";

export const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};
