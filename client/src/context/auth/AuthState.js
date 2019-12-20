import React,{useReducer} from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
} from '../types';


const AuthState= props =>{

    const initalState = {
        token : localStorage.getItem('token'),
        isAuthenticated:null,
        loading:true,
        error:null,
        user:null
    };

    const [state, dispatch] = useReducer(authReducer,initalState);

    // Load user

    // Register User

    // Login User

    // Logout User

    // CLear Error
   
    return (
    <authContext.Provider value={{
        token:state.token,
        isAuthenticated:state.isAuthenticated,
        loading:state.loading,
        error:state.error,
        user:state.user,
    }}>
        {props.children}
    </authContext.Provider>)
    
}

export default AuthState;
 
