import React, { Component } from "react";
import FormStudent from "./FormStudent";
import Student from "./Student";

class DashboardStudent extends Component {
  render() {
    return (
      <div>
        <Student />
        <div className="container">
          <div className="card bg-primary text-white">
            <div className="card-body">THÔNG TIN HỌC VIÊN</div>
          </div>
          <FormStudent></FormStudent>
        </div>
      </div>
    );
  }
}

export default DashboardStudent;
