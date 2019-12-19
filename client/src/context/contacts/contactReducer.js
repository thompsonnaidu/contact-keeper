import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_ALERT,
    CLEAR_CURRENT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
    UPDATE_CONTACT
} from '../types';

export default (state ,action )=>{

    switch(action.type){
        case ADD_CONTACT:
            return{
                ...state,
                contacts: [...state.contacts, action.payload]

            };
        
        case DELETE_CONTACT:
            
            return {
                ...state,
                contacts:state.contacts.filter(contact=> contact.id !== action.payload)
            };
        
        default: return state;
    }

}