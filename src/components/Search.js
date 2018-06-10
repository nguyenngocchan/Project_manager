import React, { Component } from "react";
class Search extends Component {
  render() {
    return (
    <div className="col-sm-6 search">
        <input
        type="text"
        name="keyword"
        className="form-control"
        value=""
        placeholder="Nhập từ khóa..."
        />
        <button type="button" className="btn btn-default">
        <span className="fa fa-search" />
        Search
        </button>
    </div>
    );
  }
}

export default Search;
