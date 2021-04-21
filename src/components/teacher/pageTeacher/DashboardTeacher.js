import React, { Component } from "react";
import FormTeacher from "./FormTeacher";
import Teacher from "./Teacher";

class DashboardTeacher extends Component {
  render() {
    return (
      <div>
        <Teacher />
        <div className="container">
          <div className="card bg-primary text-white">
            <div className="card-body">THÔNG TIN GIÁO VIÊN</div>
          </div>
          <div>
            <FormTeacher></FormTeacher>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardTeacher;
