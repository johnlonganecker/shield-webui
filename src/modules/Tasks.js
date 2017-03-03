import React, { Component } from 'react';
import {Table, Column, Cell} from 'fixed-data-table';

//import Task from './Task'

const TextCell = ({rowIndex, data, col, ...props}) => (
  <Cell {...props}>
    {data[rowIndex][col]}
  </Cell>
);

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks : [{
        type: "backup",
        status: "running",
        startedAt: "Tue Feb 7th at 8:08am",
        duration: "2s"
      },
      {
        type: "backup",
        status: "running",
        startedAt: "Tue Feb 7th at 8:09am",
        duration: "2s"
      },
      {
        type: "backup",
        status: "running",
        startedAt: "Tue Feb 7th at 8:10am",
        duration: "2s"
      },
      {
        type: "backup",
        status: "running",
        startedAt: "Tue Feb 7th at 8:10am",
        duration: "2s"
      },
      {
        type: "backup",
        status: "running",
        startedAt: "Tue Feb 7th at 8:10am",
        duration: "2s"
      },
      {
        type: "backup",
        status: "running",
        startedAt: "Tue Feb 7th at 8:10am",
        duration: "2s"
      },
      {
        type: "backup",
        status: "running",
        startedAt: "Tue Feb 7th at 8:10am",
        duration: "2s"
      },
      {
        type: "backup",
        status: "running",
        startedAt: "Tue Feb 7th at 8:10am",
        duration: "2s"
      },
      {
        type: "backup",
        status: "running",
        startedAt: "Tue Feb 7th at 8:10am",
        duration: "2s"
      },
      {
        type: "backup",
        status: "running",
        startedAt: "Tue Feb 7th at 8:10am",
        duration: "2s"
      },
      {
        type: "backup",
        status: "running",
        startedAt: "Tue Feb 7th at 8:10am",
        duration: "2s"
      },
      {
        type: "backup",
        status: "running",
        startedAt: "Tue Feb 7th at 8:10am",
        duration: "2s"
      },
      {
        type: "backup",
        status: "running",
        startedAt: "Tue Feb 7th at 8:10am",
        duration: "2s"
      },
      {
        type: "backup",
        status: "running",
        startedAt: "Tue Feb 7th at 8:10am",
        duration: "2s"
      },
      {
        type: "backup",
        status: "running",
        startedAt: "Tue Feb 7th at 8:10am",
        duration: "2s"
      },
      {
        type: "backup",
        status: "running",
        startedAt: "Tue Feb 7th at 8:10am",
        duration: "2s"
      },
      {
        type: "backup",
        status: "running",
        startedAt: "Tue Feb 7th at 8:10am",
        duration: "2s"
      },
      {
        type: "backup",
        status: "running",
        startedAt: "Tue Feb 7th at 8:10am",
        duration: "2s"
      },
      {
        type: "backup",
        status: "running",
        startedAt: "Tue Feb 7th at 8:11am",
        duration: "2s"
      }]
    }
  }
  render() {
    var {tasks} = this.state;
    return (
      <div>
        <Table
          rowHeight={50}
          headerHeight={50}
          rowsCount={tasks.length}
          width={440}
          height={500}
          {...this.props}>
          <Column
            header={<Cell>Type</Cell>}
            cell={<TextCell data={tasks} col="type" />}
            isResizable={true}
            fixed={true}
            width={80}
          />
          <Column
            header={<Cell>Status</Cell>}
            cell={<TextCell data={tasks} col="status" />}
            isResizable={true}
            fixed={true}
            width={80}
          />
          <Column
            header={<Cell>Started At</Cell>}
            cell={<TextCell data={tasks} col="startedAt" />}
            isResizable={true}
            fixed={true}
            width={200}
          />
          <Column
            header={<Cell>Duration</Cell>}
            cell={<TextCell data={tasks} col="duration" />}
            isResizable={true}
            fixed={true}
            width={80}
          />
        </Table>
      </div>
    );
  }
}
            
export default Tasks;
