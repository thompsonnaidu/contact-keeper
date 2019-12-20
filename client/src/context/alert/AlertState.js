import React,{useReducer} from 'react'
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import uuid from 'uuid';
import {SET_ALERT, REMOVE_ALERT} from '../types';
const AlertState = (props) => {

    const initialState=[];

    const [state, dispatch] = useReducer(alertReducer, initialState);

    const setAlert=(msg,type,timeout=5000)=>{
        const id =uuid.v4();
        console.log(`The uuid generated message is ${id}`)
        dispatch({
            type:SET_ALERT,
            payload:{msg,type,id}
        });

        setTimeout(() => {
            dispatch({
                type:REMOVE_ALERT,
                payload:id
            }); 
        }, timeout);
    };

    return (
        <AlertContext.Provider value={{
            setAlert,
            alerts:state
        }}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState
