import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';

import TextInput from './form/TextInput';

class NewTarget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pluginConfig: {
        required: {},
        optional: {}
      }
    };
    this.onPluginChange = this.onPluginChange.bind(this);
  }
  submitForm(event) {
    event.preventDefault();
    console.log("New Target");
  }
  onPluginChange(plugin) {
    console.log("plugin changed - " + plugin[0]);
    this.setState({
      pluginConfig: {
        required: {
          mysql_user         : "",
          mysql_password     : ""
        },
        optional: {
          mysql_host         : "127.0.0.1",
          mysql_port         : "3306",
          mysql_read_replica : "",
          mysql_database     : "",
          mysql_options      : "",
          mysql_bindir       : "/var/vcap/packages/shield-mysql/bin"
        }
      }
    });

  }
  render() {
    var plugins = ["Postgres", "MySQL", "Redis"],
      required = this.state.pluginConfig.required,
      optional = this.state.pluginConfig.optional,
      requiredFields=[], 
      optionalFields=[];

    requiredFields = Object.keys(required)
      .map(function(key) {
        return(
          <TextInput id={key} label={key} value={required[key]} />
        );
      });

    optionalFields = Object.keys(optional)
      .map(function(key) {
        return(
          <TextInput id={key} label={key} value={optional[key]} />
        );
      });

    return (
      <div>
        <h1>New Target</h1>
        <Form onSubmit={this.submitForm}>
          <FormGroup>
            {/* Name */}
            <ControlLabel>Name</ControlLabel>
            {/* Summary */}
            <ControlLabel>Summary</ControlLabel>
            <FormControl componentClass="textarea" />
            {/* Plugin Name */}
            <ControlLabel>Plugin Name</ControlLabel>
            <Typeahead options={plugins} onChange={this.onPluginChange}></Typeahead>
            {/* Shield Agent ip:port */}
            <ControlLabel>Shield Agent IP:Port</ControlLabel>
            <FormControl />
          </FormGroup>
          <FormGroup>
          { requiredFields.length > 0 ? <h2>Plugin Configuration</h2> : null }
          {requiredFields}
          </FormGroup>
          <FormGroup>
          { optionalFields.length > 0 ? <h3>Optional</h3> : null }
          {optionalFields}
          </FormGroup>
          <Button type="submit">Create</Button>
        </Form>
      </div>
    )
  }
}

export default NewTarget;
