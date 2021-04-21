import React, { Component } from "react";
import AddmodalTeacher from "./AddmodalTeacher";
import ListTeachers from "./ListTeachers";

class FormSearchTeacher extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  name="email"
                />
              </div>
              <div className="col-3">
                <input
                  type="text"
                  className="form-control"
                  id="pwd"
                  placeholder="Họ và tên"
                  name="pswd"
                />
              </div>

              <div className="col-3">
                <button type="submit" className="btn btn-primary">
                  Tìm kiếm
                </button>
              </div>
              <div className="col-3">
                <AddmodalTeacher />
              </div>
            </div>{" "}
            <br />
            <ListTeachers></ListTeachers>
          </div>
        </div>
      </div>
    );
  }
}

export default FormSearchTeacher;
