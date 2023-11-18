import { Component } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm/ContactForm"
import { Filter } from "./Filter/Filter"
import { ContactList } from "./ContactList/ContactList"
import { Report } from 'notiflix/build/notiflix-report-aio';
import {Container, Title} from './App.styled'


const storageKey = "contact";

export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: ''
  }
  
  addContact = newContact => {
    const { contacts } = this.state;
    const newID = nanoid()
    if (contacts.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
      Report.warning(`${newContact.name} is already in contacts.`);
    } else {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, { ...newContact, id: newID }]
        }
      })
    }
  };

  componentDidMount() {
    const savedContact = window.localStorage.getItem(storageKey);
    if (savedContact !== null) {
      this.setState({
        contacts: JSON.parse(savedContact),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      window.localStorage.setItem(
        storageKey,
        JSON.stringify(this.state.contacts)
      );
    }
  }

  onFilter = value => {
    this.setState({
      filter: value,
    })
  }

  deleteContact = contact => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== contact),
      }
    })
  }

  render() {
    const { contacts, filter } = this.state;
    const filterContacts = contacts.filter(contact => {
      return (
        contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    })


    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onAdd={this.addContact} />

        <Title>Contacts</Title>
        <Filter onFilter={this.onFilter}/>
        <ContactList allContacts={filterContacts}  onDelete={this.deleteContact} />
      </Container>
    )
  }

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
