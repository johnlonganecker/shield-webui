import React, { Component } from 'react';
//import logo from '../logo.svg';

import '../App.css';
import Navi from './nav/Navi'

class App extends Component {
  render() {
    return (
      <div>
        <Navi />
        {this.props.children}
      </div>
    );
  }
}

export default App;
