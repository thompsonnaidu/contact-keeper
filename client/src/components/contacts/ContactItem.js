import React from 'react'

const ContactItem = ({contact}) => {
    const { id ,name,email,phone,type}=contact;
    return (
        <div className='card bg-light'>
            <h4 className="text-primary text-left p-2">
                {name}{' '} 
                <span style={{ float : 'right'}} className={'badge ' + ( type === 'professional' ? 'badge-success':'badge-primary')}>
                    
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
            </h4>

            <ul> 
                {email && (
                    <li>
                        <i className="fas fa-envelope-open"></i> {email}
                    </li>
                )}
                {phone && (
                    <li>
                        <i className="fas fa-phone"></i> {phone}
                    </li>
                )}
                
            </ul>

            <p>
                <button className="btn btn-dark btn-sm">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
            </p>

        </div>
    )
}

export default ContactItem
