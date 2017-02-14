import React, { Component } from 'react';

import RunningTasks from './RunningTasks';
import CompletedTasks from './CompletedTasks';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <RunningTasks/>
        <CompletedTasks/>
      </div>
    )
  }
}

export default Dashboard
