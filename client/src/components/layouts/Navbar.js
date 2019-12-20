import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title ,icon }) =>{

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

                    <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                    </li>

                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                    </li>

                    <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                    </li>

                    <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
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



