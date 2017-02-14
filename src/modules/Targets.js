import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { Link } from 'react-router'

class Targets extends Component {
  render() {
    return (
      <div>
        <h1>Targets</h1>
        <ButtonToolbar>
          <Link to="/targets/new"><Button bsStyle="primary">New Target</Button></Link>
        </ButtonToolbar>
      </div>
    )
  }
}

export default Targets;
