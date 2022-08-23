import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import styles from './ContactItem.module.css';

export function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <li key={id} className={styles.contactItem}>
      <p>
        {name} : {number}
      </p>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
}
