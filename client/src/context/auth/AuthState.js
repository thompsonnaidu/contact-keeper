import React,{useReducer} from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
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
import axios from 'axios';

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
    const loadUser=async ()=>{
        // @todo Local token into global headers
        if(localStorage.token){
            setAuthToken(localStorage.token)
        }
        try {
            const res= await axios.get('/api/auth');
            console.log("setting the state to ",res.data)
            dispatch({
                type:USER_LOADED,
                payload:res.data
            })
         
        } catch (err) {
            console.log(err);
            dispatch({
                type:AUTH_ERROR
            })
        }
    }
    // Register User
    const register =async (formData)=>{

        const config={
            headers: {
                'Content-Type':'application/json'
            }
        };

        try {
            const res = await axios.post('/api/users',formData,config);
            dispatch({
                type:REGISTER_SUCCESS,
                payload:res.data
            })
            loadUser();
            console.log("Register User");
        } catch (error) {
            
            dispatch({
                type:REGISTER_FAIL,
                payload:error.response.data.msg
            })
            console.log("Register failed");
        }
    }   
    // Login User
    const login =async (formData)=>{

        const config={
            headers: {
                'Content-Type':'application/json'
            }
        };

        try {
            const res = await axios.post('/api/auth',formData,config);
            dispatch({
                type:LOGIN_SUCCESS,
                payload:res.data
            })
            console.log("User logged in ");
        } catch (error) {
            
            dispatch({
                type:LOGIN_FAIL,
                payload:error.response.data.msg
            })
            console.log("Login failed");
        }
    }

    // Logout User
    const logout=()=>{
        dispatch({
            type:LOGOUT
        })
    }
    // CLear Error
    const clearErrors=()=> {
        dispatch({
            type:CLEAR_ERRORS
        })
    }
   
    return (
    <authContext.Provider value={{
        token:state.token,
        isAuthenticated:state.isAuthenticated,
        loading:state.loading,
        error:state.error,
        user:state.user,
        register:register,
        clearErrors,
        loadUser,
        login,
        logout
    }}>
        {props.children}
    </authContext.Provider>)
    
}

export default AuthState;
 
