import React, { Component } from 'react';
import { FormControl, ControlLabel } from 'react-bootstrap';

class TextInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      label: props.label,
      id: props.id,
      value: props.value
    };
  }
  render() {
    return (
      <div>
        <ControlLabel>{this.state.label}</ControlLabel>
        <FormControl value={this.state.value} controlId={this.state.id} />
      </div>
    );
  }
}

export default TextInput;
