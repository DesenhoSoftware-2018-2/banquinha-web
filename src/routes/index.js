import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../views/HomePage/homePage';
import CadastroForm from '../views/usuario/cadastroForm';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <HomePage {...props} />} />
      <Route path="/cadastro" exact component={CadastroForm} />
      {/* <Route path="/sobre" exact component={TimeLinePage} /> */}
    </Switch>
  </BrowserRouter>
);
