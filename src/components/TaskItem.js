import React, { Component } from "react";
class TaskItem extends Component {
  render() {
    var {task}=this.props;
    return (
    <tr>
        <td>{task.id}</td>
        <td>{task.name}</td>
        <td>
        <span className={task.status===true?"label label-success":"label label-danger"}>
        {task.status===true?'Kich hoat':'An'}</span>
        </td>
        <td> 
          <button type="button" className="btn btn-warning">
            <span className="fas fa-edit"></span>
            Edit
          </button>&nbsp;
          <button type="button" className="btn btn-warning">
            <span className="fas fa-delete"></span>
            Delete
          </button>
        </td>
    </tr>
    );
  }
}

export default TaskItem;


