import React from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Members from './components/Members';
import './App.css';
import './components/Custom.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (   
   <Router>
     <Route exact path='/' component={Login} />
     <Route exact path='/dashboard' component={Dashboard} />
     <Route exact path='/members' component = {Members} />
   </Router>
  );
}

export default App;
