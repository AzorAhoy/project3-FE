import React, { Component } from 'react';
 


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
            { this.state.teachers.map(teacher => <li>{teacher.name}</li>)}
             <tr>
                      <td>{index + 1}</td>
                      <td>{teacher.name}</td>
                      <td>{teacher.date}</td>
                      <td>{teacher.diachi}</td>
                      <td>{teacher.sdt}</td>
                      <td>{teacher.email}</td>
                      <td>{teacher.gioitinh}</td>
                      <td>
                      <button type="button" className="btn btn-info">xóa</button>
                      <button type="button" className="btn btn-warning">edit</button>
                      </td>
             </tr>
            
            </>
        );
    }
}

export default ListItemTeacher;