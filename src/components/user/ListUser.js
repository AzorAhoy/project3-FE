import React, { Component } from "react";
import axios from "axios";
import ProfileUser from "./ProfileUser";
import { Pagination } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import styles from  "./ListUser.css";

//import ModalUser from './ModalUser';
class ListUser extends Component {
  state = {
    users: "",
    totalCount: 0,
    refresh: this.props.refresh,
    active: 0,
    //pages:[]
  };
  pages = [];
  pageSize = 1;
  active = 0;
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
      let url = "http://localhost:5000/api/user?page=" + this.state.active;
      const res = await axios.get(url, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      if (res.status === 200) {
        let totalCount = res.data.data.totalCount;
this.pagination(totalCount);
        await this.setState({
          ...this.state,
          users: res.data.data.users,
          totalCount: totalCount,
          //pages: items
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

  pagination = (totalCount) => {
    if (totalCount) {
      let pagesNum = Math.ceil(totalCount / this.pageSize);
      this.setState({ pageCount: pagesNum });
      let items = [];
      for (let number = 1; number <= pagesNum; number++) {
        items.push(
          <Pagination.Item
            key={number}
            value={number}
            active={number === this.active+1}
            onClick={
              this.toPage
              // (e) => {
              // console.log(e.currentTarget);
              // // this.active = e.target.innerText;
              // //this.setState({ active: e.currentTarget.innerText - 1 });
              // // this.callAPI();
              // this.toPage(parseInt(e.currentTarget.innerText) - 1);
            }
          >
            {number}
          </Pagination.Item>
        );
      }
      this.pages = items;
    }
  };

  toPage = (e)=>{
   let page = e.selected;
    console.log(e);
    // this.active = e.target.innerText;
    this.setState({ active: page },()=>{
this.callAPI();
    });
    
    console.log(this.state);
  }

  next = () => {
    let tmp = this.state.active;
    this.setState({ active: tmp + 1 });
    this.callAPI();
    console.log(this.state);
  };

  render() {
    let userData = this.showUsers();
    return (
      <div>
        {/* {this.state.active} */}

        <div className="row">
          <button
            type="submit"
            className="btn btn-primary float-left"
            onClick={() => this.callAPI()}
          >
            Refresh
          </button>
          <div className="float-right">Results: {this.state.totalCount}</div>
        </div>


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
        {/* <Pagination>{this.pages}</Pagination> */}
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={3}
          pageRangeDisplayed={5}
          onPageChange={this.toPage}
          containerClassName={"pagination"}
          activeClassName={"active-page"}
          pageClassName={"page"}
        />
        <button onClick={() => this.next()}>NEXT</button>
        <br />
      </div>
    );
  }
  showUsers(page) {
    if (this.state.users.length > 0) {
      let show = this.state.users.map((user, index) => {
        return (
          <tr key={index}>
            <th scope="row">{user._id}</th>
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
