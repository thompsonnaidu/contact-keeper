import React , {useState, useContext,useEffect} from 'react'
import AlertContext from '../../context/alert/alertContext'
import AuthContext from '../../context/auth/authContext'
const Login = (props) => {

    const [user,setUser]= useState({
        email:"",
        password:""
        
    });

    const alertContext=useContext(AlertContext);
    const {setAlert}=alertContext;
    const authContext=useContext(AuthContext);
    const {login,error,clearErrors,isAuthenticated}=authContext;
    const {email,password}=user;

    useEffect(()=>{
        console.log(`isAuthenticated -->${isAuthenticated}`);
        if(isAuthenticated){
            
            props.history.push('/');
        }
        if(error === "Invalid Credentials"){
            setAlert(error,'danger');
            clearErrors();
        }

        // eslint-disable-next-line
    },[error,isAuthenticated,props.history]);


    const onSubmit= e=>{
        e.preventDefault();
        if(password === '' || email === ''){
            setAlert("Please the required field",'danger')
        }else{
            
            login({email,password});
        }
    };

    const onChange= e=>{
        return setUser({ ...user, [e.target.name]:e.target.value});
    }

    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Login</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email}  onChange={onChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" value={password}  onChange={onChange} minLength="8" required/>
                </div>
                <input type="submit" value="Login User" className="btn btn-primary bt-btn-block"></input>
            </form>
        </div>
    )
}

export default Login
