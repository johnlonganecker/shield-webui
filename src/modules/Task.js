import React, { Component } from 'react';

class Task extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.type}</li>
          <li>{this.props.status}</li>
          <li>{this.props.startedAt}</li>
          <li>{this.props.duration}</li>
        </ul>
      </div>
    );
  }
}

export default Task
