import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button, HelpBlock} from 'react-bootstrap';
import {Typeahead} from 'react-bootstrap-typeahead';

class NewJob extends Component {
  submitForm(event) {
    event.preventDefault();
    console.log("New Jorb");
  }
  render() {
    var targets = ["Postgres", "MySQL", "Redis"],
      stores = ["fs", "s3", "scality"];
    return (
      <div>
        <h1>New Jobs</h1>
        <Form onSubmit={this.submitForm}>
          {/* Name */}
          <FormGroup>
            <ControlLabel>Name</ControlLabel>
            <FormControl />
          </FormGroup>
          {/* Summary */}
          <FormGroup>
            <ControlLabel>Summary</ControlLabel>
            <FormControl componentClass="textarea" />
          </FormGroup>
          {/* Store */}
          <FormGroup>
            <ControlLabel>Store</ControlLabel>
            <Typeahead options={stores}></Typeahead>
          </FormGroup>
          {/* Target */}
          <FormGroup>
            <ControlLabel>Target</ControlLabel>
            <Typeahead options={targets}></Typeahead>
          </FormGroup>
          {/* Schedule */}
          <FormGroup>
            <ControlLabel>Schedule</ControlLabel>
            <FormControl 
              placeholder="Daily 1am, Tuesday at 0, etc"
            />
          </FormGroup>
          {/* Policy */}
          <FormGroup>
            <ControlLabel>Policy</ControlLabel>
            <FormControl />
            <HelpBlock>How many days to keep backup</HelpBlock>
          </FormGroup>
          <Button type="submit">Create</Button>
        </Form>
      </div>
    )
  }
}

export default NewJob;
