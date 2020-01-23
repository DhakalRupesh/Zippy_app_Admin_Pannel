import React from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard'
import './App.css';
import './components/Custom.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    
   <Router>
     <Route exact path='/' component={Login} />
     <Route exact path='/dashboard' component={Dashboard} />
   </Router>
  );
}

export default App;
