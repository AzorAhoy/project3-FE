import React, { Component } from 'react';
import axios from 'axios';
class Timetable extends Component {
    state = {
        timetables: ''
      }
      // var teachers =[];
      callAPI = async () => {
        const res = await axios.get('http://localhost:5000/api/timetable/', {
          headers: {
            'Authorization': localStorage.getItem('token')
          }
        })
        if (res.status === 200) {
          // console.log("res   ", res);
          await this.setState({
            ...this.state,
            timetables: res.data.data
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
                    <th scope="col">STT</th>
                    <th scope="col">Lớp</th>
                    <th scope="col">Khóa Học</th>
                    <th scope="col">Ngày</th>
                    <th scope="col">Bắt Đầu</th>
                    <th scope="col">Kết Thúc</th>
                    <th scope="col">Ghi Chú</th>
                    </tr>
                </thead>
                <tbody>
                  {this.showTimetables()}
                </tbody>
                </table>

            </div>
        );
    }
    showTimetables() {
        if (this.state.timetables.length > 0) {
            let show = this.state.timetables.map((timetable, index) => {
              
                    return (
                        <tr key={index}>
                            <th scope="row">{index}</th>
                            <td>{timetable.classId}</td>
                            <td>{timetable.email}</td>
                            <td>{timetable.day}</td>
                            <td>{timetable.start}</td>
                            <td>{timetable.end}</td>
                            <td >
                                {/* <ProfileUser userInfo={user}/> */}
                                <button type="button" className="btn btn-warning">Chi Tiết</button>
                                <button type="button" className="btn btn-warning">Xóa</button>

                            </td>
                        </tr>
                    );
        

            });

            return show;
        }
    }
}

export default Timetable;