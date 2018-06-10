import React, { Component } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm"
import Controls from "./components/Controls"
import TaskList from "./components/TaskList"
class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h3>Quản lý công việc</h3>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-4 task-form">
              <TaskForm/>
            </div>
            <div className="col-sm-8 task-list">
              <div className="row">
                <div className="col-sm-12">
                  <button type="submit" className="btn btn-info">
                    <span className="fa fa-plus pr-5" />
                    Thêm công việc
                  </button>
                </div>
              </div>
              <Controls/>
              <div className="row mt-10">
                <div className="col-sm-12">
                  <TaskList/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
