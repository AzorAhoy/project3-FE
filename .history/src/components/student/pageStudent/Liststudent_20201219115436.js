import React, { Component } from 'react';
import axios from 'axios';
class Liststudent extends Component {
  state = {
    teachers: ''
  }
  // var teachers =[];
  callAPI = async () => {
    const res = await axios.get('http://localhost:5000/api/teacher/', {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    })
    if (res.status === 200) {
      // console.log("res   ", res);
      await this.setState({
        ...this.state,
        teachers: res.data.data
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
              <th>Lớp</th>
              <th>Ngày Tạo</th>
              <th>Ngày Update</th>
              <th>SĐT</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {this.showTeachers()}
          </tbody>
        </table>
      </div>
    );
  }
  showTeachers() {
    // console.log("hhihi   ", this.state.teachers);
    if (this.state.teachers.length > 0) {
      let show = this.state.teachers.map((teacher, index) => {
        if (teacher.role === "STUDENT") {
          return (
            <tr key={index}>
              <th scope="row">{index}</th>
              <td>{teacher.name}</td>
              <td>{teacher.email}</td>
              <td>{teacher.classId}</td>
              <td>{teacher.createdAt}</td>
              <td>{teacher.lastUpdate}</td>
              <td>{teacher.detailsId}</td>
              <td>{teacher.role}</td>

              <td >
                <button type="button" className="btn btn-info">xóa</button>
                <button type="button" className="btn btn-warning">edit</button>
              </td>
            </tr>
          );
        }
      });
      return show;
    }
  }
}

export default Liststudent;