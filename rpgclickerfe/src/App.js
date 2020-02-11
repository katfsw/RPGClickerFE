import React from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar.js'
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm.js';
import AccountDashboard from './components/AccountDashboard.js';
import Play from './components/Play.js';
import './App.css';

function App () {
  return (
    <div>
      <NavBar/>

      <Switch>
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/dashboard" component={AccountDashboard} />
        <Route exact path="/play" component={Play} />
      </Switch>
    </div>
  );
}

export default App;
