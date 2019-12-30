import React,{Fragment,useContext} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import authContext from '../../context/auth/authContext';
const Navbar = ({ title ,icon }) =>{

    const authcontext=useContext(AuthContext);
    
    const {isAuthenticated,logout,user}=authcontext;
    console.log(authContext);
    const onLogout=(e)=>{
        logout();
    }

    const authLink=(
        <Fragment>
            <li className="nav-item">
                <Link className="nav-link" to=""> Hello {console.log(user)} { user && user.name}
                </Link>
            </li>
            <li onClick={onLogout} className="nav-item">
                <Link className="nav-link" to="">
                    <i className="fas fa-sign-out-alt"></i>
                    <span className="hide-sm">Logout</span>
                </Link>
            </li>
        </Fragment>
    );

    const guessLink=(
        <Fragment>
            <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
            </li>
        </Fragment>
    );

    return (
        <nav className="navbar navbar-expand-md bg-primary navbar-dark">
            {/* <!-- Brand --> */}
            <a className={icon+" navbar-brand"} > {title}</a>

            {/* <!-- Toggler/collapsibe Button --> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* <!-- Navbar links --> */}
            <div className="collapse navbar-collapse " id="collapsibleNavbar">
                <ul className="navbar-nav ml-auto">
                    

                    {isAuthenticated? authLink : guessLink}

                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>

                </ul>
            </div>
        </nav>

        
    );
}

Navbar.propTypes={
    
    title:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired
}

Navbar.defaultProps={
    title:"Contact Keeper",
    icon : "fas fa-id-card-alt"
}

export default Navbar



