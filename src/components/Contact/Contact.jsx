import React from "react";
import s from "./Contact.module.css";

const Contact = ({ contact, onDelete }) => {
  const handleDelete = () => {
    onDelete((prevContacts) => prevContacts.filter((contactItem) => contactItem.id !== contact.id));
  };

  return (
    <li className={s.item}>
      <div className={s.info}>
        <div className={s.name}>{contact.name}</div>
        <div className={s.number}>{contact.number}</div>
      </div>
      <button onClick={handleDelete} className={s.deleteButton}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
