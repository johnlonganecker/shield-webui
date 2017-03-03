import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import logo from '../../logo.png';

class Navi extends Component {
  render() {
    return (
      <div className="navigation">
        <a href="#"><img src={logo} height="40" alt="Shield Logo" /></a>
        <Link to="jobs">Jobs</Link>
        <Link to="backups">Backups</Link>
        <Link to="targets">Targets</Link>
        <Link to="stores">Stores</Link>
      </div>
    )
  }
}

export default Navi;
