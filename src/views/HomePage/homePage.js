import React, { Component } from 'react';
import SideNav from '../../components/sidenav/sidenav';

class HomePage extends Component {
  render() {
    return(
      <div>
        <SideNav />
        <h1>BANQUINHA</h1>
      </div>
    );
  }
}

export default HomePage;