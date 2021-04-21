import React, { Component } from "react";
import axios from "axios";
import ProfileUser from "./ProfileUser";
//import ModalUser from './ModalUser';
class ListUser extends Component {
  state = {
    users: "",
    refresh: this.props.refresh,
  };

  logout = () => {
    console.log("logout");
    //localStorage.clear();
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/";
  };

  // var teachers =[];
  callAPI = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/user/", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      if (res.status === 200) {
        await this.setState({
          ...this.state,
          users: res.data.data,
        });
      } else {
        alert(res.data.message);
        //this.logout()
      }
    } catch (error) {
      console.log(error.response);
      let errResp = error.response;
      if (errResp.data.message == "Invalid token") {
        console.log(error.response);
        this.logout();
      }
    }
  };
  componentDidMount() {
    console.log(this.state);

    this.callAPI();
  }
  render() {
    return (
      <div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => this.callAPI()}
        >
          Refresh
        </button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên người dùng</th>
              <th>Email</th>
              <th>Vai trò</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>{this.showUsers()}</tbody>
        </table>
      </div>
    );
  }
  showUsers() {
    if (this.state.users.length > 0) {
      let show = this.state.users.map((user, index) => {
        return (
          <tr key={index}>
            <th scope="row">{index}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
              <ProfileUser userInfo={user} />

              <button type="button" className="btn btn-warning">
                Xóa
              </button>
            </td>
          </tr>
        );
      });

      return show;
    } else {
      return <div>NO DATA</div>;
    }
  }
}
export default ListUser;
