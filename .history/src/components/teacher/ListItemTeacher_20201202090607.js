import React, { Component } from 'react';
import axios from 'axios';


class ListItemTeacher extends Component {
    state = {
        users: []
      }
      UserMount() {
        axios.get('http://localhost:5000/routes/api/user')
          .then(res => {
            const users = res.data;
            this.setState({ users });
          })
          .catch(error => console.log(error));
      }
    render() {
        // var { teacher, index } =  this.props;
        return (
            <>
            { this.state.users.map(user => <li>{user.name}</li>)}
            {/* <tr>
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
            </tr> */}

            </>
        );
    }
}

export default ListItemTeacher;