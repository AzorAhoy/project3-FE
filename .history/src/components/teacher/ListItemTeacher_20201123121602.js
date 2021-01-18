import React, { Component } from 'react';



class ListItemTeacher extends Component {
    render() {
        var { teacher, index } =  this.props;
        return (
            <>
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