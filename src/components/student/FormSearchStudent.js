import React, { Component } from "react";
import AddmodalStudent from "./AddmodalStudent";
import ListStudents from "./ListStudents";
class FormSearchStudent extends Component {
  render() {
    return (
      <>
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
                  type="password"
                  className="form-control"
                  id="pwd"
                  placeholder="Enter password"
                  name="pswd"
                />
              </div>
              <div className="col-3">
                <button type="submit" className="btn btn-primary">
                  Tìm kiếm
                </button>
              </div>
              <div className="col-3">
                <AddmodalStudent />
              </div>
            </div>{" "}
            <br />
            <ListStudents></ListStudents>
          </div>
        </div>
      </>
    );
  }
}

export default FormSearchStudent;
