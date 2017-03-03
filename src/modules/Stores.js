import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class Stores extends Component{
  render() {
    return (
      <div>
        <h1>Stores</h1>
        <ButtonToolbar>
          <Link to="/stores/new"><Button bsStyle="primary">New Store</Button></Link>
        </ButtonToolbar>
      </div>
    )
  }
}

export default Stores;
