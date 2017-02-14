import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import {Typeahead} from 'react-bootstrap-typeahead';

class NewStore extends Component {
  submitForm(event) {
    event.preventDefault();
    console.log("New Store");
  }
  render() {
    var plugins = ["Postgres", "MySQL", "Redis"];
    return (
      <div>
        <h1>New Store</h1>
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
          {/* Plugin Name */}
          <FormGroup>
            <ControlLabel>Plugin Name</ControlLabel>
            <Typeahead options={plugins}></Typeahead>
          </FormGroup>
          <Button type="submit">Create</Button>
        </Form>
      </div>
    )
  }
}

export default NewStore;
