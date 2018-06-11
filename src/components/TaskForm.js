import React, { Component } from "react";
class TaskForm extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      status:false
    }
  }
  onChange=(event)=>{
    var target=event.target;
    var name=target.name;
    var value=target.value;
    if(name==="status"){
      value=target.value==="true"?true:false;
    }
    this.setState({
      [name]:value
    })
   
  }
  onSubmit=(e)=>{
    e.preventDefault();
    this.props.onReceiveValueAdd(this.state);

  }
  
  onClose=()=>{
    this.props.onCloseReceive();
  };
  render() {
    return (
        <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">Thêm công việc</h3>
          <span className="far fa-window-close btnClose" onClick={this.onClose} />
        </div>
        <div className="panel-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Tên</label>
              <input type="text"
               className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label>Trạng thái</label>
              <select
                className="form-control"
                required="required"
                name="status"
                value={this.state.status}
                onChange={this.onChange}
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
