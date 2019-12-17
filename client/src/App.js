import React,{Fragment} from 'react';
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import ContactState from './context/contacts/ContactState';
import Home from './components/pages/Home';
import About from './components/pages/About';
import './App.css';
import Navbar from './components/layouts/Navbar'
const App=( )=> {
  return (
    <ContactState>
      <Router>
        <Fragment>
          <Navbar/>
          <div className="container pt-5">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ContactState>
  );
}

export default App;
