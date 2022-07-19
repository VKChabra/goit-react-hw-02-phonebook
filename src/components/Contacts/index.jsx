import PropTypes from 'prop-types';
import styles from './contacts.module.css';

const Contacts = ({ contacts, onClick }) => {
  return (
    <div className={styles.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}
          <button type="button" onClick={() => onClick(id)}>
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default Contacts;
