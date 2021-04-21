import React, { Component } from "react";
import AddModal from "./AddModal";
import ListUser from "./ListUser";

class FormSearchUser extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       refresh: false,
  //     };
  //   }

  state = {
    refresh: false,
  };

  switch() {
    let tmp = this.state.refresh;
    console.log(tmp);
    this.setState({ refresh: !tmp });
  }

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
                  id="role"
                  placeholder="Vai trò"
                  name="role"
                />
              </div>

              <div className="col-3">
                <button type="submit" className="btn btn-primary">
                  Tìm kiếm
                </button>
                {/* <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => this.switch()}
                >
                  Refresh
                </button> */}
              </div>

              <div className="col-3">
                <AddModal />
              </div>
            </div>{" "}
            <br />
            <br />
            <ListUser refresh={this.state.refresh} />
          </div>
        </div>
      </div>
    );
  }
}

export default FormSearchUser;
