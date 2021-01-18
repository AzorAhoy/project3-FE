import React, { Component } from 'react';
import axios from 'axios';


class ListItemTeacher extends Component {
    state = {
        teachers: []
      }
      UserMount() {
        axios.get('http://localhost:5000/routes/api/user')
          .then(res => {
            const teachers = res.data;
            this.setState({ teachers });
            console.log(res.data);
          })
          .catch(error => console.log(error));
      }
    render() {
        // var { teacher, index } =  this.props;
        return (
            <>
            <tr>
                
                <td>{ this.state.teachers.map(teacher => {teacher.id})}</td>
                <td>{ this.state.teachers.map(teacher => {teacher.name})}</td>
                <td>{ this.state.teachers.map(teacher => {teacher.imeil})}</td>
                <td>{ this.state.teachers.map(teacher => {teacher.name})}</td>
                <td>{ this.state.teachers.map(teacher => {teacher.name})}</td>
                <td>{ this.state.teachers.map(teacher => {teacher.name})}</td>
                <td>{ this.state.teachers.map(teacher => {teacher.name})}</td>
            
                      
                      {/* <td>{teacher.name}</td>
                      <td>{teacher.date}</td>
                      <td>{teacher.diachi}</td>
                      <td>{teacher.sdt}</td>
                      <td>{teacher.email}</td>
                      <td>{teacher.gioitinh}</td>
                      <td>
                      <button type="button" className="btn btn-info">xóa</button>
                      <button type="button" className="btn btn-warning">edit</button>
                      </td> */}
             
             </tr>
            </>
        );
    }
}

export default ListItemTeacher;