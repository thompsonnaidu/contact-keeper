import React,{useContext}from 'react'
import PropTypes from 'prop-types'
import ContactContext from '../../context/contacts/contactContext'
const ContactItem = ({contact}) => {
    const { id ,name,email,phone,type}=contact;

    const contactContext= useContext(ContactContext);

    const onDelete = ()=>{
        console.log(`the id to delete is ${id}`);
        contactContext.deleteContact(id);
    }

    return (
        <div className='card bg-light'>
            <h4 className="text-primary text-left p-2">
                {name}{' '} 
                <span style={{ float : 'right'}} className={'badge ' + ( type === 'professional' ? 'badge-success':'badge-primary')}>
                    
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
            </h4>

            <ul className="list-group list-group-flush"> 
                {email && (
                    <li className="list-group-item">
                        <i className="fas fa-envelope-open"></i> {email}
                    </li>
                )}
                {phone && (
                    <li className="list-group-item">
                        <i className="fas fa-phone"></i> {phone}
                    </li>
                )}
                
            </ul>

            <p>
                <button className="btn btn-dark btn-sm">Edit</button>
                <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
            </p>

        </div>
    )
}

ContactItem.propTypes={
    contact:PropTypes.object.isRequired
}
export default ContactItem
