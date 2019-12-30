import React,{useContext,Fragment} from 'react'
import ContactContext from '../../context/contacts/contactContext';
import ContactItem from './ContactItem'
const Contacts = () => {
    const contactContext=useContext(ContactContext);

    const {contacts,filtered}=contactContext;

    return (
        <Fragment>
            {  filtered !== null ? filtered.map(contact=>(
                    <ContactItem key={contact._id} contact={contact}/>
                )) :
                contacts.map(contact=>(
                    <ContactItem key={contact._id} contact={contact}/>
                ))
            }
        </Fragment>
    )
}

export default Contacts