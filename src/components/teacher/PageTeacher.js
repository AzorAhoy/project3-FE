import React, { Component } from "react";
import HomePage from "../HomePage";
import FormSearchTeacher from "./FormSearchTeacher";

class PageTeacher extends Component {
  render() {
    return (
      <>
        <HomePage />
        <div className="container">
          <div className="card bg-primary text-white">
            <div className="card-body">DANH SÁCH GIÁO VIÊN</div>
          </div>
          <div>
            <FormSearchTeacher></FormSearchTeacher>
          </div>
        </div>
      </>
    );
  }
}

export default PageTeacher;
