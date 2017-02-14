import React, { Component } from 'react';

import Tasks from './Tasks';

class CompletedTasks extends Component {
  render() {
    return (
      <div>
        <h1>Complete Tasks</h1>
        <Tasks />
      </div>
    )
  }
}

export default CompletedTasks;
