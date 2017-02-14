import React, { Component } from 'react';

import Task from './Task'

class Tasks extends Component {
  render() {
    var tasks = [{
      type: "backup",
      status: "running",
      startedAt: "Tue Feb 7th at 8:08am",
      duration: "2s"
    },
    {
      type: "backup",
      status: "running",
      startedAt: "Tue Feb 7th at 8:08am",
      duration: "2s"
    },
    {
      type: "backup",
      status: "running",
      startedAt: "Tue Feb 7th at 8:08am",
      duration: "2s"
    },
    {
      type: "backup",
      status: "running",
      startedAt: "Tue Feb 7th at 8:08am",
      duration: "2s"
    }];

    var taskList = tasks.map(function(task, i) {
      return (<Task type={tasks[i].type} status={tasks[i].status} startedAt={tasks[i].startedAt} duration={tasks[i].duration} />);
    });
    return (
        <div>
          {taskList}
        </div>
    );
  }
}
            
export default Tasks;
