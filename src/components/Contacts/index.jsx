const Contacts = ({ contacts, onClick }) => {
  return (
    <div>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}
          <button type="button" onClick={onClick}>
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

export default Contacts;
