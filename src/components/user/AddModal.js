import React, { Component } from "react";
import axios from "axios";
// import $ from "jquery"; // <-to import jquery
// import "bootstrap";

class AddModal extends Component {
  state = {
    name: "",
    email: "",
    userRole: "",
    password: "",
    password2: "",
    errors: [],
  };

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    //console.log(this.state.name);
    // event.preventDefault();
    console.log("12334");
    const user = {
      name: this.state.name,
      email: this.state.email,
      userRole: this.state.userRole,
      password: this.state.password,
      password2: this.state.password2,
    };

    console.log(JSON.stringify(user) + "==>", localStorage.getItem("token"));
    // axios.post('http://localhost:5000/api/auth/register',
    //     {
    //         headers: {
    //             'Authorization': localStorage.getItem('token')
    //         }

    //     })

    //     .then(res => {
    //         console.log(res);
    //         console.log(res.data);
    //     })
    let config = {
      method: "POST",
      url: "http://localhost:5000/api/auth/register",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      data: user,
    };
    axios(config)
      .then((res) => {
        console.log(res);
        window.$("#myModal").modal("toggle");
        console.log(window.$("#myModal"));
      })
      .catch((error) => {
        let errResp = error.response;
        console.log(errResp);
        alert(JSON.stringify(errResp.data));
        if (errResp.data) {
          this.setState({ errors: errResp.data });
        }
        // if (errResp.data.message == "Invalid token") {
        //   console.log(error.response);
        //   this.logout();
        // }
        // $("#myModal").modal("toggle");
      });
  };
  render() {
    return (
      <div>
        <div>
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#myModal"
          >
            Thêm Người Dùng
          </button>

          <div className="modal" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Thêm Người Dùng</h4>
                  <button type="button" className="close" data-dismiss="modal">
                    ×
                  </button>
                </div>

                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="name" className="col-form-label">
                        Tên Người Dùng:
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        onChange={this.handleChange}
                      />
                      {this.state.errors.name && (
                        <div className="text-danger">
                          {this.state.errors.name}
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="message-text" className="col-form-label">
                        Email:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        onChange={this.handleChange}
                      />
                      {this.state.errors.email && (
                        <div className="text-danger">
                          {this.state.errors.email}
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="message-text" className="col-form-label">
                        Vai Trò:
                      </label>
                      {/* <input
                        type="text"
                        className="form-control"
                        id="role"
                        name="userRole"
                        onChange={this.handleChange}
                      /> */}

                      <select
                        className="form-control"
                        id="role"
                        name="userRole"
                        onChange={this.handleChange}
                      >
                        <option value="STUDENT">STUDENT</option>
                        <option value="TEACHER">TEACHER</option>
                      </select>
                      {this.state.errors.userRole && (
                        <div className="text-danger">
                          {this.state.errors.userRole}
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="password" className="col-form-label">
                        Password:
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        onChange={this.handleChange}
                      />
                      {this.state.errors.password && (
                        <div className="text-danger">
                          {this.state.errors.password}
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="message-text" className="col-form-label">
                        Nhập lại Password:
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password2"
                        name="password2"
                        onChange={this.handleChange}
                      />
                      {this.state.errors.password2 && (
                        <div className="text-danger">
                          {this.state.errors.password2}
                        </div>
                      )}
                    </div>
                  </form>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    //data-dismiss="modal"
                    onClick={() => this.handleSubmit()}
                  >
                    Thêm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddModal;
