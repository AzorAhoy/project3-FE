import React, { Component } from 'react';
import axios from 'axios';
import ProfileStudent from './ProfileStudent';
export default class ListStudents extends Component {
  state = {
    students: ''
  }
  // var teachers =[];
  callAPI = async () => {
    const res = await axios.get('http://localhost:5000/api/student/', {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    })
    if (res.status === 200) {
      // console.log("res   ", res);
      await this.setState({
        ...this.state,
        students: res.data.data
      })
    }
  }
  componentDidMount() {
    this.callAPI()
  }
  render() {
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>STT</th>
              <th>Họ và Tên</th>
              <th>Email</th>
              <th>Ngày Tạo</th>
              <th>Ngày Update</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {this.showStudents()}
          </tbody>
        </table>
      </div>
    );
  }

  showStudents() {
    // console.log("hhihi   ", this.state.teachers);
    if (this.state.students.length > 0) {
      let show = this.state.students.map((student, index) => {
        return (
          <tr key={index}>
            <th scope="row">{index}</th>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.className}</td>
            <td>{student.createdAt}</td>
            <td>{student.lastUpdate}</td>
 
            <td >
              <ProfileStudent studentInfo= {student} />
              {/* <button type="button" className="btn btn-info">xóa</button> */}
              <button type="button" className="btn btn-warning">Xóa</button>
            </td>
          </tr>
        );
      });
      return show;
    }
  }

}

