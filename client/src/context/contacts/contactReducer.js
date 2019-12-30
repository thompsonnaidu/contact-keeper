import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_ALERT,
    CLEAR_CURRENT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
    UPDATE_CONTACT,
    SET_CURRENT,
    CLEAR_CONTACTS,
    GET_CONTACTS,
    CONTACT_ERROR
} from '../types';

export default (state ,action )=>{

    switch(action.type){
        case ADD_CONTACT:
            return{
                ...state,
                contacts: [...state.contacts, action.payload],
                loading:false

            };
        
        case DELETE_CONTACT:
            
            return {
                ...state,
                contacts:state.contacts.filter(contact=> contact._id !== action.payload),
                loading:false
            };

        case SET_CURRENT:
            return {
                ...state,
                current:action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current:null
            }
        
        case UPDATE_CONTACT:
            return{
                ...state,
                contacts:state.contacts.map(contact=> contact._id === action.payload._id ? action.payload:contact),
                filtered:((state.filtered !==null)?state.filtered.map(contact=> contact._id === action.payload._id ? action.payload:contact):null),
                loading:false

            };
        
        case FILTER_CONTACTS:
            return{
                ...state,
                filtered:state.contacts.filter(contact =>{
                    const regex = new RegExp(`${action.payload}`,'gi');
                    return contact.name.match(regex) || contact.email.match(regex) || contact.phone.match(regex)
                }),
                loading:false
            };
        
        case CLEAR_FILTER:
            return {
                ...state,
                filtered:null
            }
        
        case CONTACT_ERROR: return { ...state,error:action.payload}
        
        case GET_CONTACTS: return {
            ...state,
            contacts:action.payload,
            loading:false,
            
        }
        
        case CLEAR_CONTACTS: return {
            ...state,
            contacts:null,
            current:null,
            filtered:null,
            error:null

        }
        default: return state;
    }

}