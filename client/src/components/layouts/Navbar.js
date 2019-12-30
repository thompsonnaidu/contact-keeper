import React,{Fragment,useContext} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contacts/contactContext';
const Navbar = ({ title ,icon }) =>{

    const authcontext=useContext(AuthContext);
    const contactContext= useContext(ContactContext);
    const {isAuthenticated,logout,user}=authcontext;
    const {clearContacts}=contactContext;
    
    const onLogout=(e)=>{
        logout();
        clearContacts();
    }

    const authLink=(
        <Fragment>
            <li className="nav-item">
                <Link className="nav-link" to=""> Hello  { user && user.name}
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
            <span className={icon+" navbar-brand"} > {title}</span>

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



