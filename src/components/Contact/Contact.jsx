import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import s from "./Contact.module.css";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.contact}>
      <div className={s.info}>
        <p className={s.name}>{name}</p>

        <a className={s.name} href={number}>
          {number}
        </a>
      </div>
      <button className={s.deleteButton} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
