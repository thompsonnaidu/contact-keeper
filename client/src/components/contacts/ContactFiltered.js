import React,{useContext, useEffect,useRef} from 'react'
import ContactContext from '../../context/contacts/contactContext';
const ContactFiltered = () => {

    const contactContext=useContext(ContactContext);
    const text =useRef('');
    const {filterContact,clearFilter,filtered}=contactContext;

    const onChange=e=>{

        if(text.current.value !== ''){
            
            filterContact(e.target.value);
        }else{
            console.log("inside clear filer");
            clearFilter();
        }
    }

    useEffect(() => {
        
        if(filtered === null){
            text.current.value='';
        }
    }, [])
    
    return (
       <form className="mt-3">
        <div className="form-group">
            <input className="form-control" ref={text} type="text" placeholder="filter contact" onChange={onChange}></input>

        </div>
       </form>
    )
}

export default ContactFiltered
