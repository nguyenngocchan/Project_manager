aimport React, { Component } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm"
import Controls from "./components/Controls"
import TaskList from "./components/TaskList"
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      tasks:[
        {
          id:1,
          name:"Khoa",
          status:true  
        },
        {
          id:2,
          name:"Kho1a",
          status:false  
        },
        {
          id:3,
          name:"Kho3a",
          status:true  
        }
      ],
      isDisplayForm:true
    }
  }
  componentWillMount(){
    var tasks=JSON.parse(localStorage.getItem('tasks'));
    this.setState({
      tasks:tasks
    })
  }
  onDisplayForm=()=>{
    this.setState({
      isDisplayForm:!this.state.isDisplayForm
    })
  }
  onCloseForm=()=>{
    this.setState({
      isDisplayForm:false
    })
  }
  valueAdd=(value)=>{
    let {tasks}=this.state;
    var taskaad={
      id:new Date().toLocaleTimeString(),
      name:value.name,
      status:value.status
    }
    tasks.push(taskaad);
    this.setState({
      tasks:tasks
    })
    localStorage.setItem("tasks",JSON.stringify(tasks)); 
  }
  render() {
    var {tasks,isDisplayForm}=this.state;
    var elmTaskForm=isDisplayForm?<TaskForm onCloseReceive={this.onCloseForm} onReceiveValueAdd={this.valueAdd}/>:'';
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
              {elmTaskForm}
            </div>
            <div className={isDisplayForm?"col-sm-8 task-list":"col-sm-12 task-list"}>
              <div className="row">
                <div className="col-sm-12">
                  <button type="submit" className="btn btn-info" onClick={this.onDisplayForm}>
                    <span className="fa fa-plus pr-5" />
                    Thêm công việc
                  </button>
                </div>
              </div>
              <Controls/>
              <div className="row mt-10">
                <div className="col-sm-12">
                  <TaskList tasks={tasks} />
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
