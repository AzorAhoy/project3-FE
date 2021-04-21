import React, { Component } from "react";

class ListAccountTeacher extends Component {
  render() {
    return (
      <div>
        <>
          <div className="card">
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Họ và tên</th>
                    <th>Giới tính</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>{this.props.children}</tbody>
              </table>
            </div>
          </div>
        </>
      </div>
    );
  }
}

export default ListAccountTeacher;
