import React,{useReducer} from 'react';
import uuid from 'uuid';
import contactContext from './contactContext';
import contactReducer from './contactReducer';
import axios from 'axios'
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_ALERT,
    CLEAR_CURRENT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
    UPDATE_CONTACT,
    SET_CURRENT,
    CONTACT_ERROR,
    CLEAR_CONTACTS,
    GET_CONTACTS
} from '../types';


const ContactState= props =>{

    const initalState = {
        contacts:null,
        current:null,
        filtered:null,
        error:null
    };

    const [state, dispatch] = useReducer(contactReducer,initalState);



    // Get contact 
    const getContacts=async () =>{
        

        try {
            const res=await axios.get('/api/contacts');
            dispatch({ type:GET_CONTACTS,payload : res.data})
        } catch (error) {
            dispatch({ type:CONTACT_ERROR,payload : error.response.msg})
        }
    }

    // Add contact
    const addContact= async (contact) =>{
        

        const config={
            headers: {
                'Content-Type':'application/json'
            }
        };

        try {
            const res=await axios.post('/api/contacts',contact,config);
            dispatch({ type:ADD_CONTACT,payload : res.data})
        } catch (error) {
            dispatch({ type:CONTACT_ERROR,payload : error.response.msg})
        }
    }

    // Delete Contact
    const deleteContact=async (id)=>{
        try {
            const res=await axios.delete(`/api/contacts/${id}`);
            dispatch({type:DELETE_CONTACT,payload:id});
        } catch (error) {
            dispatch({ type:CONTACT_ERROR,payload : error.response.msg})
        }
        
    }

    //clear contacts
    const clearContacts=()=>{
        dispatch({type:CLEAR_CONTACTS})
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
    const updateContact= async (contact) =>{
        
        const config={
            headers: {
                'Content-Type':'application/json'
            }
        };

        try {
            const res=await axios.put(`/api/contacts/${contact._id}`,contact,config);
            dispatch({ type:UPDATE_CONTACT,payload : res.data})
        } catch (error) {
            dispatch({ type:CONTACT_ERROR,payload : error.response.msg})
        }
       
    }
    // Filter Current Contact
    const filterContact= text =>{
        dispatch({ type:FILTER_CONTACTS,payload : text})
    }
    // Clear Filter
    const clearFilter= () =>{
        dispatch({ type:CLEAR_FILTER})
    }
    return (<contactContext.Provider value={{contacts:state.contacts,current:state.current,filtered:state.filtered,error:state.error,filterContact,clearFilter,addContact,deleteContact,clearContacts,setCurrent,clearCurrent,updateContact,getContacts}}>
        {props.children}
    </contactContext.Provider>)
    
}

export default ContactState;
 
