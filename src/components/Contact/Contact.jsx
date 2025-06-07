import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps"; // Updated import
import styles from "./contact.module.css";

function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <span>
        {contact.name}: {contact.number}
      </span>
      <button onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </li>
  );
}

export default Contact;
