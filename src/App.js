import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Switch, Router,Route} from 'react-router-dom'
// import { Router, Route } from "react-router-dom";


function App() {
  return (
   <>
   <Router>
   <Navbar />
    <Switch>
      <Route exact path='/' />
    </Switch>
   </Router>
  
   </>
   
   
  );
}

export default App;
