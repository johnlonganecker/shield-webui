import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { Link } from 'react-router'


class Jobs extends Component {
  render() {
    return (
      <div>
        <h1>Jobs</h1>
        <ButtonToolbar>
          <Link to="/jobs/new"><Button bsStyle="primary">New Job</Button></Link>
        </ButtonToolbar>
      </div>
    )
  }
}

export default Jobs;
