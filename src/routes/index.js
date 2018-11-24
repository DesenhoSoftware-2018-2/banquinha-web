import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../views/HomePage/homePage';
import Profile from '../views/profile/profilePage';
import SignUp from '../views/usuario/sign-up';
import Login from '../views/usuario/login';
import EditProfile from '../views/profile/editProfile';
import Event from '../views/Event/event';
import Reports from '../views/reports';
import History from '../views/history';
import About from '../views/about';
import Conversation from '../views/conversation';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <HomePage {...props} />} />
      <Route path="/perfil" exact component={Profile} />
      <Route path="/cadastro" exact component={SignUp} />
      <Route path="/login" exact component={Login} />
      <Route path="/editPerfil" exact component={EditProfile} />
      <Route path="/event" exact component={Event} />
      <Route path="/relatorio" exact component={Reports} />
      <Route path="/historico" exact component={History} />
      <Route path="/sobre" exact component={About} />
      <Route path="/conversas" exact component={Conversation} />
    </Switch>
  </BrowserRouter>
);
