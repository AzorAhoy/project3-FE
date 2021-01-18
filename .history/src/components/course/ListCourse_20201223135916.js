import React, { Component } from 'react';
import axios from 'axios';
class ListCourse extends Component {
    state = {
        courses: ''
    }
   
    callAPI = async () => {
        const res = await axios.get('http://localhost:5000/api/class/', {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
        if (res.status === 200) {
             await this.setState({
                ...this.state,
                users: res.data.data
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
                            <th>Tên Lớp</th>
                            <th>Ngày Bắt Đầu</th>
                            <th>Ngày Kết Thúc</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showCourses()}
                    </tbody>
                </table>
            </div>
            
        );
    }
    showCourse() {
        if (this.state.courses.length > 0) {
            let show = this.state.courses.map((course, index) => {
                return (
                    <tr key={index}>
                        <th scope="row">{index}</th>
                        <td>{course.name}</td>
                        <td>{course.startDate}</td>
                        <td>{course.endDate}</td>
                        <td >
                            
                            <button type="button" className="btn btn-info">Chi Tiết <i className="fas fa-pencil-alt" /> </button>
                            <button type="button" className="btn btn-warning">Xóa</button>
                            
                        </td>
                    </tr>
                );

            });

            return show;
        }
    }
}

export default ListCourse;