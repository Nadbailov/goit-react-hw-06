import { useSelector } from "react-redux";
import s from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const nameFilter = useSelector(selectNameFilter);
  const filterContactName = contacts.filter((contact) =>
    contact.name.toLowerCase().trim().includes(nameFilter.toLowerCase().trim())
  );
  return (
    <div>
      <ul className={s.list}>
        {filterContactName.map((item) => {
          return (
            <li key={item.id} className={s.contactList}>
              <Contact name={item.name} number={item.number} id={item.id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
