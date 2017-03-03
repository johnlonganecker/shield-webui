import React, { Component } from 'react';

import RunningTasks from './RunningTasks';
import CompletedTasks from './CompletedTasks';

class Dashboard extends Component {
  render() {
    return (
      <div className="content">
        <h1 className="heading">Dashboard</h1>
        <RunningTasks className="running-tasks"/>
        <CompletedTasks className="completed-tasks" />
      </div>
    )
  }
}

export default Dashboard
