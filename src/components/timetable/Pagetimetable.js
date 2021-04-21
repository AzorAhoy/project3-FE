import React, { Component } from "react";
import HomePage from "../HomePage";
import FormSearchTime from "./FormSearchTime";
class Pagetimetable extends Component {
  render() {
    return (
      <>
        <HomePage />
        <div className="container">
          <div className="card bg-primary text-white">
            <div className="card-body">Thời Khóa Biểu</div>
          </div>
          <div>
            <FormSearchTime />
          </div>
        </div>
      </>
    );
  }
}

export default Pagetimetable;
