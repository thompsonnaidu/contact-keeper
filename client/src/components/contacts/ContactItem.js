import React,{useContext}from 'react'
import PropTypes from 'prop-types'
import ContactContext from '../../context/contacts/contactContext'
const ContactItem = ({contact}) => {
    const { _id ,name,email,phone,type}=contact;

    const contactContext= useContext(ContactContext);

    const onEdit =() =>{
        console.log(contact);
        contactContext.setCurrent(contact);
    }
    const onDelete = ()=>{
        
        contactContext.deleteContact(_id);
        contactContext.clearCurrent();
    }

    return (
        <div className='card mb-1'>
            <h5 className="text-primary text-left p-2">
                {name}{' '} 
                <span style={{ float : 'right'}} className={'badge ' + ( type === 'professional' ? 'badge-success':'badge-primary')}>
                    
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
            </h5>

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

            <div>
                <button className="btn btn-dark btn-sm m-2" onClick={onEdit}>Edit</button>
                <button className="btn btn-danger btn-sm m-2" onClick={onDelete}>Delete</button>
            </div>

        </div>
    )
}

ContactItem.propTypes={
    contact:PropTypes.object.isRequired
}
export default ContactItem
