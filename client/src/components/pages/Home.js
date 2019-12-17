import React from 'react'
import Contacts from '../contacts/Contacts'

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-6">
                    {/* This will be the contact form */}
                </div>
                <div className="col-xs-12 col-sm-6">
                    <Contacts/>
                </div>
            </div>
        </div>
        
    )
}

export default Home
