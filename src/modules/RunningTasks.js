import React, { Component } from 'react';

import Tasks from './Tasks';

class RunningTasks extends Component {
  render() {
    return (
      <div>
        <h1>Running Tasks</h1>
        <Tasks />
      </div>
    )
  }
}

export default RunningTasks;
