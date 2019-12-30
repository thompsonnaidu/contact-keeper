import React ,{useContext,useEffect}from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFiltered from '../contacts/ContactFiltered';
import AuthContext from '../../context/auth/authContext'
const Home = () => {

    const authContext=useContext(AuthContext);

    useEffect(()=>{
        authContext.loadUser();
        // eslint-disabled-next-line
    },[]);
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-6">
                    {/* This will be the contact form */}
                    <ContactForm/>
                </div>
                <div className="col-xs-12 col-sm-6">
                    <ContactFiltered/>
                    <Contacts/>
                </div>
            </div>
        </div>
        
    )
}

export default Home
