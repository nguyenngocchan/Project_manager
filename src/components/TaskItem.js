import React, { Component } from "react";
class TaskItem extends Component {
  render() {
    return (
    <tr>
        <td>1</td>
        <td>Học reactjs</td>
        <td>
        <span className="label label-success">Kích hoạt</span>
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


