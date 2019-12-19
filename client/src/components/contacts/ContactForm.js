import React , {useState ,useContext} from 'react'
import ContactContext from '../../context/contacts/contactContext' 

const ContactForm = () => {

    const contactcontext=useContext(ContactContext);
    const [contact,setContact]=useState({
        name:'',
        email:'',
        phone:'',
        type:'personal'
    });
    
    const onChange= e => setContact({ ...contact , [e.target.name]:e.target.value });

    const onSubmit = e =>{
        e.preventDefault();
        contactcontext.addContact(contact);
        setContact({
            name:'',
            email:'',
            phone:'',
            type:'personal' 
        })
    }

    const { name,email,phone,type}=contact;
    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">Add Contact</h2>
            <input type='text' placeholder='Name' name='name' onChange={onChange} value={name}/>
            <input type='email' placeholder='Email' name='email' onChange={onChange} value={email}/>
            <input type='text' placeholder='Phon Number' name='phone' onChange={onChange} value={phone}/>
            <h5> Contact Type</h5>
            <input type='radio' name='type' value='personal' checked={ type === 'personal'} onChange={onChange}  />Personal {' '}
            <input type='radio' name='type' value='professional' checked={ type === 'professional'} onChange={onChange} />Professional
            <div>
                <input type="submit" value="Add Contact" className='btn btn-primary btn-block'></input>
            </div>
        </form>
    )
}

export default ContactForm
