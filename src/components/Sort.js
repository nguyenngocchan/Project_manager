import React, { Component } from "react";
class Sort extends Component {
  render() {
    return (
        <div className="col-sm-6">
            <div className="dropdown">
            <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                data-toggle="dropdown"
            >
                Sắp xếp
                <span className="caret" />
            </button>
            <ul className="dropdown-menu">
                <li>
                <a role="button">
                    <span className="fas fa-sort-alpha-down" />Tên A-Z
                </a>
                </li>
                <li>
                <a role="button">
                    <span className="fas fa-sort-alpha-up" />Tên Z-A
                </a>
                </li>
                <li>
                <a role="button">Trạng Thái Kích Hoạt</a>
                </li>
                <li>
                <a role="button">Trạng thái ẩn</a>
                </li>
            </ul>
            </div>
        </div>
    );
  }
}

export default Sort;
