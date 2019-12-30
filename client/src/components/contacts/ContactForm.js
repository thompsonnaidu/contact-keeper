import React , {useState ,useContext,useEffect} from 'react'
import ContactContext from '../../context/contacts/contactContext' 
import { UPDATE_CONTACT } from '../../context/types';

const ContactForm = () => {

    const contactcontext=useContext(ContactContext);

    const {addContact,current,clearCurrent,updateContact}=contactcontext;
    useEffect(() => {
        //code get executed when there is change in current or contactContext
        if(current !==null){
            setContact(current);
        }else{
           setContact({
            name:'',
            email:'',
            phone:'',
            type:'personal'
        }) 
        }
        
        // eslint-disable-next-line

    }, [contactcontext,current])
    const [contact,setContact]=useState({
        name:'',
        email:'',
        phone:'',
        type:'personal'
    });
    
    const onChange= e => setContact({ ...contact , [e.target.name]:e.target.value });

    const onSubmit = e =>{
        e.preventDefault();
        if(current === null){
            // insert contact
            addContact(contact);
        
        }else{
            // update contact
            updateContact(contact);
        }
        clearAll()
        
    }

    //clear the form field
    const clearAll= ()=>{
        clearCurrent()
    }
    const { name,email,phone,type}=contact;
    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary"> {current?'Update Contact':'Add Contact'} </h2>
            <div className="form-group">
                <input className="form-control" type='text' placeholder='Name' name='name' onChange={onChange} value={name}/>
            </div>
            
            <div className="form-group">
                <input className="form-control" type='email' placeholder='Email' name='email' onChange={onChange} value={email}/>
            </div>
            
            <div className="form-group">
                <input className="form-control" type='text' placeholder='Phon Number' name='phone' onChange={onChange} value={phone}/>
            </div>
            
            <span className="col-form-label">Contact Type: {' '} </span>
            <span className="form-check form-check-inline">
                
                <input className="form-check-input" type='radio' name='type' value='personal' checked={ type === 'personal'} onChange={onChange} id="personalChoice" />
                <label className="form-check-label" htmlFor="personalChoice">Personal {' '} </label>
            </span>
            <span className="form-check form-check-inline">     
                <input className="form-check-input" type='radio' name='type' value='professional' checked={ type === 'professional'} onChange={onChange} id="professionalChocie" />
                <label className="form-check-label" htmlFor="professionalChocie">Professional</label>
            </span>
            <div>
                <input type="submit" value={current?'Update Contact':'Add Contact'} className='btn btn-primary btn-block'></input>
            </div>
            {
                current && <div>
                    <button className="btn btn-light btn-block" onClick={clearAll}>Clear</button>
                </div>
            }
        </form>
    )
}

export default ContactForm
