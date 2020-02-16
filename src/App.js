import React from 'react';
import Index from './components/Index';
import About from './components/About';
import Login from './components/Login';
import ULogin from './components/userLogin';
import URegister from './components/Register_user'
// import Side from './components/Sidebar';
import Addadverties from './components/AddAdvertise';
import AllAdver from './components/Advertise';
import YourAd from './components/YourAd';
import Profile from './components/Profile';
import Vehicle from './components/Vehicle';
import Dashboard from './components/Dashboard';
import Members from './components/Members';
import VehicleVerify from './components/Vehicle_Verify';
import Register_Admin from './components/Register_Admin';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import './components/Custom.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (   
   <Router>
      <Route exact path='/' component={ULogin} />
      <Route exact path="/about" component={About} />
      <Route exact path="/index" component={Index} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/ulogin" component={ULogin} />
      <Route exact path="/uRegister" component={URegister} />
      <Route exact path="/addAd" component={Addadverties} />
      <Route exact path="/viewAd" component={YourAd}/>
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/vehicle" component={Vehicle} />
      <Route exact path="/allAd" component={AllAdver}/>
      <PrivateRoute exact path='/members' component = {Members} />
      <PrivateRoute exact path='/vehicleverify' component={VehicleVerify}/>
      <PrivateRoute exact path='/registeradmin' component={Register_Admin}/>
      <PrivateRoute exact path='/dashboard' component={Dashboard}/>
   </Router>
  );
}

export default App;
