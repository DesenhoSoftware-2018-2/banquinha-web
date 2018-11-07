import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../views/HomePage/homePage';
import SingUp from '../components/sing-up/sing-up';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <HomePage {...props} />} />
      <Route path="/cadastro" exact component={SingUp} />
      {/* <Route path="/sobre" exact component={TimeLinePage} /> */}
    </Switch>
  </BrowserRouter>
);
