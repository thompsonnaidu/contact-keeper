import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-6">
                    {/* This will be the contact form */}
                    <ContactForm/>
                </div>
                <div className="col-xs-12 col-sm-6">
                    <Contacts/>
                </div>
            </div>
        </div>
        
    )
}

export default Home
