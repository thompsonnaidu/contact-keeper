import React,{useReducer} from 'react';
import uuid from 'uuid';
import contactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_ALERT,
    CLEAR_CURRENT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
    UPDATE_CONTACT,
    SET_CURRENT
} from '../types';


const ContactState= props =>{

    const initalState = {
        contacts:[
            {
                id:1,
                name:'Thompson Naidu',
                email:'thompson.naidu@gmail.com',
                phone:'8149205705',
                type:'professional'
            },
            {
                id:2,
                name:'Thompson Naidu',
                email:'thompson.naidu@yahoo.com',
                phone:'8134568420',
                type:'professional'
            },
            {
                id:3,
                name:'Thompson Naidu',
                email:'thompson.naidu@machine.com',
                phone:'9511733259',
                type:'personal'
            }
        ],
        current:null,
        filtered:null
    };

    const [state, dispatch] = useReducer(contactReducer,initalState);

    // Add contact
    const addContact= contact =>{
        contact.id=uuid.v4();
        dispatch({ type:ADD_CONTACT,payload : contact})
    }

    // Delete Contact
    const deleteContact=id=>{

        dispatch({type:DELETE_CONTACT,payload:id})
    }

    // Set Current Contact
    const setCurrent=contact=>{

        dispatch({type:SET_CURRENT,payload:contact})
    }
    
    // Clear Current Contact
    const clearCurrent=()=>{

        dispatch({type:CLEAR_CURRENT})
    }

    // Update Current Contact 
    const updateContact= contact =>{
        dispatch({ type:UPDATE_CONTACT,payload : contact})
    }
    // Filter Current Contact
    const filterContact= text =>{
        dispatch({ type:FILTER_CONTACTS,payload : text})
    }
    // Clear Filter
    const clearFilter= () =>{
        dispatch({ type:CLEAR_FILTER})
    }
    return (<contactContext.Provider value={{contacts:state.contacts,current:state.current,filtered:state.filtered,filterContact,clearFilter,addContact,deleteContact,setCurrent,clearCurrent,updateContact}}>
        {props.children}
    </contactContext.Provider>)
    
}

export default ContactState;
 
