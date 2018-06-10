import React, { Component } from "react";
class TaskForm extends Component {
  render() {
    return (
        <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">Thêm công việc</h3>
          <span className="far fa-window-close btnClose" />
        </div>
        <div className="panel-body">
          <form>
            <div className="form-group">
              <label>Tên</label>
              <input type="text" className="form-control" name="name" />
            </div>
            <div className="form-group">
              <label>Trạng thái</label>
              <select
                className="form-control"
                required="required"
                name="status"
              >
                <option value={true}>Kích hoạt</option>
                <option value={false}>Ẩn</option>
              </select>
            </div>
            <button type="submit" className="btn btn-success">
              <span className="fa fa-plus pr-5" />
              Lưu lại
            </button>&nbsp;
            <button type="submit" className="btn btn-warning">
              <span className="fa fa-times pr-5" />
              Hủy bỏ
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
