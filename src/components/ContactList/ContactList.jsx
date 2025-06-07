import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contactSlice";
import styles from "./contactList.module.css";

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.list}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

export default ContactList;
