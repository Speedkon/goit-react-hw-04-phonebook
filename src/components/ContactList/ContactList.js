import {AllContacts, Contact, Span, Button } from "./ContactList.styled";

export const ContactList = ({ allContacts, onDelete }) => {
    
    return (
        <AllContacts>
            {allContacts.map(contact => {
                const { id, name, number } = contact;

                    return (
                        <Contact key={id}>
                            <Span>{name}:</Span>
                            <Span>{number}</Span>
                            <Button type='button' onClick={() => onDelete(id)}>Delete</Button>
                        </Contact>
                    )
                })}
        </AllContacts>
    )
};