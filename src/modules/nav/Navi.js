import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import logo from '../../logo.png';

class Navi extends Component {
  render() {
    return (
      <Navbar bsStyle="inverse">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#"><img src={logo} height="40" alt="Shield Logo" /></a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem href="#jobs">Jobs</NavItem>
        </Nav>
        <Nav>
          <NavItem href="#backups">Backups</NavItem>
        </Nav>
        <Nav>
          <NavItem href="#targets">Targets</NavItem>
        </Nav>
        <Nav>
          <NavItem href="#stores">Stores</NavItem>
        </Nav>
        {/*
        <Nav>
        <NavItem href="#schedule">Schedules</NavItem>
        </Nav>
        <Nav>
        <NavItem href="#policies">Policies</NavItem>
        </Nav>
        */}
      </Navbar>
    )
  }
}

export default Navi;
