import React, { Component } from "react";
import TaskItem from './TaskItem'
class TaskList extends Component {
  render() {
    return (
        <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <input
                type="text"
                name="filterName"
                className="form-control"
                value=""
                required="required"
              />
            </td>
            <td>
              <select
                name="filterStatus"
                className="form-control"
                required="required"
              >
                <option value="-1">Tất cả</option>
                <option value="-1">Ẩn</option>
                <option value="-1">Kích hoạt</option>
              </select>
            </td>
            <td></td>
          </tr>
            <TaskItem/>
            <TaskItem/>
            <TaskItem/>
        </tbody>
      </table>
    );
  }
}

export default TaskList;
