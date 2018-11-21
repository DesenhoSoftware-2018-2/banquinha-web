import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../views/HomePage/homePage';
import Profile from '../views/profilePage';
import SignUp from '../components/sign-up/sign-up';
import Login from '../components/login/login';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <HomePage {...props} />} />
      <Route path="/perfil" exact component={Profile} />
      <Route path="/cadastro" exact component={SignUp} />
      <Route path="/login" exact component={Login} />
    </Switch>
  </BrowserRouter>
);
