import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm/ContactForm"
import { Filter } from "./Filter/Filter"
import { ContactList } from "./ContactList/ContactList"
import { Report } from 'notiflix/build/notiflix-report-aio';
import {Container, Title} from './App.styled'


const storageKey = "contact";

export const App = () => {
  const users = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [contacts, setContacts] = useState(users);
  const [filter, setFilter] = useState("");
  
  const addContact = newContact => {
    const newID = nanoid()
    if (contacts.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
      Report.warning(`${newContact.name} is already in contacts.`);
    } else {
      setContacts(prevContacts => {
        return {
          contacts: [...prevContacts, { ...newContact, id: newID }]
        }
      })
    }
  };

  useEffect(() => {
    const savedContact = window.localStorage.getItem(storageKey);
    if (savedContact !== null) {
      setContacts(JSON.parse(savedContact));
    }
  },[])

  useEffect(() => {
        window.localStorage.setItem(
        storageKey,
        JSON.stringify(contacts)
      );
  }, [contacts])

  const onFilter = value => {
    setFilter(value)
  }

  const deleteContact = contactID => {
    const updateContacts = contacts.filter(contact => contact.id !== contactID);

    setContacts(updateContacts)
  };

  const filterContacts = () => {
    if (filter === "") {
      return contacts;
    }

    return contacts.filter(
      contact => contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  } 


    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onAdd={addContact} />

        <Title>Contacts</Title>
        <Filter onFilter={onFilter}/>
        <ContactList allContacts={filterContacts()}  onDelete={deleteContact} />
      </Container>
    )

}
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
