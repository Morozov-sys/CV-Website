import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/home';
import SignUp from './components/pages/SignUp';
import Skills from './components/pages/Skills';

function App() {
  return (
    <div className="App">
    <Router>
     <Navbar />
     <Switch>
       <Route path = "/" exact component={Home} />
       <Route path ='/services' component={() => { 
     window.location.replace('https://epic-babbage-365d79.netlify.app/'); 
     return null;
}}/>
       <Route path ='/products' component={() => { 
     window.location.replace( 'https://youthful-williams-046b84.netlify.app/'); 
     return null;
}}/>
       <Route path ='/sign-up' component={SignUp} />
     </Switch>
     </Router>
    </div>
  );
}

export default App;
