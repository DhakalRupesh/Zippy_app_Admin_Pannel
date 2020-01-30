import React from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Members from './components/Members';
import Rider_Verify from './components/Rider_Verify';
import Register_Admin from './components/Register_Admin';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import './components/Custom.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (   
   <Router>
     <Route exact path='/' component={Login} />
     {/* <Route exact path='/dashboard' component={Dashboard} /> */}
     <PrivateRoute exact path='/members' component = {Members} />
     <PrivateRoute exact path='/riderverify' component={Rider_Verify}/>
     <PrivateRoute exact path='/registeradmin' component={Register_Admin}/>
     <PrivateRoute exact path='/dashboard' component={Dashboard}/>
   </Router>
  );
}

export default App;
