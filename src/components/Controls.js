import React, { Component } from "react";
import Search from "./Search"
import Sort from "./Sort"
class Controls extends Component {
  render() {
    return (
        <div className="row mt-10">
            <Search/>
            <Sort/>
        </div>
    );
  }
}

export default Controls;
