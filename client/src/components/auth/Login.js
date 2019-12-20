import React , {useState} from 'react'

const Login = () => {

    const [user,setUser]= useState({
        email:"",
        password:""
        
    });

    const {email,password}=user;

    const onSubmit= e=>{
        e.preventDefault();
        console.log("Login User")
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
                    <input type="email" name="email" value={email}  onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" value={password}  onChange={onChange}/>
                </div>
                <input type="submit" value="Login User" className="btn btn-primary bt-btn-block"></input>
            </form>
        </div>
    )
}

export default Login
